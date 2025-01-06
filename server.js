require('dotenv').config();
const http=require ("http");
const app=require("./app");
const port=4070;
const srv=http.createServer(app);
srv.listen(port,()=>{console.log("server is up")});

