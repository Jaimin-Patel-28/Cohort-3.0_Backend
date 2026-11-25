# Important Notes
## Things I remember always
io => whole server  
socket => single user  
Different socket id for each new connection, If i make connection 1 socket.io provide Id no.1, If i make connection 2 then socket.io provide different id from connection 1 for connection 2.  
1 user, 10 different connection, 10 different socket ID  
  
emit = event ko fire karna  
on = event ko listen karna  
  
If frontend fire an event, backend listen event and if backend fire and event, frontend listen event.