# CareTime

Willkommen zum CareTime-Projekt!

## Über das Projekt

CareTime ist eine Anwendung zur Verwaltung von Arbeitsstunden und Kundeninformationen. Diese Anwendung wurde entwickelt, um die Arbeit von Mitarbeitern in der Seniorenbetreuung zu erleichtern. Sie ermöglicht das Protokollieren von Arbeitsstunden, das Hinzufügen neuer Kunden und die Verwaltung von Informationen über Kunden und Mitarbeiter.

## Funktionen

- Benutzeranmeldung und -registrierung
- Hinzufügen und Verwalten von Arbeitsstunden
- Hinzufügen und Verwalten von Kundeninformationen
- Exportieren von Daten in eine Excel-Tabelle
- ...

## Ordnerstruktur

Die Projektordnerstruktur ist wie folgt aufgebaut:

- `backend/`: Enthält den Node.js-Server und die API-Logik.
  - `src/`: Enthält den Server-Code.
    - `controllers/`: Controller für verschiedene Routen.
    - `models/`: Datenbankmodelle.
    - `routes/`: API-Routen.
    - `index.js`: Hauptserverdatei.
  - `package.json`: Abhängigkeiten und Skripte für den Backend-Server.
- `frontend/`: Enthält den Frontend-Code.
  - `public/`: Öffentliche Ressourcen und HTML-Dateien.
  - `src/`: Enthält den Frontend-Code.
    - `components/`: Wiederverwendbare Komponenten.
    - `views/`: Ansichten und Seiten.
    - `App.js`: Hauptkomponente.
    - `index.js`: Einstiegspunkt der Frontend-Anwendung.
  - `package.json`: Abhängigkeiten und Skripte für das Frontend.

## Installation und Verwendung

Um das Projekt lokal auszuführen, führe die folgenden Schritte aus:

1. Klonen Sie das Repository:

   ```bash
   git clone https://github.com/TravikSkoot/CareTime.git