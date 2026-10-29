# fxNOL — Avancement

Dernière mise à jour : 2026-10-29

## Fait
- Maquette `index.html` (ticker, quiz, calculateur, partenaires fictifs, footer, suivi des clics).
- Documentation : `claude.md`, `.ai/SYSTEM_PROMPT.md`, `.ai/SPEC_FONCTIONNALITES.md`.
- Dépôt GitHub clarteweb35/fxNOL, règle de commit/push automatique.
- Audit SSOT/DRY et corrections : table unique des instruments, ticker rafraîchi avec les prix, couleurs nommées, menu / liens légaux / avertissement de risque / mention d'affiliation définis une seule fois (`assets/site.js`).
- 4 pages légales créées (squelettes à compléter).
- Onglet Partenaires : 6 vrais courtiers (XTB, eToro, Exness, Vantage, AvaTrade, XM) à la place des brokers fictifs ; logos des 6 courtiers en place (`assets/logos/`, à remplacer par les kits officiels après acceptation des programmes).

- Page `journal.html` : calendrier économique TradingView, chargé après clic (option A).

- Page `school.html` (fxNOL School) : 4 modules, 21 leçons en 2 niveaux (Débutant / Pro), mini-quiz par module, laboratoire (Bollinger, RSI, stochastique, MACD, moyenne mobile). Contenu dans `assets/school-data.js`. ETH/USD ajouté au ticker.

## Idées en réserve (fxNOL School)
- Brancher le quiz de l'accueil sur les leçons ; plus de leçons (ichimoku, ATR, ordres avancés, gestion de portefeuille).
- Section partenaires crypto seulement après vérification du statut (AMF / MiCA) de chaque prestataire.
- Faire relire le module crypto et la leçon fiscalité par un juriste (cadre évolutif) ; faire relire les textes Débutant par un vrai débutant.

## Idées en réserve (journal du jour)
- **B** : calendrier automatique via API gratuite + tâche GitHub planifiée qui écrit un fichier de données chaque matin (pas de script tiers). Vérifier les conditions de l'API (gratuité, réaffichage).
- **C** : note du jour rédigée à la main sous le calendrier (factuelle, sans prédiction).
- Vérifier les conditions d'utilisation du widget TradingView avant la mise en ligne.
- **Trading Central** (analyse technique, existe toujours en 2026) : distribué via les courtiers, pas de widget public ; ses niveaux et signaux sont à éviter sur le site (risque de conseil en investissement). Seule idée : le mentionner dans une fiche courtier si celui-ci l'indique lui-même.

## Site en ligne sur GitHub Pages (décision du 2026-10-29)
https://clarteweb35.github.io/fxNOL/ publie `main`, mais n'est pas référencé ni diffusé : **on le laisse tel quel jusqu'à l'achat du domaine.** Il montre encore 6 partenaires fictifs avec notes inventées, la phrase « notes éditoriales » et des pages légales incomplètes : **ne pas communiquer l'adresse ni candidater aux programmes d'affiliation avant d'avoir corrigé cela.**
Constaté le 2026-10-29 : les envois après `b0c8280` n'ont pas déclenché de déploiement (logos, journal et TradingView absents en ligne). Non traité pour l'instant ; à vérifier dans l'onglet Actions du dépôt (https://github.com/clarteweb35/fxNOL/actions) avant l'achat du domaine.

## Prochaine action
Compléter les `[À COMPLÉTER]` des pages légales (éditeur, hébergeur, e-mail), puis candidater aux 6 programmes d'affiliation (récupérer liens et logos du kit média) et vérifier chaque courtier sur REGAFI.

## Ensuite (voir `claude.md`, section 5)
Domaine et hébergement → programmes d'affiliation → vrais partenaires (retirer les fictifs et la phrase « notes éditoriales ») → héberger polices et Tailwind localement → suivi → contenu SEO.
