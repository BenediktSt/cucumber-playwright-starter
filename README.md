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

`npm run test -- --tags <Tag>` zur Ausführung alle Tests, welche dem Tag zugeordnet sind

### Browser-Verwendung
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

Hierbei werden alle Tests im Dry-run ausgeführt und es wird der `usage` Bericht von cucumber-js erzeugt.
Dieser beinhaltet für jeden definierten Step, in welchen Features dieser verwendet wird.

`npm run steps-usage`

*Weitere Optionen/Befehle lassen sich aus dem [Basis-Repo](https://github.com/Tallyb/cucumber-playwright) entnehmen.

### Verwendung Gherkin Linter
Unter `.gherkin-lintrc` werden die entsprechenden Gherkin-Regeln konfiguriert.

`npm run gherkin` führt eine Validierung der Gherkin-Regeln durch.

### Sichten eines Playwright Trace
Zu jedem fehlgeschlagenen Szenario wird ein Trace im Ordner `trace` gespeichert.

Dieser Trace kann mittels `npx playwright show-trace <NAME-DES-TRACE>.zip` analysiert werden.
