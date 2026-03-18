# Lumière Studio — Site Web Complet

Agence de design & branding fictive. Esthétique : **luxe éditorial sombre avec accents dorés**.

---

## Structure des fichiers

```
site/
├── index.html                    ← Accueil (hero video, services, témoignages)
├── css/
│   └── style.css                 ← Feuille de styles principale (700+ lignes)
├── js/
│   └── main.js                   ← JavaScript (nav, scroll reveal, compteurs, galerie)
├── images/
│   ├── hero-poster.jpg           ← Poster de la vidéo hero (fallback)
│   ├── hero-reel.mp4             ← Vidéo hero (autoplay, muted, loop)
│   ├── hero-reel.webm            ← Version WebM de la vidéo
│   ├── studio-lg.jpg             ← Photo atelier (grand écran)
│   ├── studio-md.jpg             ← Photo atelier (medium)
│   ├── studio-sm.jpg             ← Photo atelier (mobile)
│   ├── studio-xs.jpg             ← Photo atelier (très petit)
│   ├── og-cover.jpg              ← Open Graph image (index)
│   ├── og-team.jpg               ← Open Graph image (about)
│   ├── og-services.jpg           ← Open Graph image (services)
│   ├── og-gallery.jpg            ← Open Graph image (gallery)
│   ├── og-contact.jpg            ← Open Graph image (contact)
│   ├── gallery/
│   │   ├── proj1-lg.jpg / proj1-md.jpg / proj1-sm.jpg / proj1-xs.jpg
│   │   ├── proj2-lg.jpg / proj2-md.jpg
│   │   ├── … (jusqu'à proj10)
│   └── team/
│       ├── claire-lg.jpg / claire-sm.jpg
│       ├── thomas-lg.jpg / thomas-sm.jpg
│       ├── elena-lg.jpg / elena-sm.jpg
│       └── marc-lg.jpg / marc-sm.jpg
└── pages/
    ├── about.html                ← Équipe (figure/figcaption, picture responsive)
    ├── services.html             ← Services (details/summary) + tableau tarifs
    ├── gallery.html              ← Galerie (srcset, picture, lightbox, filtres)
    └── contact.html              ← Formulaire complet + carte iframe OpenStreetMap
```

---

## Fonctionnalités techniques implémentées

### Navigation
- Navigation fixe avec backdrop-filter blur
- Lien actif détecté automatiquement par JS
- Menu hamburger mobile avec animation (3→ ×)
- Transitions hover avec ligne dorée animée
- CTA "Devis gratuit" dans la nav

### Images responsives
- **`<picture>`** avec `<source media="...">` sur about.html et gallery.html
- **`srcset`** avec plusieurs tailles (xs/sm/md/lg) et attribut `sizes`
- `loading="lazy"` sur toutes les images non-hero
- `width` et `height` explicites pour éviter le layout shift

### Vidéo (index.html)
```html
<video autoplay muted loop playsinline poster="...">
  <source src="hero-reel.mp4" type="video/mp4">
  <source src="hero-reel.webm" type="video/webm">
</video>
```

### Tableau de tarifs (services.html)
- `colspan="5"` sur les lignes de catégorie
- `rowspan="3"` sur les cellules "Sur mesure"
- `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`
- `scope="col"` pour l'accessibilité

### Formulaire de contact (contact.html)
Tous les types d'inputs :
- `type="text"` (prénom, nom, entreprise)
- `type="email"` (email)
- `type="tel"` (téléphone)
- `type="url"` (site web)
- `type="number"` (révisions)
- `type="date"` (délai souhaité)
- `type="range"` (budget, avec mise à jour live JS)
- `type="radio"` (source de découverte)
- `type="checkbox"` (options, RGPD)
- `<select>` avec `<optgroup>` (service souhaité)
- `<textarea>` (message)
- `type="file"` (brief, avec accept multiple)
- Attributs : `required`, `minlength`, `maxlength`, `pattern`, `autocomplete`

### Carte iframe (contact.html)
```html
<iframe src="https://www.openstreetmap.org/export/embed.html?..."
  loading="lazy" title="..." referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

### Accordion details/summary (services.html)
- 6 services avec `<details>` / `<summary>`
- Animation CSS de l'icône + (rotate 45°) à l'ouverture
- Style différencié `details[open]`

### Footer — Plan du site
- 4 colonnes : marque + 3 colonnes de navigation
- Attribut `aria-label` sur chaque `<nav>`
- Mentions légales, politique de confidentialité, CGV, Cookies

### SEO & Métadonnées
Chaque page contient :
- `<title>` unique
- `<meta name="description">` 
- `<meta name="keywords">`, `<meta name="author">`, `<meta name="robots">`
- **Open Graph** : og:type, og:url, og:title, og:description, og:image, og:locale, og:site_name
- **Twitter Card** : twitter:card, twitter:title, twitter:description, twitter:image
- `<link rel="canonical">`
- **JSON-LD Schema.org** (ProfessionalService) sur index.html

---

## Ajouter les images

Les images sont référencées mais non incluses (fichiers à fournir). 
Recommandation de dimensions :

| Fichier              | Dimensions conseillées |
|----------------------|------------------------|
| hero-poster.jpg      | 1920×1080              |
| hero-reel.mp4/webm   | 1920×1080, < 15 Mo     |
| studio-lg.jpg        | 1120×840               |
| studio-md.jpg        | 800×600                |
| studio-sm.jpg        | 600×450                |
| gallery/proj*-lg.jpg | 1200×900               |
| gallery/proj*-md.jpg | 800×600                |
| gallery/proj*-sm.jpg | 600×450                |
| team/*-lg.jpg        | 600×800 (portrait)     |
| team/*-sm.jpg        | 300×400 (portrait)     |
| og-*.jpg             | 1200×630               |

---

## Personnalisation rapide

1. **Nom de l'agence** : rechercher `Lumière` dans tous les fichiers
2. **Couleurs** : modifier `--gold`, `--dark`, `--white` dans `css/style.css`
3. **Polices** : changer l'import Google Fonts et les variables `--font-display` / `--font-body`
4. **Adresse & contacts** : dans chaque footer et `contact.html`
5. **Tarifs** : tableau dans `services.html`
