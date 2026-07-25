# Carnets d'Altitude — mode d'emploi

Votre blog est un site "statique" : des fichiers texte (HTML/CSS/JS) sans
base de données ni serveur à gérer. C'est ce qui permet de l'héberger
gratuitement, à vie, sans limite de temps.

## Structure des fichiers

```
trek-blog/
├── index.html        → la page d'accueil (liste des treks)
├── trek.html          → le gabarit qui affiche un trek en détail
├── css/style.css      → toute l'apparence du site (couleurs, polices, mise en page)
├── js/main.js          → la logique qui construit les pages (à ne modifier
│                          que si vous êtes à l'aise)
├── data/treks.js       → VOS TREKS. C'est le seul fichier que vous
│                          modifierez régulièrement.
└── img/                 → vos photos
```

## Ajouter un trek

Ouvrez `data/treks.js` avec un éditeur de texte simple (Bloc-notes,
TextEdit, ou mieux : VS Code, gratuit). Copiez un bloc existant entre
accolades `{ ... }`, collez-le dans la liste, et changez les valeurs :

```js
{
  slug: "gr20-corse",          // identifiant unique, sans espaces ni accents
  titre: "GR20 — Corse du Nord",
  lieu: "Corse, France",
  date: "Juin 2024",
  distanceKm: 90,
  deniveleM: 8500,
  dureeJours: 8,
  difficulte: "Très difficile",
  resume: "Une phrase d'accroche affichée sur la carte d'aperçu.",
  recit: `Votre texte, sur plusieurs paragraphes.

  Laissez une ligne vide entre deux paragraphes pour qu'ils
  soient bien séparés à l'affichage.`,
  profil: [600, 1200, 2100, 1800, 2225, 1500, 2050, 1300], // altitudes en m
  photos: ["img/gr20-1.jpg", "img/gr20-2.jpg"]  // laissez [] si pas encore de photos
}
```

Le graphique de dénivelé (le tracé en haut de chaque page) se dessine
automatiquement à partir de la liste `profil` — pas besoin de créer
d'image.

## Ajouter des photos

1. Placez vos fichiers `.jpg` ou `.png` dans le dossier `img/`.
2. Dans `data/treks.js`, listez leurs noms dans le tableau `photos` du
   trek concerné, par exemple `photos: ["img/mont-blanc-1.jpg"]`.

## Prévisualiser en local avant de publier

Le plus simple : faites un clic droit sur `index.html` → *Ouvrir avec*
→ votre navigateur. Ça fonctionne pour se relire, mais certains
navigateurs bloquent le chargement d'images locales par sécurité —
ce n'est pas un problème une fois le site en ligne.

## Héberger gratuitement (GitHub Pages — recommandé)

1. Créez un compte sur [github.com](https://github.com) (gratuit).
2. Créez un nouveau dépôt ("repository"), nommez-le par exemple
   `mon-blog-trek`, cochez "Public".
3. Sur la page du dépôt, cliquez **Add file → Upload files**, puis
   glissez-déposez tout le contenu du dossier `trek-blog` (pas le
   dossier lui-même, son contenu : `index.html`, `css/`, `js/`, etc.).
4. Cliquez **Commit changes**.
5. Allez dans **Settings → Pages** (menu de gauche).
6. Sous "Branch", choisissez `main` et `/ (root)`, puis **Save**.
7. Au bout d'une ou deux minutes, votre site sera en ligne à l'adresse
   `https://votre-pseudo.github.io/mon-blog-trek/`

Pour publier une mise à jour plus tard (nouveau trek, texte modifié),
il suffit de remodifier le fichier concerné directement sur GitHub
(bouton crayon ✏️) ou de re-glisser-déposer le fichier changé.

### Alternative tout aussi gratuite : Netlify Drop
Sur [app.netlify.com/drop](https://app.netlify.com/drop), vous
glissez-déposez le dossier `trek-blog` entier dans le navigateur, et le
site est en ligne en quelques secondes, avec une adresse du type
`nom-aleatoire.netlify.app`. Encore plus simple que GitHub Pages, mais
un peu moins pratique pour les mises à jour fréquentes (il faut
re-déposer tout le dossier à chaque fois, sauf si vous créez un compte
et liez le dossier à un dépôt Git).

## Personnaliser l'apparence

Toutes les couleurs et polices sont centralisées en haut du fichier
`css/style.css`, dans le bloc `:root { ... }`. Par exemple, pour
changer la couleur d'accent principale (actuellement un ton rouille) :

```css
--rust: #b0592a;   /* remplacez ce code couleur par celui de votre choix */
```

## Nom de domaine personnalisé (optionnel, gratuit ou payant selon le cas)

Les adresses `github.io` ou `netlify.app` sont gratuites et
fonctionnent très bien. Si un jour vous voulez une adresse du type
`www.mescarnetsdaltitude.com`, il faudra acheter un nom de domaine
(quelques euros par an) et le connecter à votre hébergement gratuit —
mais ce n'est pas nécessaire pour démarrer.
