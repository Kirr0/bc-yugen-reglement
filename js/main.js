/* Black Clover Yugen — Règlement */
const SERVER_BATTLEMETRICS_ID = "36758575";
const REGLEMENT_LAST_UPDATED = "2026-06-07";

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
  { title: "Statut du serveur", section: "Liens Utiles", url: "liens-utiles.html#ip", keywords: "en ligne joueurs connectés" },
];

const SECTION_TO_CATEGORY = {
  "Règlement Général": "reglement",
  "Notions RP": "notions",
  "Combats & Puissance": "combats",
  "Grades & Factions": "grades",
  "Relève": "releve",
  "CK – RPK": "ck",
  "Liens Utiles": "liens",
};

const CATEGORY_LABELS = {
  all: "Tous",
  reglement: "Règlement",
  notions: "Notions RP",
  combats: "Combats",
  grades: "Grades",
  releve: "Relève",
  ck: "CK / RPK",
  liens: "Liens",
};

const CATEGORY_ORDER = ["reglement", "notions", "combats", "grades", "releve", "ck", "liens"];

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

function getTextMatches(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return SEARCH_INDEX.filter((item) => {
    const haystack = `${item.title} ${item.section} ${item.keywords}`.toLowerCase();
    return haystack.includes(q);
  });
}

function initSearch(input, results, options = {}) {
  if (!input || !results) return null;

  let debounce;
  let activeCategory = "all";
  const wrapper = input.closest(".search-wrapper");

  function renderResults(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      results.classList.remove("visible");
      results.innerHTML = "";
      activeCategory = "all";
      return;
    }

    const textMatches = getTextMatches(query);
    const availableCategories = CATEGORY_ORDER.filter((cat) =>
      textMatches.some((item) => SECTION_TO_CATEGORY[item.section] === cat)
    );

    const matches = textMatches
      .filter((item) => {
        if (activeCategory === "all") return true;
        return SECTION_TO_CATEGORY[item.section] === activeCategory;
      })
      .slice(0, 8);

    let html = "";

    if (availableCategories.length > 1) {
      const filters = ["all", ...availableCategories]
        .map(
          (cat) => `
        <button type="button" class="search-filter${cat === activeCategory ? " active" : ""}" data-category="${cat}">
          ${CATEGORY_LABELS[cat]}
        </button>`
        )
        .join("");
      html += `<div class="search-filters">${filters}</div>`;
    }

    if (matches.length === 0) {
      html += '<div class="search-no-results">Aucun résultat dans cette catégorie</div>';
    } else {
      html += matches
        .map(
          (item) => `
        <a href="${item.url}" class="search-result-item">
          <div class="search-result-title">${highlightMatch(item.title, q)}</div>
          <div class="search-result-section">${item.section}</div>
        </a>`
        )
        .join("");
    }

    results.innerHTML = html;
    results.classList.add("visible");

    results.querySelectorAll(".search-filter").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        activeCategory = btn.dataset.category;
        renderResults(input.value);
      });
    });
  }

  input.addEventListener("input", (e) => {
    activeCategory = "all";
    clearTimeout(debounce);
    debounce = setTimeout(() => renderResults(e.target.value), 150);
  });

  input.addEventListener("focus", () => {
    if (input.value.trim()) renderResults(input.value);
  });

  document.addEventListener("click", (e) => {
    const inWrapper = wrapper && wrapper.contains(e.target);
    if (!inWrapper) {
      results.classList.remove("visible");
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      results.classList.remove("visible");
      input.blur();
      if (options.onEscape) options.onEscape();
    }
  });

  return {
    focus() {
      input.focus();
      if (input.value.trim()) renderResults(input.value);
    },
    open() {
      input.focus();
    },
  };
}

function isSearchInputVisible(input) {
  if (!input) return false;
  const wrapper = input.closest(".search-wrapper");
  if (!wrapper || wrapper.offsetParent === null) return false;
  return getComputedStyle(wrapper).display !== "none";
}

function getVisibleSearchInput() {
  const headerInput = document.querySelector(".site-header .search-input");
  if (isSearchInputVisible(headerInput)) return headerInput;

  const heroInput = document.querySelector(".hero-search .search-input");
  if (isSearchInputVisible(heroInput)) return heroInput;

  return null;
}

