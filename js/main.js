/* ============================================================
   CARNETS D'ALTITUDE — logique du site
   Pas de framework, pas de build : tout tourne en JavaScript pur.
   ============================================================ */

// Construit un tracé SVG (chemin) à partir d'une liste d'altitudes,
// mis à l'échelle dans une zone width x height.
function buildProfilePath(values, width, height, padding = 6) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const step = (width - padding * 2) / (values.length - 1);

  const points = values.map((v, i) => {
    const x = padding + i * step;
    const y = padding + (1 - (v - min) / range) * (height - padding * 2);
    return [x, y];
  });

  const line = points.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(" ");
  const area = `${line} L${points[points.length - 1][0]},${height} L${points[0][0]},${height} Z`;

  return { line, area, min, max };
}

function sparklineSVG(values) {
  const w = 260, h = 44;
  const { line } = buildProfilePath(values, w, h, 4);
  return `<svg class="sparkline" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" aria-hidden="true">
    <path d="${line}"></path>
  </svg>`;
}

function bigProfileSVG(values) {
  const w = 1000, h = 200;
  const { line, area, min, max } = buildProfilePath(values, w, h, 10);
  const gridY = [0.25, 0.5, 0.75].map(f => 10 + f * (h - 20));
  const grid = gridY.map(y => `<line class="gridline" x1="0" y1="${y}" x2="${w}" y2="${y}"></line>`).join("");
  return `<svg class="elevation-chart-svg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" role="img" aria-label="Profil altimétrique du trek, de ${min} à ${max} mètres">
    ${grid}
    <path class="area" d="${area}"></path>
    <path class="line" d="${line}"></path>
    <text x="8" y="16">${max} m</text>
    <text x="8" y="${h - 6}">${min} m</text>
  </svg>`;
}

// Petit motif décoratif utilisé comme séparateur (élément signature du site)
function profileDividerSVG() {
  const demo = [20, 55, 30, 80, 40, 65, 25, 90, 45, 60, 20];
  const w = 1000, h = 64;
  const { line, area } = buildProfilePath(demo, w, h, 0);
  return `<svg class="profile-divider" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" aria-hidden="true">
    <path class="fill" d="${area}"></path>
    <path d="${line}"></path>
  </svg>`;
}

function difficultyBadgeClass(diff) {
  const d = diff.toLowerCase();
  if (d.includes("très") || d.includes("tres")) return "hard";
  if (d.includes("difficile")) return "hard";
  return "";
}

// ---------- Page: accueil (index.html) ----------

function renderHome() {
  const grid = document.getElementById("trek-grid");
  const count = document.getElementById("trek-count");
  if (!grid) return;

  if (typeof TREKS === "undefined" || TREKS.length === 0) {
    grid.innerHTML = `<div class="empty">Aucun trek pour l'instant — ajoutez-en un dans data/treks.js</div>`;
    return;
  }

  count.textContent = `${TREKS.length} récit${TREKS.length > 1 ? "s" : ""}`;

  grid.innerHTML = TREKS.map(t => `
    <a class="trek-card" href="trek.html?t=${encodeURIComponent(t.slug)}">
      <div class="card-top">
        <h3>${t.titre}</h3>
        <span class="badge ${difficultyBadgeClass(t.difficulte)}">${t.difficulte}</span>
      </div>
      <div class="meta">${t.lieu} — ${t.date}</div>
      ${sparklineSVG(t.profil)}
      <p class="resume">${t.resume}</p>
      <div class="card-stats">
        <span><b>${t.distanceKm} km</b>distance</span>
        <span><b>+${t.deniveleM.toLocaleString("fr-FR")} m</b>dénivelé</span>
        <span><b>${t.dureeJours} j</b>durée</span>
      </div>
    </a>
  `).join("");
}

// ---------- Page: détail (trek.html) ----------

