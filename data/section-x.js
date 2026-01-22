window.EXAM_SECTIONS = window.EXAM_SECTIONS || [];

window.EXAM_SECTIONS.push({
  id: "x-elektronika",
  title: "X. Elektrotechnika i elektronika (kierunkowe)",
  tags: ["AC", "pomiary", "op-amp", "logika"],
  qas: [
    {
      q: "1. Zależności: napięcie międzyszczytowe, skuteczne, amplituda; okres i częstotliwość.",
      open: true,
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>Upp = 2·Umax, Urms = Umax/√2, f = 1/T.</li>
          <li>Skuteczne to takie DC, które daje tę samą moc na rezystorze.</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <ul>
          <li><b>Sinusoida</b>: Upp = 2·Umax.</li>
          <li><b>Wartość skuteczna</b>: Urms = Umax/√2 = Upp/(2√2).</li>
          <li><b>Okres i częstotliwość</b>: f = 1/T, T = 1/f.</li>
        </ul>
        <p><b>Rozwinięcie</b></p>
        <ul>
          <li><b>Umax</b> to amplituda (wartość szczytowa).</li>
          <li><b>Upp</b> (peak-to-peak) to różnica między maksimum a minimum.</li>
          <li><b>Urms</b> jest ważne dla mocy: dla rezystora P = Urms² / R.</li>
        </ul>
        <div class="callout"><b>Dopytanie</b>: co oznacza „skuteczne”? — takie DC dałoby to samo wydzielanie mocy w rezystorze.</div>

        <p><b>Pułapki / dopytania</b></p>
        <ul>
          <li>Różnica amplituda vs międzyszczytowe.</li>
          <li>Jak przeliczyć częstotliwość na okres i odwrotnie.</li>
        </ul>
      `,
    },
    {
      q: "2. Zasilacz stabilizowany: schemat blokowy i charakterystyka składowych.",
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>Bloki: transformator → prostownik → filtr → stabilizator → obciążenie.</li>
          <li>Liniowy: prosty, ale grzeje się; impulsowy: sprawny, ale bardziej złożony.</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <ul>
          <li><b>Bloki</b>: transformator → prostownik (mostek) → filtr (C/LC) → stabilizator → obciążenie.</li>
          <li><b>Transformator</b>: obniża napięcie i izoluje galwanicznie.</li>
          <li><b>Prostownik</b>: AC→DC; mostek Graetza.</li>
          <li><b>Filtr</b>: redukcja tętnień (kondensator/LC).</li>
          <li><b>Stabilizator</b>: liniowy (prostota, straty ciepła) lub impulsowy (wysoka sprawność, złożoność).</li>
        </ul>
        <p><b>Typowe dopytania</b></p>
        <ul>
          <li><b>Tętnienia</b>: skąd się biorą i jak filtr je zmniejsza (C ładuje się do szczytu i rozładowuje między szczytami).</li>
          <li><b>Stabilizator liniowy</b>: różnica Vin-Vout zamieniana w ciepło; sprawność ~ Vout/Vin.</li>
          <li><b>Impulsowy</b>: przetwarzanie energii przez przełączanie; większa sprawność, ale EMI/szumy.</li>
        </ul>

        <p><b>Pułapki / dopytania</b></p>
        <ul>
          <li>Skąd biorą się tętnienia i jak je zmniejszyć?</li>
          <li>Różnice w sprawności stabilizatorów.</li>
        </ul>
      `,
    },
    {
      q: "3. Cechy idealnego woltomierza i amperomierza.",
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>Woltomierz idealny: Rin → ∞, amperomierz idealny: R → 0.</li>
          <li>Woltomierz łączysz równolegle, amperomierz szeregowo.</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <ul>
          <li><b>Woltomierz idealny</b>: rezystancja wejściowa → ∞ (nie obciąża obwodu).</li>
          <li><b>Amperomierz idealny</b>: rezystancja → 0 (nie wprowadza spadku napięcia).</li>
        </ul>
        <p><b>Jak podłączać</b></p>
        <ul>
          <li>Woltomierz <b>równolegle</b> do elementu, amperomierz <b>szeregowo</b> w obwodzie.</li>
          <li>Pułapka: podłączenie amperomierza równolegle może zrobić zwarcie.</li>
        </ul>
      `,
    },
    {
      q: "4. Opisz wybraną konfigurację wzmacniacza operacyjnego.",
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>Nieodwracający: Av = 1 + Rf/Rg, duża Rin, faza zachowana.</li>
          <li>Parametry praktyczne: pasmo, slew rate, saturacja.</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <ul>
          <li><b>Nieodwracający</b>: sygnał na wejście +, sprzężenie na -.</li>
          <li><b>Wzmocnienie</b>: Av = 1 + Rf/Rg.</li>
          <li><b>Parametry praktyczne</b>: pasmo, slew rate, napięcie offsetu, saturacja wyjścia.</li>
        </ul>
        <p><b>Co warto dopowiedzieć</b></p>
        <ul>
          <li><b>Sprzężenie zwrotne ujemne</b> stabilizuje wzmocnienie i liniaryzuje układ.</li>
          <li><b>Wzmacniacz idealny</b>: nieskończone wzmocnienie otwarte, nieskończona Rin, zerowa Rout (w praktyce ograniczenia).</li>
          <li><b>Slew rate</b>: maksymalna szybkość narastania wyjścia — ogranicza sygnały o dużej amplitudzie i częstotliwości.</li>
        </ul>
        <div class="callout"><b>Alternatywa do opowiedzenia</b>: odwracający (Av = -Rf/Rin) albo sumator/całkujący.</div>

        <p><b>Pułapki / dopytania</b></p>
        <ul>
          <li>Wpływ slew rate na zniekształcenia sygnału.</li>
          <li>Rola sprzężenia zwrotnego ujemnego.</li>
        </ul>
      `,
    },
    {
      q: "5. Bramki logiczne i wyznaczanie tabel prawdy układów logicznych.",
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>Bramki: NOT, AND, OR, XOR, NAND, NOR, XNOR.</li>
          <li>Tabela prawdy ma 2^n wierszy dla n wejść.</li>
          <li>NAND/NOR są funkcjonalnie pełne.</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <ul>
          <li><b>Bramki</b>: NOT, AND, OR, XOR, NAND, NOR, XNOR.</li>
          <li><b>Tabela prawdy</b>: dla n wejść — 2^n kombinacji; wyznaczasz wyjście dla każdej kombinacji.</li>
          <li><b>Uproszczenia</b>: prawa de Morgana, (opcjonalnie) mapy Karnaugha.</li>
        </ul>
        <p><b>Praktyczna rada</b></p>
        <ul>
          <li>Jeśli układ ma dużo bramek, licz krokowo: najpierw sygnały pośrednie, potem wynik.</li>
          <li>NAND/NOR są <b>funkcyjnie pełne</b> (da się z nich zbudować dowolną funkcję logiczną).</li>
        </ul>
      `,
    },
  ],
});

