window.EXAM_SECTIONS = window.EXAM_SECTIONS || [];

window.EXAM_SECTIONS.push({
  id: "ii-bazy",
  title: "II. Bazy danych (kierunkowe)",
  tags: ["SQL", "PL/SQL", "DDL", "integralność"],
  qas: [
    {
      q: "1. Mając dany schemat bazy napisz zapytanie w PL-SQL wydobywające określone informacje.",
      open: true,
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>Jeśli da się — piszę <b>czysty SQL</b>. <b>PL/SQL</b> dodaję, gdy potrzebuję logiki, parametrów, pętli, wyjątków lub zwracania wyniku proceduralnie.</li>
          <li><b>1 wiersz</b>: <code>SELECT ... INTO ...</code> (+ obsługa wyjątków).</li>
          <li><b>Wiele wierszy</b>: <code>FOR r IN (SELECT...)</code> albo kursor.</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <p><b>Na ustnym</b> pokaż, że odróżniasz: czysty SQL (SELECT) vs PL/SQL (logika wokół SQL) i umiesz dobrać narzędzie do rodzaju wyniku.</p>
        <ul>
          <li><b>Jeśli wynik = 1 wiersz</b>: użyj <code>SELECT ... INTO ...</code> + obsłuż <code>NO_DATA_FOUND</code> i <code>TOO_MANY_ROWS</code>.</li>
          <li><b>Jeśli wynik = wiele wierszy</b>: pętla <code>FOR r IN (SELECT ...)</code> albo kursor jawny.</li>
          <li><b>Jeśli parametr wejściowy</b>: w procedurze/funkcji (np. <code>p_id</code>) i filtr w WHERE.</li>
          <li><b>Wydajność</b>: filtruj jak najwcześniej, unikaj N+1, korzystaj z JOIN zamiast wielu zapytań w pętli (o ile się da).</li>
        </ul>
        <p><b>Najczęstsze elementy zapytań (które lubią „dopytać”)</b></p>
        <ul>
          <li><b>JOIN</b>: INNER vs LEFT (kiedy zachowujesz wiersze z lewej tabeli).</li>
          <li><b>Agregacje</b>: COUNT/SUM/AVG, <code>GROUP BY</code>, <code>HAVING</code> (filtr po agregacji).</li>
          <li><b>Podzapytania</b> i CTE (<code>WITH</code>), okna (<code>OVER(PARTITION BY ...)</code>).</li>
          <li><b>Sortowanie i stronicowanie</b>: ORDER BY, FETCH/LIMIT (zależnie od systemu).</li>
        </ul>
        <div class="callout"><b>Checklist</b>: JOIN/LEFT JOIN, GROUP BY/HAVING, agregaty, ORDER BY, LIMIT/FETCH + wyjątki w PL/SQL.</div>

        <p><b>Pułapki / dopytania</b></p>
        <ul>
          <li>Różnica <b>WHERE</b> vs <b>HAVING</b>.</li>
          <li>Co się stanie, gdy <code>SELECT INTO</code> zwróci 0 wierszy lub 2+ wierszy?</li>
          <li>Kiedy <b>LEFT JOIN</b> jest potrzebny, a kiedy wystarczy INNER JOIN?</li>
        </ul>
      `,
    },
    {
      q: "2. Jak procedura, wyzwalacz, perspektywa, sekwencja i uprawnienia zapewniają bezpieczny dostęp do danych?",
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>Użytkownikom daję <b>EXECUTE</b> na procedury, a nie bezpośredni DML na tabelach.</li>
          <li><b>View</b> ogranicza kolumny/wiersze, <b>trigger</b> daje audyt/walidacje, <b>sequence</b> generuje PK.</li>
          <li><b>GRANT/ROLE</b>: least privilege.</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <p><b>Cel</b>: ograniczyć bezpośredni dostęp do tabel, egzekwować reguły i mieć audyt.</p>
        <ul>
          <li><b>Procedura/Funkcja</b>: kapsułkuje logikę, waliduje dane, pozwala dać użytkownikowi tylko <code>EXECUTE</code> zamiast DML na tabelach.</li>
          <li><b>Trigger</b>: audyt (kto/co/kiedy), walidacje biznesowe trudne dla CHECK; uwaga na ukrytą logikę i koszt.</li>
          <li><b>View</b>: ogranicza kolumny/wiersze (np. tylko dane własnego działu); opcjonalnie <code>WITH CHECK OPTION</code>.</li>
          <li><b>Sequence</b>: bezpieczne generowanie kluczy (unikalność przy współbieżności).</li>
          <li><b>Uprawnienia/Role</b>: zasada najmniejszych uprawnień (least privilege), role dla grup, REVOKE, separacja kont.</li>
        </ul>
        <p><b>Praktyczny scenariusz</b> (częsty na egzaminie)</p>
        <ul>
          <li>Tworzysz <b>view</b> z danymi bez wrażliwych kolumn, a do modyfikacji dajesz procedury.</li>
          <li>Do PK używasz <b>sekwencji</b> (albo identity), a trigger/procedura przypisuje ID.</li>
          <li>Na zmianach trzymasz <b>audyt</b> (trigger INSERT/UPDATE/DELETE do tabeli logów).</li>
        </ul>
        <div class="callout"><b>Typowe dopytanie</b>: SQL injection i obrona — parametryzacja, whitelisting, ograniczenie dynamicznego SQL, minimalne uprawnienia.</div>

        <p><b>Pułapki / dopytania</b></p>
        <ul>
          <li>Dlaczego trigger bywa problematyczny w utrzymaniu? (ukryta logika, wydajność, debugowanie).</li>
          <li>Kiedy <code>WITH CHECK OPTION</code> na view ma znaczenie?</li>
          <li>Dlaczego konto aplikacyjne nie powinno mieć uprawnień DBA?</li>
        </ul>
      `,
    },
    {
      q: "3. Dla schematu bazy zdefiniuj związki gwarantujące integralność edytowanych danych.",
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>Integralność zapewniam przez <b>PK/FK/UNIQUE/NOT NULL/CHECK</b> oraz sensowne akcje <b>ON DELETE</b>.</li>
          <li>Dobór <code>RESTRICT</code>/<code>CASCADE</code>/<code>SET NULL</code> zależy od semantyki relacji.</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <p><b>Integralność</b> to gwarancja, że nie da się wprowadzić „bezsensownych” danych (w sensie modelu).</p>
        <ul>
          <li><b>PRIMARY KEY</b>: jednoznaczna identyfikacja wiersza.</li>
          <li><b>FOREIGN KEY</b>: integralność referencyjna; dobierz akcje <code>ON DELETE</code> (RESTRICT/CASCADE/SET NULL).</li>
          <li><b>UNIQUE</b>: unikalność atrybutów (np. email, nr dokumentu).</li>
          <li><b>NOT NULL</b>: wymagane pola.</li>
          <li><b>CHECK</b>: reguły domenowe (zakres, enum).</li>
          <li><b>Indeksy</b>: wspierają FK i typowe zapytania (nie są constraintem, ale wpływają na praktyczną „funkcjonalność”).</li>
        </ul>
        <p><b>Dobór akcji referencyjnych (intuicja)</b></p>
        <ul>
          <li><b>RESTRICT/NO ACTION</b>: gdy „dzieci” nie mogą istnieć bez „rodzica” i usuwanie ma być świadome.</li>
          <li><b>CASCADE</b>: gdy dane podrzędne nie mają sensu bez nadrzędnych (np. pozycje zamówienia).</li>
          <li><b>SET NULL</b>: gdy relacja jest opcjonalna (np. wpis może nie mieć przypisanego opiekuna).</li>
        </ul>
        <div class="callout"><b>Pułapka</b>: CASCADE jest wygodne, ale może usunąć „za dużo”, jeśli model jest nieprzemyślany.</div>

        <p><b>Pułapki / dopytania</b></p>
        <ul>
          <li>Integralność encji vs referencyjna vs domen — krótko rozróżnij.</li>
          <li>Kiedy klucz naturalny, a kiedy sztuczny (ID)?</li>
          <li>Czy indeks „zapewnia integralność”? (nie; wspiera wydajność i wymuszanie UNIQUE/FK w praktyce).</li>
        </ul>
      `,
    },
    {
      q: "4. DDL: odwzoruj w modelu relacyjnym podany system rzeczywisty (np. sieć drogową, działki, hierarchię służbową).",
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>Encje → tabele, relacje → FK, N:M → tabela pośrednia, 1:1 → FK+UNIQUE.</li>
          <li>Dodaję constraints (PK/FK/UNIQUE/NOT NULL/CHECK) i indeksy pod typowe zapytania.</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <p><b>Najważniejsze</b>: umieć rozpoznać kardynalności (1:1, 1:N, N:M) i przełożyć je na FK/tabele pośrednie.</p>
        <ul>
          <li><b>Krok 1</b>: identyfikuj encje (tabele) i atrybuty (kolumny).</li>
          <li><b>Krok 2</b>: wybierz klucze: naturalny vs sztuczny (ID z sekwencji/identity).</li>
          <li><b>Krok 3</b>: relacje: 1:N = FK, N:M = tabela pośrednia, 1:1 = FK + UNIQUE.</li>
          <li><b>Krok 4</b>: constraints (PK/FK/UNIQUE/NOT NULL/CHECK).</li>
          <li><b>Krok 5</b>: indeksy pod zapytania (np. po nazwie, dacie, FK).</li>
        </ul>
        <p><b>Typowe przykłady mapowania</b></p>
        <ul>
          <li><b>N:M</b>: „Droga–Skrzyżowanie” → tabela łącząca z dwoma FK + atrybuty (np. kilometraż).</li>
          <li><b>Hierarchia</b>: pracownik ma przełożonego → FK do tej samej tabeli (self-reference).</li>
          <li><b>Dziedziczenie</b>: warianty: jedna tabela z typem, albo tabela bazowa + tabele podrzędne (zależnie od wymagań).</li>
        </ul>
        <div class="callout"><b>Przykład myślenia</b>: hierarchia służbowa = tabela PRACOWNIK z FK <code>manager_id</code> do PRACOWNIK(emp_id).</div>

        <p><b>Pułapki / dopytania</b></p>
        <ul>
          <li>Jak modelować dziedziczenie? (single table vs joined tables vs table-per-type).</li>
          <li>Jakie indeksy są kluczowe? (FK, kolumny filtrów, UNIQUE).</li>
          <li>Gdzie kończy się normalizacja, a zaczyna denormalizacja (wydajność)?</li>
        </ul>
      `,
    },
  ],
});

