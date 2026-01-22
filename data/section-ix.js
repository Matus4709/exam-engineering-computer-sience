window.EXAM_SECTIONS = window.EXAM_SECTIONS || [];

window.EXAM_SECTIONS.push({
  id: "ix-multimedia",
  title: "IX. Multimedia (specjalnościowe)",
  tags: ["entropia", "kody", "kompresja", "JPEG/MPEG"],
  qas: [
    {
      q: "1. Własności funkcji informacji i entropii.",
      open: true,
      aHtml: `
        <ul>
          <li><b>Ilość informacji</b>: I(x) = -log p(x) (rzadsze zdarzenie → więcej informacji).</li>
          <li><b>Entropia</b>: H(X)= -Σ p(x) log p(x) (średnia ilość informacji).</li>
          <li><b>Własności</b>: H≥0; maksimum dla rozkładu jednostajnego; H(X,Y)=H(X)+H(Y|X).</li>
          <li><b>Intuicja</b>: entropia mierzy „niepewność” źródła.</li>
        </ul>
        <p><b>Rozwinięcie (częste dopytania)</b></p>
        <ul>
          <li><b>Jednostki</b>: log₂ → bity, ln → nats.</li>
          <li><b>Entropia warunkowa</b>: H(X|Y) — ile niepewności zostaje o X, gdy znamy Y.</li>
          <li><b>Informacja wzajemna</b>: I(X;Y)=H(X)-H(X|Y) — „ile Y mówi o X”.</li>
        </ul>
      `,
    },
    {
      q: "2. Kody binarne: jednoznaczna dekodowalność, przedrostkowość, optymalność; twierdzenie Krafta itd.",
      aHtml: `
        <ul>
          <li><b>Jednoznacznie dekodowalny</b>: strumień bitów można rozłożyć na symbole tylko w jeden sposób.</li>
          <li><b>Przedrostkowy</b>: żaden kod nie jest prefiksem innego → natychmiastowe dekodowanie.</li>
          <li><b>Kraft</b>: dla długości li kodu przedrostkowego zachodzi Σ 2^{-li} ≤ 1.</li>
          <li><b>Optymalność</b>: Huffman daje minimalną średnią długość kodu (dla kodów przedrostkowych) przy zadanych p(x).</li>
        </ul>
        <p><b>Co warto dopowiedzieć</b></p>
        <ul>
          <li><b>Kraft</b> mówi, czy istnieje kod przedrostkowy o danych długościach.</li>
          <li><b>Dolne ograniczenie</b>: średnia długość kodu ≥ entropia H(X) (w bitach) i kod Huffmana zwykle jest blisko H(X)+1.</li>
        </ul>
        <div class="callout"><b>Dopytanie</b>: dlaczego przedrostkowość ⇒ jednoznaczność? — bo dekodowanie jest deterministyczne od początku strumienia.</div>
      `,
    },
    {
      q: "3. Kompresja informacji: rodzaje kompresji, algorytmy (Shannon, Shannon-Fano, Huffman, Lempel-Ziv).",
      aHtml: `
        <ul>
          <li><b>Bezstratna</b>: Huffman, LZ77/LZ78/LZW (teksty, dane).</li>
          <li><b>Stratna</b>: JPEG, MPEG (obraz/wideo) — usuwa informacje mało istotne percepcyjnie.</li>
          <li><b>Shannon / Shannon–Fano</b>: historyczne metody budowy kodów; Huffman zwykle lepszy.</li>
          <li><b>Lempel–Ziv</b>: słownik/okno powtórzeń; np. DEFLATE = LZ77 + Huffman.</li>
        </ul>
        <p><b>Rozwinięcie</b></p>
        <ul>
          <li><b>Kompresja entropijna</b>: koduje symbole zgodnie z częstościami (Huffman, arytmetyczne).</li>
          <li><b>Słownikowa</b>: zamienia powtórzenia na referencje (LZ).</li>
          <li><b>Stratna</b>: transformacja + kwantyzacja + kodowanie (wykorzystanie właściwości percepcji).</li>
        </ul>
      `,
    },
    {
      q: "4. Kompresja JPEG, MPEG – 1,2,4.",
      aHtml: `
        <ul>
          <li><b>JPEG</b>: YCbCr, (często) downsampling chromy, bloki 8×8, DCT, kwantyzacja, kodowanie entropijne.</li>
          <li><b>Artefakty</b>: blokowanie i „ringing” przy wysokiej kompresji.</li>
          <li><b>MPEG</b>: predykcja czasowa (I/P/B), kompensacja ruchu, transformacja + kwantyzacja + kodowanie.</li>
          <li><b>MPEG-4</b>: bardziej elastyczny i zwykle wydajniejszy (w zależności od profilu/implementacji).</li>
        </ul>
        <p><b>Co dopytują o JPEG</b></p>
        <ul>
          <li>dlaczego YCbCr? — oko jest bardziej wrażliwe na luminancję niż chrominancję.</li>
          <li>gdzie jest „strata”? — w kwantyzacji współczynników DCT.</li>
        </ul>
        <p><b>Co dopytują o MPEG</b></p>
        <ul>
          <li>na czym polega kompensacja ruchu i czemu klatki B zależą od innych,</li>
          <li>czemu kompresja wideo jest mocno „czasowa”, a nie tylko przestrzenna.</li>
        </ul>
      `,
    },
  ],
});

