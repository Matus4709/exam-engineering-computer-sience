window.EXAM_SECTIONS = window.EXAM_SECTIONS || [];

window.EXAM_SECTIONS.push({
  id: "v-io",
  title: "V. Inżynieria oprogramowania (kierunkowe)",
  tags: ["wymagania", "wzorce", "testy", "refaktoryzacja"],
  qas: [
    {
      q: "1. Specyfikacja wymagań, języki inżynierii oprogramowania.",
      open: true,
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>Wymagania funkcjonalne opisują „co”, niefunkcjonalne „jak dobrze”.</li>
          <li>Dobra specyfikacja jest jednoznaczna, testowalna i śledzalna.</li>
          <li>Notacje: UML, BPMN, user stories, use cases.</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <p><b>Specyfikacja wymagań</b> odpowiada na pytania: co system ma robić, dla kogo i w jakich ograniczeniach.</p>
        <ul>
          <li><b>Wymagania funkcjonalne</b>: funkcje/akcje systemu (np. „użytkownik może zresetować hasło”).</li>
          <li><b>Wymagania niefunkcjonalne</b>: jakość i ograniczenia (wydajność, bezpieczeństwo, dostępność, UX, zgodność, skalowalność).</li>
          <li><b>Jakość specyfikacji</b>: jednoznaczna, kompletna, spójna, testowalna, śledzalna (traceability), z priorytetami.</li>
        </ul>
        <p><b>Techniki pozyskiwania i zapisu</b></p>
        <ul>
          <li><b>User stories</b> + kryteria akceptacji (Given/When/Then).</li>
          <li><b>Use case</b>: aktorzy, scenariusz główny, alternatywy, wyjątki.</li>
          <li><b>Prototypy</b>: szybka weryfikacja UX i przepływów.</li>
          <li><b>Priorytetyzacja</b>: MoSCoW, WSJF (w zależności od metodyki).</li>
        </ul>
        <p><b>Notacje / języki IO</b></p>
        <ul>
          <li><b>UML</b>: use case, klasy, sekwencje, stany.</li>
          <li><b>BPMN</b>: procesy biznesowe.</li>
          <li><b>Formalne</b>: gdy potrzeba dowodów własności (systemy krytyczne).</li>
        </ul>
        <div class="callout"><b>Na ustnym działa</b>: pokaż 1 wymaganie SMART, np. „95 percentyl czasu odpowiedzi &lt; 200 ms dla /api/search przy 200 RPS”.</div>

        <p><b>Pułapki / dopytania</b></p>
        <ul>
          <li>Przykład złego wymagania (niemierzalne, niejednoznaczne).</li>
          <li>Różnica wymaganie vs user story vs use case.</li>
        </ul>
      `,
    },
    {
      q: "2. Metody formalne, wzorce projektowe.",
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>Metody formalne to matematyczna specyfikacja i weryfikacja własności systemu.</li>
          <li>Wzorce GoF: kreacyjne, strukturalne, behawioralne.</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <p><b>Metody formalne</b></p>
        <ul>
          <li><b>Cel</b>: matematyczny opis systemu + dowód/automatyczna weryfikacja własności (np. bezpieczeństwo, brak deadlocka, spełnienie reguł).</li>
          <li><b>Przykłady narzędzi</b>: logiki, automaty, model checking, inwarianty, kontrakty.</li>
          <li><b>Kiedy</b>: systemy krytyczne lub protokoły, gdzie błąd jest bardzo drogi.</li>
        </ul>
        <p><b>Wzorce projektowe</b></p>
        <ul>
          <li><b>Klasyfikacja GoF</b>: kreacyjne, strukturalne, behawioralne.</li>
          <li><b>Po co</b>: wspólny język zespołu, mniej „ad-hoc” architektury, lepsza utrzymywalność i testowalność.</li>
          <li><b>Pułapka</b>: „pattern mania” — wzorzec ma rozwiązywać problem, nie być celem samym w sobie.</li>
        </ul>
        <div class="callout"><b>Przykład do opowiedzenia</b>: Strategia — wiele algorytmów pod wspólnym interfejsem; zalety: OCP i testowalność.</div>

        <p><b>Pułapki / dopytania</b></p>
        <ul>
          <li>Kiedy metody formalne są opłacalne, a kiedy zbyt drogie?</li>
          <li>Przykład wzorca i jego minusy (np. Singleton — testowalność).</li>
        </ul>
      `,
    },
    {
      q: "3. Testowanie oprogramowania.",
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>Poziomy: unit → integracyjne → systemowe → akceptacyjne; E2E na końcu.</li>
          <li>Rodzaje: funkcjonalne, regresyjne, wydajnościowe, bezpieczeństwa.</li>
          <li>Piramida testów i automatyzacja w CI.</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <p><b>Cel</b>: wykryć defekty wcześnie i ograniczyć ryzyko regresji.</p>
        <ul>
          <li><b>Poziomy</b>: unit → integracyjne → systemowe → akceptacyjne; dodatkowo E2E.</li>
          <li><b>Rodzaje</b>: funkcjonalne, regresyjne, wydajnościowe (load/stress), bezpieczeństwa (SAST/DAST), użyteczności.</li>
          <li><b>Techniki</b>: testy parametrów i brzegów, klasy równoważności, testy ścieżek (white-box).</li>
          <li><b>Mock/stub</b>: izolacja zależności, deterministyczność (np. baza, HTTP).</li>
          <li><b>Piramida testów</b>: dużo szybkich unit, mniej integracyjnych, najmniej E2E.</li>
        </ul>
        <p><b>Pokrycie i jakość</b></p>
        <ul>
          <li><b>Coverage</b> jest wskaźnikiem, ale nie gwarantuje jakości — ważniejsze są przypadki brzegowe i scenariusze krytyczne.</li>
          <li><b>Flaky tests</b>: testy niestabilne niszczą zaufanie — trzeba je eliminować.</li>
        </ul>
        <div class="callout"><b>Typowe dopytanie</b>: black-box vs white-box + przykład (np. test API vs test konkretnej gałęzi if w funkcji).</div>

        <p><b>Pułapki / dopytania</b></p>
        <ul>
          <li>Czym jest „flaky test” i czemu jest groźny?</li>
          <li>Coverage 100% nie oznacza braku błędów — dlaczego?</li>
        </ul>
      `,
    },
    {
      q: "4. Ewolucja oprogramowania i refaktoryzacja.",
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>Ewolucja = zmiany wymagań, skali i środowiska.</li>
          <li>Refaktoryzacja to poprawa struktury bez zmiany zachowania.</li>
          <li>Dług techniczny rośnie, gdy odkładasz porządkowanie.</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <ul>
          <li><b>Ewolucja</b>: zmiany w czasie przez wymagania, skalę, bezpieczeństwo, zależności i dług technologiczny.</li>
          <li><b>Dług techniczny</b>: „odsetki” płacone przy każdej zmianie, jeśli kod/architektura są zaniedbane.</li>
          <li><b>Refaktoryzacja</b>: poprawa struktury bez zmiany zachowania (extract method/class, rename, uproszczenie warunków, usuwanie duplikacji).</li>
          <li><b>Bezpiecznie</b>: małe kroki, testy regresyjne, code review, metryki (np. cyklomatyka) jako sygnał.</li>
        </ul>
        <p><b>Typowe sytuacje refaktoryzacji</b></p>
        <ul>
          <li>przed dodaniem nowej funkcji (żeby nie doklejać do „spaghetti”),</li>
          <li>po znalezieniu powtarzalnego kodu,</li>
          <li>przy trudnych testach (brak DI, ukryte zależności).</li>
        </ul>
        <div class="callout"><b>Haczyk</b>: refaktoryzacja ≠ optymalizacja; optymalizujesz dopiero po pomiarach (profilowaniu).</div>

        <p><b>Pułapki / dopytania</b></p>
        <ul>
          <li>Jak odróżnić refaktoryzację od „przepisywania” (rewrite)?</li>
          <li>Jak zabezpieczyć refaktor w projekcie bez testów?</li>
        </ul>
      `,
    },
  ],
});

