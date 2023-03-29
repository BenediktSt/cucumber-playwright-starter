# language: de
@feature-3
Funktionalität: Automatische Ermittlung nützlicher Fakten über Katzen
  In meiner Rolle als Buchhalter*in möchte interessante Fakten über Katzen lernen,
  um mich von den schweren Kalkulationen zu erholen.

  Szenario: Ermittlung von mehreren Katzen-Fakten
    Gegeben sei ein Request an die Katzen-Fakten-API
    Wenn ich als limit Parameter 2 setze
    Und ich den Request absende
    Dann erwarte ich 2 Fakten über Katzen

  Szenario: Kurze Ermittlung von mehreren Katzen Fakten
    Wenn ich nach 2 Katzen-Fakten frage
    Dann erwarte ich 2 Fakten über Katzen

  @sec
  Szenario: Setzen sicherheitsrelevanter Header
    Wenn ich nach 2 Katzen-Fakten frage
    Dann erwarte ich "application/json" als content-type in der API-Antwort
    Und erwarte ich einen sicheren x-frame-options Header in der API-Antwort
    Und erwarte ich keine Server-Details in der API-Antwort
    Und erwarte ich einen sicheren cache-control Header in der API-Antwort
    Und erwarte ich einen sicheren content-security-policy Header in der API-Antwort
    Und erwarte ich einen sicheren strict-transport-security Header in der API-Antwort
    Und erwarte ich einen sicheren feature-policy Header in der API-Antwort
    Und erwarte ich einen sicheren referrer-policy Header in der API-Antwort
    Und erwarte ich einen sicheren x-content-type-option Header in der API-Antwort
