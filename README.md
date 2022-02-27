# Inlämningsuppgift 4: Projekt
Skriv en fullständig applikation med Vue baserat på era egna idéer.

## Krav för G
Ni har stor frihet i hur ni utformar er applikation, men för att ni ska kunna få G behöver den uppfylla följande:

### Funktionalitet
- Applikationen ska vara i samma storleksordning som TodoMVC eller aningen större.
    - Se till att inte göra den mycket större än TodoMVC, både för er egen skull och för min skull.
- Om er applikation förlitar sig på exempeldata/startdata (exempelvis en lista över länder och städer) så ska denna hämtas antingen från en separat JSON-fil eller från ett externt API.
- Undvik funktionalitet som kräver att användaren matar in en stor mängd data via flera olika formulär. Överväg istället att använda startdata som applikationen automatiskt läser in, så som nämns ovan.

### Tester
- Er applikation ska innehålla minst 3 GUI-tester med Selenium (högst 10) som testar olika relevanta scenarion.

### JavaScript
- Ni ska skriva applikationen med Vue.
    - Det är tillåtet att använda React istället för Vue.
    - Det är tillåtet men frivilligt att också använda TypeScript.
    - Om ni vill använda något annat bibliotek eller ramverk än de som nämns ovan (exempelvis jQuery) så måste ni först kontakta mig och förklara vad ni vill använda och varför, och därefter få det godkänt av mig. Generellt sett godkänner jag inte extra bibliotek, men jag bedömer detta från fall till fall.

### CSS
- Ni ska skriva er CSS helt själva, utan ramverk som exempelvis Twitter Bootstrap.
- Er CSS ska vara responsiv i rimlig utsträckning. En bra utgångspunkt är att layouten ska fungera bra på en typisk mobil, surfplatta och desktop-dator.
- Ni ska ta fram er grafiska design själva men hur snygg den är påverkar inte betyget, förutsatt att designen är tydlig och använder sig av färg och/eller bakgrundsgrafik i någon utsträckning.
    - Ni får använda valfria typsnitt och bilder som ni inte har gjort själva. (Med andra ord är det just själva designen som ni måste göra själva, inte bilderna som ingår i den.) För er egen skull (om ni vill publicera den i er portfolio) rekommenderar jag att ni enbart använder typsnitt och bilder som har gratislicenser.

### HTML
- Ni ska skriva er HTML helt själva.
- Er HTML ska vara semantisk i rimlig utsträckning.

### Kodstil
- Er applikation ska ha god kodstil, inklusive bland annat:
    - Konsekvent indentering och formatering.
    - Tydliga namn på variabler och funktioner etc.
    - Tydliga kommentarer på de ställen där något behöver förtydligas.
    - En rimlig uppdelning i olika funktioner/klasser: inte all kod i en enda enorm funktion men inte heller all kod utspridd över hundra jättesmå funktioner.

### Dokumentation
- Ni ska skriva **individuell** dokumentation som besvarar följande frågor om er applikation:
    1. Vilka delar av er kod var svårast att implementera? Beskriv med tekniska detaljer och referera till relevanta delar av koden.
    2. Vilka delar av er kod är du mest nöjd med och varför? Beskriv med tekniska detaljer och referera till relevanta delar av koden.
    3. Vilka delar av er kod skulle du vilja förbättra och varför, samt hur? Beskriv med tekniska detaljer och referera till relevanta delar av koden.
- Håll er inom följande ordgräns:
    - Max 750 ord om ni enbart har gjort G-delen.
    - Max 1.500 ord om ni har gjort både G-delen och VG-delen.
- Om ni har gjort både G-delen och VG-delen, se till att er dokumentationen också innefattar både G-delen och VG-delen.

**Den skriftliga dokumentationen kommer att användas för att bedöma enskilda insatser i ert arbete och måste därför göras individuellt. Ni får diskutera ert arbete tillsammans men allting som ni skriver ner i denna del av dokumentationen måste skrivas individuellt. Ni varken får eller bör "hjälpa" er samarbetspartner genom att skriva denna del av dokumentationen tillsammans.**

## Krav för VG
För att ni ska kunna få VG behöver er applikation uppfylla alla krav från G-delen samt följande:

- Användarens egna data ska sparas i [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) så att den är tillgänglig även efter att sidan laddas om.
    - Till detta räknas alltså den data som användaren själv skapar eller väljer, men inte sådan som är fördefinierad av appen.
