const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const arbeitsstundenRoutes = require('./routes/arbeitsstundenRoutes');
const Arbeitsstunde = require('./models/Workhour');

// Verbindung zu MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/CareTime', { 
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Erfolgreich mit der Datenbank verbunden')
})
.catch(error => {
  console.log('Verbindungsfehler:', error)
});

// Middleware, um JSON-Anfragen zu verarbeiten
app.use(express.json());

// Router einbinden
app.use('/api/arbeitsstunden', arbeitsstundenRoutes);

// Benutzeranmeldung
app.post('/api/einloggen', (req, res) => {
  // Logik für die Benutzeranmeldung
  res.json({ message: 'Eingeloggt' });
});

// Benutzerregistrierung
app.post('/api/registrieren', (req, res) => {
  // Logik für die Benutzerregistrierung
  res.json({ message: 'Registriert' });
});

// Neue Arbeitsstunde hinzufügen
app.post('/api/arbeitsstunden', (req, res) => {
  const neueArbeitsstunde = new Arbeitsstunde({
    datum: req.body.datum,
    zeitStunden: req.body.zeitStunden,
    kunden: req.body.kunden,
    mitarbeiterId: req.body.mitarbeiterId
  });

  neueArbeitsstunde.save()
    .then(() => res.json({ message: 'Neue Arbeitsstunde erfolgreich hinzugefügt.' }))
    .catch(err => res.status(400).json({ message: 'Fehler beim Hinzufügen der Arbeitsstunde', error: err }));
});

// Alle Arbeitsstunden abrufen
app.get('/api/arbeitsstunden', (req, res) => {
  // Logik zum Abrufen aller Arbeitsstunden
});

// Arbeitsstunde aktualisieren
app.put('/api/arbeitsstunden/:id', (req, res) => {
  // Logik zum Aktualisieren einer Arbeitsstunde
  res.json({ message: 'Hour updated' });
});

// Arbeitsstunde löschen
app.delete('/api/arbeitsstunden/:id', (req, res) => {
  // Logik zum Löschen einer Arbeitsstunde
  res.json({ message: 'Hour deleted' });
});

// Exportieren der Daten
app.post('/api/exportieren', (req, res) => {
  // Logik zum Exportieren der Daten in eine Excel-Tabelle
  res.json({ message: 'Data exported' });
});

// Server starten
app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});