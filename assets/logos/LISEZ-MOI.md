# Logos des partenaires

Les logos sont des marques déposées. Les programmes d'affiliation fournissent leur propre kit média (espace partenaire du courtier) : à terme, remplace ces fichiers par ceux du kit officiel, et respecte leurs règles d'usage.

## Logos actuellement en place
`xtb.webp` · `etoro.webp` · `exness.webp` · `vantage.webp` · `avatrade.webp` · `xm.webp`
Fournis par l'éditeur du site, **à remplacer par les fichiers officiels du kit média** une fois inscrit à chaque programme.

Ils ont été réduits à 256 px de large au maximum (le site les affiche en 128 × 64 px, 2× pour les écrans nets) et convertis en WebP : 21 Ko au total au lieu de 167 Ko, pour alléger les pages (éco-conception).

## Ajouter ou remplacer un logo (exemple : XTB)
1. Télécharge le logo depuis le kit média, de préférence en `.svg` (léger et net à toute taille), sinon en `.png`, `.webp` ou `.jpg`. Si tu pars d'un grand `.png` ou `.jpg`, réduis-le à 256 px de large au maximum avant (sinon la page s'alourdit).
2. Renomme-le avec l'identifiant du partenaire, en minuscules : `xtb.svg`.
3. Place-le dans ce dossier (`assets/logos/`).
4. Dans `assets/partners.js`, sur la ligne `{ id:'xtb', ...`, mets `logo:'assets/logos/xtb.svg'`.
5. Si le fichier est absent ou mal nommé, les initiales s'affichent à la place.

## Identifiants
xtb · etoro · exness · vantage · avatrade · xm
