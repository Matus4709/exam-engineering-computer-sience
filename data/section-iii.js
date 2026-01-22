window.EXAM_SECTIONS = window.EXAM_SECTIONS || [];

window.EXAM_SECTIONS.push({
  id: "iii-so",
  title: "III. Systemy Operacyjne (kierunkowe)",
  tags: ["procesy", "pamięć", "synchronizacja", "deadlock"],
  qas: [
    {
      q: "1. Co to jest system operacyjny, czym zarządza. Klasyfikacje systemów operacyjnych.",
      open: true,
      aHtml: `
        <ul>
          <li><b>Definicja</b>: SO to warstwa pośrednia między sprzętem a aplikacjami — udostępnia usługi, izoluje procesy i zarządza zasobami.</li>
          <li><b>Co zarządza</b>: CPU (planowanie), procesami/wątkami, pamięcią (wirtualna), plikami, I/O, siecią, bezpieczeństwem (użytkownicy, ACL/role).</li>
          <li><b>Tryby</b>: tryb użytkownika vs tryb jądra (uprzywilejowany). Przejście przez <b>system call</b> / przerwanie.</li>
          <li><b>Abstrakcje</b>: proces, wątek, plik, deskryptor, gniazdo, przestrzeń adresowa, prawa dostępu.</li>
        </ul>
        <p><b>Klasyfikacje</b></p>
        <ul>
          <li><b>Wsadowe / interakcyjne / RTOS</b> (deadline i przewidywalność).</li>
          <li><b>Jedno- / wielozadaniowe</b>, <b>jedno- / wieloużytkownikowe</b>.</li>
          <li><b>SMP/wieloprocesorowe</b>, rozproszone.</li>
          <li><b>Monolityczne / mikrojądro / hybrydowe</b>.</li>
        </ul>
      `,
    },
    {
      q: "2. Planowanie CPU: funkcja priorytetu. Scharakteryzuj algorytmy planowania.",
      aHtml: `
        <ul>
          <li><b>Cel</b>: minimalizacja czasu reakcji/oczekiwania, wysoka przepustowość, sprawiedliwość, dotrzymanie deadline.</li>
          <li><b>Priorytet</b>: statyczny lub dynamiczny (np. aging, interaktywność); wpływa na wybór procesu.</li>
          <li><b>FCFS</b>: proste, może dać efekt konwoju.</li>
          <li><b>SJF/SRTF</b>: najlepsze średnio dla czasu oczekiwania, ale wymaga przewidywania długości.</li>
          <li><b>Round Robin</b>: kwant czasu; dobry interaktywnie; zły kwant = narzut/przestoje.</li>
          <li><b>Priorytetowe</b>: grozi głodzeniem → aging.</li>
          <li><b>MLFQ</b>: praktyczne (OS-y), adaptacyjne kolejki.</li>
        </ul>
        <p><b>Co często dopytują</b></p>
        <ul>
          <li><b>Preempcja</b>: czy proces może być wywłaszczony w trakcie? (wpływa na responsywność).</li>
          <li><b>Kwant czasu</b> w RR: mały = duży narzut przełączeń; duży = słaba interaktywność.</li>
          <li><b>Starvation</b>: jak temu zapobiec? (aging, limity).</li>
        </ul>
        <div class="callout"><b>Dopytanie</b>: preempcja (wywłaszczenie) vs brak preempcji — wpływa na responsywność.</div>
      `,
    },
    {
      q: "3. Hierarchia pamięci; adres logiczny i fizyczny; fragmentacja; strategie dopasowania.",
      aHtml: `
        <ul>
          <li><b>Hierarchia</b>: rejestry → cache → RAM → dysk (swap) — kompromis szybkość/pojemność/koszt.</li>
          <li><b>Adres logiczny</b> (wirtualny) generuje CPU w procesie; <b>fizyczny</b> to realny adres RAM.</li>
          <li><b>MMU</b>: tłumaczy adresy; <b>TLB</b> przyspiesza translacje.</li>
          <li><b>Fragmentacja zewnętrzna</b>: wolne dziury między blokami; <b>wewnętrzna</b>: niewykorzystane miejsce w przydzielonym bloku.</li>
          <li><b>Dopasowanie</b>: first-fit, next-fit, best-fit, worst-fit.</li>
          <li><b>Stronicowanie</b>: ogranicza zewnętrzną, ale zostawia wewnętrzną (rozmiar strony).</li>
        </ul>
        <p><b>Rozwinięcie, które dobrze brzmi</b></p>
        <ul>
          <li><b>Page fault</b>: odwołanie do strony nieobecnej w RAM → obsługa przez OS (wczytanie z dysku).</li>
          <li><b>Algorytmy wymiany</b>: FIFO, LRU (lub Clock jako przybliżenie LRU).</li>
          <li><b>Thrashing</b>: zbyt dużo page faultów, system „mieli dyskiem” — pomaga kontrola working set.</li>
        </ul>
      `,
    },
    {
      q: "4. Zakleszczenie: wykrywanie, usuwanie, unikanie i zapobieganie.",
      aHtml: `
        <ul>
          <li><b>Deadlock</b>: procesy czekają cyklicznie na zasoby i żaden nie ruszy.</li>
          <li><b>Warunki Coffmana</b>: mutual exclusion, hold&wait, no preemption, circular wait.</li>
          <li><b>Wykrywanie</b>: graf przydziału zasobów (cykl), algorytmy dla wielu instancji.</li>
          <li><b>Usuwanie</b>: abort procesów, rollback, wywłaszczenie zasobów.</li>
          <li><b>Unikanie</b>: Bankier (stan bezpieczny).</li>
          <li><b>Zapobieganie</b>: łamanie jednego z warunków (np. porządek zasobów).</li>
        </ul>
        <div class="callout"><b>Dobry przykład „porządku zasobów”</b>: zawsze blokuj mutexy w tej samej kolejności (np. rosnące ID), żeby nie powstał cykl.</div>
      `,
    },
    {
      q: "5. Semafory i zmienne synchronizujące w systemach operacyjnych.",
      aHtml: `
        <ul>
          <li><b>Semafor</b>: licznik + operacje atomowe <code>wait(P)</code> i <code>signal(V)</code>.</li>
          <li><b>Binarny</b> (mutex) vs <b>licznikowy</b> (pula zasobów).</li>
          <li><b>Inne</b>: mutex, RW-lock, spinlock, condition variable, monitory, bariery.</li>
          <li><b>Pułapki</b>: deadlock, starvation, priority inversion (np. rozwiązanie: priority inheritance).</li>
        </ul>
        <p><b>Co często dopytują</b></p>
        <ul>
          <li><b>Semaphore vs mutex</b>: mutex ma „właściciela” (odblokowuje ten, kto zablokował), semafor nie musi.</li>
          <li><b>Spinlock</b>: aktywne czekanie — dobre na bardzo krótkie sekcje krytyczne na SMP.</li>
          <li><b>Condition variable</b>: nie jest „pamiętliwa” — sygnał bez czekających może przepaść.</li>
        </ul>
      `,
    },
    {
      q: "6. Klasyczne problemy synchronizacji i rozwiązanie wybranego.",
      aHtml: `
        <ul>
          <li><b>Klasyczne</b>: producent–konsument, czytelnicy–pisarze, pięciu filozofów, śpiący fryzjer.</li>
          <li><b>Producent–konsument</b> (bufor N): semafory <code>empty=N</code>, <code>full=0</code>, mutex <code>m=1</code>.</li>
          <li><b>Producent</b>: wait(empty) → wait(m) → put → signal(m) → signal(full).</li>
          <li><b>Konsument</b>: wait(full) → wait(m) → get → signal(m) → signal(empty).</li>
        </ul>
        <p><b>Inne typowe rozwiązania (żeby mieć „zapas”)</b></p>
        <ul>
          <li><b>Czytelnicy–pisarze</b>: RW-lock (wielu czytelników naraz, pisarz wyłączny); uwaga na starvation (preferencje).</li>
          <li><b>Filozofowie</b>: ogranicz liczbę jednoczesnych „biorących widelce” albo wprowadź porządek zasobów.</li>
          <li><b>Śpiący fryzjer</b>: semafor na klientów + mutex na kolejkę i liczbę krzeseł.</li>
        </ul>
        <div class="callout"><b>Dopytanie</b>: dlaczego przy condvar zawsze sprawdzamy warunek w pętli? — spurious wakeups i wyścigi.</div>
      `,
    },
  ],
});

