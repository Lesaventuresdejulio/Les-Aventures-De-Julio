/* ============================================================
   DONNÉES DES TREKS
   ============================================================
   Pour ajouter un nouveau trek : copiez un bloc { ... } entier,
   collez-le dans le tableau, et modifiez les valeurs.

   - "slug" doit être unique (utilisé dans l'URL trek.html?t=slug)
   - "profil" est une liste d'altitudes (en mètres). Utilisé
     uniquement si vous n'avez PAS de fichier gpx (voir plus bas).
   - "gpx" (optionnel) : chemin vers un fichier .gpx déposé dans
     le dossier /gpx (ex: "gpx/mon-trek.gpx"). Si présent, une
     vraie carte s'affiche et le profil est calculé automatiquement
     à partir du fichier — le champ "profil" est alors ignoré.
   - "journal" : c'est ici que vous racontez votre trek, comme un
     vrai carnet. C'est une LISTE d'entrées, dans l'ordre où elles
     doivent apparaître. Chaque entrée est soit :

       { type: "texte", texte: "Un paragraphe, ou plusieurs
         séparés par une ligne vide." }

       { type: "photo", src: "img/mon-trek-1.jpg", legende: "Ce
         qu'on voit sur la photo (facultatif)" }

     Mélangez-les librement : texte, photo, texte, photo, photo,
     texte... exactement comme vous le raconteriez dans un carnet.
     Si vous n'avez pas encore la photo, laissez src: "" — un
     encadré de remplacement s'affichera à sa place.
   ============================================================ */

const TREKS = [
  {
    slug: "tour-du-mont-blanc",
    titre: "Tour du Mont Blanc",
    lieu: "Alpes — France, Italie, Suisse",
    date: "Août 2025",
    distanceKm: 170,
    deniveleM: 10000,
    dureeJours: 11,
    difficulte: "Difficile",
    resume: "Onze jours à faire le tour du toit de l'Europe, entre trois pays et une bonne dizaine de cols.",
    profil: [1000, 1450, 1200, 2100, 2537, 1700, 1900, 2650, 1600, 2400, 2100, 1000],
    journal: [
      {
        type: "texte",
        texte: `Le TMB, ce n'est pas un trek, c'est une boucle qu'on referme sur soi-même. Onze jours, trois frontières, et cette sensation particulière de voir le même massif sous tous ses angles.`
      },
      {
        type: "photo",
        src: "",
        legende: "Remplacez par une de vos photos (ex: img/tmb-jour1.jpg)"
      },
      {
        type: "texte",
        texte: `Remplacez ce texte par votre propre récit : les rencontres, les cols qui font mal aux jambes, la météo qui change en une heure, le refuge où vous avez le mieux dormi. C'est ici que vit vraiment le blog.`
      }
    ]
  },
  {
    slug: "gr20-corse",
    titre: "GR20 — Corse du Nord",
    lieu: "Corse, France",
    date: "Juin 2024",
    distanceKm: 90,
    deniveleM: 8500,
    dureeJours: 8,
    difficulte: "Très difficile",
    resume: "La première moitié du GR20, réputé comme l'un des sentiers de grande randonnée les plus exigeants d'Europe.",
    profil: [600, 1200, 2100, 1800, 2225, 1500, 2050, 1300],
    journal: [
      {
        type: "texte",
        texte: `Remplacez ce texte par votre récit : les crêtes, la chaleur, les mains sur la roche dans les passages câblés, le bivouac sous les étoiles.`
      },
      {
        type: "photo",
        src: "",
        legende: ""
      }
    ]
  },
  {
    slug: "cervin-tour",
    titre: "Tour du Cervin",
    lieu: "Valais, Suisse / Vallée d'Aoste, Italie",
    date: "Juillet 2023",
    distanceKm: 140,
    deniveleM: 9000,
    dureeJours: 9,
    difficulte: "Modéré à difficile",
    resume: "Neuf jours autour de l'une des montagnes les plus photographiées au monde, vue sous tous les angles possibles.",
    profil: [1600, 2200, 2800, 2400, 3000, 2600, 2900, 2100, 1600],
    journal: [
      {
        type: "texte",
        texte: `Remplacez ce texte par votre récit personnel de ce trek.`
      }
    ]
  },
  {
    slug: "gr5-alpes",
    titre: "GR5 — La Traversée Des Alpes",
    lieu: "Alpes, France",
    date: "Août 2025",
    distanceKm: 600,
    deniveleM: 30000,
    dureeJours: 26,
    difficulte: "Très difficile",
    resume: "Une phrase d'accroche affichée sur la carte d'aperçu.",
    gpx: "gpx/traversee-des-alpes.gpx",
    profil: [600, 1200, 2100, 1800, 2225, 1500, 2050, 1300],
    journal: [
      {
        type: "texte",
        texte: `Jeudi 24 Juillet 2025 - Le Grand Départ

        Après une journée passée dans le train, mon aventure commence à Thonon-les-bains. Après quelques kilomètres à travers bitume et forêt, je monte vite ma tente entre deux averses. L'excitation du départ me fais complètement oublié la fine pluie qui se dépose sur ma toile.

Laissez une ligne vide entre deux paragraphes pour qu'ils soient bien séparés à l'affichage.`
      },
      {
        type: "photo",
        src: "",
        legende: ""
      }
      {
        type: "texte",
        texte: `Vendredi 25 Juillet 2025 - Les premiers paysages et la première tempête

        La journée débute dans la forêt brumeuse puis se découvre à l'approche des alpages. Les pelouses verdoyantes qui recouvraient les crêtes laissent place aux lacs de montagne cachés autour d'importants. A l'approche du col de bise, point culminant de la journée, une famille de bouquetins se laisse doucement observer. En redescendant on peut observer le refuge de bise a côté duquel je vais sejourner ce soir. La nuit fut difficile entre les chèvres qui ne semblèrent préferer ma tente à l'herbe verdoyante et les orages qui ne cesser de rugir. 
Laissez une ligne vide entre deux paragraphes pour qu'ils soient bien séparés à l'affichage.`
       },
       {
        type: "photo",
        src: "",
        legende: ""
       }
    ]
  }
];
