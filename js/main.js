/* Black Clover Yugen — Règlement */
const SEARCH_INDEX = [
  { title: "Communication et Tickets", section: "Règlement Général", url: "reglement-general.html#communication", keywords: "ticket staff discord politesse soundboard voix" },
  { title: "Duel et Pouvoirs", section: "Règlement Général", url: "reglement-general.html#duel", keywords: "combat duel passif gemmes capture" },
  { title: "Comportement et respect", section: "Règlement Général", url: "reglement-general.html#comportement", keywords: "insulte harcèlement HRP ban respect" },
  { title: "Utilisation du Matériel et du Jeu", section: "Règlement Général", url: "reglement-general.html#materiel", keywords: "physicgun transport skin nom marché noir" },
  { title: "Action RP", section: "Règlement Général", url: "reglement-general.html#action-rp", keywords: "/me streamstalk parkour zone erotisme" },
  { title: "Porter un cadavre", section: "Règlement Général", url: "reglement-general.html#cadavre", keywords: "porter relever capture médical" },
  { title: "Principe Général du RP", section: "Notions RP", url: "notions-rp.html#principe", keywords: "roleplay fair-play immersion" },
  { title: "Comportement RP", section: "Notions RP", url: "notions-rp.html#comportement-rp", keywords: "HRP provocation humiliation" },
  { title: "Freekill", section: "Notions RP", url: "notions-rp.html#freekill", keywords: "tuer mort sans raison" },
  { title: "NLR (New Life Rule)", section: "Notions RP", url: "notions-rp.html#nlr", keywords: "mort oublier vie précédente" },
  { title: "NoFearRP", section: "Notions RP", url: "notions-rp.html#nofear", keywords: "peur danger empereur mage" },
  { title: "Metagaming", section: "Notions RP", url: "notions-rp.html#metagaming", keywords: "HRP discord stream interface" },
  { title: "FreePunch", section: "Notions RP", url: "notions-rp.html#freepunch", keywords: "frapper /me" },
  { title: "TeamKill", section: "Notions RP", url: "notions-rp.html#teamkill", keywords: "faction allié trahison" },
  { title: "Abus de Props et Exploits", section: "Notions RP", url: "notions-rp.html#exploits", keywords: "usebug autoclick propsboost propsblock propsfly" },
  { title: "Fear RP en combat", section: "Combats & Puissance", url: "combats-puissance.html#fear-rp", keywords: "peur fuite rendre hiérarchie" },
  { title: "Équivalence de Puissance", section: "Combats & Puissance", url: "combats-puissance.html#equivalence", keywords: "faible fort puissant surpuissant triade" },
  { title: "NLR en combat", section: "Combats & Puissance", url: "combats-puissance.html#nlr-combat", keywords: "10 minutes 30 minutes médicale zone" },
  { title: "Limitations des Hauts Gradés", section: "Combats & Puissance", url: "combats-puissance.html#hg-zones", keywords: "zone dangereuse triade empereur mage" },
  { title: "Capture de Point", section: "Combats & Puissance", url: "combats-puissance.html#capture", keywords: "drapeau patrouille mine fortifier" },
  { title: "Restrictions de combat", section: "Combats & Puissance", url: "combats-puissance.html#restrictions", keywords: "portail balais animation relever" },
  { title: "Équivalence des Grades", section: "Grades & Factions", url: "grades-factions.html#equivalence", keywords: "faible fort puissant dangereux conseiller" },
  { title: "Transfert de Faction", section: "Grades & Factions", url: "grades-factions.html#transfert", keywords: "trahison ticket discord" },
  { title: "Double RP HG", section: "Grades & Factions", url: "grades-factions.html#double-rp", keywords: "second personnage très puissant" },
  { title: "Captures et relèves", section: "Relève", url: "releve.html#captures", keywords: "mission enquête objectif CKT torture" },
  { title: "Équivalence d'aura (relève)", section: "Relève", url: "releve.html#equivalence-aura", keywords: "relever surpuissant safe rp" },
  { title: "CK (Character Kill)", section: "CK – RPK", url: "ck-rpk.html#ck", keywords: "mort personnage trahison duel" },
  { title: "RPK (RolePlay Kill)", section: "CK – RPK", url: "ck-rpk.html#rpk", keywords: "mort définitive whitelist rang" },
  { title: "HARD RPK", section: "CK – RPK", url: "ck-rpk.html#hard-rpk", keywords: "items runes niveaux retrait" },
  { title: "Discord Centrale", section: "Liens Utiles", url: "liens-utiles.html#discord-centrale", keywords: "discord principal annonces tickets" },
  { title: "Discord Clover", section: "Liens Utiles", url: "liens-utiles.html#discord-clover", keywords: "discord faction clover" },
  { title: "Discord Spade", section: "Liens Utiles", url: "liens-utiles.html#discord-spade", keywords: "discord faction spade" },
  { title: "Boutique Yugen RP", section: "Liens Utiles", url: "liens-utiles.html#boutique", keywords: "shop achat yugenrp.com" },
  { title: "IP du serveur", section: "Liens Utiles", url: "liens-utiles.html#ip", keywords: "connecter garry's mod 185.29.166.215 steam" },
];

function initHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
  });

  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === current || (current === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
}

function initMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

function initSearch(input, results) {
  if (!input || !results) return;

  let debounce;

  function renderResults(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      results.classList.remove("visible");
      results.innerHTML = "";
      return;
    }

    const matches = SEARCH_INDEX.filter((item) => {
      const haystack = `${item.title} ${item.section} ${item.keywords}`.toLowerCase();
      return haystack.includes(q);
    }).slice(0, 8);

    if (matches.length === 0) {
      results.innerHTML = '<div class="search-no-results">Aucun résultat trouvé</div>';
    } else {
      results.innerHTML = matches
        .map(
          (item) => `
        <a href="${item.url}" class="search-result-item">
          <div class="search-result-title">${highlightMatch(item.title, q)}</div>
          <div class="search-result-section">${item.section}</div>
        </a>`
        )
        .join("");
    }
    results.classList.add("visible");
  }

  function highlightMatch(text, query) {
    const idx = text.toLowerCase().indexOf(query);
    if (idx === -1) return text;
    return (
      text.slice(0, idx) +
      "<strong>" +
      text.slice(idx, idx + query.length) +
      "</strong>" +
      text.slice(idx + query.length)
    );
  }

  input.addEventListener("input", (e) => {
    clearTimeout(debounce);
    debounce = setTimeout(() => renderResults(e.target.value), 150);
  });

  input.addEventListener("focus", () => {
    if (input.value.trim()) renderResults(input.value);
  });

  document.addEventListener("click", (e) => {
    if (!input.contains(e.target) && !results.contains(e.target)) {
      results.classList.remove("visible");
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      results.classList.remove("visible");
      input.blur();
    }
  });
}

function initReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  elements.forEach((el) => observer.observe(el));
}

function initRipple() {
  document.querySelectorAll(".btn, .card").forEach((el) => {
    el.addEventListener("click", function (e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement("span");
      ripple.className = "ripple";
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = e.clientX - rect.left - size / 2 + "px";
      ripple.style.top = e.clientY - rect.top - size / 2 + "px";
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

function initCards() {
  document.querySelectorAll(".card[data-href]").forEach((card) => {
    card.style.cursor = "pointer";
    card.addEventListener("click", () => {
      window.location.href = card.dataset.href;
    });
  });
}

function initCopyIp() {
  const btn = document.getElementById("copy-ip-btn");
  const feedback = document.getElementById("copy-feedback");
  if (!btn) return;

  btn.addEventListener("click", async () => {
    const ip = "185.29.166.215:27025";
    try {
      await navigator.clipboard.writeText(ip);
      if (feedback) {
        feedback.style.display = "block";
        setTimeout(() => { feedback.style.display = "none"; }, 2500);
      }
    } catch {
      prompt("Copiez l'IP du serveur :", ip);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initMobileMenu();
  document.querySelectorAll(".search-wrapper").forEach((wrapper) => {
    initSearch(
      wrapper.querySelector(".search-input"),
      wrapper.querySelector(".search-results")
    );
  });
  initReveal();
  initRipple();
  initCards();
  initCopyIp();
});
