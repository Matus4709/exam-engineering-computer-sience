window.EXAM_SECTIONS = window.EXAM_SECTIONS || [];

window.EXAM_SECTIONS.push({
  id: "vi-wspolbiezne",
  title: "VI. Programowanie współbieżne i rozproszone (kierunkowe)",
  tags: ["POSIX", "Pthreads", "OpenMP", "MPI"],
  qas: [
    {
      q: "1. Co to jest POSIX oraz Pthreads. Jak tworzy się wątek, mutex, zmienne warunkowe.",
      open: true,
      aHtml: `
        <ul>
          <li><b>POSIX</b>: standard interfejsów API dla systemów Unix‑like (pliki, procesy, sygnały, wątki).</li>
          <li><b>Pthreads</b>: standard biblioteki wątków POSIX.</li>
          <li><b>Tworzenie wątku</b>: <code>pthread_create</code>, oczekiwanie: <code>pthread_join</code> (lub detach).</li>
          <li><b>Mutex</b>: wzajemne wykluczanie sekcji krytycznej: <code>pthread_mutex_lock/unlock</code>.</li>
          <li><b>Condition variable</b>: czekanie na zdarzenie/warunek: <code>pthread_cond_wait</code> + <code>pthread_cond_signal/broadcast</code>.</li>
        </ul>
        <p><b>Najczęstsze pułapki w Pthreads</b></p>
        <ul>
          <li><b>Race condition</b>: brak mutexa na wspólnych danych.</li>
          <li><b>Deadlock</b>: różna kolejność blokowania mutexów.</li>
          <li><b>Spurious wakeup</b>: condvar w pętli <code>while (!cond) wait(...)</code>.</li>
          <li><b>Lost wakeup</b>: sygnał bez odpowiedniego protokołu (mutex + warunek) może „przepaść”.</li>
        </ul>
        <div class="callout"><b>Haczyk</b>: condvar zawsze z mutexem i zawsze sprawdzaj warunek w pętli (spurious wakeup).</div>
      `,
    },
    {
      q: "2. OpenMP: tworzenie bloku zrównoleglonego; równoleglenie pętli for; klauzula redukcji.",
      aHtml: `
        <ul>
          <li><b>Blok równoległy</b>: dyrektywa <code>#pragma omp parallel</code> tworzy zespół wątków.</li>
          <li><b>Pętla for</b>: <code>#pragma omp parallel for</code> dzieli iteracje między wątki.</li>
          <li><b>Schedule</b>: static/dynamic/guided (balans obciążenia vs narzut).</li>
          <li><b>Reduction</b>: <code>reduction(+:sum)</code> — każdy wątek liczy lokalnie, potem wyniki są łączone.</li>
        </ul>
        <p><b>Co warto dopowiedzieć</b></p>
        <ul>
          <li><b>Zmienne</b>: shared vs private/firstprivate/lastprivate (częste źródło błędów).</li>
          <li><b>Bariera</b>: domyślnie po <code>for</code> jest bariera (można ją zdjąć <code>nowait</code>).</li>
          <li><b>Race condition</b>: jeśli nie redukcja, to atomic/critical lub inna strategia.</li>
        </ul>
        <div class="callout"><b>Dopytanie</b>: dlaczego redukcja na float może dawać inny wynik? — inna kolejność sumowania (błędy zaokrągleń).</div>
      `,
    },
    {
      q: "3. Sekcje i zadania w OpenMP.",
      aHtml: `
        <ul>
          <li><b>Sections</b>: równoległe wykonanie kilku niezależnych fragmentów kodu (każdy w innej sekcji).</li>
          <li><b>Tasks</b>: dynamicznie tworzone zadania (dobre dla rekurencji i nierównych podproblemów).</li>
          <li><b>Synchronizacja</b>: <code>taskwait</code> — czekanie na zakończenie zadań potomnych.</li>
        </ul>
        <p><b>Kiedy używać czego</b></p>
        <ul>
          <li><b>Sections</b>: kilka „dużych” niezależnych bloków o podobnym koszcie.</li>
          <li><b>Tasks</b>: drzewo zadań (np. rekurencja), nierówny koszt, dynamiczne tworzenie pracy.</li>
        </ul>
      `,
    },
    {
      q: "4. Co to jest MPI — scharakteryzuj, podaj przykłady.",
      aHtml: `
        <ul>
          <li><b>MPI</b> (Message Passing Interface): standard komunikacji między procesami w obliczeniach równoległych/rozproszonych (często klastry).</li>
          <li><b>Model</b>: wiele procesów; komunikaty punkt‑punkt (send/recv) i operacje kolektywne.</li>
          <li><b>Kolektywy</b>: broadcast, scatter/gather, reduce/allreduce.</li>
          <li><b>Przykłady</b>: sumowanie częściowych wyników (reduce), rozsył danych wejściowych (bcast), wymiana „halo” w symulacjach siatkowych.</li>
        </ul>
        <p><b>Podstawowe pojęcia MPI</b></p>
        <ul>
          <li><b>Rank</b>: ID procesu w komunikatorze (np. MPI_COMM_WORLD).</li>
          <li><b>Komunikator</b>: grupa procesów, w której komunikujesz.</li>
          <li><b>Blokujące vs nieblokujące</b>: <code>MPI_Send/MPI_Recv</code> vs <code>MPI_Isend/MPI_Irecv</code> + <code>MPI_Wait</code>.</li>
        </ul>
        <div class="callout"><b>Pułapka</b>: deadlock w komunikacji blokującej (np. dwa procesy czekają na recv) — rozwiązanie: porządek komunikacji lub non-blocking.</div>
      `,
    },
  ],
});

