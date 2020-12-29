import { v4 as uuidv4 } from 'uuid';
import payPayRestSDK from '@paypayopa/paypayopa-sdk-node';
import { apiRouter } from "../src/routes";
import { App } from "../src/index";
import request from "supertest";
import express from "express";
const app = express();
const conf = {
    clientId: '5345435fsdfsr54353454',
    clientSecret: 'dgfgdfgt46435gsdr35tte5',
    merchantId: '2473982',
    productionMode: false
};

const API_KEY = 'testKey'; // process.env.API_KEY;
const API_SECRET = '7ch0u/testKey/wXrcaWk=' // process.env.API_SECRET;
const MERCHANT_ID = 'testId'; // process.env.MERCHANT_ID;

payPayRestSDK.Configure({
    clientId: API_KEY,
    clientSecret: API_SECRET,
    merchantId: MERCHANT_ID,
    productionMode: false
});

test('Unit Test - Create QR code', async () => {

    const payload = {
        merchantPaymentId: uuidv4(),
        amount: {
            amount: 1,
            currency: 'JPY',
        },
        codeType: 'ORDER_QR',
        orderDescription: 'Test Description',
        isAuthorization: false,
        redirectUrl: 'https://test.redirect.url/',
        redirectType: 'WEB_LINK',
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1'
    };


    const res = await request(App)
        .post('/create-qr')
        .send(payload)

    console.log('res: ', res);


    expect(res).toBe(201);

    // await payPayRestSDK.QRCodeCreate(payload, (result: any) => {
    //     expect(result.STATUS).toBe(201);
    // });

});
