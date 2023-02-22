# language: de
@feature-1
Funktionalität: Addition des Taschenrechners
  In meiner Rolle als Buchhalter*in möchte ich zwei Zahlen miteinander addieren können,
  damit mir bei der Rechnungserstellung keine Fehler unterlaufen

  Szenariogrundriss: Addition von zwei Zahlen
    Gegeben sei ein Taschenrechner
    Wenn ich als erste Zahl <zahl1> eingebe
    Und ich als zweite Zahl <zahl2> eingebe
    Und ich Addition als Operation auswähle
    Und ich das Ergebnis berechne
    Dann erwarte ich <ergebnis> als Ergebnis
    Beispiele:
      | zahl1 | zahl2 | ergebnis |
      | 3     | 4     | 7        |
      | 3.3   | 4.4   | 7.7      |
      | 0     | 4     | 4        |
      | -1    | 4     | 3        |