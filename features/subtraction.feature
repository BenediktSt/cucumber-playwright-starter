# language: de
@feature-2
Funktionalität: Subtraktion des Taschenrechners
  In meiner Rolle als Buchhalter*in möchte ich zwei Zahlen voneinander subtrahieren können,
  damit mir bei der Rechnungserstellung keine Fehler unterlaufen

  Szenariogrundriss: Subtraktion von zwei Zahlen
    Gegeben sei ein Taschenrechner
    Wenn ich als erste Zahl <zahl1> eingebe
    Und ich als zweite Zahl <zahl2> eingebe
    Und ich Subtraktion als Operation auswähle
    Und ich das Ergebnis berechne
    Dann erwarte ich <ergebnis> als Ergebnis
    Beispiele:
      | zahl1 | zahl2 | ergebnis |
      | 4     | 3     | 1        |
      | 3     | 4     | -1       |
      | 4.5   | 2.3   | 2.2      |
      | 4     | -1    | 5        |
