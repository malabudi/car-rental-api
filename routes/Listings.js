import express from 'express';
import { createListing, getListingByCarId, getListingByRenteeId, getListings, updateListing } from '../database.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const id = req.params.id;

    const result = await getListings();
    res.status(200).send(result);
});

router.get('/rentee/:id', async (req, res) => {
    const id = req.params.id;

    const result = await getListingByRenteeId(id);
    res.status(200).send(result);
});

router.get('/renter/:id', async (req, res) => {
    const id = req.params.id;

    const result = await getListingByRenterId(id);
    res.status(200).send(result);
});

router.get('/car/:id', async (req, res) => {
    const id = req.params.id;

    const result = await getListingByCarId(id);
    res.status(200).send(result);
});

router.post('/', async (req, res) => {
    const {
        renteeId, 
        model, 
        carYear, 
        mileage, 
        availCalendar, 
        pickUpLocation, 
        price
    } = req.body;

    if (model && carYear && mileage && availCalendar && pickUpLocation) {
        const result = await createListing(renteeId, model, carYear, mileage, availCalendar, pickUpLocation, price);
        res.status(201).send(result);
    }
    else {
        res.status(422).send({status: 422, message: `Unable to create car listing`});
    }
});

router.put('/', async (req, res) => {
    const {
        renteeId,
        availCalendar,
        price
    } = req.body;

    if (availCalendar) {
        const result = await updateListing(renteeId, availCalendar, price);
        res.status(200).send(result);
    }
    else {
        res.status(422).send({status: 422, message: `Unable to update car listing`});
    }
});

export default router;
