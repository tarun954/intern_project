const express = require('express');
const Player = require('../model/Player');
const Product = require('../model/Player')
const playersController = require('../controller/players-controller'); 
const router = express.Router(); 


router.get('/', playersController.getAllPlayers );
router.post('/',playersController.addPlayer);
router.get('/:id',playersController.getById);
router.put('/:id',playersController.updatePlayer)
router.delete('/:id',playersController.deletePlayer);

module.exports = router;