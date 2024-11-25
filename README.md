# Ski-Service-Anmeldung

- [Ski-Service-Anmeldung](#ski-service-anmeldung)
  - [Informieren (I)](#informieren-i)
    - [Hintergrund](#hintergrund)
    - [Projektziele](#projektziele)
      - [Startseite](#startseite)
      - [Service-Anmeldeformular](#service-anmeldeformular)
      - [Kontaktseite](#kontaktseite)
    - [Herausforderungen](#herausforderungen)
  - [Planen (P)](#planen-p)
    - [Aufgabenaufteilung](#aufgabenaufteilung)
      - [Frontend-Entwicklung](#frontend-entwicklung)
      - [Backend-Interaktion](#backend-interaktion)
      - [Styling](#styling)
    - [Ressourcenallokation](#ressourcenallokation)
      - [Testen](#testen)
    - [Geplante Ergebnisse](#geplante-ergebnisse)
  - [Entscheiden (E)](#entscheiden-e)
    - [Entwicklungsentscheidungen](#entwicklungsentscheidungen)
    - [Designprinzipien](#designprinzipien)
  - [Realisieren (R)](#realisieren-r)
    - [Frontend Entwicklung](#frontend-entwicklung-1)
      - [Startseite (home.html)](#startseite-homehtml)
      - [Dienstleistungsseite (services.html)](#dienstleistungsseite-serviceshtml)
      - [Reservierungsformular (reservation.html)](#reservierungsformular-reservationhtml)
      - [Kontaktseite (contacs.html)](#kontaktseite-contacshtml)
    - [Backend-Integration](#backend-integration)
      - [Formularvalidierung](#formularvalidierung)
      - [API-Aufrufe](#api-aufrufe)

## Informieren (I)

Zu Beginn des Projekts war es entscheidend, ein umfassendes Verständnis der Anforderungen und Ziele zu erlangen. Die Ski-Service-Website sollte eine moderne, benutzerfreundliche und responsive Plattform bieten, die es Kunden ermöglicht, sich online für Dienstleistungen anzumelden.

### Hintergrund

Jetstream-Service, ein kleines Unternehmen im Ski-Service-Bereich, strebte eine Modernisierung seiner Online-Präsenz an. Die bestehende Website war veraltet und entsprach nicht den aktuellen Anforderungen der Kunden, insbesondere während der geschäftigen Wintersaison.

### Projektziele

#### Startseite

- Ansprechende Begrüssung der Besucher mit visuellen Elementen.

- Übersicht über die angebotenen Dienstleistungen.

#### Service-Anmeldeformular

- Online-Registrierung für spezifische Ski-Services ermöglichen.

- Kunden die Auswahl von Service-Prioritäten und die Schätzung von Abholdaten ermöglichen.

#### Kontaktseite

- Vollständige Kontaktdaten und Standortanzeige bereitstellen.

### Herausforderungen

- Sicherstellen eines responsiven Designs für verschiedene Geräte.

- Implementierung einer Echtzeit-Formularvalidierung.

- Effektive Integration des Frontends mit der bestehenden Backend-REST-API.

## Planen (P)

Nach dem Sammeln aller notwendigen Informationen begann ich mit der detaillierten Planung des Projekts.

### Aufgabenaufteilung

#### Frontend-Entwicklung

- Erstellung einer responsiven Startseite (home.html).

- Entwicklung einer klaren Dienstleistungsübersicht (services.html).

- Implementierung des Anmeldeformulars (reservation.html).

- Erstellung einer Kontaktseite mit eingebettetem Google Maps (contacs.html).

#### Backend-Interaktion

- Schreiben von JavaScript-Logik zur Verarbeitung von Formularübermittlungen und zur Interaktion mit der Backend-API.

- Testen der API-Integration mit Beispieldaten und Fehlerszenarien.

#### Styling

- Verwendung von Bootstrap für ein konsistentes Design.

- Erstellung von benutzerdefiniertem CSS für einzigartiges Branding.

### Ressourcenallokation

- Geschätzte Zeit: 13 Stunden.
- Werkzeuge: Visual Studio Code, Postman und Bootstrap-Dokumentation.

#### Testen

- Browser-Kompatibilitätstests (Chrome, Firefox, Edge, Safari).

- Gerätetests (Desktop, Tablet, Mobil).

### Geplante Ergebnisse

- Voll funktionsfähige Website mit vier Hauptseiten.

- Ein vollständiger, validierter Registrierungsprozess, der in die Backend-API integriert ist.

## Entscheiden (E)

Während der Planungsphase traf ich mehrere entscheidende Entscheidungen, um den Projektfortschritt zu steuern.

### Entwicklungsentscheidungen

- Bootstrap: Aufgrund seiner umfangreichen Komponenten und des responsiven Rastersystems entschied ich mich für Bootstrap, um die Entwicklung zu beschleunigen und ein professionelles Erscheinungsbild zu gewährleisten.

- Vanilla JavaScript: Um die Komplexität zu minimieren und Flexibilität zu bewahren, entschied ich mich, auf zusätzliche Frameworks zu verzichten und reines JavaScript für die Frontend-Logik zu verwenden.

- REST-Standards: Für die Kommunikation mit dem Backend entschied ich mich, REST-Standards zu folgen, um Konsistenz und Skalierbarkeit sicherzustellen.

### Designprinzipien

- Benutzerfreundlichkeit: Die Benutzeroberfläche sollte intuitiv und ansprechend sein, um eine positive Nutzererfahrung zu gewährleisten.

- Klarheit im Anmeldeformular: Das Formular sollte klar kommunizieren, welche Dienstleistungen verfügbar sind und welche Fristen basierend auf den Prioritäten gelten.

- Responsives Design: Besonderes Augenmerk wurde auf die mobile Nutzung gelegt, um sicherzustellen, dass die Website auf allen Geräten optimal funktioniert.

## Realisieren (R)

Mit klaren Entscheidungen und einem soliden Plan begann ich mit der Umsetzung des Projekts.

### Frontend Entwicklung

#### Startseite (home.html)

- Die Startseite begrüsst Besucher mit einem grossen Hero-Bild eines Berg-Skiresorts, das Benutzer einlädt, die Dienstleistungen zu erkunden.

- Enthält Karten, die die Hauptangebote hervorheben: Unterhaltung, Unterkunft und Lift-Tickets.

#### Dienstleistungsseite (services.html)

- Zeigt alle verfügbaren Ski-Dienstleistungen als einzelne Karten an, jede mit einem Titel, einer kurzen Beschreibung und einem "Mehr erfahren"-Button.

#### Reservierungsformular (reservation.html)

- Enthält Felder für Kundenname, E-Mail, Telefon, ausgewählten Service und Priorität.

- Berechnet dynamisch das Abholdatum basierend auf dem ausgewählten Prioritätslevel.

#### Kontaktseite (contacs.html)

- Bietet Kontaktdetails (Adresse, Telefon, E-Mail) und eine eingebettete Google Maps-Karte, die den Standort des Unternehmens zeigt.

### Backend-Integration

Das main.js-Skript übernimmt:

#### Formularvalidierung

Überprüft auf leere Felder und stellt sicher, dass die E-Mail-Adresse dem Standardformat entspricht.

#### API-Aufrufe

- Sendet Benutzereingaben über eine POST-Anfrage an den /api/registration-Endpunkt.

- Verarbeitet Serverantworten und bietet dem Benutzer Feedback.
