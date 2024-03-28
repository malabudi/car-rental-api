import express from 'express';
import { getUserByEmail, createUser } from '../database.js';

const router = express.Router()

router.get('/:email', async (req, res) => {
    const email = req.params.email;
    const user = await getUserByEmail(email);

    if (user.length > 0) {
        res.status(200).send(user);
    }
    else {
        res.status(404).send({status: 404, message: `No user with email ${email} found`});
    }
});

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
        const result = await createUser(email, password);

        res.status(201).send(result);
    }
    else {
        res.status(422).send({status: 422, message: `Unable to process data to create user`});
    }
});

export default router;