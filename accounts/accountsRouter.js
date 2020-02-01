const express = require('express');

const db = require('../data/dbConfig.js');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        return res.json(await db('accounts').select())
    } 
    catch(error) {
        next(error)
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        return res.json(await db('accounts'))
    }
    catch(error) {
        next(error)
    }
});

router.post('/', async (req, res, next) => {
    try {
        const payload = {
            name: req.body.name,
            budget: req.body.budget,
        }

        const [id] = await db('accounts').insert(payload)
        return res.json(await db('accounts').where('id', id).first())
    }
    catch (err) {
        next(err)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        // send back info to the user through req.body will update all body content
        // const payload = {
        //     name: req.body.name,
        //     budget: req.body.budget,
        // }

        await db('accounts').where('id', req.params.id).update(req.body)
        return res.json(await db('accounts').where('id', req.params.id).first())
    }
    catch (err) {
        next(err)
    }
})


router.delete('/:id', async (req, res, next) => {
    try {
        await db('accounts').where('id', req.params.id).del()
        return res.status(204).json(req.params.id) //req.params.id returns individual id deleted. 1 = successful, 0 = unsuccessful
    }
    catch (err) {
        next(err)
    }
})

module.exports = router