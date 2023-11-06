# language: de
@feature-4
Funktionalität: Anzeige von Fehlernachrichten
  In meiner Rolle als Anwender*in möchte ich immer hilfreiche Fehlermeldungen erhalten,
  um entsprechend auf die Situation reagieren zu können.

  Szenario: Erfolgreiche Anfrage
    Gegeben sei die Seite für HTTP-Tests
    Und der geöffnete GET-Request
    Wenn ich den GET-Request ausführe
    Dann erwarte ich als Status-Code 200

  Szenario: Fehlerhafte Anfrage
    Gegeben sei die Seite für HTTP-Tests
    Und der geöffnete GET-Request
    Und ein Fehler auf dem Server
    Wenn ich den GET-Request ausführe
    Dann erwarte ich als Status-Code 500
