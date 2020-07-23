import express from 'express';
import knex from './database/connection';
import { request } from 'http';

const routes = express.Router();

//Route to get svg icons
routes.get ('/items', async (request, response) => {
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {
        return {
            id: item.id,
            title: item.title,
            image_url: `http:localhost:3333/uploads/${item.image}`,
        };
    });

    return response.json(serializedItems);
});

//Route to create colect points
routes.post('/points', async (request, response) => {
    const {
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items,
    } = request.body;

    const trx = await knex.transaction();

    const insertedIds = await trx('points').insert({
        image: 'image-fake',
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
    });

    const point_id = insertedIds[0];

    const pointItems = items.map((item_id: number) => {
        return {
            item_id,
            point_id,
        };
    });

    await trx('point_items').insert(pointItems);

    return response.json({succes:true});
});

export default routes;