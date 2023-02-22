# language: de
@feature-1
Funktionalität: Addition des Taschenrechners
  In meiner Rolle als Buchhalter*in möchte ich zwei Zahlen miteinander addieren können,
  damit mir bei der Rechnungserstellung keine Fehler unterlaufen

  Szenario: Addition von zwei Ganzzahlen
    Gegeben sei ein Taschenrechner
    Wenn ich als erste Zahl 3 eingebe
    Und ich als zweite Zahl 4 eingebe
    Und ich Addition als Operation auswähle
    Und ich das Ergebnis berechne
    Dann erwarte ich 7 als Ergebnis

  Szenario: Addition von zwei Fließkommazahlen
    Gegeben sei ein Taschenrechner
    Wenn ich als erste Zahl 3.3 eingebe
    Und ich als zweite Zahl 4.4 eingebe
    Und ich Addition als Operation auswähle
    Und ich das Ergebnis berechne
    Dann erwarte ich 7.7 als Ergebnis