# fxNOL — Spécification des fonctionnalités

Ce que le visiteur voit et peut faire sur le site. À mettre à jour à chaque ajout ou modification visible (pas pour les refactos internes).

Dernière mise à jour : 2026-10-29
Site en **pages séparées** (une par rubrique) : HTML + Tailwind CDN + JS vanilla, sans build.

## Pages

| Page | Fichier | Contenu |
|---|---|---|
| Accueil | `index.html` | Message principal, boutons vers fxNOL School et le quiz, cartes vers chaque rubrique |
| fxNOL School | `school.html` | Formation : 6 modules, 29 leçons, 2 niveaux, mini-quiz, laboratoire |
| Quiz | `quiz.html` | Quiz de 10 questions |
| Calculateur | `calculateur.html` | Calculateur de taille de lot |
| Partenaires | `partenaires.html` | Grille filtrable de partenaires d'affiliation |
| Journal du jour | `journal.html` | Calendrier économique TradingView (chargé après clic) |
| Pages légales | `mentions-legales.html`, `confidentialite.html`, `transparence-affiliation.html`, `contact.html` | Voir plus bas |

**Sur toutes les pages** : en-tête collant avec le menu (fxNOL School, Quiz, Calculateur, Partenaires, Journal du jour, Risques), deux bandeaux défilants (cotations simulées, logos des courtiers), pied de page avec l'avertissement sur les risques.
**Menu mobile** (moins de 1024 px) : bouton à trois traits horizontaux, qui devient une croix quand le menu est ouvert ; se ferme au clic sur un lien ou avec la touche Échap.

## Fonctionnalités

### Ticker
- Prix **simulés** (marche aléatoire), pas de vraies cotations. À assumer comme pédagogique ou à brancher sur une API.

### Défilé des logos
- Bandeau défilant sous le ticker, sur toutes les pages, même hauteur (56 px) que le ticker, avec les logos des brokers qui ont un fichier dans `assets/logos/` (tuiles de 80 × 40 px, même taille pour tous). Clic : renvoie à la section Partenaires. Pause au survol, arrêté si l'utilisateur réduit les animations.
- Alimenté automatiquement par `PARTNERS` : ajouter un logo à un broker l'ajoute au bandeau.

### fxNOL School (`school.html`)
- Page de formation, lien « fxNOL School » en tête du menu et dans le footer. **2 niveaux** au choix en haut de page (mémorisé dans le navigateur) : **Débutant** (expliqué simplement, analogies de la vie courante, comme pour un enfant de 12 ans) et **Pro** (langage professionnel). Mêmes leçons, mêmes outils, mêmes questions : seuls les mots changent. Une note rappelle que le trading est réservé aux majeurs.
- 6 modules, **29 leçons** dépliables, toutes sur le même plan : le principe, comment le lire, ses limites (formule en plus quand elle existe).
  1. **Les marchés** (3) : grandes familles de marchés, indices boursiers, actions et matières premières.
  2. **Lire un graphique** (4) : chandeliers, tendance / supports / résistances, unités de temps, volumes.
  3. **Indicateurs** (6) : moyennes mobiles, Bollinger, RSI, MACD, stochastique, Fibonacci.
  4. **Gérer son risque** (5) : stop loss et ratio risque/rendement, taille de position (lien vers le calculateur), types d'ordres, psychologie du trader, plan de trading.
  5. **Produits dérivés** (5) : définition, CFD et levier, options (call / put), grecques, « Trading et pari : quelle différence ? » (options binaires interdites aux particuliers dans l'UE, jeux d'argent hors périmètre du site). Encadré d'avertissement ; aucun produit ni courtier recommandé.
  6. **Cryptos** (6) : bases, différences avec le Forex, conservation (plateforme / wallet), risques et arnaques, cadre réglementaire en France, fiscalité (repères). Encadré d'avertissement ; aucun prestataire ni lien d'affiliation.
- **Mini-quiz** de 3 questions à la fin de chaque module (19 au total), correction et explication adaptées au niveau choisi, score par module.
- **Laboratoire** : graphique de prix simulé (SVG) avec Moyenne mobile (20), Bollinger (20, 2), RSI (14), Stochastique (14, 3) et MACD (12, 26, 9), choix de volatilité (calme / normale / agitée), bouton pour régénérer la série, et phrases de lecture automatiques (descriptives, sans conseil) dans le langage du niveau choisi.
- Un lien `school.html#rsi` ouvre directement la leçon. Le contenu (modules, leçons en deux niveaux, quiz) est dans `assets/school-data.js` : pour ajouter une leçon, ajouter un objet avec ses versions `pro` et `kid`.
- Menu : la navigation desktop ne s'affiche qu'à partir de 1024 px, en dessous bouton hamburger.

### Journal du jour (`journal.html`)
- Page accessible depuis le menu et le footer : date du jour, calendrier économique **TradingView** (publications du jour, impact, précédent, prévision, résultat), explication de chaque colonne, avertissement (pas de conseil, pas de prédiction de sens).
- Le widget n'est chargé qu'après un clic sur « Afficher le calendrier » (message d'information avant). Mentionné dans la politique de confidentialité.
- Réglages du widget dans la constante `CALENDAR` de la page.
- **Options en réserve** : (B) calendrier automatique via une API gratuite, enregistré chaque matin dans un fichier de données par une tâche GitHub, sans script tiers ; (C) note du jour rédigée à la main, à ajouter sous le calendrier. Contenu toujours factuel, sans prédiction.

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
- **Logos** : les 6 brokers affichent leur logo (`assets/logos/*.png`, tuile blanche 2:1 de 128 × 64 px à côté du nom). Sans fichier, pastille d'initiales. Fichiers fournis par l'éditeur : à remplacer par ceux du kit média officiel de chaque programme (voir `assets/logos/LISEZ-MOI.md`).
- **Outil réel : TradingView** (graphiques), sans note ni avis, « Fiche détaillée à venir », lien `#` en attendant le programme d'affiliation, pastille d'initiales (logo à ajouter, id `tradingview`).
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
- `assets/tailwind-config.js` : couleurs et polices.
- `assets/site.js` : nom, menu, liens légaux, avertissement de risque, mention d'affiliation, header, bandeaux et footer.
- `assets/market.js` : marché simulé (prix, ticker, valeur du pip pour le calculateur).
- `assets/partners.js` : liste des partenaires, réglages d'affiliation, bandeau des logos.
- `assets/school-data.js` : contenu de fxNOL School.

## Pas encore fait
- Compléter les pages légales avec les vraies informations, puis les faire valider par un juriste.
- Vrais partenaires et liens d'affiliation.
- Bandeau cookies (nécessaire dès qu'un outil de mesure est branché).
- Vraies cotations.
- Contenu SEO (articles pédagogiques).

## Travaux en cours
_Aucun._

<!-- Format d'une entrée : date · objectif · fichiers · étapes faites / restantes. Retirer l'entrée une fois l'action terminée. -->
