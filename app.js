const express=require('express');
const app=express();
const productRoutere=require('./api/v1/routes/product');
const morgan=require('morgan');

app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
console.log(process.env.GOOGLE_USE);

const secure=require('./api/v1/middlewares/secure');

app.use(secure);
app.use('/product',productRoutere);

module.exports=app;
