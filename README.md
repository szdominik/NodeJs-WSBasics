# NodeJs-WSBasics

How to use
----------

1. using three .sql files - for the database (testuser and NO password with a database 'webtech').
2. the RESTful Web Service
  1. ```npm run testRestWS```-> testing the RESTful Web Service
  2. ```npm run startRestWS``` and after ```http://localhost:3000/products``` -> launch the WS and showing the result in the browser
3. the SOAP Web Service
  1. ```npm run startSoapWS``` -> start the SOAP Web Service
  2. ```npm run startSoapClient``` -> start the Client, which will send a request, and if everything is working, the server will insert a row to the database and the client will write the "Sikeres küldés!" note.
