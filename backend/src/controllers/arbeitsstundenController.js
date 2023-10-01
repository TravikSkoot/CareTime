const Arbeitsstunde = require('../models/Workhour');

// Hinzufügen einer neuen Arbeitsstunde
exports.hinzufuegen = async (req, res) => {
  try {
    const neueStunde = new Arbeitsstunde(req.body);
    await neueStunde.save();
    res.status(201).json({ message: 'Arbeitsstunde erfolgreich hinzugefügt', data: neueStunde });
  } catch (error) {
    res.status(400).json({ message: 'Fehler beim Hinzufügen', error });
  }
};

// Aktualisieren einer Arbeitsstunde
exports.aktualisieren = async (req, res) => {
  try {
    const id = req.params.id;
    const aktualisierteStunde = await Arbeitsstunde.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: 'Arbeitsstunde erfolgreich aktualisiert', data: aktualisierteStunde });
  } catch (error) {
    res.status(400).json({ message: 'Fehler beim Aktualisieren', error });
  }
};

// Löschen einer Arbeitsstunde
exports.loeschen = async (req, res) => {
  try {
    const id = req.params.id;
    await Arbeitsstunde.findByIdAndDelete(id);
    res.status(200).json({ message: 'Arbeitsstunde erfolgreich gelöscht' });
  } catch (error) {
    res.status(400).json({ message: 'Fehler beim Löschen', error });
  }
};

// Alle Arbeitsstunden abrufen
exports.abrufen = async (req, res) => {
  try {
    const alleStunden = await Arbeitsstunde.find();
    res.status(200).json({ message: 'Alle Arbeitsstunden abgerufen', data: alleStunden });
  } catch (error) {
    res.status(400).json({ message: 'Fehler beim Abrufen', error });
  }
};