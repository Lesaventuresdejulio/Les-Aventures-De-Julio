/* ============================================================
   CARNETS D'ALTITUDE — feuille de style
   Système de design : carte topographique / balisage de sentier
   ============================================================ */

@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil:wght@500;700;900&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&family=JetBrains+Mono:wght@400;500;700&display=swap');

:root {
  --paper: #eaede8;
  --paper-raised: #dfe2d8;
  --ink: #1f2b24;
  --ink-soft: #48584c;
  --rust: #b0592a;
  --rust-dark: #8a4520;
  --glacier: #4c7a82;
  --moss: #6b7a4f;
  --contour: #c9c2ae;
  --contour-strong: #a89f86;

  --display: 'Big Shoulders Stencil', sans-serif;
  --body: 'Source Serif 4', Georgia, serif;
  --mono: 'JetBrains Mono', monospace;

  --max-w: 1080px;
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  background: var(--paper);
  background-image:
    repeating-linear-gradient(0deg, transparent, transparent 79px, var(--contour) 80px),
    repeating-linear-gradient(90deg, transparent, transparent 79px, var(--contour) 80px);
  background-size: 80px 80px;
  background-attachment: fixed;
  color: var(--ink);
  font-family: var(--body);
  font-size: 17px;
  line-height: 1.6;
}

a { color: var(--rust); text-decoration: none; }
a:hover { text-decoration: underline; }
a:focus-visible, button:focus-visible { outline: 3px solid var(--glacier); outline-offset: 2px; }

.wrap { max-width: var(--max-w); margin: 0 auto; padding: 0 24px; }

/* ---------- Header ---------- */

.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 0;
  border-bottom: 3px solid var(--ink);
}

.brand {
  display: flex;
  align-items: baseline;
  gap: 10px;
  color: var(--ink);
  text-decoration: none;
}

.brand:hover { text-decoration: none; }

.brand-mark {
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.15em;
  color: var(--rust);
  border: 1.5px solid var(--rust);
  padding: 2px 6px;
  border-radius: 2px;
}

.brand-name {
  font-family: var(--display);
  font-weight: 700;
  font-size: 26px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.site-nav a {
  font-family: var(--mono);
  font-size: 13px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-soft);
  margin-left: 22px;
}
.site-nav a:hover { color: var(--rust); }

/* ---------- Hero ---------- */

.hero {
  padding: 72px 0 40px;
  position: relative;
}

.hero-eyebrow {
  font-family: var(--mono);
  font-size: 13px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--glacier);
  margin: 0 0 14px;
}

.hero h1 {
  font-family: var(--display);
  font-size: clamp(52px, 9vw, 108px);
  line-height: 0.92;
  margin: 0 0 22px;
  text-transform: uppercase;
  color: var(--ink);
}

.hero h1 em {
  font-style: normal;
  color: var(--rust);
}

.hero p {
  max-width: 46ch;
  color: var(--ink-soft);
  font-size: 19px;
}

/* Signature element: elevation-profile divider */
.profile-divider {
  width: 100%;
  height: 64px;
  margin: 36px 0;
  display: block;
}
.profile-divider path {
  fill: none;
  stroke: var(--rust);
  stroke-width: 2.5;
}
.profile-divider .fill {
  fill: var(--paper-raised);
  stroke: none;
}

/* ---------- Stats strip ---------- */

.stat-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  border-top: 1.5px solid var(--contour-strong);
  border-bottom: 1.5px solid var(--contour-strong);
  margin: 10px 0 48px;
}

.stat-strip .stat {
  flex: 1 1 140px;
  padding: 16px 20px;
  border-right: 1.5px solid var(--contour-strong);
}
.stat-strip .stat:last-child { border-right: none; }

.stat .n {
  display: block;
  font-family: var(--mono);
  font-weight: 700;
  font-size: 26px;
  color: var(--rust);
}
.stat .label {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-soft);
}

/* ---------- Section headings ---------- */

.section-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin: 0 0 26px;
}

.section-head h2 {
  font-family: var(--display);
  text-transform: uppercase;
  font-size: 34px;
  margin: 0;
  letter-spacing: 0.01em;
}

.section-head .count {
  font-family: var(--mono);
  font-size: 13px;
  color: var(--ink-soft);
}

/* ---------- Trek cards ---------- */

