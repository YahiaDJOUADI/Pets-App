const express = require('express');
const router = express.Router();
const petsController = require('../controllers/petsController');
router.get("/pets", petsController.getPets)
router.get("/pets/:id",petsController.getPet)
router.post("/pets",petsController.addPet)
router.put("/pets/:id",petsController.updatePet)
router.delete("/pets/:id",petsController.deletePet)

module.exports = router