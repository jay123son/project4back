const express = require('express');
const router = express.Router();
const albumapp = require('../models/albumapp')

router.get('/', async (req, res) => {
    try {
      res.status(200).json(await albumapp.find({}))
      
    } catch (err) {
          next(err);
    }

});



router.get("/:id", async (req, res) => {
  try {
      res.json(await albumapp.findById(req.params.id));
    } catch (error) {
      res.status(400).json(error);
    }
});

module.exports = router