import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import PAYPAY from '@paypayopa/paypayopa-sdk-node';
import { apiRouter } from './routes';

const port = process.env.APP_PORT ? process.env.APP_PORT : 5000;

const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;
const MERCHANT_ID = process.env.MERCHANT_ID;

configurePayPay();

const app = express();
app.disable("x-powered-by");
app.use(bodyParser.json());
app.use(cors());
app.use("/", apiRouter);
const server = app.listen(port, () => console.log(`server started at http://localhost:${port}`));
export const Server = server;

function configurePayPay() {
    PAYPAY.Configure({
        clientId: API_KEY,
        clientSecret: API_SECRET,
        merchantId: MERCHANT_ID,
        productionMode: false
    });
}
