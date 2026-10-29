# fxNOL — Topo de reprise pour Claude (VS Code)

> À coller dans le premier message de la nouvelle session, ou à enregistrer sous `CLAUDE.md` à la racine du projet.

## 1. Qui je suis et comment travailler avec moi

- Je construis une activité d'architecte web / consultant digital. Partage des rôles : **toi = technique**, **moi = humain et commercial** (démarchage, programmes d'affiliation, contenu).
- Je suis **débutant technique** : explique les commandes pas à pas, dis-moi où cliquer et ce que je dois voir à l'écran. Pas de jargon sans explication.
- Tutoiement, réponses en français.

## 2. Le projet

**fxNOL** : site web sur la **culture Forex**, la **formation au trading** et la **présentation de partenaires** (brokers, prop firms, outils d'analyse).
**Objectif principal : l'affiliation** (commissions quand un visiteur ouvre un compte / achète via mes liens). Le site est le support ; l'affiliation est le but business.

## 3. Ce qui existe (livré dans la session précédente)

Fichier unique : **`index.html`**. HTML5 + Tailwind CSS (CDN) + JavaScript vanilla, sans build.

**Design** : style sobre « institutionnel » (issu d'une proposition Gemini) : fond `#0B0F19`, cartes `#111827`, bordures `#1F2937`, accent bleu `#0EA5E9`, vert `#10B981`. Polices Plus Jakarta Sans (titres) et Inter (texte). Logo SVG texte « fx » + « NOL ». Slogan : « Maîtriser le Forex par la connaissance ». Responsive mobile/desktop.

**Sections :**
1. **Header + ticker** défilant (EUR/USD, GBP/USD, USD/JPY, GBP/JPY, XAU/USD, BTC/USD). Les prix sont **simulés** (marche aléatoire), pas des cotations réelles.
2. **Quiz** : 10 questions mélangées (pips, levier, risque, paires majeures/croisées, spread, margin call…), correction immédiate avec explication, barre de progression, score final avec niveau.
3. **Calculateur de lot** : capital, % de risque, stop loss en pips, choix de la paire (10 instruments). Résultat : risque en $, lots standards, mini et micro-lots, valeur du pip. Formule : `lot = risque$ / (SL pips × valeur du pip par lot)`. Valeur du pip **estimée** à partir des prix simulés (pas fiable à 100 %).
4. **Partenaires** : grille de cartes filtrable (Tous / Brokers / Prop Firms / Outils) avec badge de type, note, avis, points forts, champ « agrément » pour les brokers, bouton d'affiliation.
5. **Footer** : avertissement légal complet sur les risques Forex/CFD, liens de navigation, copyright.

**Mécanique d'affiliation déjà en place (dans le script) :**
- Objet `CONFIG` : `appendUtm` (ajoute `utm_source/medium/campaign/content` aux liens), `trackingEndpoint` (URL de mon futur serveur de suivi, reçoit un POST JSON), `storageKey`.
- Tableau **`PARTNERS`** : un objet par partenaire (`id`, `name`, `type`, `rating`, `reviews`, `pros`, `url`, `cta`, `regulator`, `regNumber`).
- Les liens portent `rel="sponsored nofollow noopener noreferrer"`, avec la mention « Lien partenaire · publicité » sous chaque bouton et un bandeau de transparence au-dessus de la grille.
- Suivi des clics : compteur dans `localStorage`, événement `affiliate_click` poussé dans `window.dataLayer` (compatible Google Analytics/GTM), envoi optionnel via `sendBeacon`.
- Mini tableau de bord des clics visible avec **`?admin=1`** dans l'URL (données locales au navigateur uniquement).

## 2bis. À savoir avant de modifier

- **Les 9 partenaires sont FICTIFS** (AlphaECN Markets, FundedEdge, ChartLab Pro, etc.) avec des liens `#` et des notes inventées. **À remplacer par de vrais partenaires et leurs vrais liens d'affiliation avant toute mise en ligne.** Ne jamais publier de fausses notes/avis sur de vraies sociétés.
- Le ticker et le calculateur utilisent des prix simulés : à brancher sur une vraie API de cotations si on veut de la précision (ou assumer le côté « pédagogique »).
- Le suivi des clics en `localStorage` est local à chaque navigateur : pour des statistiques réelles, il faut un vrai backend ou un outil d'analytics.

## 4. Point de vigilance n° 1 : le cadre légal (France)

Mes recherches ont montré que la France **encadre la publicité en ligne pour le Forex / CFD** et que l'AMF contrôle aussi les **affiliés**. Les sources trouvées étaient en partie anciennes (2016-2017) : **la situation exacte en 2026 est à vérifier**. Règles prudentes à respecter :

- Ne promouvoir que des **courtiers autorisés en France** : vérifier chaque courtier sur **REGAFI** et sur la **liste noire de l'AMF** avant d'afficher son lien.
- **Prop firms** : non régulées comme des courtiers → zone grise, lire leurs conditions, ne jamais promettre de gains.
- Aucune promesse de gains ni formules du type « liberté financière », « revenu passif », « devenir riche » (signaux d'arnaque cités par l'AMF).
- Contenu strictement **éducatif**, mention d'affiliation visible, avertissement de risque complet.
- **Faire valider l'ensemble par un juriste ou auprès de l'AMF avant le lancement.** Ce n'est pas un conseil juridique.

## 5. Prochaines étapes proposées (par ordre de priorité)

1. **Mettre en place le projet dans VS Code** : dossier `fxnol/`, y placer `index.html`, ouvrir avec Live Server (ou `npx serve`) pour prévisualiser. Initialiser Git.
2. **Pages légales** (obligatoires et demandées par les programmes d'affiliation) : mentions légales, politique de confidentialité, page « Transparence affiliation », contact. Prévoir un bandeau cookies si on ajoute des outils de mesure.
3. **Nom de domaine + hébergement** (site statique : Netlify, Vercel, Cloudflare Pages ou OVH), HTTPS.
4. **Candidater aux programmes d'affiliation** (brokers régulés accessibles aux Français, outils de trading type journal/graphiques, éventuellement prop firms après analyse des conditions). La plupart exigent un site en ligne avec pages légales : d'où les étapes 2 et 3 avant.
5. **Remplacer les partenaires fictifs** par les vrais (liens fournis par les programmes), renseigner `regulator` / `regNumber` pour les brokers.
6. **Suivi** : brancher Plausible ou Google Analytics (via `dataLayer`) ou un petit endpoint pour `CONFIG.trackingEndpoint`.
7. **Contenu SEO** : articles pédagogiques (qu'est-ce qu'un pip, gérer son risque, comment choisir un courtier régulé…) pour amener du trafic sans promesse de gains. À terme, découper le site en plusieurs pages ou passer sur un générateur statique (type Astro).
8. **Améliorations** : plus de questions de quiz, vraies cotations, mode comparateur de brokers, accessibilité et performance (Lighthouse).

## 6. Première action demandée à Claude dans VS Code

> Lis `index.html`. Résume-moi en 5 lignes ce qu'il contient, puis guide-moi pas à pas pour : (1) le prévisualiser en local, (2) l'initialiser avec Git, (3) créer les pages légales manquantes. Explique chaque commande, je suis débutant.

## Conventions

- Langue : français (UI, commentaires, docs). Vouvoiement dans l'interface, tutoiement avec moi.
- Style : HTML + Tailwind (CDN) + JS vanilla, **aucune librairie ni dépendance ajoutée sans accord** ; animations en CSS pur, désactivées si l'utilisateur demande de réduire les animations.
- Accessibilité : conserver `aria-*`, `role`, `alt` ; liens externes en `rel="noopener"` (affiliation : `sponsored nofollow noopener noreferrer`).
- Performance : pas d'image ni de script externe inutile ; hauteurs fixes pour les bandeaux animés (pas de décalage de mise en page). Aucun outil de mesure (Google Analytics, etc.) sans bandeau de consentement.
- Commentaires de code courts, en français, qui expliquent le pourquoi.
- Pièges Windows / shell : les accents graves (backticks) sont interprétés par le shell ; écrire les scripts dans un fichier ou utiliser les outils Write/Edit.

## Documentation du projet (dossier `.ai/`)

- Avant toute implémentation, lire [.ai/SYSTEM_PROMPT.md](.ai/SYSTEM_PROMPT.md) (règles de fond, garde-fous légaux).
- Au début de chaque session, lire [.ai/AVANCEMENT.md](.ai/AVANCEMENT.md) (où on en est, prochaine action). Le mettre à jour à la fin de chaque étape.
- [.ai/SPEC_FONCTIONNALITES.md](.ai/SPEC_FONCTIONNALITES.md) : ce que le visiteur voit et peut faire.

## Mise à jour de la spec

Après tout ajout ou modification de contenu ou de fonctionnalité visible par un visiteur, mettre à jour [.ai/SPEC_FONCTIONNALITES.md](.ai/SPEC_FONCTIONNALITES.md) dans la même intervention (et sa date de dernière mise à jour). Ne pas documenter les refactos internes sans impact visible.

**Dès qu'une action commence** (avant de modifier le moindre fichier), l'inscrire dans la section « Travaux en cours » en bas de la spec : date, objectif, fichiers concernés, étapes faites / restantes. La retirer une fois l'action terminée. But : ne rien perdre si l'intervention plante.

## Agents

Ne jamais lancer de sous-agents ni de workflow multi-agents sans me demander d'abord. Obligatoire, sans exception.

## Niveaux d'action

Je préfixe ma demande par un tag. Sans tag, appliquer `[strict]` par défaut.

- `[consultatif]` — Ne modifie aucun fichier. Explique ce que tu ferais et attends ma validation.
- `[strict]` — Avant de coder : dis quoi, pourquoi, comment, et dans quels fichiers. Puis code.
- `[rapide]` — Code directement, explication minimale. Interdit de toucher à l'architecture (découpage des fichiers, dépendances, build, déploiement). Si le changement l'exige, arrête-toi et repasse en `[strict]`.

## Commit et push (important)

Dépôt GitHub : https://github.com/clarteweb35/fxNOL.git, branche `main`.

**Après chaque modification que je demande : vérifier, puis commiter et pousser sur `main` directement, sans me demander si je le souhaite.** Ne pas poser la question.

- Un commit par demande, message court en français, terminé par la ligne de co-auteur.
- `git add` nominatif des fichiers de la tâche (jamais `git add -A`) : d'autres modifications en attente peuvent exister, les laisser telles quelles.
- `git pull --rebase` avant le push si le dépôt distant a avancé.
- Ne pas pousser si la vérification échoue : me le dire.
- Mettre à jour la spec et l'avancement dans le même commit.
- Cela ne couvre pas les actions destructrices (`push --force`, suppression de branche, réécriture de l'historique) : toujours me demander avant.
- **Le site est déjà public** : GitHub Pages publie la branche `main` sur https://clarteweb35.github.io/fxNOL/ (chaque push déclenche une mise en ligne). Il contient encore des partenaires fictifs et des pages légales à compléter : à traiter en priorité (voir `.ai/AVANCEMENT.md`).

## Explication du code

Codeur novice. Ne pas être trop technique dans tes explications de code.
