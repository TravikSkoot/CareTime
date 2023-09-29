const express = require('express');
const app = express();
const port = 3000;

// Dummy-Datenbank
let hoursDB = [];
let usersDB = [];

app.use(express.json()); // for parsing application/json

// Login
app.post('/api/login', (req, res) => {
  // Logik für die Benutzeranmeldung
  res.json({ message: 'Logged in' });
});

// Registrierung
app.post('/api/register', (req, res) => {
  // Logik für die Benutzerregistrierung
  res.json({ message: 'Registered' });
});

// Neue Arbeitsstunde hinzufügen
app.post('/api/hours', (req, res) => {
  // Logik zum Hinzufügen einer neuen Arbeitsstunde
  res.json({ message: 'Hour added' });
});

// Alle Arbeitsstunden abrufen
app.get('/api/hours', (req, res) => {
  // Logik zum Abrufen aller Arbeitsstunden
  res.json(hoursDB);
});

// Arbeitsstunde aktualisieren
app.put('/api/hours/:id', (req, res) => {
  // Logik zum Aktualisieren einer Arbeitsstunde
  res.json({ message: 'Hour updated' });
});

// Arbeitsstunde löschen
app.delete('/api/hours/:id', (req, res) => {
  // Logik zum Löschen einer Arbeitsstunde
  res.json({ message: 'Hour deleted' });
});

// Exportieren der Daten
app.post('/api/export', (req, res) => {
  // Logik zum Exportieren der Daten in eine Excel-Tabelle
  res.json({ message: 'Data exported' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});