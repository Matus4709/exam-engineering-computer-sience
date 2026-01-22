window.EXAM_SECTIONS = window.EXAM_SECTIONS || [];

window.EXAM_SECTIONS.push({
  id: "xi-matematyka",
  title: "XI. Matematyczne podstawy w informatyce (kierunkowe)",
  tags: ["logika", "IEEE 754", "grafy"],
  qas: [
    {
      q: "1. Funktory zdaniotwórcze i prawa rachunku zdań.",
      open: true,
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>Spójniki: ¬, ∧, ∨, →, ↔.</li>
          <li>Prawa: de Morgana, łączność, przemienność, rozdzielność, absorpcja.</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <ul>
          <li><b>Spójniki</b>: ¬ (negacja), ∧ (koniunkcja), ∨ (alternatywa), → (implikacja), ↔ (równoważność).</li>
          <li><b>Prawa</b>: de Morgana, łączność, przemienność, rozdzielność, absorpcja, podwójna negacja.</li>
          <li><b>Narzędzia</b>: tablica prawdy, sprowadzanie do CNF/DNF, wnioskowanie.</li>
        </ul>
        <p><b>Warto pamiętać (krótkie „haczyki”)</b></p>
        <ul>
          <li><b>Implikacja</b> A→B jest fałszywa tylko gdy A=true i B=false; w pozostałych przypadkach prawdziwa.</li>
          <li><b>Równoważność</b> A↔B to (A→B) ∧ (B→A).</li>
          <li><b>de Morgana</b>: ¬(A∧B)=¬A∨¬B oraz ¬(A∨B)=¬A∧¬B.</li>
        </ul>
        <div class="callout"><b>Dopytanie</b>: kontrapozycja (A→B równoważne ¬B→¬A) i pułapki implikacji.</div>

        <p><b>Pułapki / dopytania</b></p>
        <ul>
          <li>Implikacja materialna — kiedy jest fałszywa?</li>
          <li>Jak zbudować tablicę prawdy dla 3 zmiennych?</li>
        </ul>
      `,
    },
    {
      q: "2. Arytmetyka zmiennoprzecinkowa, standard IEEE 754.",
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>IEEE 754: znak + wykładnik + mantysa; są wartości specjalne (NaN, ±∞).</li>
          <li>Operacje nie są łączne; porównania wymagają tolerancji.</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <ul>
          <li><b>Reprezentacja</b>: znak + wykładnik + mantysa (ułamek), postać znormalizowana.</li>
          <li><b>Wartości specjalne</b>: +0/-0, +∞/-∞, NaN, subnormale.</li>
          <li><b>Błędy</b>: zaokrąglenia, utrata cyfr znaczących, niełączność dodawania.</li>
          <li><b>Pułapka praktyczna</b>: nie porównuj float przez == bez tolerancji (epsilon).</li>
        </ul>
        <p><b>Typowe konsekwencje w programowaniu</b></p>
        <ul>
          <li><b>0.1</b> zwykle nie jest reprezentowalne dokładnie w binarnym float → pojawiają się błędy.</li>
          <li><b>Katastrofalne odejmowanie</b>: odejmowanie prawie równych liczb traci precyzję.</li>
          <li><b>NaN</b>: porównania z NaN są „dziwne” (NaN != NaN).</li>
        </ul>

        <p><b>Pułapki / dopytania</b></p>
        <ul>
          <li>Dlaczego 0.1 + 0.2 != 0.3 w double?</li>
          <li>Co to są liczby zdenormalizowane (subnormale)?</li>
        </ul>
      `,
    },
    {
      q: "3. Funkcje: operacje na funkcjach, podstawowe własności.",
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>Pojęcia: dziedzina, przeciwdziedzina, iniekcja/surjekcja/bijekcja.</li>
          <li>Operacje: składanie, ograniczenie dziedziny, funkcja odwrotna.</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <ul>
          <li><b>Pojęcia</b>: dziedzina, przeciwdziedzina, obraz, iniekcja/surjekcja/bijekcja, funkcja odwrotna.</li>
          <li><b>Operacje</b>: składanie (f∘g), ograniczenie do podzbioru dziedziny, funkcje wieloargumentowe.</li>
        </ul>
        <p><b>Krótko o własnościach</b></p>
        <ul>
          <li><b>Iniekcja</b>: różne argumenty → różne wartości.</li>
          <li><b>Surjekcja</b>: każdy element przeciwdziedziny ma preobraz.</li>
          <li><b>Bijekcja</b>: iniekcja + surjekcja → istnieje funkcja odwrotna.</li>
        </ul>
      `,
    },
    {
      q: "4. Grafy i drzewa: pojęcia, cykle Eulera i Hamiltona.",
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>Drzewo: graf spójny bez cykli (n−1 krawędzi).</li>
          <li>Euler: każda krawędź raz; Hamilton: każdy wierzchołek raz.</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <ul>
          <li><b>Graf</b>: wierzchołki V i krawędzie E; skierowany/nieskierowany; ważony.</li>
          <li><b>Drzewo</b>: graf spójny bez cykli; dla n wierzchołków ma n−1 krawędzi.</li>
          <li><b>Euler</b>: cykl przechodzący każdą krawędź dokładnie raz; (nieskierowany) istnieje gdy wszystkie stopnie są parzyste.</li>
          <li><b>Hamilton</b>: cykl przechodzący każdy wierzchołek raz; brak prostego kryterium, problem trudny obliczeniowo.</li>
        </ul>
        <p><b>Dodatkowe fakty</b></p>
        <ul>
          <li><b>Ścieżka Eulera</b> (nie cykl): istnieje, gdy dokładnie dwa wierzchołki mają nieparzysty stopień.</li>
          <li><b>Dlaczego Hamilton trudny</b>: brak lokalnego kryterium jak przy Eulerze; problem NP‑zupełny w ogólności.</li>
        </ul>

        <p><b>Pułapki / dopytania</b></p>
        <ul>
          <li>Warunek istnienia ścieżki Eulera vs cyklu Eulera.</li>
          <li>Dlaczego problem Hamiltona jest trudny obliczeniowo?</li>
        </ul>
      `,
    },
  ],
});

