# Histoire HETIC — Reproduction de page web

Projet réalisé dans le cadre de l'**UE04 (Rattrapage)**.
Reproduction fidèle et intégration propre de la page
[« Histoire HETIC »](https://www.hetic.net/ecole-tech-web-et-numerique/histoire-hetic)
en **HTML, CSS et JavaScript**.

---

## 🎯 Sujet du projet

L'objectif est de reproduire le plus proprement possible une page web existante
(la page « Histoire HETIC ») en respectant :

- la structure générale de la page ;
- les sections principales ;
- les contenus et la hiérarchie visuelle ;
- les images (ou leurs emplacements) ;
- les boutons, les cartes et le footer ;
- le responsive **desktop** et **mobile**.

Le but est de démontrer la capacité à passer d'une page existante à une
intégration web propre, sémantique et fonctionnelle.

---

## 🛠️ Technologies utilisées

- **HTML5** sémantique (`header`, `nav`, `main`, `section`, `article`, `footer`…) ;
- **CSS3** organisé (variables `:root`, Flexbox, CSS Grid, media queries) ;
- **JavaScript** (vanilla, sans dépendance) pour le menu mobile, les sous-menus
  et les animations d'apparition au scroll ;
- **SVG** pour les images placeholder (facilement remplaçables).

Aucun framework ni librairie externe : le projet est 100 % statique et
s'ouvre directement dans un navigateur.

---

## 📁 Organisation des fichiers

```
BARDES_Elias_UE04_Rattrapage/
│
├── index.html          → structure et contenu de la page
├── README.md           → ce fichier
│
├── assets/
│   └── images/         → images / placeholders SVG
│       ├── hero.svg            (photo héro)
│       ├── origines.svg        (amphi, colonne gauche)
│       ├── futur.svg           (image pleine largeur)
│       ├── candidature.svg     (fond section candidature)
│       ├── actu-1/2/3.svg      (cartes actus)
│       ├── formations.svg / faq.svg  (blocs de liens)
│       ├── rdv.svg             (avatar footer)
│       └── qualiopi.svg        (logo certification)
│
├── css/
│   └── style.css       → tous les styles (organisés par sections numérotées)
│
└── js/
    └── main.js         → interactions (menu, sous-menus, scroll reveal)
```

---

## ▶️ Comment lancer le projet

Aucune installation n'est nécessaire.

1. Cloner le dépôt :
   ```bash
   git clone <lien-du-repo>
   cd BARDES_Elias_UE04_Rattrapage
   ```
2. Ouvrir **`index.html`** dans un navigateur (double-clic).

> 💡 Pour un rendu optimal (notamment le chargement des assets), vous pouvez
> aussi lancer un petit serveur local :
> ```bash
> python3 -m http.server 8000
> ```
> puis ouvrir <http://localhost:8000>.

---

## ✅ Ce qui a été réalisé

- **Header** sticky avec logo, navigation à 5 entrées et menus déroulants
  (Formations, École, Admission, Métiers, Contact) ;
- **Boutons CTA** : Portes Ouvertes, Je candidate, Brochure ;
- **Hero section** : titre, sous-titre, texte d'introduction et boutons ;
- **Blocs de contenu** : les origines, la reconnaissance, en tête des classements
  (bandeau statistique « N°1 »), le futur ;
- **Section « Nos dernières actus »** avec 3 cartes (image, tag, titre, date) ;
- **Section candidature** en 3 étapes + CTA « Je candidate » ;
- **Blocs de liens** (formations, FAQ orientation, portes ouvertes) ;
- **Footer** complet : marque, liens rapides, coordonnées des campus,
  certification Qualiopi, réseaux sociaux, mentions légales et copyright ;
- **Responsive** desktop / tablette / mobile (menu burger, grilles adaptatives) ;
- **Accessibilité** : HTML sémantique, attributs `aria-*`, navigation clavier,
  fermeture du menu avec la touche `Échap`.

---

## ⚠️ Difficultés rencontrées

- **Fidélité au design** : la page a été reproduite à partir de captures d'écran
  de la page d'origine. Il a fallu identifier la charte (accent vert menthe,
  fonds sombres, titres puissants) et retrouver la structure exacte (hero sombre,
  contenu en deux colonnes façon magazine, footer riche).
- **Le header au scroll** : reproduire le header qui passe de transparent
  (au-dessus du hero sombre) à blanc une fois la page défilée a demandé un peu
  de JavaScript et de gestion d'états CSS.
- **La mise en page en deux colonnes** du récit historique et le footer à
  plusieurs zones ont nécessité un travail précis sur CSS Grid et le responsive.
- **Les images** : ne disposant pas des visuels d'origine, des placeholders SVG
  aux bonnes dimensions ont été créés pour éviter les images cassées et faciliter
  leur remplacement.

---

## 🚀 Améliorations possibles

- Intégrer les **vraies images** HETIC à la place des placeholders ;
- Ajouter une **police web** (Inter) via `@font-face` pour un rendu identique ;
- Mettre en place un **carrousel** ou un défilement horizontal pour les actus ;
- Ajouter des **micro-animations** supplémentaires (parallax, compteurs) ;
- Optimiser les images (formats `webp`, `loading="lazy"`) et le SEO.

---

## 🌱 Organisation Git

- Branche **`main`** : version stable / rendu.
- Branche **`dev`** : développement.
- Historique construit en commits clairs et progressifs (structure → header →
  hero → contenus → actus → candidature → footer → responsive → README).

---

*Reproduction réalisée à des fins pédagogiques. Tous les contenus et la marque
HETIC appartiennent à leurs propriétaires respectifs.*
