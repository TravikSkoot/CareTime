# CareTime - Zeiterfassung und Verwaltung für Seniorenbetreuungsdienste

**Hinweis:** Dieses Projekt ist derzeit in Arbeit (Work in Progress) und befindet sich in der Entwicklungsphase.

---

Willkommen bei CareTime, einer Anwendung zur Verwaltung von Arbeitsstunden im Seniorenservice. Diese Anwendung bietet eine einfache Möglichkeit, Arbeitsstunden für Mitarbeiter im Seniorenservice zu erfassen und zu verwalten.

## Inhaltsverzeichnis

- [Installation](#installation)
- [Verwendung](#verwendung)
- [API-Endpunkte](#api-endpunkte)
- [Contributing](#beitragen)
- [Lizenz](#lizenz)

## Installation

Um CareTime lokal auszuführen, führen Sie die folgenden Schritte aus:

1. Klonen Sie das Repository:

   ```bash
   git clone https://github.com/TravikSkoot/CareTime.git
   ```

2. Wechseln Sie in das Backend-Verzeichnis:

   ```bash
   cd CareTime/backend
   ```

3. Installieren Sie die Abhängigkeiten:

   ```bash
   npm install
   ```

4. Starten Sie den Backend-Server:

   ```bash
   node server.js
   ```

5. Wechseln Sie in das Frontend-Verzeichnis:

   ```bash
   cd ../frontend
   ```

6. Installieren Sie die Frontend-Abhängigkeiten:

   ```bash
   npm install
   ```

7. Starten Sie die Frontend-Anwendung:

   ```bash
   npm start
   ```

Die Anwendung ist jetzt unter [http://localhost:3000](http://localhost:3000) verfügbar.

## Verwendung

Um die Anwendung zu verwenden, öffnen Sie sie in Ihrem Webbrowser. Hier können Sie sich einloggen oder registrieren, Arbeitsstunden hinzufügen, aktualisieren und löschen, sowie Daten exportieren.

## API-Endpunkte

Die API bietet verschiedene Endpunkte für die Verwaltung von Arbeitsstunden. Hier sind einige Beispiele:

- `POST /api/einloggen`: Benutzeranmeldung
- `POST /api/registrieren`: Benutzerregistrierung
- `POST /api/arbeitsstunden`: Neue Arbeitsstunde hinzufügen
- `GET /api/arbeitsstunden`: Alle Arbeitsstunden abrufen
- `PUT /api/arbeitsstunden/:id`: Arbeitsstunde aktualisieren
- `DELETE /api/arbeitsstunden/:id`: Arbeitsstunde löschen
- `POST /api/exportieren`: Exportieren der Daten in eine Excel-Tabelle

## Beitragen

Wir freuen uns über Beiträge zur Weiterentwicklung von CareTime. Bitte lesen Sie die [Beitragungsrichtlinien](CONTRIBUTING.md) für weitere Informationen.

## Lizenz

Dieses Projekt ist unter der [GNU General Public License (GPL)](LICENSE.md) lizenziert. Lesen Sie die Lizenzdatei für weitere Details.

---

© 2023 Thiemo Küpper

**Hinweis:** Dieses Projekt ist derzeit in Arbeit und wird weiterhin aktualisiert und erweitert. Wir freuen uns über Beiträge und Feedback von Mitwirkenden.