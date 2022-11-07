# Gui Test Starter
Dieses Repository dient als Startpunkt für die Erstellung von Oberflächentests mit Playwright und Cucumber auf Basis von Typescript.

## Basis und Kudos
Die Inhalte basieren auf dem Repository [cucumber-playwright](https://github.com/Tallyb/cucumber-playwright)

## Installation
```
npm i
npx playwright install
```

## Verwendung

### Ausführung von Tests

`npm run test` zur Ausführung aller Tests

`npm run test <Featurename>` zur Ausführung eines einzelnen Features

### Browserverwendung
Per Default wird Chromium verwendet. Über die Umgebungsvariable `BROWSER` kann der Name eines alternativen Browsers gesetzt werden.

Mögliche Optionen: chromium, firefox, webkit

Beispiel für Windows
```
set BROWSER=firefox
npm run test
```

### Ignorieren eines Szenarios

Durch Verwendung des Tags `@ignore`

### Identifizieren von TypeScript, Linting oder Gherkin Fehlern

`npm run build`

### Auswertung der Step-Usage

`npm run steps-usage`

*Weitere Optionen/Befehle lassen sich aus dem [Basis-Repo](https://github.com/Tallyb/cucumber-playwright) entnehmen.
