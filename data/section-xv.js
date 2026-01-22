window.EXAM_SECTIONS = window.EXAM_SECTIONS || [];

window.EXAM_SECTIONS.push({
  id: "xv-niskopoziomowe",
  title: "XV. Programowanie niskopoziomowe (specjalnościowe)",
  tags: ["x86", "assembly", "x87"],
  qas: [
    {
      q: "1. Podstawowe rejestry procesora rodziny x86.",
      open: true,
      aHtml: `
        <ul>
          <li><b>GPR</b>: EAX/EBX/ECX/EDX (32-bit) lub RAX/RBX/... (64-bit).</li>
          <li><b>Wskaźniki</b>: ESP/RSP (stack pointer), EBP/RBP (base/frame), ESI/EDI (source/dest).</li>
          <li><b>Sterujące</b>: EIP/RIP (instruction pointer), EFLAGS/RFLAGS (flagi).</li>
          <li><b>Segmentowe</b> (historycznie): CS, DS, SS, ES, FS, GS.</li>
        </ul>
        <p><b>Co często dopytują</b></p>
        <ul>
          <li><b>RFLAGS</b>: flagi ZF/CF/SF/OF i ich rola w skokach warunkowych.</li>
          <li><b>RSP/RBP</b>: ramka stosu, wywołania funkcji, zachowanie rejestrów wg ABI.</li>
          <li><b>FS/GS</b>: w praktyce często do TLS (thread-local storage) i struktur systemowych.</li>
        </ul>
      `,
    },
    {
      q: "2. Podstawowe instrukcje procesora rodziny x86.",
      aHtml: `
        <ul>
          <li><b>Ruch danych</b>: MOV, LEA, PUSH/POP.</li>
          <li><b>Arytmetyka</b>: ADD, SUB, IMUL, IDIV.</li>
          <li><b>Logika</b>: AND, OR, XOR, TEST, SHL/SHR.</li>
          <li><b>Sterowanie</b>: JMP, CALL/RET, skoki warunkowe (JZ/JNZ itd.), CMP.</li>
        </ul>
        <p><b>Warto dopowiedzieć</b></p>
        <ul>
          <li><b>LEA</b> często służy do obliczeń adresowych (i „sprytnych” mnożeń/dodań) bez dostępu do pamięci.</li>
          <li><b>CALL/RET</b> współpracują ze stosem (adres powrotu).</li>
          <li><b>CMP</b> ustawia flagi jak po odejmowaniu, ale nie zapisuje wyniku.</li>
        </ul>
        <div class="callout"><b>Dopytanie</b>: co robi CMP vs TEST? — oba ustawiają flagi, ale CMP to odejmowanie, TEST to AND.</div>
      `,
    },
    {
      q: "3. Koprocesor arytmetyczny: architektura, podstawowe instrukcje.",
      aHtml: `
        <ul>
          <li><b>x87 FPU</b>: stos rejestrów ST(0)..ST(7) dla liczb zmiennoprzecinkowych.</li>
          <li><b>Instrukcje</b>: FLD/FSTP, FADD/FSUB/FMUL/FDIV, FSQRT.</li>
          <li><b>Uwaga</b>: współcześnie często zastąpione przez SSE/AVX (rejestry XMM/YMM/ZMM).</li>
        </ul>
        <p><b>Dlaczego SSE/AVX wyparły x87</b></p>
        <ul>
          <li>rejestry „wektorowe” (SIMD) ułatwiają równoległe obliczenia,</li>
          <li>mniej „stosowe” API niż x87, lepsza przewidywalność i wydajność.</li>
        </ul>
      `,
    },
    {
      q: "4. Zastosowanie asemblera, zapis asemblerowy.",
      aHtml: `
        <ul>
          <li><b>Zastosowania</b>: embedded/sterowniki, krytyczne optymalizacje, reverse engineering, instrukcje specjalne.</li>
          <li><b>ABI</b>: konwencje wywołań (przekazywanie parametrów, kto czyści stos) — ważne przy łączeniu z C/C++.</li>
          <li><b>Składnia</b>: Intel vs AT&T; etykiety, sekcje kodu/danych, dyrektywy assemblera.</li>
        </ul>
        <p><b>Praktyczne elementy zapisu</b></p>
        <ul>
          <li><b>Adresowanie</b>: natychmiastowe, rejestrowe, pośrednie, z przesunięciem i skalą (base+index*scale+disp).</li>
          <li><b>Sekcje</b>: .text (kod), .data/.bss (dane), stałe.</li>
          <li><b>Inline asm</b>: czasem w C/C++ (ostrożnie: przenośność i optymalizator).</li>
        </ul>
      `,
    },
  ],
});

