/* Shared header + footer injection for every page.
   Ensures the SJA / Tax Mahir partner tagline + founder photo
   appear at the TOP and BOTTOM of every page. */

(function () {
  /* ---- shared inline SVG icon sprite (line-art, QuickBooks style) ---- */
  const SPRITE = `<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">
  <symbol id="i-book" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/><path d="M8 7h8M8 11h8"/></symbol>
  <symbol id="i-folder" viewBox="0 0 24 24"><path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></symbol>
  <symbol id="i-wallet" viewBox="0 0 24 24"><path d="M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M16 12h3M3 8h13"/></symbol>
  <symbol id="i-card" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/></symbol>
  <symbol id="i-receipt" viewBox="0 0 24 24"><path d="M5 3h14v18l-3-2-2 2-2-2-2 2-3-2z"/><path d="M9 8h6M9 12h6"/></symbol>
  <symbol id="i-building" viewBox="0 0 24 24"><path d="M4 21V5a1 1 0 011-1h8a1 1 0 011 1v16"/><path d="M14 9h5a1 1 0 011 1v11M3 21h18"/><path d="M7.5 8h3M7.5 12h3M7.5 16h3"/></symbol>
  <symbol id="i-chart" viewBox="0 0 24 24"><path d="M4 4v16h16"/><path d="M8 16v-4M12 16V8M16 16v-6"/></symbol>
  <symbol id="i-trend" viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8"/><path d="M17 7h4v4"/></symbol>
  <symbol id="i-box" viewBox="0 0 24 24"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8M12 13v8"/></symbol>
  <symbol id="i-cart" viewBox="0 0 24 24"><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h3l2.3 12a1 1 0 001 .8h9a1 1 0 001-.8L21 7H6"/></symbol>
  <symbol id="i-users" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 20c0-3.8 2.9-6 6.5-6s6.5 2.2 6.5 6"/><path d="M17 5.2a3.2 3.2 0 010 5.6M18 20c0-2.2-.6-3.8-1.6-5"/></symbol>
  <symbol id="i-factory" viewBox="0 0 24 24"><path d="M3 21V10l6 4V10l6 4V6l6 3v12z"/><path d="M7 21v-4M12 21v-4M17 21v-4"/></symbol>
  <symbol id="i-clipboard" viewBox="0 0 24 24"><rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4V3h6v1"/><path d="M9 11l2 2 4-4"/></symbol>
  <symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/></symbol>
  <symbol id="i-send" viewBox="0 0 24 24"><path d="M22 3L11 14"/><path d="M22 3l-7 19-4-8-8-4z"/></symbol>
  <symbol id="i-spark" viewBox="0 0 24 24"><path d="M12 3l1.9 4.6L18.5 9l-3.5 3 1 4.7L12 14.5 8 16.7l1-4.7L5.5 9l4.6-1.4z"/></symbol>
  <symbol id="i-cloud" viewBox="0 0 24 24"><path d="M7 18a4 4 0 010-8 5 5 0 019.6-1.5A3.5 3.5 0 0117 18z"/></symbol>
  <symbol id="i-health" viewBox="0 0 24 24"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M12 8v6M9 11h6"/></symbol>
  <symbol id="i-cap" viewBox="0 0 24 24"><path d="M22 9L12 5 2 9l10 4 10-4z"/><path d="M6 11v4c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-4"/></symbol>
  <symbol id="i-heart" viewBox="0 0 24 24"><path d="M12 20s-7-4.5-9.2-9C1.3 8 3 4.5 6.3 4.5c2 0 3.2 1.3 3.7 2.2.5-.9 1.7-2.2 3.7-2.2C21 4.5 22.7 8 21.2 11 19 15.5 12 20 12 20z"/></symbol>
  <symbol id="i-briefcase" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 12h18"/></symbol>
  <symbol id="i-truck" viewBox="0 0 24 24"><path d="M3 6h11v9H3z"/><path d="M14 9h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.5"/><circle cx="17" cy="18" r="1.5"/></symbol>
  <symbol id="i-code" viewBox="0 0 24 24"><path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 5l-2 14"/></symbol>
  <symbol id="i-dish" viewBox="0 0 24 24"><path d="M4 15h16a8 8 0 00-16 0zM2 19h20M12 11V8"/></symbol>
  <symbol id="i-globe" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/></symbol>
  <symbol id="i-monitor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></symbol>
  <symbol id="i-chat" viewBox="0 0 24 24"><path d="M4 5h16a1 1 0 011 1v9a1 1 0 01-1 1H9l-4 4v-4H4a1 1 0 01-1-1V6a1 1 0 011-1z"/></symbol>
  <symbol id="i-presentation" viewBox="0 0 24 24"><path d="M3 4h18M4 4v9a1 1 0 001 1h14a1 1 0 001-1V4M12 14v5M9 21l3-2 3 2"/><path d="M8 10l2.5-2.5L13 10l3-4"/></symbol>
  <symbol id="i-refresh" viewBox="0 0 24 24"><path d="M20 11a8 8 0 10-2 6M20 5v6h-6"/></symbol>
  <symbol id="i-award" viewBox="0 0 24 24"><circle cx="12" cy="9" r="5"/><path d="M9 13.5L8 21l4-2 4 2-1-7.5"/></symbol>
  <symbol id="i-lightbulb" viewBox="0 0 24 24"><path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 00-4 10.5c.8.8 1 1.5 1 2.5h6c0-1 .2-1.7 1-2.5A6 6 0 0012 3z"/></symbol>
  <symbol id="i-target" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></symbol>
  <symbol id="i-mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></symbol>
  <symbol id="i-phone" viewBox="0 0 24 24"><path d="M4 4h4l2 5-2.5 1.5a11 11 0 006 6L15 14l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 011-2z"/></symbol>
  <symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></symbol>
  <symbol id="i-scale" viewBox="0 0 24 24"><path d="M12 3v18M7 21h10M5 6l7-1 7 1"/><path d="M8 6l-3 6a3 3 0 006 0L8 6M16 6l-3 6a3 3 0 006 0L16 6"/></symbol>
  <symbol id="i-asset" viewBox="0 0 24 24"><path d="M20 12l-8 8-9-9V3h8z"/><circle cx="7.5" cy="7.5" r="1.4"/></symbol>
  <symbol id="i-thread" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 4v16M8 6c2 2 2 10 0 12M16 6c-2 2-2 10 0 12"/></symbol>
  </svg>`;

  const PAGES = [
    { href: "index.html", label: "Home" },
    { href: "services.html", label: "Services" },
    { href: "about.html", label: "About" },
    { href: "industries.html", label: "Industries" },
    { href: "contact.html", label: "Contact" },
  ];
  const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  const partnerText =
    'A project of <b>SJA Consultancy</b>, partnered with <span class="mahir">&lsquo;Tax Mahir&rsquo;</span>';

  /* ---------- TOP: partner strip + header ---------- */
  const NAV = [
    { label: "Products &amp; Services", href: "services.html", caret: true },
    { label: "Plans &amp; Pricing", href: "index.html#pricing" },
    { label: "Top features", href: "index.html#features", caret: true },
    { label: "Business types", href: "industries.html", caret: true },
    { label: "Resources", href: "about.html", caret: true },
  ];
  const chev =
    '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';
  const navLinks = NAV.map((n) => {
    const act = current === n.href.split("#")[0] ? "active" : "";
    return `<a href="${n.href}" class="${act}">${n.label}${n.caret ? chev : ""}</a>`;
  }).join("");

  const headerHTML = `
  <div class="promo">
    <div class="container promo-in">
      <div class="promo-who">
        <img class="avatar" src="assets/founder.jpeg" alt="Syed Jalal Ahmed — Founder & CEO, SJA Consultancy">
        <span class="tag">${partnerText}</span>
      </div>
      <div class="promo-offer">
        <span class="offer-txt">Free ERP setup &amp; data migration this month</span>
        <a class="btn btn-promo" href="contact.html">Get started</a>
      </div>
    </div>
  </div>
  <header class="site-header">
    <div class="container nav">
      <a class="brand" href="index.html">
        <img src="assets/logo.png" alt="The Tax&Books logo">
      </a>
      <nav class="nav-links" id="navLinks">${navLinks}</nav>
      <div class="nav-cta">
        <a class="sales" href="tel:+923218476753"><span>Sales</span><b>+92 321 8476753</b></a>
        <a class="signin" href="contact.html">Sign in</a>
        <a class="btn btn-primary" href="contact.html">Get started</a>
        <button class="hamburger" id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>`;

  /* ---------- BOTTOM: footer with partner tagline + founder photo ---------- */
  const footerHTML = `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <a class="brand" href="index.html"><img src="assets/logo.png" alt="The Tax&Books"></a>
          <p>Integrated business consulting, cloud ERP and AI-powered professional
          services — one unified ecosystem to run, grow and transform your business.</p>
        </div>
        <div>
          <h4>Products</h4>
          <ul>
            <li><a href="services.html">Business Consultancy</a></li>
            <li><a href="services.html">Tax&Books ERP</a></li>
            <li><a href="services.html">Consult AI</a></li>
            <li><a href="industries.html">Industries</a></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="about.html">About SJA</a></li>
            <li><a href="about.html">Leadership</a></li>
            <li><a href="industries.html">Business Model</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <ul>
            <li><a href="mailto:info@sjaconsult.pk">info@sjaconsult.pk</a></li>
            <li><a href="tel:+923218476753">+92 321 8476753</a></li>
            <li><a href="tel:+923214250013">+92 321 4250013</a></li>
            <li>Lahore, Pakistan</li>
          </ul>
        </div>
      </div>

      <div class="footer-partner">
        <img src="assets/founder.jpeg" alt="Syed Jalal Ahmed — Founder & CEO">
        <div class="txt">${partnerText}</div>
      </div>

      <div class="footer-bottom">
        <span>© <span id="yr"></span> The Tax&Books — thetaxandbooks.com. All rights reserved.</span>
        <span>A project of SJA Consultancy · partnered with &lsquo;Tax Mahir&rsquo;</span>
      </div>
    </div>
  </footer>`;

  /* inject shared icon sprite once */
  document.body.insertAdjacentHTML("afterbegin", SPRITE);

  /* inject */
  const headerMount = document.getElementById("site-header");
  const footerMount = document.getElementById("site-footer");
  if (headerMount) headerMount.innerHTML = headerHTML;
  if (footerMount) footerMount.innerHTML = footerHTML;

  const yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();

  /* mobile menu */
  const ham = document.getElementById("hamburger");
  const nav = document.getElementById("navLinks");
  if (ham && nav) ham.addEventListener("click", () => nav.classList.toggle("open"));

  /* reveal on scroll */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();