function initSearchPalette() {
  if (document.querySelector(".search-palette")) return;

  const palette = document.createElement("div");
  palette.className = "search-palette";
  palette.setAttribute("role", "dialog");
  palette.setAttribute("aria-label", "Recherche rapide");
  palette.innerHTML = `
    <div class="search-palette-backdrop"></div>
    <div class="search-palette-box">
      <div class="search-wrapper">
        <span class="search-icon">🔍</span>
        <input type="search" class="search-input" placeholder="Rechercher une règle…" autocomplete="off">
        <div class="search-results"></div>
      </div>
      <p class="search-palette-hint"><kbd>Échap</kbd> pour fermer</p>
    </div>
  `;
  document.body.appendChild(palette);

  const input = palette.querySelector(".search-input");
  const results = palette.querySelector(".search-results");
  const backdrop = palette.querySelector(".search-palette-backdrop");

  const controller = initSearch(input, results, {
    onEscape() {
      closeSearchPalette();
    },
  });
  input._searchController = controller;

  function closeSearchPalette() {
    palette.classList.remove("open");
    input.value = "";
    results.classList.remove("visible");
    results.innerHTML = "";
  }

  backdrop.addEventListener("click", closeSearchPalette);
  palette._close = closeSearchPalette;
  palette._open = () => {
    palette.classList.add("open");
    controller.open();
  };
}

function openSearch() {
  const input = getVisibleSearchInput();
  if (input?._searchController) {
    document.querySelector(".search-palette")?._close?.();
    input.scrollIntoView({ behavior: "smooth", block: "center" });
    input._searchController.focus();
    return;
  }

  const palette = document.querySelector(".search-palette");
  if (palette) palette._open();
}

function initSearchShortcut() {
  initSearchPalette();

  document.querySelectorAll(".site-header .search-wrapper").forEach((wrapper) => {
    if (wrapper.querySelector(".search-kbd-hint")) return;
    const hint = document.createElement("span");
    hint.className = "search-kbd-hint";
    hint.innerHTML = "<kbd>Ctrl</kbd>+<kbd>K</kbd>";
    wrapper.appendChild(hint);
  });

  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      openSearch();
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

function applyServerStatus(online, players, maxPlayers) {
  document.querySelectorAll("[data-server-players]").forEach((el) => {
    if (online) {
      el.textContent = `${players} / ${maxPlayers} joueurs`;
      el.classList.add("online");
      el.classList.remove("offline");
    } else {
      el.textContent = "Serveur hors ligne";
      el.classList.add("offline");
      el.classList.remove("online");
    }
  });
}

async function initServerStatus() {
  if (!document.querySelector("[data-server-status-widget]")) return;

  try {
    const res = await fetch(`https://api.battlemetrics.com/servers/${SERVER_BATTLEMETRICS_ID}`);
    if (!res.ok) throw new Error("API error");
    const attrs = (await res.json())?.data?.attributes;
    if (!attrs) throw new Error("No data");
    applyServerStatus(
      attrs.status === "online",
      attrs.players ?? 0,
      attrs.maxPlayers ?? "?"
    );
  } catch {
    document.querySelectorAll("[data-server-players]").forEach((el) => {
      el.textContent = "—";
      el.classList.remove("online", "offline");
    });
  }
}

function formatLastUpdated() {
  return new Date(`${REGLEMENT_LAST_UPDATED}T12:00:00`).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function initLastUpdated() {
  const formatted = formatLastUpdated();

  document.querySelectorAll("[data-last-updated]").forEach((el) => {
    el.textContent = formatted;
    el.setAttribute("datetime", REGLEMENT_LAST_UPDATED);
  });

  document.querySelectorAll(".site-footer").forEach((footer) => {
    if (footer.querySelector(".footer-updated")) return;
    const p = document.createElement("p");
    p.className = "footer-updated";
    p.innerHTML = `Dernière mise à jour : <time datetime="${REGLEMENT_LAST_UPDATED}">${formatted}</time>`;
    footer.appendChild(p);
  });
}

function initBackToTop() {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "back-to-top";
  btn.setAttribute("aria-label", "Retour en haut");
  btn.innerHTML = "↑";
  document.body.appendChild(btn);

  const toggle = () => btn.classList.toggle("visible", window.scrollY > 400);

  window.addEventListener("scroll", toggle, { passive: true });
  toggle();

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
    const input = wrapper.querySelector(".search-input");
    const results = wrapper.querySelector(".search-results");
    if (wrapper.closest(".search-palette")) return;
    const controller = initSearch(input, results);
    if (controller) input._searchController = controller;
  });
  initSearchShortcut();
  initReveal();
  initRipple();
  initCards();
  initCopyIp();
  initServerStatus();
  initLastUpdated();
  initBackToTop();
});
