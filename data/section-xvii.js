window.EXAM_SECTIONS = window.EXAM_SECTIONS || [];

window.EXAM_SECTIONS.push({
  id: "xvii-web",
  title: "XVII. Programowanie aplikacji WEB (kierunkowe)",
  tags: ["MVC", ".NET", "RBAC", "Razor"],
  qas: [
    {
      q: "1. Koncepcja wzorca MVC.",
      open: true,
      aHtml: `
        <ul>
          <li><b>Model</b>: dane + logika domenowa.</li>
          <li><b>View</b>: warstwa prezentacji (UI).</li>
          <li><b>Controller</b>: obsługa żądań, koordynacja modelu i widoku.</li>
          <li><b>Zalety</b>: separacja odpowiedzialności, testowalność, łatwiejsze utrzymanie.</li>
        </ul>
        <p><b>Co warto dopowiedzieć</b></p>
        <ul>
          <li><b>Przepływ</b>: request → controller → model → view → response.</li>
          <li><b>Pułapka</b>: „fat controller” — logika biznesowa powinna być w serwisach/modelu, nie w kontrolerze.</li>
        </ul>
      `,
    },
    {
      q: "2. Autoryzacja oparta na rolach (RBAC) – użycie w .NET Core.",
      aHtml: `
        <ul>
          <li><b>RBAC</b>: dostęp do zasobu zależy od roli użytkownika (Admin, User, Manager...).</li>
          <li><b>ASP.NET Core</b>: atrybut <code>[Authorize(Roles = &quot;Admin&quot;)]</code> lub polityki (AddAuthorization + RequireRole/RequireClaim).</li>
          <li><b>Źródło ról</b>: zwykle Identity/claims; autoryzacja działa po uwierzytelnieniu (kto?)</li>
        </ul>
        <p><b>Co warto dopowiedzieć</b></p>
        <ul>
          <li><b>Authentication</b> (kto?) vs <b>Authorization</b> (czy może?).</li>
          <li><b>Claims-based</b>: role to tylko szczególny przypadek claim; polityki dają większą elastyczność.</li>
          <li><b>W praktyce</b>: często łączysz role z kontrolą dostępu do „własnych zasobów” (resource-based authorization).</li>
        </ul>
        <div class="callout"><b>Haczyk</b>: role są proste, ale polityki/claims dają większą elastyczność (np. „może edytować tylko swoje dane”).</div>
      `,
    },
    {
      q: "3. Użycie instrukcji using, namespace w .NET Core.",
      aHtml: `
        <ul>
          <li><b>namespace</b>: grupuje typy i unika konfliktów nazw.</li>
          <li><b>using (dyrektywa)</b>: import przestrzeni nazw, np. <code>using System;</code>.</li>
          <li><b>using (instrukcja)</b>: deterministyczne zwolnienie zasobów dla <code>IDisposable</code> (odpowiednik try/finally).</li>
        </ul>
        <p><b>Rozwinięcie</b></p>
        <ul>
          <li><b>IDisposable</b>: pliki, strumienie, połączenia DB — trzeba zwalniać zasoby.</li>
          <li><b>using var</b>: skrócony zapis (C#) — obiekt jest zwalniany na końcu zakresu.</li>
        </ul>
      `,
    },
    {
      q: "4. Składnia Razor dla ASP.NET Core.",
      aHtml: `
        <ul>
          <li><b>Razor</b>: miesza HTML i C#; <code>@</code> przełącza w tryb kodu.</li>
          <li><b>Konstrukcje</b>: <code>@Model.Prop</code>, <code>@if (...) { }</code>, <code>@foreach (...) { }</code>, <code>@{ var x = ...; }</code>.</li>
          <li><b>Tag Helpers</b>: np. <code>asp-controller</code>, <code>asp-action</code> — generują linki/formy zgodnie z routingiem.</li>
        </ul>
        <p><b>Co warto dopowiedzieć</b></p>
        <ul>
          <li><b>Layout</b> i partial views: współdzielenie szablonu strony.</li>
          <li><b>Model binding</b>: mapowanie pól formularza na model/DTO.</li>
          <li><b>Walidacja</b>: DataAnnotations + wyświetlanie błędów w widoku.</li>
        </ul>
        <div class="callout"><b>Dopytanie</b>: Model Binding + walidacja (DataAnnotations) i jak błędy trafiają do widoku.</div>
      `,
    },
  ],
});

