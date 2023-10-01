const mongoose = require('mongoose');
const Role = require('../models/rollen');

// Verbinde zur Datenbank
mongoose.connect('mongodb://127.0.0.1:27017/CareTime', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Erfolgreich mit der Datenbank verbunden'))
.catch(err => console.log('Verbindungsfehler:', err));

// Funktion zum Erstellen einer Rolle
async function createRole(roleName, roleDescription, permissions) {
  try {
    // Überprüfe, ob die Rolle bereits existiert
    const existingRole = await Role.findOne({ name: roleName });

    if (existingRole) {
      console.log(`Die Rolle "${roleName}" existiert bereits.`);
    } else {
      // Rolle erstellen und in die Datenbank speichern
      const role = new Role({
        name: roleName,
        description: roleDescription,
        permissions: permissions,
      });
      await role.save();
      console.log(`Rolle "${roleName}" erfolgreich erstellt.`);
    }
  } catch (error) {
    console.error('Fehler beim Erstellen der Rolle:', error);
  } finally {
    // Verbindung zur Datenbank schließen
    mongoose.connection.close();
  }
}

// Funktion zum Löschen einer Rolle
async function deleteRole(roleName) {
  try {
    // Finde die Rolle anhand des Namens und lösche sie
    const result = await Role.deleteOne({ name: roleName });

    // Überprüfe, ob die Rolle gelöscht wurde
    if (result.deletedCount === 1) {
      console.log(`Rolle "${roleName}" wurde erfolgreich gelöscht.`);
    } else {
      console.log(`Rolle "${roleName}" wurde nicht gefunden.`);
    }
  } catch (error) {
    console.error('Fehler beim Löschen der Rolle:', error);
  } finally {
    // Verbindung zur Datenbank schließen
    mongoose.connection.close();
  }
}

// Verarbeite die Befehle aus der Kommandozeile
const command = process.argv[2]; // Der dritte Wert im Array ist der Befehl

if (command === 'createRole') {
  const roleName = process.argv[3];
  const roleDescription = process.argv[4];
  const permissions = process.argv[5].split(',');

  createRole(roleName, roleDescription, permissions);
} else if (command === 'deleteRole') {
  const roleName = process.argv[3];
  deleteRole(roleName);
} else {
  console.log('Ungültiger Befehl. Verwenden Sie "createRole" oder "deleteRole".');
}