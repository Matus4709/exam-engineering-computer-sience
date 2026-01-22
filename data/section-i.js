/* global EXAM_SECTIONS */
window.EXAM_SECTIONS = window.EXAM_SECTIONS || [];

window.EXAM_SECTIONS.push({
  id: "i-algorytmy",
  title: "I. Algorytmy i struktury danych (kierunkowe)",
  tags: ["złożoność", "grafy", "teksty"],
  qas: [
    {
      q: "1. Podstawowe techniki algorytmiczne: dziel i zwyciężaj, zachłanna, programowanie dynamiczne.",
      open: true,
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li><b>Dziel i zwyciężaj</b>: dzielę na podproblemy, rozwiązuję rekurencyjnie i scalę; złożoność często z rekurencji T(n)=aT(n/b)+f(n).</li>
          <li><b>Zachłanna</b>: wybieram lokalnie najlepszy krok; poprawność wymaga dowodu własności zachłannego wyboru.</li>
          <li><b>DP</b>: zapamiętuję wyniki powtarzających się podproblemów; wykorzystuję optymalną podstrukturę.</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>

        <p><b>Dziel i zwyciężaj (Divide &amp; Conquer)</b></p>
        <ul>
          <li><b>Schemat</b>: podziel → rozwiąż rekurencyjnie → scal.</li>
          <li><b>Analiza</b>: rekurencje typu <code>T(n)=aT(n/b)+f(n)</code> (tw. Mastera).</li>
          <li><b>Przykłady</b>: mergesort, quicksort (partycjonowanie), wyszukiwanie binarne, FFT, Karatsuba.</li>
          <li><b>Plusy/minusy</b>: dobre złożoności, ale narzut rekurencji i koszty scalania/kopiowania.</li>
          <li><b>Typowe pytanie</b>: jak głęboki jest stos rekurencji i czy grozi przepełnienie?</li>
        </ul>

        <p><b>Metoda zachłanna (Greedy)</b></p>
        <ul>
          <li><b>Idea</b>: wybieraj lokalnie najlepszą decyzję „tu i teraz”.</li>
          <li><b>Kiedy działa</b>: gdy da się udowodnić <i>własność zachłannego wyboru</i> i <i>optymalną podstrukturę</i>.</li>
          <li><b>Przykłady</b>: Huffman, Kruskal/Prim (MST), dobór aktywności, Dijkstra (dla wag nieujemnych).</li>
          <li><b>Pułapka</b>: zachłanne nie zawsze daje optimum (np. plecak 0/1, ujemne wagi w Dijkstrze).</li>
          <li><b>Dowód poprawności</b>: zwykle przez wymianę (exchange argument) lub przez pokazanie, że pierwszy wybór należy do pewnego optimum.</li>
        </ul>

        <p><b>Programowanie dynamiczne (DP)</b></p>
        <ul>
          <li><b>Idea</b>: rozbij na podproblemy + <b>zapamiętaj</b> wyniki (memoizacja lub tabulacja).</li>
          <li><b>Warunki</b>: optymalna podstruktura + nakładające się podproblemy.</li>
          <li><b>Przepis</b>: zdefiniuj stan → przejścia → baza → kolejność liczenia → odpowiedź; złożoność = liczba stanów × koszt przejścia.</li>
          <li><b>Przykłady</b>: plecak 0/1, edit distance, LIS, Floyd–Warshall, DP na drzewach.</li>
          <li><b>Optymalizacje</b>: kompresja pamięci (rolling array), bitset, optymalizacje kolejkowe.</li>
          <li><b>Memo vs tabulacja</b>: memo = rekurencja z cache; tabulacja = iteracja od baz do odpowiedzi.</li>
        </ul>

        <div class="callout"><b>Typowe dopytanie</b>: DP vs D&amp;C — w DP te same podproblemy wracają, więc cache’ujesz; w D&amp;C zwykle podproblemy są rozłączne.</div>

        <p><b>Pułapki / dopytania egzaminatora</b></p>
        <ul>
          <li>Podaj przykład, gdzie zachłanne <b>nie</b> działa (plecak 0/1) i czemu DP działa.</li>
          <li>Jak policzyć złożoność D&amp;C? (rekurencja + tw. Mastera).</li>
          <li>W DP: jak dobrać stan i przejścia, żeby nie wyszło niepotrzebnie O(n³)?</li>
          <li>Różnica między „najkrótszą ścieżką” a „najlżejszą” przy różnych wagach.</li>
        </ul>
      `,
    },
    {
      q: "2. Sortowania: przez wstawianie, wybór, bąbelkowe, mergesort, heapsort, quicksort; złożoność.",
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li><b>O(n²)</b>: insertion (best O(n) dla prawie posortowanych), selection (zawsze O(n²)), bubble (głównie dydaktyczne).</li>
          <li><b>O(n log n)</b>: mergesort (zawsze, stabilny, zwykle O(n) pamięci), heapsort (zawsze, O(1) pamięci, niestabilny), quicksort (średnio O(n log n), worst O(n²)).</li>
          <li><b>Haczyk</b>: sortowania porównaniowe mają dolne ograniczenie Ω(n log n).</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <ul>
          <li><b>Insertion sort</b>: wstawia kolejny element w już posortowany prefiks.
            <ul>
              <li>Złożoność: best O(n) (prawie posortowane), avg/worst O(n²)</li>
              <li>Pamięć O(1), <b>stabilny</b>; dobry jako „dogrywka” w introsort/timsort dla małych n.</li>
            </ul>
          </li>
          <li><b>Selection sort</b>: wybiera minimum i zamienia na początek.
            <ul>
              <li>Zawsze O(n²), ale ma mało swapów; pamięć O(1); zwykle <b>niestabilny</b>.</li>
            </ul>
          </li>
          <li><b>Bubble sort</b>: zamiany sąsiadów, „wypycha” największe na koniec.
            <ul>
              <li>Avg/worst O(n²), best O(n) z flagą; pamięć O(1); stabilny.</li>
              <li>W praktyce rzadko używany poza nauką.</li>
            </ul>
          </li>
          <li><b>Mergesort</b>: dziel na pół i scal.
            <ul>
              <li>Zawsze O(n log n); zwykle pamięć O(n); <b>stabilny</b>.</li>
              <li>Świetny do sortowania na listach łączonych i do sortowań zewnętrznych (na dysku).</li>
            </ul>
          </li>
          <li><b>Heapsort</b>: kopiec max + wielokrotne zdejmowanie maksimum.
            <ul>
              <li>Zawsze O(n log n); pamięć O(1); <b>niestabilny</b>.</li>
              <li>Gorsza lokalność pamięci niż quicksort — często wolniejszy w praktyce.</li>
            </ul>
          </li>
          <li><b>Quicksort</b>: pivot + partycjonowanie + rekurencja.
            <ul>
              <li>Średnio O(n log n), pesymistycznie O(n²); pamięć zwykle O(log n) na stos.</li>
              <li>Jak ograniczyć worst-case: losowy pivot, median-of-three, introsort.</li>
              <li>Dobór pivota wpływa na praktyczną wydajność i ryzyko O(n²).</li>
            </ul>
          </li>
        </ul>
        <div class="callout"><b>Haczyk</b>: dolne ograniczenie dla sortowań porównaniowych to Ω(n log n). O(n) uzyskasz tylko przy dodatkowych założeniach (counting/radix/bucket).</div>

        <p><b>Pułapki / dopytania</b></p>
        <ul>
          <li>Co to jest <b>stabilność</b> sortowania i kiedy jest ważna (np. sort po wielu kluczach)?</li>
          <li>Jak quicksort broni się przed worst-case? (losowy pivot / median-of-three / introsort).</li>
          <li>Dlaczego heapsort bywa wolniejszy w praktyce? (słabsza lokalność pamięci).</li>
          <li>Które sortowanie wybrać dla danych prawie posortowanych? (insertion/timsort).</li>
        </ul>
      `,
    },
    {
      q: "3. Podstawowe algorytmy grafowe: najkrótsze ścieżki oraz przeszukiwania grafów.",
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li><b>BFS</b> i <b>DFS</b> działają w O(V+E) (dla list sąsiedztwa).</li>
          <li><b>BFS</b> daje najkrótszą liczbę krawędzi w grafie nieważonym.</li>
          <li><b>Dijkstra</b> dla wag ≥ 0, <b>Bellman–Ford</b> dla ujemnych wag (i wykrywa ujemne cykle), <b>Floyd–Warshall</b> dla wszystkich par (O(V³)).</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <p><b>Przeszukiwania</b></p>
        <ul>
          <li><b>BFS</b> (Breadth-First Search):
            <ul>
              <li>Kolejka, przechodzenie warstwami; złożoność O(V+E).</li>
              <li>Daje najkrótszą ścieżkę w grafie nieważonym (minimalna liczba krawędzi).</li>
              <li>Typowe zastosowania: odległości w siatce, graf społecznościowy, „czy graf jest dwudzielny?”.</li>
            </ul>
          </li>
          <li><b>DFS</b> (Depth-First Search):
            <ul>
              <li>Stos/rekurencja; O(V+E).</li>
              <li>Zastosowania: wykrywanie cykli, sortowanie topologiczne (DAG), spójne składowe, mosty i punkty artykulacji.</li>
              <li>Pułapka: rekurencja może przepełnić stos — iteracyjny DFS to bezpieczniejsza alternatywa.</li>
            </ul>
          </li>
        </ul>

        <p><b>Najkrótsze ścieżki</b></p>
        <ul>
          <li><b>Dijkstra</b>:
            <ul>
              <li>Warunek: wagi nieujemne.</li>
              <li>Implementacja: kolejka priorytetowa; O((V+E) log V).</li>
              <li>Pułapka: dla ujemnych wag może zwrócić błędny wynik.</li>
            </ul>
          </li>
          <li><b>Bellman–Ford</b>:
            <ul>
              <li>Ujemne wagi dozwolone; wykrywa ujemne cykle.</li>
              <li>Złożoność O(VE); dobry, gdy graf mały lub potrzebujesz wykrycia ujemnego cyklu.</li>
            </ul>
          </li>
          <li><b>Floyd–Warshall</b>:
            <ul>
              <li>Najkrótsze ścieżki dla wszystkich par; DP; O(V³), pamięć O(V²).</li>
              <li>Wygodny dla gęstych, małych grafów oraz do domykania przejść.</li>
            </ul>
          </li>
        </ul>
        <div class="callout"><b>Typowe dopytanie</b>: lista sąsiedztwa vs macierz — lista O(V+E) (graf rzadki), macierz O(V²) (graf gęsty / szybkie sprawdzanie krawędzi).</div>

        <p><b>Pułapki / dopytania</b></p>
        <ul>
          <li>Dijkstra z ujemnymi wagami — dlaczego jest błędny?</li>
          <li>Kiedy opłaca się Floyd–Warshall zamiast wielu Dijkstr? (małe/gęste grafy).</li>
          <li>DFS: do czego służą czasy wejścia/wyjścia i krawędzie wsteczne?</li>
          <li>Jak odtworzyć ścieżkę po obliczeniu dystansów? (tablica poprzedników).</li>
        </ul>
      `,
    },
    {
      q: "4. Algorytmy tekstowe: KMP oraz Karp–Rabin.",
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li><b>KMP</b>: preprocesuje wzorzec (LPS) i nie cofa się w tekście; złożoność O(n+m).</li>
          <li><b>Karp–Rabin</b>: rolling hash porównuje okna; szybki średnio, ale możliwe kolizje → weryfikacja znakami.</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <p><b>Cel wspólny</b>: znaleźć wszystkie wystąpienia wzorca P (długość m) w tekście T (długość n).</p>

        <p><b>KMP (Knuth–Morris–Pratt)</b></p>
        <ul>
          <li><b>Preprocessing</b>: tablica LPS (Longest Proper Prefix which is also Suffix) dla wzorca.</li>
          <li><b>Wyszukiwanie</b>: przesuwasz wzorzec na podstawie LPS — nie cofasz się w tekście.</li>
          <li><b>Złożoność</b>: budowa LPS O(m), dopasowanie O(n) → O(n+m).</li>
          <li><b>Pułapka</b>: błędy w LPS (off-by-one) — warto umieć „ręcznie” policzyć LPS dla krótkiego wzorca na egzaminie.</li>
        </ul>

        <p><b>Karp–Rabin</b></p>
        <ul>
          <li><b>Idea</b>: hash wzorca i hash „okna” długości m w tekście; przesuwasz okno i aktualizujesz hash w O(1) (rolling hash).</li>
          <li><b>Weryfikacja</b>: gdy hash się zgadza — porównujesz znaki (żeby wyeliminować kolizję).</li>
          <li><b>Złożoność</b>: średnio blisko O(n+m); pesymistycznie O(nm) przy wielu kolizjach.</li>
          <li><b>Zastosowania</b>: szybkie wyszukiwanie, wykrywanie podobieństw/plagiatów, wiele wzorców.</li>
        </ul>

        <div class="callout"><b>Porównanie</b>: KMP = deterministyczne O(n+m). Karp–Rabin = „probabilistycznie” szybki (zależy od hasha), świetny w praktyce przy dobrym doborze mod/base.</div>

        <p><b>Pułapki / dopytania</b></p>
        <ul>
          <li>KMP: pokaż na przykładzie, jak liczy się LPS dla krótkiego wzorca.</li>
          <li>Karp–Rabin: co to jest kolizja i czemu robimy weryfikację znak po znaku?</li>
          <li>Gdzie Karp–Rabin jest szczególnie dobry? (wiele dopasowań, duże teksty, podobieństwa).</li>
          <li>Jak dobrać podstawę/moduł hasha, aby zmniejszyć kolizje?</li>
        </ul>
      `,
    },
  ],
});

