const express = require('express');

const router = express.Router()
const Model = require('../model/model');

module.exports = router;

// Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        gender: req.body.gender,
        nationality: req.body.nationality,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        message: req.body.message
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all Method
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

//Update by ID Method
//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})
