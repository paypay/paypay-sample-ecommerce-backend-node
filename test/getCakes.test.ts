import * as cakes from '../src/cakes.json';
import request from "supertest";
import axios from "axios";
import { App } from "../src/index";


jest.mock('', () => {
    return {
        baseURL: 'localhost:5000',
        request: jest.fn().mockResolvedValue({
            data: [
                {
                    "title": "cake_shop.dark_forest",
                    "id": 3,
                    "price": 100,
                    "image": "darkforestcake.png"
                },
                {
                    "title": "cake_shop.rainbow",
                    "id": 4,
                    "price": 200,
                    "image": "rainbow.png"
                },
                {
                    "title": "cake_shop.lemon",
                    "id": 5,
                    "price": 80,
                    "image": "lemon.png"
                },
                [
                    {
                        "title": "cake_shop.mississippi",
                        "id": 1,
                        "price": 120,
                        "image": "darkforest.png"
                    },
                    {
                        "title": "cake_shop.red_velvet",
                        "id": 2,
                        "price": 190,
                        "image": "redvelvet.png"
                    },
                    {
                        "title": "cake_shop.dark_forest",
                        "id": 3,
                        "price": 100,
                        "image": "darkforestcake.png"
                    },
                ]
            ]
        }),
    }
});

describe('test list cakes', () => {
    afterEach(() => jest.resetAllMocks());

    it('list cakes', async () => {
        // const photos = await getPhotosByAlbumId(3);
        const photos = await request(App).get('/cakes');
        expect(photos.body[0].id).toEqual(1);
    });
});


