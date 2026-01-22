window.EXAM_SECTIONS = window.EXAM_SECTIONS || [];

window.EXAM_SECTIONS.push({
  id: "iv-bezpieczenstwo",
  title: "IV. Bezpieczeństwo systemów informatycznych (specjalnościowe)",
  tags: ["kryptografia", "TLS", "podpis"],
  qas: [
    {
      q: "1. Algorytmy kryptograficzne z kluczem publicznym.",
      open: true,
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>Kryptografia asymetryczna używa pary kluczy: publiczny do weryfikacji/szyfrowania, prywatny do podpisu/odszyfrowania.</li>
          <li>Typowe algorytmy: RSA, ECC; zastosowania: podpis, wymiana kluczy, uwierzytelnianie.</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <p><b>Idea</b>: każdy ma parę kluczy (publiczny/prywatny). Publiczny rozpowszechniasz, prywatny chronisz.</p>
        <ul>
          <li><b>Szyfrowanie</b>: zwykle szyfruje się kluczem publicznym odbiorcy, a odszyfrowuje jego prywatnym (np. RSA-OAEP).</li>
          <li><b>Podpis</b>: podpisujesz prywatnym, weryfikujesz publicznym (RSA-PSS, ECDSA, EdDSA).</li>
          <li><b>Wymiana kluczy</b>: ECDH/ECDHE — uzgadniasz wspólny sekret, potem używasz szyfrowania symetrycznego.</li>
        </ul>
        <p><b>Algorytmy</b></p>
        <ul>
          <li><b>RSA</b>: trudność faktoryzacji; praktycznie: OAEP (szyfrowanie) i PSS (podpis).</li>
          <li><b>ECC</b>: bezpieczeństwo przy mniejszych kluczach; świetne dla urządzeń o ograniczonych zasobach.</li>
        </ul>
        <p><b>Dlaczego asymetryczna nie zastępuje symetrycznej</b></p>
        <ul>
          <li>Asymetryczna jest wolniejsza, więc używa się jej do uwierzytelnienia i uzgodnienia klucza, a dane lecą AES/ChaCha20.</li>
        </ul>
        <div class="callout"><b>Typowe dopytanie</b>: MITM i zaufanie do klucza publicznego — PKI/certyfikaty + poprawna walidacja (CN/SAN, łańcuch, unieważnienie).</div>

        <p><b>Pułapki / dopytania</b></p>
        <ul>
          <li>Dlaczego RSA bez OAEP jest ryzykowne?</li>
          <li>Co daje ECDHE i PFS?</li>
        </ul>
      `,
    },
    {
      q: "2. Kryptograficzne algorytmy symetryczne.",
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>Symetryczne: ten sam klucz do szyfrowania i deszyfrowania; są szybkie.</li>
          <li>Standardy: AES, ChaCha20; bezpieczne tryby to AEAD (GCM/ChaCha20‑Poly1305).</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <p><b>Symetryczna</b>: ten sam klucz do szyfrowania i deszyfrowania — szybka i używana do danych „w locie” i „w spoczynku”.</p>
        <ul>
          <li><b>AES</b>: standard (blokowy). Klucze 128/192/256.</li>
          <li><b>ChaCha20</b>: szyfr strumieniowy, często z Poly1305 jako AEAD.</li>
        </ul>
        <p><b>Tryby i praktyka</b></p>
        <ul>
          <li><b>CBC</b>: wymaga losowego IV; podatny na błędy implementacji bez poprawnego uwierzytelniania.</li>
          <li><b>CTR</b>: zamienia blokowy w strumieniowy; nonce nie może się powtórzyć.</li>
          <li><b>GCM</b> / <b>ChaCha20-Poly1305</b>: AEAD (poufność + integralność + uwierzytelnione dane dodatkowe).</li>
        </ul>
        <p><b>Najczęstsze błędy</b></p>
        <ul>
          <li><b>Powtórzony nonce/IV</b> w CTR/GCM — katastrofa (wycieki i/lub fałszowanie).</li>
          <li><b>Brak integralności</b>: „samo szyfrowanie” bez MAC/AEAD.</li>
          <li><b>Złe klucze</b>: hasła bez KDF, brak soli, słaby RNG.</li>
        </ul>
        <div class="callout"><b>Dopytanie</b>: hasło→klucz — KDF (PBKDF2/scrypt/Argon2) + sól + odpowiednie parametry.</div>

        <p><b>Pułapki / dopytania</b></p>
        <ul>
          <li>Po co jest IV/nonce i dlaczego musi być unikalny?</li>
          <li>Czym różni się MAC od szyfrowania?</li>
        </ul>
      `,
    },
    {
      q: "3. Podpis cyfrowy.",
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>Podpis cyfrowy zapewnia integralność i autentyczność; opiera się o klucz prywatny nadawcy.</li>
          <li>Najpierw hash, potem podpis prywatnym; weryfikacja publicznym.</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <p><b>Co daje podpis</b>: integralność (niezmienność), autentyczność (kto podpisał), niezaprzeczalność (w ramach modelu prawnego/PKI).</p>
        <ul>
          <li><b>Mechanizm</b>: hash wiadomości (np. SHA-256) → podpis prywatnym → weryfikacja publicznym.</li>
          <li><b>Algorytmy</b>: RSA-PSS, ECDSA, EdDSA; ważny jest też dobór hasha.</li>
          <li><b>Weryfikacja</b>: sprawdzasz podpis + ważność certyfikatu (łańcuch, data, unieważnienie).</li>
        </ul>
        <p><b>PKI (z czego składa się zaufanie)</b></p>
        <ul>
          <li><b>Certyfikat X.509</b>: klucz publiczny + tożsamość + podpis CA.</li>
          <li><b>Łańcuch zaufania</b>: cert serwera → CA pośrednie → root w magazynie.</li>
        </ul>
        <div class="callout"><b>Typowe dopytanie</b>: podpis ≠ szyfrowanie prywatnym — celem podpisu jest weryfikowalność, nie poufność.</div>

        <p><b>Pułapki / dopytania</b></p>
        <ul>
          <li>Różnica podpisu elektronicznego a kwalifikowanego (kontekst prawny).</li>
          <li>Dlaczego zawsze podpisujemy hash, a nie całą wiadomość?</li>
        </ul>
      `,
    },
    {
      q: "4. Sieciowe protokoły zabezpieczające.",
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>TLS chroni transport (HTTPS), SSH daje bezpieczny zdalny dostęp, IPsec zabezpiecza warstwę IP.</li>
          <li>Kerberos to bilety i KDC, WPA2/WPA3 zabezpiecza Wi‑Fi.</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <ul>
          <li><b>TLS</b>: poufność + integralność + (zwykle) uwierzytelnienie serwera certyfikatem; stosowany w HTTPS.</li>
          <li><b>SSH</b>: bezpieczny zdalny dostęp, port forwarding, SCP/SFTP; klucze publiczne lub hasła.</li>
          <li><b>IPsec</b>: zabezpieczenie na poziomie IP (ESP/AH), typowo VPN; tryb transport/tunel.</li>
          <li><b>Kerberos</b>: uwierzytelnianie oparte o bilety (TGT), KDC; powszechne w AD.</li>
          <li><b>WPA2/WPA3</b>: bezpieczeństwo Wi‑Fi (uwierzytelnienie + szyfrowanie na łączu).</li>
        </ul>
        <p><b>Co warto umieć powiedzieć o TLS</b></p>
        <ul>
          <li><b>Handshake</b>: uzgadnianie algorytmów + wymiana klucza (np. ECDHE) + weryfikacja certyfikatu.</li>
          <li><b>Rekordy danych</b>: szyfrowanie symetryczne (AEAD) po uzgodnieniu klucza sesji.</li>
          <li><b>PFS</b>: Perfect Forward Secrecy — kompromitacja klucza serwera nie odszyfruje starych sesji.</li>
        </ul>
        <div class="callout"><b>Haczyk</b>: TLS chroni transport, ale nie „naprawia” złej aplikacji (np. SQL injection, XSS).</div>

        <p><b>Pułapki / dopytania</b></p>
        <ul>
          <li>Różnica TLS vs SSH vs IPsec (warstwa i zastosowanie).</li>
          <li>Dlaczego certyfikat musi być zweryfikowany (CA, łańcuch, data)?</li>
        </ul>
      `,
    },
  ],
});

