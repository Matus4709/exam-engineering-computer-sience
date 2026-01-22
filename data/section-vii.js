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
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>Dane: jakościowe (nominalne/porządkowe) i ilościowe (dyskretne/ciągłe).</li>
          <li>Parametry: średnia, mediana, dominanta, wariancja, odchylenie, kwartyle.</li>
          <li>Prezentacja: histogram, boxplot, wykres słupkowy/punktowy.</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
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

        <p><b>Pułapki / dopytania</b></p>
        <ul>
          <li>Która miara położenia jest najodporniejsza na outliery?</li>
          <li>Kiedy histogram, a kiedy boxplot?</li>
        </ul>
      `,
    },
    {
      q: "2. Prawdopodobieństwo warunkowe, całkowite, Bayes, niezależność.",
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>P(A|B)=P(A∩B)/P(B), prawo całkowite sumuje po rozbiciu.</li>
          <li>Bayes „odwraca” warunkowanie: posterior ∝ likelihood × prior.</li>
          <li>Niezależność: P(A∩B)=P(A)P(B).</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <ul>
          <li><b>Warunkowe</b>: P(A|B) = P(A∩B) / P(B), gdy P(B) &gt; 0.</li>
          <li><b>Całkowite</b>: jeśli {Bi} to rozbicie, to P(A) = Σ P(A|Bi)·P(Bi).</li>
          <li><b>Bayes</b>: P(Bk|A) = P(A|Bk)·P(Bk) / Σ P(A|Bi)·P(Bi).</li>
          <li><b>Niezależność</b>: P(A∩B)=P(A)P(B) (równoważnie P(A|B)=P(A)).</li>
        </ul>
        <div class="callout"><b>Intuicja Bayesa</b>: posterior ∝ likelihood × prior (potem normalizacja).</div>

        <p><b>Pułapki / dopytania</b></p>
        <ul>
          <li>Niezależność vs niezależność warunkowa — podaj przykład.</li>
          <li>Dlaczego P(A|B) ≠ P(B|A)?</li>
        </ul>
      `,
    },
    {
      q: "3. Zmienna losowa i jej rozkład; parametry; przykładowe rozkłady.",
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>Zmienna losowa przypisuje wynikom liczbę; rozkład opisuje prawdopodobieństwa.</li>
          <li>Parametry: wartość oczekiwana i wariancja.</li>
          <li>Przykłady: Bernoulli, dwumianowy, Poissona, normalny.</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
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

        <p><b>Pułapki / dopytania</b></p>
        <ul>
          <li>Różnica dystrybuanta vs gęstość/PMF.</li>
          <li>Jak interpretować E[X] i Var(X) w praktyce?</li>
        </ul>
      `,
    },
    {
      q: "4. Rozkład normalny i centralne twierdzenie graniczne.",
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>Normalny: X ~ N(μ, σ²); standaryzacja do N(0,1).</li>
          <li>CLT: suma/średnia wielu niezależnych zmiennych dąży do normalnego.</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
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

        <p><b>Pułapki / dopytania</b></p>
        <ul>
          <li>Jak duże musi być n w CLT? — zależy od „ogonów” rozkładu.</li>
          <li>Co oznacza standaryzacja?</li>
        </ul>
      `,
    },
    {
      q: "5. Metoda największej wiarygodności (MLE).",
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>MLE wybiera parametr θ maksymalizujący funkcję wiarygodności L(θ).</li>
          <li>W praktyce maksymalizuje się log‑wiarygodność.</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
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

        <p><b>Pułapki / dopytania</b></p>
        <ul>
          <li>Dlaczego log‑wiarygodność jest wygodna?</li>
          <li>MLE może być obciążone dla małych prób — przykład?</li>
        </ul>
      `,
    },
  ],
});

