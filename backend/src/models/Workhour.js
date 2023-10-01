const mongoose = require('mongoose');

// Arbeitsstunden Schema
const arbeitsstundenSchema = new mongoose.Schema({
  datum: {
    type: Date,
    required: true
  },
  zeitStunden: {
    type: Number,
    required: true
  },
  kunden: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Kunde',
    required: true
  },
  mitarbeiterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mitarbeiter',
    required: true
  }
});

// Arbeitsstunden-Modell erstellen
const Arbeitsstunde = mongoose.model('Arbeitsstunde', arbeitsstundenSchema);

module.exports = Arbeitsstunde;