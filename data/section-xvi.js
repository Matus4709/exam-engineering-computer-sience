window.EXAM_SECTIONS = window.EXAM_SECTIONS || [];

window.EXAM_SECTIONS.push({
  id: "xvi-architektura",
  title: "XVI. Architektura systemów komputerowych (kierunkowe)",
  tags: ["von Neumann", "Harvard", "RISC/CISC", "magistrale"],
  qas: [
    {
      q: "1) Różnice między architekturą Princeton (von Neumanna) a Harwardzką.",
      open: true,
      aHtml: `
        <ul>
          <li><b>Princeton (von Neumann)</b>: wspólna pamięć i magistrala dla danych oraz instrukcji — prostsza, ale wąskie gardło magistrali.</li>
          <li><b>Harvard</b>: osobne pamięci/magistrale dla danych i instrukcji — możliwy równoległy dostęp, częste w MCU/DSP.</li>
          <li><b>Hybrydy</b>: wiele CPU ma np. oddzielne cache instrukcji i danych (I/D) — „zmodyfikowany Harvard”.</li>
        </ul>
        <p><b>Co warto dopowiedzieć</b></p>
        <ul>
          <li><b>Von Neumann bottleneck</b>: instrukcje i dane konkurują o ten sam kanał dostępu.</li>
          <li><b>Harvard</b>: łatwiej równolegle pobierać instrukcje i dane (np. w potokach), ale architektura jest bardziej złożona.</li>
        </ul>
      `,
    },
    {
      q: "2) Wymień i opisz przeznaczenie min. 4 rodzaje rejestrów widzianych przez programistę.",
      aHtml: `
        <ul>
          <li><b>GPR</b>: rejestry ogólnego przeznaczenia (operacje arytmetyczne, adresowanie).</li>
          <li><b>PC/IP</b>: licznik rozkazów (adres następnej instrukcji).</li>
          <li><b>SP</b>: wskaźnik stosu (ramki wywołań, lokalne dane).</li>
          <li><b>FLAGS</b>: rejestr flag (wyniki porównań, warunki skoków).</li>
          <li>(opcjonalnie) <b>segmentowe</b>, <b>wektorowe</b> (SSE/AVX) zależnie od architektury.</li>
        </ul>
        <p><b>Tip</b>: przy każdym rejestrze podaj 1 zastosowanie (np. SP w CALL/RET, FLAGS w skokach).</p>
      `,
    },
    {
      q: "3) Architektura RISC i CISC.",
      aHtml: `
        <ul>
          <li><b>RISC</b>: prostsze instrukcje, często stała długość, model load/store; łatwiejsze potokowanie.</li>
          <li><b>CISC</b>: bogatszy zestaw instrukcji, zmienna długość, często mikroprogramowanie.</li>
          <li><b>W praktyce</b>: granice się zacierają (np. x86 dekoduje do mikrooperacji).</li>
        </ul>
        <p><b>Co warto dopowiedzieć</b></p>
        <ul>
          <li><b>RISC</b>: więcej instrukcji w programie, ale prostszy hardware i lepsze potokowanie.</li>
          <li><b>CISC</b>: mniej instrukcji źródłowych, ale bardziej złożony dekoder i mikrokod.</li>
        </ul>
      `,
    },
    {
      q: "4) Składowe magistrali systemowej i ich rola.",
      aHtml: `
        <ul>
          <li><b>Magistrala adresowa</b>: niesie adres komórki pamięci/urządzenia.</li>
          <li><b>Magistrala danych</b>: przenosi dane.</li>
          <li><b>Magistrala sterująca</b>: sygnały sterujące (R/W, zegar, przerwania, potwierdzenia).</li>
        </ul>
        <p><b>Dodatkowo</b></p>
        <ul>
          <li>Szerokość magistrali danych wpływa na ilość danych na cykl.</li>
          <li>Protokół magistrali określa arbitraż i potwierdzenia (ready/ack).</li>
        </ul>
      `,
    },
  ],
});

