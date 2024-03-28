import express from 'express';
import { createAnswer, getQuestions } from '../database.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const result = await getQuestions();
    res.status(200).send(result);
});

router.post('/', async (req, res) => {
    const { userId, questionId, answer } = req.body;
    
    if (answer) {
        const result = await createAnswer(userId, questionId, answer);
        res.status(201).send(result);
    }
    else {
        res.status(422).send({status: 422, message: `Unable to process data to create security question`});
    }
});

export default router;
