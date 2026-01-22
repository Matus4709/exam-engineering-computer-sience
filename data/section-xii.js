window.EXAM_SECTIONS = window.EXAM_SECTIONS || [];

window.EXAM_SECTIONS.push({
  id: "xii-zaawansowane",
  title: "XII. Programowanie zaawansowane (kierunkowe)",
  tags: ["wzorce", "kontenery", "Git", "UML"],
  qas: [
    {
      q: "1. Wzorce projektowe: definicja, klasyfikacja. Omów jeden wybrany wzorzec.",
      open: true,
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>Wzorzec to sprawdzone rozwiązanie problemu projektowego (nie gotowy kod).</li>
          <li>GoF: kreacyjne, strukturalne, behawioralne.</li>
          <li>Przykład: Factory Method — ukrywa tworzenie obiektów.</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <ul>
          <li><b>Wzorzec</b>: sprawdzone, opisane rozwiązanie typowego problemu projektowego (nie gotowy kod, tylko szablon).</li>
          <li><b>Klasyfikacja GoF</b>: kreacyjne, strukturalne, behawioralne.</li>
          <li><b>Przykład: Factory Method</b>: tworzenie obiektów delegujesz do metody fabrykującej; klient nie zna konkretnych klas.</li>
          <li><b>Zalety</b>: luźne powiązania, łatwiejsza rozbudowa; <b>Wada</b>: więcej klas/abstrakcji.</li>
        </ul>
        <p><b>Jak ładnie omówić wzorzec (szablon wypowiedzi)</b></p>
        <ul>
          <li><b>Problem</b>: co boli w kodzie bez wzorca?</li>
          <li><b>Rozwiązanie</b>: jakie klasy/interfejsy wprowadzasz i kto z kim rozmawia?</li>
          <li><b>Konsekwencje</b>: plusy/minusy (testowalność, zależności, złożoność).</li>
          <li><b>Przykład użycia</b>: 1 zdanie z realnego świata (np. parsery, sterowniki, różne implementacje repozytorium).</li>
        </ul>
        <div class="callout"><b>Tip na ustny</b>: powiedz „kiedy użyć” + „plus/minus” — to zwykle wystarcza.</div>

        <p><b>Pułapki / dopytania</b></p>
        <ul>
          <li>Przykład wzorca i jego wada (np. Singleton — testy).</li>
          <li>Wzorzec ≠ framework; to „nazwa” dla rozwiązania.</li>
        </ul>
      `,
    },
    {
      q: "2. Kontenery sekwencyjne, skojarzeniowe, haszujące. Przykłady kosztów O operacji.",
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>vector: szybki dostęp O(1), insert w środku O(n).</li>
          <li>map/set: O(log n); unordered_map: średnio O(1).</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <ul>
          <li><b>Sekwencyjne</b> (vector/list/deque):</li>
          <li class="muted"><b>vector</b>: dostęp indeks O(1), push_back amort. O(1), insert/erase w środku O(n).</li>
          <li class="muted"><b>list</b>: insert/erase przy iteratorze O(1), ale wyszukiwanie O(n).</li>
          <li><b>Skojarzeniowe</b> (map/set, zwykle drzewo): find/insert/erase O(log n).</li>
          <li><b>Haszujące</b> (unordered_map/set): średnio O(1), pesymistycznie O(n) przy złym hashu/kolizjach.</li>
        </ul>
        <p><b>Dobór kontenera (intuicje)</b></p>
        <ul>
          <li><b>vector</b>: najlepsza lokalność pamięci, szybkie iterowanie.</li>
          <li><b>list</b>: gdy naprawdę potrzebujesz częstych wstawek/usunięć w środku i masz iterator (w praktyce rzadziej wybierane).</li>
          <li><b>map</b>: gdy potrzebujesz porządku (range queries) i przewidywalnego O(log n).</li>
          <li><b>unordered_map</b>: gdy liczy się średnie O(1) i nie potrzebujesz sortowania po kluczu.</li>
        </ul>
        <div class="callout"><b>Dopytanie</b>: kiedy unordered_map jest gorsze od map? — gdy potrzebujesz porządku lub masz atak kolizyjny / słaby hash.</div>

        <p><b>Pułapki / dopytania</b></p>
        <ul>
          <li>Dlaczego list jest rzadko wybierany mimo O(1) wstawek?</li>
          <li>Wpływ rehash w unordered_map na wydajność.</li>
        </ul>
      `,
    },
    {
      q: "3. Zasada działania VCS. Centralny vs rozproszony. Zalety Git.",
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>VCS śledzi historię i umożliwia branch/merge.</li>
          <li>Centralny: jedno repo; rozproszony: każdy ma pełną historię (Git).</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <ul>
          <li><b>VCS</b>: śledzi historię zmian, umożliwia branch/merge, powrót do wersji, współpracę.</li>
          <li><b>Centralny</b> (np. SVN): jedno repo na serwerze; praca mocniej zależna od dostępu do serwera.</li>
          <li><b>Rozproszony</b> (Git): każdy ma pełną kopię historii; praca offline; szybkie operacje lokalne.</li>
          <li><b>Zalety Git</b>: lekkie gałęzie, dobre scalanie, integralność historii (hashe), ogromny ekosystem.</li>
        </ul>
        <p><b>Git — co często pytają</b></p>
        <ul>
          <li><b>Commit</b>: snapshot + metadane; hash identyfikuje zawartość.</li>
          <li><b>Branch</b>: wskaźnik na commit (tani i szybki).</li>
          <li><b>Merge vs rebase</b>: scalanie historii vs „przepisanie” historii lokalnie.</li>
        </ul>

        <p><b>Pułapki / dopytania</b></p>
        <ul>
          <li>Różnica merge vs rebase (i kiedy czego użyć).</li>
          <li>Dlaczego Git jest szybki? (operacje lokalne).</li>
        </ul>
      `,
    },
    {
      q: "4. Relacje: asocjacja, agregacja, dziedziczenie. Diagramy UML.",
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>Asocjacja = relacja, agregacja = część–całość, kompozycja = silna część–całość, dziedziczenie = „is‑a”.</li>
          <li>W UML pokazujesz krotności i kierunek relacji.</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <ul>
          <li><b>Asocjacja</b>: „zna/korzysta z” — zwykła relacja między klasami.</li>
          <li><b>Agregacja</b>: część–całość, ale część może istnieć niezależnie (pusty romb).</li>
          <li><b>Kompozycja</b>: silna część–całość, część nie istnieje bez całości (pełny romb).</li>
          <li><b>Dziedziczenie</b>: „jest rodzajem” (generalizacja, trójkąt).</li>
          <li><b>UML</b>: pokaż krotności (0..1, 1..*, *), kierunki i nazwy ról.</li>
        </ul>
        <p><b>Typowe dopytanie</b></p>
        <ul>
          <li>agregacja vs kompozycja: kto zarządza cyklem życia obiektu „części”?</li>
          <li>dziedziczenie vs kompozycja: kiedy lepiej „has-a” niż „is-a”?</li>
        </ul>
        <div class="callout"><b>Tip</b>: na egzaminie często wystarczy prosty przykład: Firma —(kompozycja)→ Działy; Pracownik —(asocjacja)→ Projekt.</div>

        <p><b>Pułapki / dopytania</b></p>
        <ul>
          <li>Kiedy lepsza kompozycja niż dziedziczenie?</li>
          <li>Jak oznaczyć krotności w UML?</li>
        </ul>
      `,
    },
  ],
});

