window.EXAM_SECTIONS = window.EXAM_SECTIONS || [];

window.EXAM_SECTIONS.push({
  id: "xiv-sieci",
  title: "XIV. Sieci komputerowe (kierunkowe)",
  tags: ["OSI", "routing", "IP", "Ethernet", "WAN"],
  qas: [
    {
      q: "1. Model ISO/OSI: warstwy i funkcje.",
      open: true,
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>OSI ma 7 warstw od fizycznej do aplikacji; każda odpowiada za inny poziom komunikacji.</li>
          <li>W praktyce często używa się modelu TCP/IP (mniej warstw).</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <ul>
          <li><b>1 Fizyczna</b>: sygnał/bity/medium.</li>
          <li><b>2 Łącza danych</b>: ramki, MAC, dostęp do medium, VLAN, wykrywanie błędów lokalnie.</li>
          <li><b>3 Sieci</b>: adresacja IP, routing.</li>
          <li><b>4 Transport</b>: TCP/UDP, porty, niezawodność, kontrola przepływu.</li>
          <li><b>5 Sesji</b>, <b>6 Prezentacji</b>, <b>7 Aplikacji</b>: zarządzanie sesją, formaty, protokoły aplikacyjne (HTTP, DNS...).</li>
        </ul>
        <p><b>OSI vs TCP/IP (częste dopytanie)</b></p>
        <ul>
          <li>W TCP/IP zwykle wyróżnia się: łącza, internet (IP), transport (TCP/UDP), aplikacja.</li>
          <li>Warstwy 5–7 OSI często „sklejają się” w warstwę aplikacji TCP/IP.</li>
        </ul>
        <div class="callout"><b>Haczyk</b>: OSI jest modelem; w praktyce często mówi się TCP/IP (mniej warstw).</div>

        <p><b>Pułapki / dopytania</b></p>
        <ul>
          <li>Przykłady protokołów na każdej warstwie.</li>
          <li>Różnica TCP vs UDP (transport).</li>
        </ul>
      `,
    },
    {
      q: "2. Podstawowe urządzenia sieciowe i ich rola.",
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>Switch działa na warstwie 2, router na warstwie 3, firewall filtruje ruch.</li>
          <li>AP łączy Wi‑Fi z LAN.</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <ul>
          <li><b>Switch</b>: warstwa 2, przełączanie po MAC.</li>
          <li><b>Router</b>: warstwa 3, routing po IP.</li>
          <li><b>Access Point</b>: most WLAN↔LAN.</li>
          <li><b>Firewall</b>: filtrowanie/inspekcja ruchu, segmentacja.</li>
          <li><b>Modem</b>: dostęp do łącza operatora (modulacja/demodulacja).</li>
        </ul>
        <p><b>Dodatkowo (często pada na egzaminie)</b></p>
        <ul>
          <li><b>Hub</b>: warstwa 1 (broadcast), dziś praktycznie nieużywany.</li>
          <li><b>Proxy / reverse proxy</b>: pośrednik (cache, TLS termination, load balancing).</li>
          <li><b>IDS/IPS</b>: wykrywanie/ blokowanie ataków.</li>
        </ul>
      `,
    },
    {
      q: "3. Routing statyczny i dynamiczny w LAN; protokoły routingu.",
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>Statyczny: ręczne trasy; dynamiczny: automatyczna wymiana informacji.</li>
          <li>Protokoły: RIP (distance vector), OSPF/IS‑IS (link state), BGP (między AS).</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <ul>
          <li><b>Statyczny</b>: trasy wpisane ręcznie; prosty, brak adaptacji.</li>
          <li><b>Dynamiczny</b>: automatyczne wyznaczanie tras, odporność na awarie.</li>
          <li><b>Protokoły</b>: RIP (distance vector), OSPF/IS-IS (link state), BGP (między AS).</li>
        </ul>
        <p><b>Różnice protokołów (krótko)</b></p>
        <ul>
          <li><b>Distance vector</b> (RIP): prościej, wolniejsza konwergencja, problemy typu „count to infinity”.</li>
          <li><b>Link state</b> (OSPF): każdy zna topologię i liczy najkrótsze ścieżki (SPF/Dijkstra).</li>
          <li><b>BGP</b>: routing polityk między AS (Internet), nie „najkrótsza ścieżka” w sensie wag.</li>
        </ul>
        <div class="callout"><b>Dopytanie</b>: metryka i zbieżność (convergence) — czemu ma znaczenie.</div>

        <p><b>Pułapki / dopytania</b></p>
        <ul>
          <li>Różnica link state vs distance vector.</li>
          <li>Dlaczego BGP to routing polityk, a nie najkrótszej ścieżki?</li>
        </ul>
      `,
    },
    {
      q: "4. Adresacja warstwy sieciowej; metody uzyskiwania adresu IP.",
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>Adres IP + maska/prefix + brama; IPv4 i IPv6.</li>
          <li>Adres można dostać statycznie, przez DHCP (IPv4) lub SLAAC/DHCPv6.</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <ul>
          <li><b>IPv4/IPv6</b>: adres + maska/prefix + brama domyślna.</li>
          <li><b>Uzyskanie IP</b>: statycznie, DHCP (IPv4), SLAAC/DHCPv6 (IPv6).</li>
          <li><b>NAT</b>: tłumaczenie adresów (powszechne w IPv4).</li>
        </ul>
        <p><b>Co warto dopowiedzieć</b></p>
        <ul>
          <li><b>Adres prywatny</b> vs publiczny (RFC1918) i rola NAT w IPv4.</li>
          <li><b>DNS</b> nie jest częścią adresacji IP, ale jest kluczowy dla użyteczności sieci.</li>
          <li>W IPv6 NAT zwykle nie jest potrzebny, ale pojawiają się inne mechanizmy bezpieczeństwa.</li>
        </ul>
      `,
    },
    {
      q: "5. Technologia ethernet.",
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>Ethernet to standard warstwy 2: ramki, MAC, MTU.</li>
          <li>Współcześnie full‑duplex na switchach; historycznie CSMA/CD.</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <ul>
          <li><b>Ethernet</b>: ramki, adresy MAC, MTU; dziś najczęściej full-duplex na switchach.</li>
          <li><b>CSMA/CD</b>: historycznie dla half-duplex (huby).</li>
          <li><b>VLAN (802.1Q)</b>: segmentacja logiczna.</li>
        </ul>
        <p><b>Dodatkowe punkty</b></p>
        <ul>
          <li><b>ARP</b>: mapowanie IP→MAC w IPv4 (często dopytują).</li>
          <li><b>STP/RSTP</b>: zapobieganie pętlom w sieci switchy.</li>
          <li><b>MTU</b>: wpływa na fragmentację i wydajność (jumbo frames w sieciach DC).</li>
        </ul>
      `,
    },
    {
      q: "6. Sieci rozległe (WAN): technologie i protokoły.",
      aHtml: `
        <p><b>Odpowiedź krótka (20–30 s)</b></p>
        <ul>
          <li>WAN: MPLS, łącza dzierżawione, LTE/5G, światłowód operatora.</li>
          <li>VPN: IPsec lub TLS; routing między AS: BGP.</li>
        </ul>

        <p><b>Rozwinięcie (2–3 min)</b></p>
        <ul>
          <li><b>Technologie</b>: MPLS, łącza dzierżawione, LTE/5G, światłowód operatorski.</li>
          <li><b>VPN</b>: IPsec, SSL/TLS VPN.</li>
          <li><b>Routing</b>: BGP w Internecie; w korporacjach często OSPF/IS-IS wewnątrz.</li>
        </ul>
        <p><b>WAN — co często pada</b></p>
        <ul>
          <li><b>MPLS</b>: etykiety i ścieżki LSP, QoS w sieciach operatorskich.</li>
          <li><b>VPN</b>: tunelowanie + szyfrowanie; różnice: site-to-site vs client-to-site.</li>
          <li><b>Parametry</b>: opóźnienie, jitter, utrata pakietów — krytyczne dla VoIP/wideo.</li>
        </ul>
      `,
    },
  ],
});

