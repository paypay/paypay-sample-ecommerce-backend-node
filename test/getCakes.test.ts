import * as cakes from '../src/cakes.json';
import payPayRestSDK from '@paypayopa/paypayopa-sdk-node';
import request from "supertest";
import { apiRouter } from "../src/routes";
import * as axios from "axios";
import { App } from "../src/index";


test('Unit Test - get cakes list', async () => {

    const resp = await request(App).get("/cakes");

    console.log('resp: ', resp);

});