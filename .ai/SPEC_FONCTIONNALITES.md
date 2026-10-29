# fxNOL — Spécification des fonctionnalités

Ce que le visiteur voit et peut faire sur le site. À mettre à jour à chaque ajout ou modification visible (pas pour les refactos internes).

Dernière mise à jour : 2026-10-29
Fichier du site : `index.html` (page unique, HTML + Tailwind CDN + JS vanilla).

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
- **Les 9 partenaires actuels sont FICTIFS** (liens `#`, notes inventées) : AlphaECN Markets, Meridian Prime, NovaTrade Direct (brokers) ; FundedEdge, Vertex Capital Funding, PipForge Challenge (prop firms) ; ChartLab Pro, MacroPulse Calendar, JournalFX (outils). À remplacer avant toute mise en ligne.

### Suivi des clics d'affiliation (invisible pour le visiteur)
- `CONFIG` : `appendUtm`, `trackingEndpoint`, `storageKey`.
- Compteur dans `localStorage`, événement `affiliate_click` dans `window.dataLayer`, envoi optionnel par `sendBeacon`.
- Mini tableau de bord avec `?admin=1` dans l'URL (données locales au navigateur).

### Pied de page
- Avertissement complet sur les risques Forex/CFD.
- Liens « Légal » : pages **pas encore créées** (voir ci-dessous).

## Pas encore fait
- Pages légales : mentions légales, confidentialité, transparence affiliation, contact.
- Vrais partenaires et liens d'affiliation.
- Bandeau cookies (nécessaire dès qu'un outil de mesure est branché).
- Vraies cotations.
- Contenu SEO (articles pédagogiques).

## Travaux en cours
_Aucun._

<!-- Format d'une entrée : date · objectif · fichiers · étapes faites / restantes. Retirer l'entrée une fois l'action terminée. -->
