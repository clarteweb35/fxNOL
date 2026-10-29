# fxNOL — Spécification des fonctionnalités

Ce que le visiteur voit et peut faire sur le site. À mettre à jour à chaque ajout ou modification visible (pas pour les refactos internes).

Dernière mise à jour : 2026-10-29
Pages : `index.html` (accueil) + 4 pages légales. HTML + Tailwind CDN + JS vanilla, sans build.

## Structure de la page

| Zone | Ancre | Contenu |
|---|---|---|
| En-tête | `#top` | Logo « fx NOL », menu de navigation (desktop), slogan « Maîtriser le Forex par la connaissance » |
| Ticker | — | Bandeau défilant : EUR/USD, GBP/USD, USD/JPY, GBP/JPY, XAU/USD, BTC/USD |
| Formation | `#formation` | Quiz de 10 questions |
| Calculateur | `#calculateur` | Calculateur de taille de lot |
| Partenaires | `#partenaires` | Grille filtrable de partenaires d'affiliation |
| Pied de page | `#risques` | Avertissement légal, liens Naviguer / Légal, copyright |

## Fonctionnalités

### Ticker
- Prix **simulés** (marche aléatoire), pas de vraies cotations. À assumer comme pédagogique ou à brancher sur une API.

### Quiz
- 10 questions mélangées (pips, levier, risque, paires, spread, margin call…).
- Correction immédiate avec explication, barre de progression, score final avec niveau, bouton « Recommencer ».

### Calculateur de lot
- Entrées : capital, % de risque, stop loss (pips), paire (10 instruments).
- Sorties : risque en $, lots standards, mini-lots, micro-lots, valeur du pip.
- Formule : `lot = risque$ / (SL pips × valeur du pip par lot)`.
- Valeur du pip **estimée** depuis les prix simulés (non fiable à 100 %).

### Partenaires
- Filtres : Tous / Brokers / Prop Firms / Outils.
- Carte : badge de type, note, nombre d'avis, points forts, champ « agrément » (brokers), bouton d'affiliation.
- Liens en `rel="sponsored nofollow noopener noreferrer"`, mention « Lien partenaire · publicité » sous chaque bouton, bandeau de transparence au-dessus de la grille.
- **Brokers (réels, 6)** : XTB, eToro, Exness, Vantage, AvaTrade, XM. Sans note ni avis (pas de méthode de notation), carte « Fiche détaillée à venir », agrément « À vérifier sur REGAFI » (à contrôler un par un avant mise en ligne), liens `#` tant que les programmes d'affiliation ne sont pas signés.
- **Logos** : les 6 brokers affichent leur logo (`assets/logos/*.png`, tuile blanche 2:1 à côté du nom). Sans fichier, pastille d'initiales. Fichiers fournis par l'éditeur : à remplacer par ceux du kit média officiel de chaque programme (voir `assets/logos/LISEZ-MOI.md`).
- **Prop firms et outils : 6 partenaires FICTIFS** (liens `#`, notes inventées) : FundedEdge, Vertex Capital Funding, PipForge Challenge ; ChartLab Pro, MacroPulse Calendar, JournalFX. À remplacer avant toute mise en ligne.

### Suivi des clics d'affiliation (invisible pour le visiteur)
- `CONFIG` : `appendUtm`, `trackingEndpoint`, `storageKey`.
- Compteur dans `localStorage`, événement `affiliate_click` dans `window.dataLayer`, envoi optionnel par `sendBeacon`.
- Mini tableau de bord avec `?admin=1` dans l'URL (données locales au navigateur).

### Pied de page
- Avertissement complet sur les risques Forex/CFD.
- Liens « Légal » vers les 4 pages ci-dessous. En-tête et pied de page sont identiques sur toutes les pages (définis une fois dans `assets/site.js`).

### Pages légales
- `mentions-legales.html`, `confidentialite.html`, `transparence-affiliation.html`, `contact.html`.
- Chacune porte un encadré jaune « Page à compléter » : identité de l'éditeur, hébergeur, e-mail, méthode de notation sont marqués `[À COMPLÉTER]`.
- La politique de confidentialité décrit l'état actuel : pas de mesure d'audience, compteur de clics local au navigateur, polices Google et Tailwind chargés depuis des serveurs tiers. À mettre à jour dès qu'un outil de mesure est ajouté.

### Fichiers partagés
- `assets/tailwind-config.js` : couleurs et polices. `assets/site.js` : nom, menu, liens légaux, avertissement de risque, mention d'affiliation, header et footer.

## Pas encore fait
- Compléter les pages légales avec les vraies informations, puis les faire valider par un juriste.
- Vrais partenaires et liens d'affiliation.
- Bandeau cookies (nécessaire dès qu'un outil de mesure est branché).
- Vraies cotations.
- Contenu SEO (articles pédagogiques).

## Travaux en cours
_Aucun._

<!-- Format d'une entrée : date · objectif · fichiers · étapes faites / restantes. Retirer l'entrée une fois l'action terminée. -->
