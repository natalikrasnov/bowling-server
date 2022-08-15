const express = require('express');
const cors = require("cors");

const paymentRouter = require('./routers/payment');
const iframeRouter = require('./routers/iframe');
const productsRouter = require('./routers/products');
const customerRouter = require('./routers/customer');
const emailRouter = require('./routers/email');

const corsOptions ={
   origin:'*', 
   //credentials:true,            //access-control-allow-credentials:true
   //optionSuccessStatus:200,
}

const app = express();
app.use(cors(corsOptions)) 

app.use(express.json());

app.use(paymentRouter);
app.use(iframeRouter);
app.use(productsRouter);
app.use(customerRouter);
app.use(emailRouter);

module.exports = app;