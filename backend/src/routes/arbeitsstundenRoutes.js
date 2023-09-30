const express = require('express');
const router = express.Router();
const arbeitsstundenController = require('../controllers/arbeitsstundenController');

router.post('/hinzufuegen', arbeitsstundenController.hinzufuegen);
router.put('/aktualisieren/:id', arbeitsstundenController.aktualisieren);
router.delete('/loeschen/:id', arbeitsstundenController.loeschen);
router.get('/abrufen', arbeitsstundenController.abrufen);

module.exports = router;