import { v4 as uuidv4 } from 'uuid';
import payPayRestSDK from '@paypayopa/paypayopa-sdk-node';
const conf = {
    clientId: '5345435fsdfsr54353454',
    clientSecret: 'dgfgdfgt46435gsdr35tte5',
    merchantId: '2473982',
    productionMode: false
};

payPayRestSDK.Configure(conf);

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

    const mockHttpsCall = jest.spyOn(payPayRestSDK, 'QRCodeCreate');
    mockHttpsCall.mockImplementation(jest.fn((_payload: any, _callback: any) => {
        _callback({
            STATUS: 200,
            BODY: {}
        });
    }));

    await payPayRestSDK.QRCodeCreate(payload, (result: any) => {
        expect(result.STATUS).toBe(200);
    });

    expect(mockHttpsCall).toHaveBeenCalledTimes(1);
    // expect(mockHttpsCall).toHaveBeenCalledWith(expect.anything(), payload, expect.anything());

    mockHttpsCall.mockClear();

});

