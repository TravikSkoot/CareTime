# CareTime - Backend

## Einleitung

Das Backend von CareTime ist für die Verwaltung der Daten und die Kommunikation mit dem Frontend verantwortlich. Es stellt APIs bereit, die von der Frontend-Anwendung genutzt werden können.

## Technologien

- Node.js
- Express
- MongoDB

## Installation

1. Navigieren Sie zum `backend`-Verzeichnis.
2. Führen Sie `npm install` aus, um die Abhängigkeiten zu installieren.
3. Starten Sie den Server mit `npm start`.

## API-Endpunkte

Die API bietet verschiedene Endpunkte für die Verwaltung von Arbeitsstunden. Hier sind einige Beispiele:

- `POST /api/einloggen`: Benutzeranmeldung
- `POST /api/registrieren`: Benutzerregistrierung
- `POST /api/arbeitsstunden`: Neue Arbeitsstunde hinzufügen
- `GET /api/arbeitsstunden`: Alle Arbeitsstunden abrufen
- `PUT /api/arbeitsstunden/:id`: Arbeitsstunde aktualisieren
- `DELETE /api/arbeitsstunden/:id`: Arbeitsstunde löschen
- `POST /api/exportieren`: Exportieren der Daten in eine Excel-Tabelle

## Beitragende

Wir begrüßen Beitragende! Wenn Sie zur Weiterentwicklung von CareTime beitragen möchten, lesen Sie bitte unsere [Contributing-Anleitung](CONTRIBUTING.md) für Details dazu, wie Sie sich beteiligen können.

## Lizenz

Dieses Projekt ist unter der GNU General Public License (GPL-3.0) lizenziert. Weitere Informationen finden Sie in der [Lizenzdatei](LICENSE).

---

© 2023 Thiemo Küpper

**Hinweis:** Dieses Projekt ist derzeit in Arbeit und wird weiterhin aktualisiert und erweitert. Wir freuen uns über Beiträge und Feedback von Mitwirkenden.