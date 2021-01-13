import request from "supertest";
import { Server } from "../src";
import payPayRestSDK from '@paypayopa/paypayopa-sdk-node';
const conf = {
    clientId: '5345435fsdfsr54353454',
    clientSecret: 'dgfgdfgt46435gsdr35tte5',
    merchantId: '2473982',
    productionMode: false
};

payPayRestSDK.Configure(conf);

describe('test list cakes', () => {
    afterEach(() => jest.resetAllMocks());

    it('list cakes', async () => {
        const photos = await request(Server).get('/cakes');
        expect(photos.body[0].id).toEqual(1);
        Server.close();
    });


});