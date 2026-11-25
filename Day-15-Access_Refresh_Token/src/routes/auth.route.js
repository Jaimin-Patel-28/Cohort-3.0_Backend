import { Router } from "express";
import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import {
  generateTokens,
  verifyAccessToken,
  verifyRefreshToken,
} from "../utils/auth.js";
const router = Router();

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const isUserExists = await userModel.findOne({ email });

  if (isUserExists) {
    return res.status(400).json({
      message: "User already exists",
      error: [
        {
          field: "email",
          message: "User already exists",
        },
      ],
    });
  }

  const user = await userModel.create({
    name,
    email,
    passwordHash: await bcrypt.hash(password, 12),
  });

  const { accessToken, refreshToken } = generateTokens({ userID: user._id });

  user.refreshToken = refreshToken;
  await user.save();

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
  });

  res.status(201).json({
    message: "User registered successfully",
    data: {
      user: {
        name: user.name,
        email: user.email,
      },
    },
    accessToken,
  });
});

router.get("/me", async (req, res) => {
  const accessToken = req.headers.authorization?.split(" ")[1];

  try {
    const decoded = verifyAccessToken(accessToken);

    const user = await userModel.findById(decoded.id);

    res.status(200).json({
      message: "User fetched successfully",
      data: {
        user: {
          name: user.name,
          email: user.email,
        },
      },
    });
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized! Invalid or expired access token!",
    });
  }
});

router.post("/refresh", async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({
      message: "Unauthorized user! Refresh token not found.",
    });
  }

  try {
    const decoded = verifyRefreshToken(refreshToken);

    const user = await userModel.findById(decoded.id);

    if (refreshToken !== user.refreshToken) {
      user.refreshToken = null;
      await user.save();

      return res.status(401).json({
        message: "Unauthorized user! Refresh token not match.",
      });
    }

    const { accessToken, refreshToken: newRefreshToken } = generateTokens({
      userID: user._id,
    });

    res.cookie("refreshToken", newRefreshToken, { httpOnly: true });
    user.refreshToken = newRefreshToken;
    await user.save();

    res.status(200).json({
      message: "Token refreshed successfully",
      accessToken,
    });
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized, Invalid or expired refresh token",
    });
  }
});

export default router;