.trek-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 22px;
  margin-bottom: 80px;
}

.trek-card {
  background: var(--paper-raised);
  border: 1.5px solid var(--ink);
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: var(--ink);
  text-decoration: none;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  position: relative;
}

.trek-card:hover {
  text-decoration: none;
  transform: translate(-3px, -3px);
  box-shadow: 5px 5px 0 var(--ink);
}

.trek-card .card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
}

.trek-card h3 {
  font-family: var(--display);
  text-transform: uppercase;
  font-size: 25px;
  margin: 0;
  line-height: 1;
}

.badge {
  font-family: var(--mono);
  font-size: 10.5px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 3px 8px;
  border: 1.5px solid var(--moss);
  color: var(--moss);
  white-space: nowrap;
  flex-shrink: 0;
}
.badge.hard { border-color: var(--rust); color: var(--rust); }

.trek-card .meta {
  font-family: var(--mono);
  font-size: 12.5px;
  color: var(--ink-soft);
}

.trek-card .sparkline {
  width: 100%;
  height: 44px;
}
.trek-card .sparkline path {
  fill: none;
  stroke: var(--glacier);
  stroke-width: 2;
}

.trek-card .resume {
  font-size: 15px;
  color: var(--ink-soft);
  margin: 0;
}

.trek-card .card-stats {
  display: flex;
  gap: 18px;
  font-family: var(--mono);
  font-size: 12px;
  margin-top: auto;
  padding-top: 10px;
  border-top: 1px dashed var(--contour-strong);
}
.trek-card .card-stats b { color: var(--ink); font-size: 14px; display: block; }

/* ---------- Trek detail page ---------- */

.detail-hero {
  padding: 44px 0 10px;
}

.back-link {
  font-family: var(--mono);
  font-size: 13px;
  color: var(--ink-soft);
  display: inline-block;
  margin-bottom: 24px;
}

.detail-hero .lieu {
  font-family: var(--mono);
  font-size: 14px;
  color: var(--glacier);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.detail-hero h1 {
  font-family: var(--display);
  text-transform: uppercase;
  font-size: clamp(42px, 7vw, 76px);
  line-height: 0.95;
  margin: 8px 0 20px;
}

.elevation-chart {
  width: 100%;
  height: 200px;
  background: var(--paper-raised);
  border: 1.5px solid var(--ink);
  margin: 24px 0 48px;
}
.elevation-chart-svg { width: 100%; height: 100%; display: block; }
.elevation-chart .area { fill: rgba(176, 89, 42, 0.16); stroke: none; }
.elevation-chart .line { fill: none; stroke: var(--rust); stroke-width: 2.5; }
.elevation-chart .gridline { stroke: var(--contour); stroke-width: 1; }
.elevation-chart text {
  font-family: var(--mono);
  font-size: 10px;
  fill: var(--ink-soft);
}

.recit {
  max-width: 68ch;
  font-size: 18.5px;
  white-space: pre-line;
  margin-bottom: 56px;
}

.recit p { margin: 0 0 20px; }

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
  margin-bottom: 70px;
}

.gallery .ph {
  aspect-ratio: 4 / 3;
  border: 1.5px solid var(--ink);
  background:
    repeating-linear-gradient(135deg, var(--paper-raised), var(--paper-raised) 10px, var(--paper) 10px, var(--paper) 20px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--mono);
  font-size: 11px;
  color: var(--ink-soft);
  text-align: center;
  padding: 10px;
}

.gallery img { width: 100%; height: 100%; object-fit: cover; }

/* ---------- Footer ---------- */

.site-footer {
  border-top: 3px solid var(--ink);
  padding: 28px 0 60px;
  font-family: var(--mono);
  font-size: 12.5px;
  color: var(--ink-soft);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
}

/* ---------- Empty state ---------- */

.empty {
  padding: 60px 20px;
  text-align: center;
  border: 1.5px dashed var(--contour-strong);
  color: var(--ink-soft);
  font-family: var(--mono);
  font-size: 14px;
}

@media (max-width: 640px) {
  .site-header { flex-direction: column; align-items: flex-start; gap: 12px; }
  .site-nav a { margin-left: 0; margin-right: 18px; }
  .stat-strip .stat { border-right: none; border-bottom: 1.5px solid var(--contour-strong); flex: 1 1 45%; }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .trek-card { transition: none; }
}
