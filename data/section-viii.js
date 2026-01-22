window.EXAM_SECTIONS = window.EXAM_SECTIONS || [];

window.EXAM_SECTIONS.push({
  id: "viii-numeryczne",
  title: "VIII. Metody numeryczne (specjalnościowe)",
  tags: ["interpolacja", "aproksymacja", "zera", "LU/QR"],
  qas: [
    {
      q: "1. Interpolacja Lagrange'a — istnienie i jedyność rozwiązania.",
      open: true,
      aHtml: `
        <ul>
          <li><b>Twierdzenie</b>: dla n+1 różnych węzłów x0..xn istnieje dokładnie jeden wielomian stopnia ≤ n taki, że p(xi)=yi.</li>
          <li><b>Postać Lagrange'a</b>: p(x)=Σ yi·ℓi(x), gdzie ℓi(x)=Π_{j≠i} (x-xj)/(xi-xj).</li>
          <li><b>Dopytanie</b>: błąd interpolacji zależy od pochodnych i rozmieszczenia węzłów.</li>
          <li><b>Pułapka</b>: zjawisko Rungego (oscylacje dla równych węzłów przy dużym n) — pomagają węzły Czebyszewa.</li>
        </ul>
        <p><b>Co warto dopowiedzieć (egzaminowo)</b></p>
        <ul>
          <li><b>Dlaczego jedyny?</b> — gdyby były dwa różne wielomiany stopnia ≤ n zgodne w n+1 punktach, ich różnica miałaby ≥ n+1 miejsc zerowych, więc byłaby wielomianem zerowym.</li>
          <li><b>Błąd interpolacji</b>: proporcjonalny do (n+1)-tej pochodnej i iloczynu (x-xi).</li>
          <li><b>W praktyce</b>: dla wielu punktów często lepsza jest interpolacja sklejanymi (splajny) niż wielomian wysokiego stopnia.</li>
        </ul>
      `,
    },
    {
      q: "2. Aproksymacja – znajdowanie rozwiązania zadania aproksymacji w przestrzeniach unitarnych.",
      aHtml: `
        <ul>
          <li><b>Cel</b>: znaleźć g w podprzestrzeni V minimalizujące ||f-g||.</li>
          <li><b>Rozwiązanie</b>: rzut ortogonalny g=P_V(f).</li>
          <li><b>Warunek optymalności</b>: (f-g) ⟂ V (reszta prostopadła do całej podprzestrzeni).</li>
          <li><b>Przykład</b>: metoda najmniejszych kwadratów (aproksymacja danych wielomianem/prostą).</li>
        </ul>
        <p><b>Najmniejsze kwadraty (intuicja)</b></p>
        <ul>
          <li>Minimalizujesz sumę kwadratów błędów: Σ (yi - g(xi))².</li>
          <li>W ujęciu liniowym: g to kombinacja baz (np. 1, x, x²...), a warunek prostopadłości daje układ równań (równania normalne / QR).</li>
        </ul>
      `,
    },
    {
      q: "3. Podstawowe metody znajdowania miejsc zerowych równań nieliniowych.",
      aHtml: `
        <ul>
          <li><b>Bisekcja</b>: wymaga zmiany znaku na [a,b]; pewna zbieżność, wolna.</li>
          <li><b>Newton</b>: x_{k+1}=x_k - f(x_k)/f'(x_k); szybka (kwadratowa) blisko zera, ale wymaga pochodnej i dobrego startu.</li>
          <li><b>Siecznych</b>: jak Newton bez pochodnej (przybliżenie f'); zwykle superliniowa.</li>
          <li><b>Iteracja prosta</b>: x_{k+1}=g(x_k); zbieżność gdy |g'(x)|<1 w otoczeniu.</li>
        </ul>
        <p><b>Pułapki numeryczne</b></p>
        <ul>
          <li><b>Newton</b>: może „uciec” przy złym starcie lub gdy f'≈0; często stosuje się damping (krok &lt; 1).</li>
          <li><b>Bisekcja</b>: wolna, ale niezawodna — dobra jako metoda startowa.</li>
        </ul>
        <div class="callout"><b>Dopytanie</b>: kryteria stopu (|x_{k+1}-x_k|, |f(x_k)|) i rząd zbieżności.</div>
      `,
    },
    {
      q: "4. Podstawowe metody rozwiązywania równań liniowych – faktoryzacje macierzy.",
      aHtml: `
        <ul>
          <li><b>LU</b>: A=LU (często z pivotingiem); szybkie dla wielu prawych stron.</li>
          <li><b>Cholesky</b>: A=LLᵀ dla macierzy symetrycznych dodatnio określonych (SPD); wydajniejsza niż LU.</li>
          <li><b>QR</b>: stabilna numerycznie (np. najmniejsze kwadraty).</li>
          <li><b>Iteracyjne</b> (dla dużych rzadkich): Jacobi, Gauss-Seidel, CG (SPD).</li>
        </ul>
        <p><b>Co często pytają</b></p>
        <ul>
          <li><b>Pivoting</b>: po co? — stabilność numeryczna (uniknięcie dzielenia przez małe liczby).</li>
          <li><b>Rzadkość</b>: dla macierzy rzadkich preferuje się metody iteracyjne i odpowiednie przechowywanie (CSR/CSC).</li>
        </ul>
      `,
    },
  ],
});

