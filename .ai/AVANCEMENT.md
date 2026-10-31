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

- Page `school.html` (fxNOL School) : 6 modules, 29 leçons en 2 niveaux (Débutant / Pro), mini-quiz par module, laboratoire (Bollinger, RSI, stochastique, MACD, moyenne mobile). Contenu dans `assets/school-data.js`. ETH/USD ajouté au ticker.

- Site découpé en **pages séparées** (accueil, quiz, calculateur, partenaires, journal, School, 4 pages légales), menu mobile à 3 traits avec croix. Données partagées dans `assets/market.js` et `assets/partners.js`.

## Décisions (2026-10-30)
- **Périmètre** : marchés financiers (Forex, indices, actions, matières premières, produits dérivés dont options, cryptos). **Pas de paris en ligne ni de jeux d'argent** sur ce site (autre cadre légal, ANJ ; sinon site et marque séparés, opérateurs agréés uniquement, juriste en amont). Pas de promotion d'options binaires (interdites aux particuliers dans l'UE).
- **Affiliation** : uniquement des courtiers vérifiés sur REGAFI et la liste noire de l'AMF.
- **Nom** : « fxNOL » à reconsidérer avant l'achat du domaine (« fx » = Forex seulement ; « NOL » = abréviation fiscale américaine courante). À décider ; vérifier INPI, domaines .fr / .com et réseaux sociaux.

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
https://clarteweb35.github.io/fxNOL/ publie `main`, mais n'est pas référencé ni diffusé : **domaine fxnol.fr acheté le 2026-10-31, DNS OVH branché sur GitHub Pages (fichier `CNAME`, HTTPS à cocher dans Settings → Pages).** Les partenaires fictifs et la phrase « notes éditoriales » ont été retirés le 2026-10-31. Il reste des pages légales incomplètes (éditeur, hébergeur) et les agréments des courtiers à vérifier : **ne pas candidater aux programmes d'affiliation avant d'avoir corrigé cela.**
Déploiement : un run bloqué en file d'attente (2026-10-29) empêchait les mises en ligne ; débloqué le 2026-10-30 en annulant le run puis en relançant (Settings → Pages : branche sur None puis main). Si ça se reproduit : annuler le run dans l'onglet Actions, puis relancer.

## Mesure d'audience (2026-10-31)
Google Analytics (`G-9XYXKBM02F`) est branché derrière un bandeau de consentement (`assets/site.js`), confidentialité mise à jour. À faire côté Google Analytics : régler la conservation des données au minimum, vérifier le flux de données (fxnol.fr), couper le partage de données avec Google. À valider par un juriste (transferts hors UE). Search Console (vérification par ligne TXT dans la zone DNS OVH) pas encore faite.

## En attente : structure éditrice (décision du 2026-10-31)
Le propriétaire (Julien GUILLOIS) n'a pas de SIRET pour fxNOL pour l'instant. Il a déjà une structure, qui pourra accueillir l'activité à partir de janvier 2027, et envisage une autre structure (VTC + services en ligne). **La structure qui édite fxNOL est à choisir** : elle donne son nom, son statut, son SIRET et son adresse aux mentions légales, et c'est elle qui candidate aux programmes et reçoit les commissions. Pas de nouvelle candidature d'affiliation avant ce choix. La boîte contact@fxnol.fr est active (OVH, 2026-10-31). Hébergeur à mentionner : GitHub, Inc. (adresse à vérifier sur github.com).

## Prochaine action
Dès la structure choisie : compléter les `[À COMPLÉTER]` des pages légales (éditeur, hébergeur), puis candidater aux 6 programmes d'affiliation (récupérer liens et logos du kit média) et vérifier chaque courtier sur REGAFI.

## Ensuite (voir `claude.md`, section 5)
Domaine et hébergement → programmes d'affiliation → vrais liens d'affiliation (les fictifs sont retirés) → héberger polices et Tailwind localement → suivi → contenu SEO.