- Applikationen ska erbjuda någon ytterligare funktionalitet som är relaterad till grundfunktionaliteten. Denna funktionalitet ska använda sig av något JavaScript-API som vi inte har fokuserat på tidigare i kursen, exempelvis:
    - [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG)
    - [Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
    - [Geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
    - [Drag and Drop](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
    - [Web Audio](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
    - [Web Speech](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
    - Att via dokumentationen lära sig hur dessa API:er fungerar trots att vi inte har gått igenom dem i kursen är en del av uppgiften på VG-nivå.

## Exempel

- **Träning:** En applikation som låter användaren sätta ihop ett personligt träningsprogram utifrån en fördefinierad uppsättning övningar (armhävningar, sit-ups, etc.). Användaren kan se en sammanfattning av exempelvis hur lång tid träningsprogrammet tar att utföra eller hur många kalorier det bränner.
    - **VG-funktionalitet:** Läs upp övningarna i träningsprogrammet med Web Speech API (så att användaren inte behöver titta på skärmen) och sätt lämpliga pauser i uppläsningen utifrån antalet repetitioner och hur lång tid en repetition uppskattas ta.

- **Recept:** En applikation som låter användaren sätta ihop en flerrättersmiddag (exempelvis förrätt, huvudrätt, efterrätt) utifrån en fördefinierad uppsättning recept. Användaren kan se en sammanfattning av exempelvis det totala näringsvärdet av middagen eller en sammanslagen inköpslista på ingredienserna i recepten.
    - **VG-funktionalitet:** Rita upp ett enkelt diagram med SVG eller Canvas som visar receptens näringsvärde på lämpligt sätt.

- **Sightseeing**: En applikation som låter användaren sätta ihop en lista över turistattraktioner som de vill besöka, utifrån en fördefinierad uppsättning. Användaren kan se en sammanfattning av exempelvis den totala inträdesavgiften och attraktionernas öppettider.
    - **VG-funktionalitet:** Hämta användarens position med Geolocation för att sedan visa upp enbart attraktionerna inom ett angivet avstånd och/eller sortera på avstånd (fågelvägen), även när användaren byter position. *Observera att Geolocation bara fungerar helt korrekt om ni använder en enhet med GPS, dvs. vanligtvis er mobil men inte er laptop/desktop.*

- **Budget:** En applikation som låter användaren mata in utgifter och ange belopp, datum och kategori på dem. Användaren kan se en sammanfattning av exempelvis totala utgifter per månad, per kategori, etc.
    - **VG-funktionalitet:** Rita upp ett enkelt diagram med SVG eller Canvas som visar användarens utgifter per månad.

## Samarbete
Denna inlämningsuppgift ska utföras och lämnas in i par, dock med en individuell del i form av dokumentationen.

## Betygsättning
Möjliga betyg: VG, G och IG.

Betygsättningen är en helhetsbedömning utifrån dels hur väl er applikation uppfyller kraven och dels hur välskriven, välstrukturerad och väldokumenterad er kod är.

## Inlämning
Ni ska lämna in vid två separata tillfällen:

### Före arbetet: koncept
1. Gå med i en [projektgrupp](https://yh.pingpong.se/courseId/14519/projectGroupsList.do) i PingPong.
2. Lämna in en kommentar [via PingPong](https://yh.pingpong.se/courseId/14519/content.do?id=6500920) som kort beskriver ert koncept för applikationen. Om ni siktar på VG, beskriv också ert koncept för VG-delen.

### Efter arbetet: kod och dokumentation
1. Formatera och indentera er kod (HTML, CSS, JavaScript) på ett korrekt sätt, exempelvis med kommandot `Format Document` (`Shift+Alt+F`) i Visual Studio Code.
    - Om koden inte är korrekt formaterad och indenterad så kommer jag att be om komplettering utan att bedöma resten av er inlämning.
2. Lämna in följande **gemensamt** [via PingPong](https://yh.pingpong.se/courseId/14519/content.do?id=6500925):
    1. Länk till applikationen på GitHub Pages, som en kommentar i PingPong (som tidigare).
    2. ZIP-arkiv med samtliga filer (som tidigare).
        - Kom ihåg Selenium-testerna. Lägg med enbart `.cs`-filen som innehåller testerna, inte hela Visual Studio-projektet.
        - Om ni använder er av TypeScript eller funktionalitet i Vue som kräver kompilering (exempelvis [single file components](https://v3.vuejs.org/guide/single-file-component.html)) så måste ni lämna in både källkoden **och** den kompilerade koden så att jag kan öppna er applikation direkt utan att använda mig av Node.js eller andra verktyg.
3. Lämna in följande **individuellt** [via PingPong](https://yh.pingpong.se/courseId/14519/content.do?id=6500930):
    1. PDF-dokument med er individuella dokumentation.
