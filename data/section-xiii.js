window.EXAM_SECTIONS = window.EXAM_SECTIONS || [];

window.EXAM_SECTIONS.push({
  id: "xiii-ai",
  title: "XIII. Sztuczna inteligencja (kierunkowe)",
  tags: ["przeszukiwanie", "ML", "NLP"],
  qas: [
    {
      q: "1. Sztuczna inteligencja i inteligencja obliczeniowa – cele. Definicja uczenia.",
      open: true,
      aHtml: `
        <ul>
          <li><b>SI</b>: tworzenie systemów podejmujących „inteligentne” decyzje (percepcja, wnioskowanie, planowanie, język, działanie).</li>
          <li><b>Inteligencja obliczeniowa</b>: podejścia inspirowane naturą i statystyką (sieci neuronowe, logika rozmyta, algorytmy ewolucyjne).</li>
          <li><b>Uczenie (ML)</b>: poprawa jakości działania na zadaniu na podstawie danych/doświadczenia.</li>
        </ul>
        <p><b>Klasyczne definicje (warto znać)</b></p>
        <ul>
          <li><b>Uczenie nadzorowane</b>: dane (x, y) — uczysz model przewidywać etykietę.</li>
          <li><b>Nienadzorowane</b>: same x — szukasz struktury (klastry, redukcja wymiaru).</li>
          <li><b>Ze wzmocnieniem</b>: agent uczy się strategii przez nagrody/ary.</li>
        </ul>
        <div class="callout"><b>Dopytanie</b>: uczenie nadzorowane vs nienadzorowane vs ze wzmocnieniem — podaj po 1 przykład.</div>
      `,
    },
    {
      q: "2. Przeszukiwanie przestrzeni stanów. Gry.",
      aHtml: `
        <ul>
          <li><b>Przeszukiwanie</b>: BFS/DFS, UCS (Dijkstra w grafie stanów), best-first, A* (heurystyka).</li>
          <li><b>Heurystyka</b>: dopuszczalna (nie przeszacowuje) → A* znajduje optimum; spójna (monotoniczna) ułatwia dowód.</li>
          <li><b>Gry</b>: minimax + alpha-beta pruning; funkcja oceny; ograniczenie głębokości.</li>
        </ul>
        <p><b>Co warto dopowiedzieć</b></p>
        <ul>
          <li><b>UCS</b> = „najtańsza ścieżka” (Dijkstra) — gdy koszty krawędzi są nieujemne.</li>
          <li><b>A*</b>: f(n)=g(n)+h(n); g = koszt dotychczas, h = heurystyka do celu.</li>
          <li><b>Alpha-beta</b>: przycina gałęzie, które nie mogą poprawić wyniku (w najlepszym razie ogromne przyspieszenie).</li>
        </ul>
        <div class="callout"><b>Pułapka</b>: eksplozja kombinatoryczna — dlatego heurystyki i przycinanie są kluczowe.</div>
      `,
    },
    {
      q: "3. Języki naturalne, reprezentacje grafowe oraz systemy doradcze.",
      aHtml: `
        <ul>
          <li><b>NLP</b>: tokenizacja, lematyzacja/stemming, embeddingi, modele sekwencyjne i transformery (w praktyce).</li>
          <li><b>Reprezentacje grafowe</b>: grafy wiedzy (encje + relacje), ontologie, zależności semantyczne.</li>
          <li><b>Systemy doradcze/eksperckie</b>: baza wiedzy + silnik wnioskowania (reguły IF-THEN), często z modułem wyjaśniania.</li>
        </ul>
        <p><b>Przykłady (żeby brzmiało konkretnie)</b></p>
        <ul>
          <li><b>NLP</b>: klasyfikacja tekstu (spam), analiza sentymentu, NER (rozpoznawanie encji).</li>
          <li><b>Grafy wiedzy</b>: (osoba) —[pracuje_w]→ (firma), (lek) —[leczy]→ (choroba).</li>
          <li><b>Eksperckie</b>: diagnoza na podstawie reguł, systemy konfiguracji (IF warunek THEN rekomendacja).</li>
        </ul>
      `,
    },
    {
      q: "4. Uczenie maszynowe oraz miara jakości uczenia. Klasyfikacja oraz regresja.",
      aHtml: `
        <ul>
          <li><b>Klasyfikacja</b>: etykiety dyskretne; miary: accuracy, precision/recall, F1, ROC-AUC.</li>
          <li><b>Regresja</b>: wartości ciągłe; miary: MSE/RMSE, MAE, R².</li>
          <li><b>Jakość uczenia</b>: walidacja (train/valid/test), cross-validation, overfitting i regularizacja.</li>
        </ul>
        <p><b>Co warto dopowiedzieć o walidacji</b></p>
        <ul>
          <li><b>Overfitting</b>: model uczy się „szumu” — pomaga regularizacja, więcej danych, prostszy model.</li>
          <li><b>Leakage</b>: wyciek informacji z testu do treningu (np. skalowanie liczone na całym zbiorze).</li>
          <li><b>Confusion matrix</b>: TP/FP/FN/TN — podstawa precision/recall.</li>
        </ul>
        <div class="callout"><b>Dopytanie</b>: czemu accuracy bywa mylące? — niezbalansowane klasy (lepsze precision/recall, ROC/PR).</div>
      `,
    },
    {
      q: "5. Paradygmaty uczenia: drzewa decyzyjne, sieci Bayesa oraz sieci neuronowe.",
      aHtml: `
        <ul>
          <li><b>Drzewa decyzyjne</b>: podziały cech; kryteria: entropia/information gain lub Gini; plus: interpretowalność.</li>
          <li><b>Sieci Bayesa</b>: graf skierowany acykliczny (DAG) opisujący zależności warunkowe; wnioskowanie probabilistyczne.</li>
          <li><b>Sieci neuronowe</b>: warstwy + nieliniowości; uczenie przez backprop; silne w zadaniach percepcyjnych.</li>
        </ul>
        <p><b>Typowe plusy/minusy</b></p>
        <ul>
          <li><b>Drzewa</b>: + interpretowalne, - łatwo przeuczyć (pomaga pruning / random forest).</li>
          <li><b>Bayes</b>: + jawne zależności i wnioskowanie, - trudne gdy graf i parametry są duże.</li>
          <li><b>NN</b>: + wysoka jakość przy dużych danych, - mniejsza interpretowalność, większe wymagania obliczeniowe.</li>
        </ul>
      `,
    },
  ],
});

