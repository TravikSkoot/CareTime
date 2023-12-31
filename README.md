# CareTime - Zeiterfassung und Verwaltung für Seniorenbetreuungsdienste

**Hinweis:** Dieses Projekt ist derzeit in Arbeit (Work in Progress) und befindet sich in der Entwicklungsphase.

---

Willkommen bei CareTime, einer Anwendung zur Verwaltung von Arbeitsstunden im Seniorenservice. Diese Anwendung bietet eine einfache Möglichkeit, Arbeitsstunden für Mitarbeiter im Seniorenservice zu erfassen und zu verwalten.

## Inhaltsverzeichnis

- [Features](#features)
- [Verwendung](#verwendung)
- [Installation](#installation)
- [API-Endpunkte](#api-endpunkte)
- [Contributing](#beitragen)
- [Lizenz](#lizenz)

## Features

- **Kundenverwaltung**: Hinzufügen, Bearbeiten und Löschen von Kundendaten.
- **Automatische Berechnungen**: Berechnung der Gesamtarbeitszeit, eventuell sogar der Bezahlung.
- **Benachrichtigungen**: Erinnerungen für das Eintragen von Arbeitsstunden.
- **Berichte**: Monatliche oder wöchentliche Berichte, die automatisch generiert werden.

## Verwendung

Um die Anwendung zu verwenden, öffnen Sie sie in Ihrem Webbrowser. Hier können Sie sich einloggen oder registrieren, Arbeitsstunden hinzufügen, aktualisieren und löschen, sowie Daten exportieren.

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
   node index.js
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

Wir begrüßen Beitragende! Wenn Sie zur Weiterentwicklung von CareTime beitragen möchten, lesen Sie bitte unsere [Contributing-Anleitung](CONTRIBUTING.md) für Details dazu, wie Sie sich beteiligen können.

## Lizenz

Dieses Projekt ist unter der GNU General Public License (GPL-3.0) lizenziert. Weitere Informationen finden Sie in der [Lizenzdatei](LICENSE).

---

© 2023 Thiemo Küpper

**Hinweis:** Dieses Projekt ist derzeit in Arbeit und wird weiterhin aktualisiert und erweitert. Wir freuen uns über Beiträge und Feedback von Mitwirkenden.