import express from 'express';
import {
    createListing, 
    getListingByCarId, 
    getListingByRenteeId, 
    getListingByRenterId, 
    getListings, 
    updateListing, 
    updateBooking, 
    updateBalance 
} from '../database.js';

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

router.put('/booking', async (req, res) => {
    // Is available will always be false if booked
    // By default balance will be the full price
    const {
        carId,
        renterId,
        bookedUntil
    } = req.body;

    if (bookedUntil) {
        const result = await updateBooking(carId, renterId, bookedUntil);
        res.status(200).send(result);
    }
    else {
        res.status(422).send({status: 422, message: `Unable to book car`});
    }
});

router.put('/pay', async (req, res) => {
    // The payment logic to deduct from balance is handled in the SQL query
    const {
        carId,
        payment
    } = req.body;

    if (payment >= 0) {
        const result = await updateBalance(carId, payment);
        res.status(200).send(result);
    }
    else {
        res.status(422).send({status: 422, message: `Unable to make payment at this time`});
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
