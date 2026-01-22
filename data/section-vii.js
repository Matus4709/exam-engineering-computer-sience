window.EXAM_SECTIONS = window.EXAM_SECTIONS || [];

window.EXAM_SECTIONS.push({
  id: "vii-statystyka",
  title: "VII. Metody probabilistyczne i statystyka (kierunkowe)",
  tags: ["prawdopodobieństwo", "rozkłady", "MLE"],
  qas: [
    {
      q: "1. Statystyka opisowa: rodzaje danych, parametry, szereg rozdzielczy, prezentacja graficzna.",
      open: true,
      aHtml: `
        <ul>
          <li><b>Rodzaje danych</b>: jakościowe (nominalne, porządkowe) i ilościowe (dyskretne, ciągłe).</li>
          <li><b>Parametry</b>: średnia, mediana, dominanta; wariancja, odchylenie, kwartyle, IQR; min/max, rozstęp.</li>
          <li><b>Szereg rozdzielczy</b>: grupowanie obserwacji w klasy/przedziały, częstości (absolutne i względne), kumulacja.</li>
          <li><b>Wykresy</b>: histogram, boxplot, słupkowy, punktowy; dobór zależy od typu danych.</li>
        </ul>
        <p><b>Rozwinięcie (często dopytują)</b></p>
        <ul>
          <li><b>Miary położenia</b>: średnia (wrażliwa na outliery), mediana (odporna), dominanta (najczęstsza wartość).</li>
          <li><b>Miary rozproszenia</b>: wariancja/odchylenie (wrażliwe), IQR (odporny), rozstęp (bardzo wrażliwy).</li>
          <li><b>Opis kształtu</b>: skośność i kurtoza (jeśli wymagane na Twoim egzaminie).</li>
        </ul>
        <div class="callout"><b>Haczyk</b>: średnia jest wrażliwa na obserwacje odstające — wtedy mediana bywa lepsza.</div>
      `,
    },
    {
      q: "2. Prawdopodobieństwo warunkowe, całkowite, Bayes, niezależność.",
      aHtml: `
        <ul>
          <li><b>Warunkowe</b>: P(A|B) = P(A∩B) / P(B), gdy P(B) &gt; 0.</li>
          <li><b>Całkowite</b>: jeśli {Bi} to rozbicie, to P(A) = Σ P(A|Bi)·P(Bi).</li>
          <li><b>Bayes</b>: P(Bk|A) = P(A|Bk)·P(Bk) / Σ P(A|Bi)·P(Bi).</li>
          <li><b>Niezależność</b>: P(A∩B)=P(A)P(B) (równoważnie P(A|B)=P(A)).</li>
        </ul>
        <div class="callout"><b>Intuicja Bayesa</b>: posterior ∝ likelihood × prior (potem normalizacja).</div>
      `,
    },
    {
      q: "3. Zmienna losowa i jej rozkład; parametry; przykładowe rozkłady.",
      aHtml: `
        <ul>
          <li><b>Zmienna losowa</b>: przypisuje wynikom doświadczenia liczbę.</li>
          <li><b>Rozkład</b>: dystrybuanta F(x); dyskretna: PMF; ciągła: gęstość.</li>
          <li><b>Parametry</b>: E[X] i Var(X), momenty.</li>
          <li><b>Przykłady</b>: Bernoulli, dwumianowy, Poissona, jednostajny, wykładniczy, normalny.</li>
        </ul>
        <p><b>Intuicje do rozkładów</b></p>
        <ul>
          <li><b>Bernoulli</b>: sukces/porażka.</li>
          <li><b>Dwumianowy</b>: liczba sukcesów w n próbach.</li>
          <li><b>Poissona</b>: liczba zdarzeń w czasie/przestrzeni przy stałej intensywności.</li>
          <li><b>Wykładniczy</b>: czas do zdarzenia (brak pamięci).</li>
          <li><b>Normalny</b>: suma wielu małych wpływów (CLT).</li>
        </ul>
      `,
    },
    {
      q: "4. Rozkład normalny i centralne twierdzenie graniczne.",
      aHtml: `
        <ul>
          <li><b>Normalny</b>: X ~ N(μ, σ²); standaryzacja: Z=(X-μ)/σ ~ N(0,1).</li>
          <li><b>CLT</b>: suma/średnia wielu niezależnych zmiennych o skończonej wariancji po standaryzacji dąży do normalnego.</li>
          <li><b>Zastosowanie</b>: uzasadnia użycie normalnego w przybliżeniach i statystyce.</li>
        </ul>
        <p><b>Co warto dopowiedzieć</b></p>
        <ul>
          <li>CLT dotyczy rozkładu średniej/sumy, nawet gdy zmienne nie są normalne (dla dużego n).</li>
          <li>W praktyce „jak duże n?” zależy od skośności i ogonów rozkładu.</li>
        </ul>
      `,
    },
    {
      q: "5. Metoda największej wiarygodności (MLE).",
      aHtml: `
        <ul>
          <li><b>MLE</b>: wybierasz parametr θ maksymalizujący L(θ)=∏ f(xi|θ).</li>
          <li><b>W praktyce</b>: maksymalizuje się log L (stabilniej i łatwiej: suma zamiast iloczynu).</li>
          <li><b>Dopytanie</b>: własności asymptotyczne (zgodność, normalność), informacja Fishera.</li>
        </ul>
        <p><b>Jak to liczyć na egzaminie</b></p>
        <ul>
          <li>piszesz log‑wiarygodność, różniczkujesz po θ, przyrównujesz do 0, sprawdzasz maksimum.</li>
          <li>często dostajesz klasyczne przypadki: Bernoulli (p̂ = średnia), Normalny (μ̂ = średnia, σ̂² = średnia z (xi-μ̂)²).</li>
        </ul>
      `,
    },
  ],
});

