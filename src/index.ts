import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import PAYPAY from '@paypayopa/paypayopa-sdk-node';
import { apiRouter } from './routes';

const port = process.env.APP_PORT ? process.env.APP_PORT : 5000;

const API_KEY = 'a_0MG4LQ1cmW_4IQi'; // process.env.API_KEY;
const API_SECRET = '7ch0u/Sif33BPDVZy1ogZJIBNKizrJWRhQS/wXrcaWk=' // process.env.API_SECRET;
const MERCHANT_ID = '318919120301064192'; // process.env.MERCHANT_ID;

// 09042930471
// YKkkV4Lbwm

const FRONTEND_PATH = "http://localhost:8080/orderpayment";

PAYPAY.Configure({
    clientId: API_KEY,
    clientSecret: API_SECRET,
    merchantId: MERCHANT_ID,
    productionMode: false
});

const app = express();
app.disable("x-powered-by");

app.use(bodyParser.json());
app.use(cors());
app.use("/", apiRouter);

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});

export const App = app;