function renderDetail() {
  const root = document.getElementById("trek-detail");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("t");
  const treksList = typeof TREKS !== "undefined" ? TREKS : [];
  const trek = treksList.find(t => t.slug === slug) || treksList[0];

  if (!trek) {
    root.innerHTML = `<div class="empty">Trek introuvable. <a href="index.html">Retour à l'accueil</a></div>`;
    return;
  }

  document.title = `${trek.titre} — Carnets d'Altitude`;

  const photosHTML = (trek.photos && trek.photos.length > 0)
    ? trek.photos.map(src => `<div class="ph"><img src="${src}" alt="${trek.titre}" loading="lazy"></div>`).join("")
    : Array.from({ length: 4 }).map(() => `<div class="ph">Ajoutez vos photos<br>dans /img et<br>listez-les dans<br>data/treks.js</div>`).join("");

  const mapHTML = trek.gpx ? `<div id="trek-map" class="trek-map"></div>` : "";
  const elevationHTML = trek.gpx
    ? `<div class="loading">Chargement du profil depuis le GPX…</div>`
    : bigProfileSVG(trek.profil);

  root.innerHTML = `
    <a class="back-link" href="index.html">&larr; Tous les treks</a>
    <div class="detail-hero">
      <div class="lieu">${trek.lieu}</div>
      <h1>${trek.titre}</h1>
    </div>

    <div class="stat-strip">
      <div class="stat"><span class="n">${trek.distanceKm}</span><span class="label">Kilomètres</span></div>
      <div class="stat"><span class="n">+${trek.deniveleM.toLocaleString("fr-FR")}</span><span class="label">Dénivelé (m)</span></div>
      <div class="stat"><span class="n">${trek.dureeJours}</span><span class="label">Jours</span></div>
      <div class="stat"><span class="n">${trek.difficulte}</span><span class="label">Difficulté</span></div>
    </div>

    ${mapHTML}

    <div class="elevation-chart" id="elevation-chart">${elevationHTML}</div>

    <div class="recit">${trek.recit.split("\n\n").map(p => `<p>${p}</p>`).join("")}</div>

    <div class="section-head"><h2>Photos</h2></div>
    <div class="gallery">${photosHTML}</div>
  `;

  if (trek.gpx) {
    initGPXMap(trek.gpx);
  }
}

// Charge un fichier .gpx, en extrait le tracé et les altitudes nous-mêmes
// (on n'utilise pas de librairie tierce pour ce calcul, pour rester robuste
// même si certains points du GPX n'ont pas d'altitude renseignée).
async function initGPXMap(gpxUrl) {
  const mapEl = document.getElementById("trek-map");
  const chartEl = document.getElementById("elevation-chart");

  try {
    const res = await fetch(gpxUrl);
    if (!res.ok) throw new Error("Fichier introuvable (" + res.status + ")");
    const text = await res.text();
    const xml = new DOMParser().parseFromString(text, "application/xml");

    if (xml.querySelector("parsererror")) throw new Error("GPX mal formé");

    const trkpts = Array.from(xml.querySelectorAll("trkpt"));
    if (trkpts.length === 0) throw new Error("Aucun point de trace trouvé");

    const points = trkpts.map((pt) => {
      const lat = parseFloat(pt.getAttribute("lat"));
      const lon = parseFloat(pt.getAttribute("lon"));
      const eleEl = pt.querySelector("ele");
      const ele = eleEl ? parseFloat(eleEl.textContent) : null;
      return { lat, lon, ele };
    });

    // ---- Carte + tracé ----
    const map = L.map(mapEl);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
      maxZoom: 18
    }).addTo(map);

    const latlngs = points.map((p) => [p.lat, p.lon]);
    const track = L.polyline(latlngs, { color: "#b0592a", weight: 3.5, opacity: 0.9 }).addTo(map);
    map.fitBounds(track.getBounds(), { padding: [20, 20] });

    L.circleMarker(latlngs[0], { radius: 6, color: "#1f2b24", weight: 2, fillColor: "#6b7a4f", fillOpacity: 1 })
      .bindTooltip("Départ").addTo(map);
    L.circleMarker(latlngs[latlngs.length - 1], { radius: 6, color: "#1f2b24", weight: 2, fillColor: "#b0592a", fillOpacity: 1 })
      .bindTooltip("Arrivée").addTo(map);

    // ---- Profil altimétrique ----
    const elevations = points.map((p) => p.ele).filter((e) => e !== null && !Number.isNaN(e));
    if (chartEl) {
      chartEl.innerHTML = elevations.length > 1
        ? bigProfileSVG(elevations)
        : `<div class="loading">Ce fichier GPX ne contient pas de données d'altitude</div>`;
    }
  } catch (err) {
    if (chartEl) chartEl.innerHTML = `<div class="loading">Impossible de charger le profil (${err.message})</div>`;
    if (mapEl) mapEl.innerHTML = `<div class="loading">Impossible de charger la carte (${err.message})</div>`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".profile-divider-slot").forEach(el => {
    el.innerHTML = profileDividerSVG();
  });
  renderHome();
  renderDetail();
});
