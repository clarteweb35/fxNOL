'use strict';
/* Contenu de fxNOL School : source unique des modules, leçons et mini-quiz.
   Deux niveaux pour les mêmes leçons :
   - kid : « débutant », expliqué simplement (analogies, phrases courtes, sans jargon)
   - pro : langage professionnel
   Pour ajouter une leçon : ajouter un objet dans LESSONS avec ses deux versions (pro et kid).
   Champs d'une version : summary, what, formula (facultatif), how[], limits[]. */

const UI = {
  kid: {
    intro: "Apprendre à lire un graphique et à comprendre les outils des traders, expliqué simplement et sans jargon. Chaque leçon vous montre ce que l'outil mesure, comment le lire et surtout où il se trompe.",
    labIntro: "Un faux marché est inventé au hasard. Cochez un outil, changez l'agitation du marché, puis relancez : regardez comment chaque outil réagit. Ce ne sont pas de vrais prix.",
    labNew: 'Nouvelle simulation', quizTitle: 'Testez-vous', quizOk: 'Bravo !', quizKo: 'Pas tout à fait.'
  },
  pro: {
    intro: "Lecture de graphique, indicateurs (Bollinger, RSI, MACD, stochastique, moyennes mobiles), gestion du risque et crypto-actifs. Chaque leçon précise ce que l'outil mesure, son interprétation courante et ses limites.",
    labIntro: "Série de prix simulée (marche aléatoire). Activez un indicateur, ajustez la volatilité, régénérez la série : observez la réaction de chaque outil. Données simulées, non réelles.",
    labNew: 'Régénérer la série', quizTitle: 'Auto-évaluation', quizOk: 'Correct.', quizKo: 'Incorrect.'
  },
  levelNote: "Le trading est réservé aux personnes majeures. Le niveau « Débutant » est seulement une façon d'expliquer simplement les mêmes notions."
};

const MODULES = [
  { id:'marches',     title:'Les marchés',
    kid:"Avant de choisir quoi suivre, découvrons les grandes familles de marchés : monnaies, entreprises, matières premières, cryptos.",
    pro:"Panorama des grandes classes d'actifs et de leurs particularités." },
  { id:'graphique',   title:'Lire un graphique',
    kid:"Avant d'utiliser des outils, apprenons à lire le dessin que fait le prix, comme on lit une carte avant un voyage.",
    pro:"Avant tout indicateur, savoir lire l'action des prix elle-même." },
  { id:'indicateurs', title:'Les indicateurs',
    kid:"Les indicateurs sont des calculatrices : elles transforment les prix passés en un dessin plus facile à lire. Elles décrivent ce qui s'est passé, elles ne devinent pas la suite.",
    pro:"Calculs appliqués aux prix passés pour en faciliter la lecture. Ils décrivent, ils ne prédisent pas." },
  { id:'risque',      title:'Gérer son risque',
    kid:"La partie la plus importante : ce qui permet de continuer à jouer longtemps au lieu de tout perdre d'un coup.",
    pro:"Ce qui distingue un opérateur qui dure de celui qui disparaît." },
  { id:'derives',     title:'Les produits dérivés',
    kid:"CFD, options… des contrats dont la valeur suit celle d'autre chose. Puissants, compliqués, et risqués : on les découvre doucement.",
    pro:"Contrats à terme, CFD et options : mécanismes, effet de levier et risques.",
    warning:"Les produits dérivés (CFD, options) sont complexes et peuvent faire perdre tout le capital engagé, voire davantage selon le produit. Ce module est éducatif : il ne recommande aucun produit ni aucun courtier." },
  { id:'crypto',      title:'Les cryptos',
    kid:"Les cryptos sont de l'argent numérique qui s'échange jour et nuit, y compris le week-end. Leurs prix bougent beaucoup plus que ceux des devises, et les arnaques y sont nombreuses : prudence.",
    pro:"Univers ouvert 24 h/24 et 7 j/7, très volatil, au cadre réglementaire récent.",
    warning:"Les cryptos sont des actifs très volatils et peuvent perdre l'essentiel de leur valeur. Ce module est éducatif : il ne recommande ni crypto, ni plateforme." }
];

const LESSONS = [
  /* ================= MODULE 1 : LIRE UN GRAPHIQUE ================= */
  { id:'chandeliers', module:'graphique', title:'Les chandeliers japonais',
    pro:{
      summary:"Résumer une période de prix en une seule bougie.",
      what:"Une bougie résume une période (une minute, une heure, un jour…) avec quatre prix : ouverture, plus haut, plus bas et clôture. Le corps va de l'ouverture à la clôture, les mèches montrent les extrêmes atteints.",
      how:["Corps de la couleur « haussière » : la clôture est au-dessus de l'ouverture. Couleur « baissière » : l'inverse.","Un corps long indique un mouvement net sur la période ; un corps court, une indécision.","Une longue mèche montre que le prix est allé loin avant de revenir."],
      limits:["Une bougie seule n'est pas un signal : seul le contexte (tendance, niveaux) lui donne un sens.","Les noms de figures (marteau, étoile…) décrivent le passé ; ils ne garantissent pas la suite."] },
    kid:{
      summary:"Une bougie raconte l'histoire d'un moment de la journée.",
      what:"Imaginez que vous suivez le prix d'une glace pendant une heure. Une bougie est un petit dessin qui résume cette heure : le prix au début, le prix à la fin, le plus haut et le plus bas atteints. Le gros rectangle va du début à la fin. Les petits traits qui dépassent montrent jusqu'où le prix est allé avant de revenir.",
      how:["Si le prix a fini plus haut qu'il n'a commencé, la bougie a la couleur « ça monte » ; sinon, l'autre couleur.","Un gros rectangle veut dire : le prix a beaucoup bougé dans un seul sens. Un tout petit rectangle : le prix a hésité.","Un long trait qui dépasse veut dire : le prix est allé loin, puis il est revenu en arrière."],
      limits:["Une seule bougie ne suffit pas pour décider : c'est comme juger un film sur une seule image.","Les noms compliqués (marteau, étoile…) décrivent ce qui s'est passé, ils ne promettent pas ce qui va suivre."] } },

  { id:'tendance', module:'graphique', title:'Tendance, supports et résistances',
    pro:{
      summary:"Repérer la direction générale et les zones où le prix a réagi.",
      what:"Une tendance haussière est une suite de sommets et de creux de plus en plus hauts ; baissière, de plus en plus bas ; sinon le marché est « en range ». Un support est une zone où le prix a déjà rebondi, une résistance une zone où il a déjà buté.",
      how:["Tracer les zones là où le prix a réagi plusieurs fois.","Observer si les sommets et creux successifs montent, descendent ou stagnent.","Comparer plusieurs unités de temps : la tendance du graphique journalier donne le cadre."],
      limits:["Ce sont des zones, pas des lignes exactes : deux personnes ne les tracent jamais pareil.","Un niveau cassé n'annonce pas toujours la suite : les fausses cassures sont fréquentes."] },
    kid:{
      summary:"La direction que prend le prix, et les endroits où il a déjà fait demi-tour.",
      what:"Une tendance, c'est comme un escalier : si les marches montent, le prix est en tendance haussière ; si elles descendent, en tendance baissière ; s'il tourne en rond sur le même palier, il n'y a pas de tendance. Un support est comme un plancher sur lequel le prix a déjà rebondi, comme une balle. Une résistance est comme un plafond où il s'est déjà cogné.",
      how:["Cherchez les endroits où le prix a déjà fait demi-tour plusieurs fois : ce sont les planchers et les plafonds.","Regardez si les sommets et les creux sont de plus en plus hauts (ça monte), de plus en plus bas (ça descend) ou au même niveau.","Regardez d'abord le dessin en grand (une bougie par jour), puis zoomez."],
      limits:["Planchers et plafonds ne sont pas des lignes exactes : ce sont des zones, et chacun les dessine un peu différemment.","Un plancher peut craquer : le prix passe parfois au travers, et ça ne veut pas toujours dire qu'il va continuer."] } },

  { id:'unites-temps', module:'graphique', title:"Les unités de temps",
    pro:{
      summary:"Le même marché ne raconte pas la même histoire à toutes les échelles.",
      what:"Une unité de temps correspond à la durée d'une bougie : M1 (1 minute), H1 (1 heure), D1 (1 jour)… Plus l'unité est courte, plus il y a de bruit.",
      how:["Commencer par une unité longue pour voir le contexte, puis descendre pour affiner.","Rester cohérent : choisir une ou deux unités et s'y tenir.","Vérifier que les indicateurs sont paramétrés pour l'unité choisie : un RSI de 14 périodes ne dit pas la même chose en M5 et en D1."],
      limits:["Multiplier les unités de temps peut donner des messages contradictoires et paralyser la décision."] },
    kid:{
      summary:"Regarder de près ou de loin : on ne voit pas la même chose.",
      what:"C'est le temps que représente chaque bougie : une minute, une heure, un jour. C'est comme regarder une ville : de près, on voit chaque voiture (beaucoup d'agitation) ; de loin, on voit la forme générale des routes.",
      how:["Regardez d'abord de loin (une bougie par jour) pour comprendre la grande direction, puis zoomez.","Choisissez une ou deux échelles et gardez-les : en changer tout le temps embrouille.","Un outil réglé sur 14 bougies ne raconte pas la même chose avec des bougies d'une minute ou d'un jour."],
      limits:["Regarder trop d'échelles à la fois peut donner des messages contradictoires et faire hésiter."] } },

  { id:'volumes', module:'graphique', title:'Les volumes',
    pro:{
      summary:"Mesurer la quantité échangée pour juger de la solidité d'un mouvement.",
      what:"Le volume mesure la quantité échangée sur une période. Il est observable sur les marchés organisés (actions, crypto-actifs cotés sur une plateforme). Sur le Forex, marché de gré à gré sans bourse centrale, on ne dispose que d'un volume de ticks (nombre de variations de prix) fourni par le courtier.",
      how:["Un mouvement accompagné d'un volume élevé est généralement jugé plus significatif qu'un mouvement sur faible volume.","Une hausse sur volume décroissant peut signaler un essoufflement, à confirmer par d'autres éléments.","Comparer le volume à sa moyenne récente plutôt que de le lire isolément."],
      limits:["Sur le Forex, le volume de ticks ne représente qu'une fraction du marché et diffère selon le courtier.","Sur les crypto-actifs, les volumes publiés par certaines plateformes peuvent être gonflés artificiellement."] },
    kid:{
      summary:"Combien de monde achète et vend en même temps.",
      what:"Le volume, c'est le nombre d'échanges qui se font en même temps. Imaginez un marché : s'il y a foule, il y a beaucoup d'échanges ; s'il est presque vide, il y en a peu. Pour les devises, il n'existe pas de grand marché unique : on n'a donc qu'une estimation.",
      how:["Quand le prix bouge beaucoup et que la foule est là, le mouvement est pris plus au sérieux.","Quand le prix monte mais que la foule se vide, le mouvement peut s'essouffler (à vérifier avec d'autres choses).","Comparez toujours avec les jours précédents : « beaucoup » ou « peu » n'a de sens que par comparaison."],
      limits:["Pour les devises, le chiffre est une estimation qui change d'un courtier à l'autre.","Pour les cryptos, certains sites affichent de faux chiffres pour avoir l'air plus populaires."] } },

  /* ================= MODULE 2 : INDICATEURS ================= */
  { id:'moyennes-mobiles', module:'indicateurs', title:'Les moyennes mobiles',
    pro:{
      summary:"Lisser le prix pour mieux voir la tendance.",
      what:"La moyenne mobile simple (SMA) est la moyenne des N dernières clôtures. La moyenne exponentielle (EMA) donne plus de poids aux prix récents. Les périodes 20, 50 et 200 sont des conventions très répandues.",
      formula:"SMA(N) = (somme des N dernières clôtures) ÷ N",
      how:["Prix au-dessus de la moyenne et moyenne orientée à la hausse : contexte plutôt haussier.","Le croisement d'une moyenne courte et d'une moyenne longue est souvent utilisé pour repérer un changement de tendance.","La pente de la moyenne est plus informative que sa position."],
      limits:["Calculée sur le passé, elle réagit toujours avec retard.","En marché sans tendance (« range »), les croisements multiplient les faux signaux."] },
    kid:{
      summary:"Effacer les petits zigzags pour voir la direction générale.",
      what:"Prenez la moyenne des dix dernières notes d'un élève : elle donne une idée de son niveau, sans être trompée par une seule note. La moyenne mobile fait pareil avec le prix : elle efface les petits zigzags pour montrer la direction générale. On dit « mobile » parce qu'elle se décale à chaque nouvelle bougie.",
      formula:"Moyenne sur 20 = (les 20 derniers prix additionnés) ÷ 20",
      how:["Prix au-dessus de la ligne et ligne qui monte : plutôt une ambiance « ça monte ».","Quand une ligne rapide dépasse une ligne lente, certains y voient un changement de direction.","Regardez surtout si la ligne monte ou descend."],
      limits:["Elle est calculée avec des prix déjà passés : elle prévient toujours en retard, comme la météo d'hier.","Quand le prix tourne en rond, les lignes se croisent sans arrêt et donnent de fausses alertes."] } },

  { id:'bollinger', module:'indicateurs', title:'Les bandes de Bollinger',
    pro:{
      summary:"Mesurer si le marché est calme ou agité par rapport à sa moyenne.",
      what:"Trois lignes : une moyenne mobile simple (en général sur 20 périodes) au centre, et deux bandes placées à 2 écarts-types au-dessus et en dessous. Les bandes s'élargissent quand la volatilité augmente et se resserrent quand elle baisse.",
      formula:"Bande haute = SMA(20) + 2 × écart-type(20)   ·   Bande basse = SMA(20) − 2 × écart-type(20)",
      how:["Bandes resserrées : marché calme, qui précède souvent une phase plus agitée, sans en donner le sens.","Bandes écartées : forte volatilité.","La moyenne centrale sert de repère de prix « moyen » récent."],
      limits:["Toucher une bande n'est pas un signal d'achat ou de vente : dans une tendance forte, le prix peut longer une bande très longtemps.","L'indicateur mesure la volatilité, pas la direction.","Les valeurs (20 et 2) sont des réglages par défaut, pas des vérités."] },
    kid:{
      summary:"Un élastique autour du prix : serré quand c'est calme, large quand ça s'agite.",
      what:"Imaginez un élastique autour d'une ligne moyenne. Quand le prix est calme, l'élastique est serré ; quand le prix s'agite, il s'élargit. Les bandes de Bollinger sont cet élastique : une ligne au milieu (la moyenne), une bande au-dessus et une bande en dessous, calculées pour contenir la plupart des mouvements habituels.",
      formula:"Milieu = moyenne des 20 derniers prix   ·   Bandes = milieu ± 2 fois « l'agitation » des 20 derniers prix",
      how:["Bandes serrées : le marché est calme. Souvent, une période plus agitée arrive après, mais on ne sait pas dans quel sens.","Bandes larges : le marché est très agité.","Le milieu sert de repère : le prix « habituel » de ces derniers temps."],
      limits:["Que le prix touche une bande ne veut pas dire « acheter » ou « vendre » : quand ça monte fort, le prix peut longer la bande du haut pendant longtemps.","Elles mesurent l'agitation, pas la direction.","20 et 2 sont des réglages courants, pas des règles."] } },

  { id:'rsi', module:'indicateurs', title:'Le RSI (Relative Strength Index)',
    pro:{
      summary:"Comparer la force des hausses récentes à celle des baisses.",
      what:"Le RSI oscille entre 0 et 100. Il compare la moyenne des hausses à la moyenne des baisses sur une période, 14 le plus souvent. Par convention, au-dessus de 70 on parle de zone de « surachat », en dessous de 30 de « survente ».",
      formula:"RSI = 100 − 100 ÷ (1 + RS)   avec   RS = moyenne des hausses ÷ moyenne des baisses (14 périodes)",
      how:["Autour de 50 : rapport de force équilibré.","Au-dessus de 70 : les hausses récentes ont dominé nettement ; en dessous de 30 : les baisses.","Comparer le RSI et le prix : un prix qui progresse sans que le RSI suive s'appelle une divergence, à examiner avec prudence."],
      limits:["« Surachat » ne veut pas dire « va baisser » : en forte tendance, le RSI reste longtemps au-dessus de 70 (ou sous 30).","Sensible à la période choisie et à l'unité de temps."] },
    kid:{
      summary:"Un thermomètre qui dit qui gagne : les hausses ou les baisses récentes.",
      what:"Le RSI compte qui gagne le match entre les hausses et les baisses récentes, et donne une note de 0 à 100. Autour de 50, c'est match nul. Plus la note est haute, plus les hausses dominent ; plus elle est basse, plus les baisses dominent. Par habitude, on dit « trop chaud » au-dessus de 70 et « trop froid » en dessous de 30.",
      formula:"Note = 100 − 100 ÷ (1 + moyenne des hausses ÷ moyenne des baisses), sur les 14 dernières bougies",
      how:["Autour de 50 : hausses et baisses font match nul.","Au-dessus de 70 : les hausses récentes ont écrasé les baisses. Sous 30 : le contraire.","Si le prix monte mais que le thermomètre ne suit plus, certains y voient un signe d'essoufflement : à regarder avec prudence."],
      limits:["« Trop chaud » ne veut pas dire « va refroidir » : pendant une grosse montée, le RSI peut rester au-dessus de 70 très longtemps.","La note change selon le nombre de bougies choisi et l'échelle de temps."] } },

  { id:'macd', module:'indicateurs', title:'Le MACD',
    pro:{
      summary:"Suivre l'écart entre deux moyennes exponentielles.",
      what:"Le MACD est la différence entre une EMA courte (12) et une EMA longue (26). Une « ligne de signal » (EMA 9 du MACD) le lisse, et l'histogramme montre l'écart entre les deux.",
      formula:"MACD = EMA(12) − EMA(26)   ·   Signal = EMA(9) du MACD   ·   Histogramme = MACD − Signal",
      how:["MACD au-dessus de zéro : l'EMA courte est au-dessus de la longue, contexte plutôt haussier ; en dessous : l'inverse.","Un croisement du MACD et de sa ligne de signal est un repère d'accélération ou de ralentissement.","Un histogramme qui rétrécit indique un élan qui faiblit."],
      limits:["Indicateur retardé, construit sur des moyennes elles-mêmes retardées.","Nombreux faux signaux quand le marché stagne."] },
    kid:{
      summary:"L'écart entre un coureur rapide et un coureur lent.",
      what:"Imaginez deux coureurs : un rapide et un plus lent. Le MACD mesure l'écart entre eux. Quand le rapide s'éloigne du lent vers le haut, la montée prend de la vitesse ; quand il se rapproche, elle ralentit. Une deuxième ligne, le « signal », est une version adoucie du MACD, et les barres montrent l'écart entre les deux lignes.",
      formula:"MACD = moyenne rapide (12) − moyenne lente (26)   ·   signal = moyenne du MACD sur 9   ·   barres = MACD − signal",
      how:["MACD au-dessus de zéro : le rapide est devant le lent (ambiance plutôt « ça monte »).","Quand le MACD croise sa ligne signal, l'élan change de rythme.","Des barres de plus en plus petites : l'élan s'essouffle."],
      limits:["Comme il est construit sur des moyennes, il est toujours un peu en retard.","Quand le prix tourne en rond, il donne beaucoup de fausses alertes."] } },

  { id:'stochastique', module:'indicateurs', title:"L'oscillateur stochastique",
    pro:{
      summary:"Situer la dernière clôture dans la fourchette récente.",
      what:"L'oscillateur stochastique situe la dernière clôture dans la fourchette entre le plus haut et le plus bas des N dernières périodes (14 en général). %K est cette position, de 0 à 100 ; %D en est la moyenne mobile sur 3 périodes. Par convention, au-dessus de 80 : zone haute ; sous 20 : zone basse.",
      formula:"%K = (clôture − plus bas N) ÷ (plus haut N − plus bas N) × 100   ·   %D = moyenne mobile de %K sur 3",
      how:["Une valeur élevée signifie que la clôture se situe près du haut de la fourchette récente, une valeur basse près du bas.","Le croisement de %K et %D est utilisé comme repère de changement d'élan.","Plus réactif que le RSI, donc plus bruité."],
      limits:["Les zones haute et basse ne sont pas des signaux de retournement : en tendance forte, l'oscillateur y reste longtemps.","Nombreux faux signaux sur les très petites unités de temps (M1 à M15)."] },
    kid:{
      summary:"Où se trouve le prix entre son point le plus bas et le plus haut récents ?",
      what:"Regardez les 14 dernières bougies : il y a un point le plus haut et un point le plus bas. Le stochastique dit où se trouve le dernier prix entre les deux, comme la position de quelqu'un dans un escalier : 0 = tout en bas, 100 = tout en haut. Au-dessus de 80, on est tout près du haut ; sous 20, tout près du bas.",
      formula:"Position = (dernier prix − plus bas des 14) ÷ (plus haut des 14 − plus bas des 14) × 100",
      how:["Valeur haute : le prix est près de son plus haut récent. Valeur basse : près de son plus bas.","Il y a deux lignes ; quand elles se croisent, l'élan change de rythme.","Il réagit plus vite que le RSI, mais il se trompe aussi plus souvent."],
      limits:["Être près du haut ne veut pas dire que ça va redescendre : pendant une grosse montée, il y reste longtemps.","Sur de très petites échelles de temps (1 à 15 minutes), il donne beaucoup de fausses alertes."] } },

  { id:'fibonacci', module:'indicateurs', title:'Les retracements de Fibonacci',
    pro:{
      summary:"Placer des niveaux de repère dans une correction.",
      what:"Les retracements de Fibonacci placent des niveaux (23,6 %, 38,2 %, 50 %, 61,8 %, 78,6 %) entre un creux et un sommet, comme repères où une correction pourrait ralentir. Les niveaux 38,2 % et 61,8 % dérivent de la suite de Fibonacci ; le 50 % est ajouté par convention.",
      formula:"Niveau = sommet − (sommet − creux) × pourcentage",
      how:["Tracer de la base au sommet du mouvement précédent (ou l'inverse).","Observer si le prix réagit autour des niveaux, surtout là où ils coïncident avec un support ou une résistance.","Les utiliser comme zones de réflexion, pas comme seuils exacts."],
      limits:["Très subjectif : le choix du sommet et du creux modifie les niveaux.","Son pouvoir prédictif est contesté ; une part de son effet tient au fait que beaucoup d'opérateurs le regardent."] },
    kid:{
      summary:"Des repères pour voir jusqu'où le prix recule avant de repartir.",
      what:"Après une grosse montée, le prix recule souvent un peu avant de repartir, comme on reprend son souffle après un sprint. Fibonacci propose des repères : « il a repris sa course après avoir perdu un peu moins de la moitié (38 %), la moitié (50 %), ou presque les deux tiers (62 %) de la montée ». On trace des lignes à ces endroits, comme des marques sur une règle.",
      formula:"Ligne = point le plus haut − (écart entre le plus haut et le plus bas) × pourcentage",
      how:["Repérez une grosse montée (ou descente) : un point de départ et un point d'arrivée.","Placez les lignes aux pourcentages indiqués et regardez si le prix ralentit près d'elles.","Ces lignes sont des idées de zones, pas des murs."],
      limits:["Chacun choisit son départ et son arrivée un peu différemment, donc les lignes changent d'une personne à l'autre.","Beaucoup de gens les regardent, ce qui peut les faire « marcher » un peu, mais personne n'a prouvé qu'elles prévoient l'avenir."] } },

  /* ================= MODULE 3 : RISQUE ================= */
  { id:'stop-loss', module:'risque', title:'Stop loss et ratio risque / rendement',
    pro:{
      summary:"Décider à l'avance combien on accepte de perdre.",
      what:"Un stop loss est un ordre qui clôture la position si le prix atteint un niveau défini à l'avance. Le ratio risque/rendement compare la perte acceptée au gain visé : un ratio de 1:2 vise 2 pour 1 risqué.",
      how:["Fixer le stop avant d'entrer, selon le graphique, jamais selon la somme qu'on « voudrait » perdre.","Avec un ratio 1:2, environ un trade sur trois gagnant suffit à l'équilibre, hors frais.","Ne pas déplacer le stop pour « laisser une chance au trade »."],
      limits:["Un stop peut être exécuté à un prix moins favorable lors de mouvements rapides (« slippage »).","Un bon ratio ne compense pas un taux de réussite très faible."] },
    kid:{
      summary:"Décider avant de jouer jusqu'où on accepte de perdre.",
      what:"Un stop loss, c'est une règle fixée avant de partir : « si le prix descend jusqu'à ce point, je sors ». Comme décider avant un jeu de ne pas perdre plus de 5 euros. Le rapport 1:2 veut dire : pour chaque euro que j'accepte de perdre, j'espère en gagner deux.",
      how:["Fixez le point de sortie avant de commencer, en regardant le graphique.","Avec 1:2, gagner environ 1 fois sur 3 suffit pour s'en sortir à égalité, sans compter les frais.","Ne repoussez pas le point de sortie pour « donner une chance » : ce serait changer la règle en cours de jeu."],
      limits:["Quand le prix saute très vite, la sortie peut se faire un peu plus loin que prévu (on appelle ça le « slippage »).","Un bon rapport ne sauve pas quelqu'un qui se trompe presque tout le temps."] } },

  { id:'taille-position', module:'risque', title:'La taille de position',
    pro:{
      summary:"Risquer un petit pourcentage du capital par trade.",
      what:"La taille de position se calcule à partir du capital, du pourcentage de risque (1 à 2 % chez les opérateurs prudents) et de la distance du stop loss en pips.",
      formula:"Taille de lot = risque en $ ÷ (stop loss en pips × valeur du pip par lot)",
      how:["Déterminer le risque en $ : capital × pourcentage de risque.","Mesurer la distance du stop en pips.","Utiliser le calculateur du site pour obtenir la taille de lot."],
      limits:["La valeur du pip du calculateur est une estimation : à vérifier dans votre plateforme.","Le levier ne réduit pas le risque : il agrandit la taille des positions possibles."],
      link:["index.html#calculateur","Ouvrir le calculateur"] },
    kid:{
      summary:"Choisir la taille de sa mise pour ne jamais perdre trop.",
      what:"Avant de jouer, on décide combien on accepte de perdre au maximum, par exemple 1 ou 2 euros sur 100. Ensuite, on choisit la taille de sa mise pour que, si on perd, on ne perde pas plus que cela. C'est un petit calcul que le calculateur du site fait pour vous.",
      formula:"Taille = somme acceptée à perdre ÷ (distance jusqu'à la sortie en pips × valeur d'un pip)",
      how:["Calculez la somme que vous acceptez de perdre : capital × pourcentage (1 à 2 %).","Mesurez la distance jusqu'au point de sortie, en pips.","Laissez le calculateur trouver la taille."],
      limits:["La valeur du pip du calculateur est une estimation : vérifiez-la dans votre plateforme.","Le levier ne rend pas le jeu moins risqué : il permet seulement de miser plus gros."],
      link:["index.html#calculateur","Ouvrir le calculateur"] } },

  { id:'ordres', module:'risque', title:"Les types d'ordres",
    pro:{
      summary:"Choisir comment entrer et sortir du marché.",
      what:"Un ordre au marché s'exécute immédiatement au meilleur prix disponible. Un ordre à cours limité s'exécute seulement au prix fixé ou à un meilleur prix. Un ordre stop se déclenche quand le prix atteint un niveau, puis devient un ordre au marché. Le stop loss et le take profit sont des ordres de sortie placés à l'avance.",
      how:["Au marché : certitude d'exécution, pas du prix.","À cours limité : certitude du prix, pas de l'exécution.","Associer systématiquement un stop loss à chaque position ouverte."],
      limits:["Un stop peut être exécuté à un prix moins favorable lors d'un gap ou d'une annonce (glissement).","Le spread et les frais du courtier réduisent le résultat de chaque ordre."] },
    kid:{
      summary:"Plusieurs façons de passer une commande.",
      what:"Il y a plusieurs façons de passer une commande. « Au marché » : j'achète tout de suite, au prix du moment. « Limite » : j'achète seulement si le prix arrive au chiffre que j'ai fixé. « Stop » : la commande ne se déclenche que si le prix atteint un seuil, c'est ce qu'on utilise pour sortir en cas de problème. Le « take profit » est l'inverse : je sors quand j'ai gagné ce que je voulais.",
      how:["Au marché : c'est sûr que ça se fait, mais on n'est pas sûr du prix exact.","Limite : on est sûr du prix, mais pas sûr que ça se fasse.","Mettez toujours un point de sortie (stop loss) en même temps que votre entrée."],
      limits:["Quand ça va très vite (annonces importantes), le prix obtenu peut être moins bon que prévu.","Chaque ordre coûte un peu (écart entre prix d'achat et de vente, frais) : ça s'additionne."] } },

  { id:'psychologie', module:'risque', title:'La psychologie du trader',
    pro:{
      summary:"Reconnaître les biais qui sabotent les décisions.",
      what:"Les décisions de trading sont sujettes à des biais : aversion aux pertes (garder trop longtemps une position perdante), FOMO (entrer par peur de manquer le mouvement), surconfiance après une série de gains, revenge trading (vouloir « se refaire » après une perte), surtrading.",
      how:["Définir à l'avance les conditions d'entrée, de sortie et le risque maximal quotidien.","S'imposer une pause après une série de pertes ou une perte supérieure au plafond.","Tenir un journal incluant l'état émotionnel au moment de la décision."],
      limits:["Connaître les biais ne protège pas à lui seul : seules des règles appliquées avant la décision le font.","Fatigue, stress et pression financière aggravent les biais."] },
    kid:{
      summary:"Le plus gros adversaire, c'est soi-même.",
      what:"Le plus gros adversaire n'est pas le marché, c'est soi-même. Quelques pièges classiques : ne pas supporter de perdre et attendre que ça remonte ; avoir peur de rater une grosse occasion et sauter dans un mouvement trop tard ; se croire invincible après quelques réussites ; vouloir « se refaire » tout de suite après une perte ; jouer trop souvent, juste pour jouer.",
      how:["Écrivez vos règles avant, pas pendant.","Après des pertes, faites une pause : marchez, buvez de l'eau, revenez demain.","Notez comment vous vous sentiez à chaque décision : on se découvre vite."],
      limits:["Connaître les pièges ne suffit pas : ce sont les règles écrites avant qui protègent.","Quand on est fatigué, stressé ou qu'on a besoin d'argent, on tombe plus facilement dedans."] } },

  { id:'plan-trading', module:'risque', title:'Le plan de trading',
    pro:{
      summary:"Écrire ses règles pour ne pas improviser sous pression.",
      what:"Un plan de trading décrit à l'avance : quels marchés, quelles unités de temps, quelles conditions d'entrée, où placer le stop, quel risque par trade, quand arrêter la journée.",
      how:["Écrire le plan avant de trader, en une page.","Noter chaque trade : raison, risque, résultat, émotion ressentie.","Relire ses notes chaque semaine et ne changer qu'une règle à la fois."],
      limits:["Un plan n'élimine pas les pertes : il sert à les garder sous contrôle.","Un plan non testé en compte démo reste une hypothèse."] },
    kid:{
      summary:"Les règles du jeu, écrites avant de jouer.",
      what:"Un plan de trading, c'est comme les règles d'un jeu de société écrites avant de jouer : on ne les change pas quand on est en train de perdre. On y écrit : quels marchés, quelles échelles de temps, quand on entre, où on sort, combien on risque et quand on s'arrête pour la journée.",
      how:["Écrivez le plan sur une seule page, avant de jouer.","Après chaque essai, notez pourquoi, combien et comment vous vous sentiez.","Chaque semaine, relisez vos notes et ne changez qu'une règle à la fois."],
      limits:["Un plan n'évite pas de perdre : il aide à perdre peu.","Un plan jamais essayé en compte démo n'est qu'une idée."] } },

  /* ================= MODULE 4 : CRYPTOS ================= */
  { id:'crypto-bases', module:'crypto', title:"Qu'est-ce qu'une crypto-monnaie ?",
    pro:{
      summary:"Un actif numérique enregistré sur une blockchain.",
      what:"Une crypto-monnaie (ou crypto-actif) est un actif numérique dont les transactions sont enregistrées dans un registre partagé, la blockchain. Bitcoin, créé en 2009, est la première ; Ethereum est une autre très connue. Il en existe des milliers, de nature très différente.",
      how:["Distinguer les grandes cryptos (Bitcoin, Ethereum) des milliers de petits projets, bien plus risqués.","Se demander qui émet l'actif, à quoi il sert et comment son prix se forme.","Les prix s'expriment en général en paire, comme BTC/USD : même logique de lecture qu'une paire de devises."],
      limits:["Une crypto n'a pas de valeur « garantie » : son prix dépend de l'offre et de la demande.","Beaucoup de projets disparaissent. Le succès d'un projet passé ne garantit rien pour les autres."] },
    kid:{
      summary:"De l'argent qui n'existe qu'en numérique.",
      what:"Une crypto-monnaie est de l'argent qui n'existe qu'en numérique. Au lieu d'une banque qui tient les comptes, un grand cahier partagé par des milliers d'ordinateurs (la « blockchain ») note qui possède quoi, et il est très difficile d'y tricher. Bitcoin, né en 2009, est la première ; Ethereum est une autre très connue ; il en existe des milliers d'autres.",
      how:["Distinguez les grosses cryptos connues des milliers de petits projets, bien plus risqués.","Demandez-vous toujours : qui l'a créée, à quoi sert-elle ?","Les prix se lisent comme ceux des devises : BTC/USD veut dire « combien de dollars pour un bitcoin »."],
      limits:["Personne ne garantit la valeur d'une crypto : son prix monte et descend selon ceux qui veulent acheter ou vendre.","Beaucoup de projets disparaissent, et un projet qui a marché ne prouve rien pour les autres."] } },

  { id:'forex-vs-crypto', module:'crypto', title:'Forex et cryptos : les différences',
    pro:{
      summary:'Ce qui change quand on passe des devises aux cryptos.',
      what:"Le marché des changes est ouvert 24 h/24 du lundi au vendredi ; celui des cryptos fonctionne 24 h/24 et 7 j/7. Les cryptos sont en général bien plus volatiles que les grandes paires de devises, et leurs prix peuvent différer d'une plateforme à l'autre.",
      how:["Prévoir un risque par position plus faible : des mouvements de plusieurs pourcents en quelques heures sont possibles.","Les indicateurs (Bollinger, RSI, MACD) se lisent de la même façon, mais les réglages standards sont souvent dépassés par la volatilité.","Acheter la crypto elle-même et prendre un CFD dessus sont deux choses différentes : le CFD est un produit à levier, très risqué."],
      limits:["Un marché ouvert en continu oblige à gérer le risque la nuit et le week-end (stops, taille de position).","Moins d'historique et moins de règles qu'en Forex : plus d'incertitude."] },
    kid:{
      summary:"Un marché qui ne dort jamais et qui bouge beaucoup plus fort.",
      what:"Le marché des devises dort le week-end ; celui des cryptos ne s'arrête jamais. Les cryptos bougent aussi beaucoup plus fort : un prix peut changer de plusieurs pourcents en quelques heures. Enfin, le prix peut être un peu différent d'un site à l'autre.",
      how:["Risquez moins à chaque essai : le prix peut sauter très vite.","Les outils (Bollinger, RSI, MACD) se lisent de la même façon, mais leurs réglages habituels sont souvent dépassés.","Acheter une vraie crypto et parier sur son prix (un « CFD ») sont deux choses très différentes : le CFD est un produit à effet de levier, très risqué."],
      limits:["Comme le marché ne s'arrête jamais, il faut protéger ses positions même la nuit et le week-end.","Il y a moins d'historique et moins de règles qu'avec les devises : plus d'inconnues."] } },

  { id:'crypto-conservation', module:'crypto', title:'Où et comment conserver ses cryptos',
    pro:{
      summary:'Plateforme ou portefeuille personnel : qui détient les clés ?',
      what:"Sur une plateforme d'échange, c'est elle qui conserve vos cryptos pour vous. Avec un portefeuille personnel (« wallet »), vous détenez vous-même les clés privées qui donnent accès aux fonds.",
      how:["Activer la double authentification et utiliser un mot de passe unique et long.","Ne jamais communiquer sa phrase de récupération : aucun service sérieux ne la demande.","Ne conserver sur une plateforme que ce dont on a besoin pour échanger."],
      limits:["Clés privées perdues : fonds perdus, sans recours possible.","Plateforme défaillante ou piratée : les fonds peuvent être perdus ou gelés."] },
    kid:{
      summary:"Qui garde les clés de votre coffre-fort ?",
      what:"Si vous laissez vos cryptos sur le site d'une plateforme, c'est elle qui les garde, comme une banque. Si vous utilisez un portefeuille personnel (un « wallet »), c'est vous qui gardez les clés secrètes : de très longs mots de passe qui donnent accès à tout.",
      how:["Activez la double vérification et choisissez un mot de passe long et unique.","Ne donnez jamais votre phrase de récupération à personne : un site sérieux ne la demande jamais.","Ne laissez sur une plateforme que ce dont vous avez besoin pour échanger."],
      limits:["Clé perdue = argent perdu, et personne ne peut vous aider.","Si la plateforme est piratée ou fait faillite, vos cryptos peuvent être perdues ou bloquées."] } },

  { id:'crypto-risques', module:'crypto', title:'Risques et arnaques',
    pro:{
      summary:'Reconnaître les pièges les plus fréquents.',
      what:"Les cryptos concentrent un grand nombre d'arnaques : fausses plateformes, faux « conseillers », usurpations de comptes, promesses de rendements garantis. Les variations de prix peuvent aussi faire perdre l'essentiel d'un capital.",
      how:["Se méfier de toute promesse de gain garanti, de « rendement sans risque » ou de pression pour agir vite.","Ne jamais envoyer de fonds à une personne rencontrée en ligne qui propose de « les faire fructifier ».","Vérifier l'adresse exacte du site avant de saisir un mot de passe (hameçonnage)."],
      limits:["Même un projet légitime peut perdre l'essentiel de sa valeur.","Ne placez que de l'argent que vous pouvez vous permettre de perdre."] },
    kid:{
      summary:"Beaucoup de menteurs, et des prix qui peuvent s'effondrer.",
      what:"Il y a beaucoup de menteurs dans les cryptos : faux sites qui ressemblent aux vrais, faux « conseillers » qui promettent de faire gagner de l'argent, inconnus qui vous écrivent par surprise. Et même sans menteur, un prix peut s'effondrer.",
      how:["Fuyez toute promesse de gain assuré, de « sans risque » ou de « dépêchez-vous ».","N'envoyez jamais d'argent à quelqu'un rencontré en ligne qui veut « le faire fructifier ».","Vérifiez l'adresse du site lettre par lettre avant de saisir un mot de passe."],
      limits:["Même un projet honnête peut perdre presque toute sa valeur.","N'y mettez que de l'argent dont vous pouvez vous passer."] } },

  { id:'crypto-cadre', module:'crypto', title:'Le cadre réglementaire en France',
    pro:{
      summary:"Vérifier qu'un prestataire est autorisé avant de lui confier de l'argent.",
      what:"En Europe, les prestataires de services sur crypto-actifs sont encadrés : en France, un régime national (PSAN) a existé avant la mise en place d'un régime européen (règlement MiCA). Les règles et les listes évoluent : ce paragraphe est un repère, pas un conseil juridique.",
      how:["Avant d'ouvrir un compte, chercher le prestataire sur les listes publiées par l'AMF et vérifier son statut.","Consulter aussi les listes de sites non autorisés signalés par l'AMF.","Se renseigner sur la fiscalité des cryptos auprès de sources officielles : elle existe et évolue."],
      limits:["Être enregistré ou agréé ne signifie pas que les gains sont garantis, ni que les fonds sont protégés comme des dépôts bancaires.","La situation exacte est à vérifier auprès des sources officielles à la date où vous lisez."] },
    kid:{
      summary:"Vérifier qu'un site a le droit de s'occuper de votre argent.",
      what:"Comme pour les banques, les sites qui s'occupent des cryptos doivent respecter des règles et, en Europe, avoir une autorisation. Ces règles sont récentes et changent : en France, un ancien régime (PSAN) existait avant un régime européen (MiCA). Ce paragraphe donne des repères, pas un conseil juridique.",
      how:["Avant d'ouvrir un compte, cherchez le site sur les listes de l'AMF.","Regardez aussi les listes de sites que l'AMF signale comme non autorisés.","Renseignez-vous sur les impôts auprès de sources officielles."],
      limits:["Être autorisé ne veut pas dire que les gains sont assurés, ni que l'argent est protégé comme à la banque.","Les règles changent : vérifiez à la date où vous lisez."] } },

  { id:'crypto-fiscalite', module:'crypto', title:'Fiscalité des cryptos : les repères',
    pro:{
      summary:"Ce qui peut être imposable et ce qu'il faut conserver.",
      what:"En France, les cessions de crypto-actifs contre de la monnaie ayant cours légal, ainsi que certains autres usages, peuvent donner lieu à imposition, avec des obligations déclaratives (notamment pour les comptes ouverts auprès de plateformes étrangères). Les règles, taux et seuils évoluent : ce contenu n'est qu'un repère, pas un conseil fiscal.",
      how:["Conserver l'historique de toutes les opérations (dates, montants, prix) : plateformes et portefeuilles.","Se renseigner sur le traitement des échanges crypto contre crypto, du staking, etc., auprès de sources officielles.","Consulter impots.gouv.fr ou un professionnel pour sa situation personnelle."],
      limits:["Les règles sont propres à chaque pays et évoluent régulièrement.","Ce contenu ne remplace pas l'avis d'un professionnel."] },
    kid:{
      summary:"Gagner de l'argent avec des cryptos peut avoir des conséquences sur les impôts.",
      what:"Gagner de l'argent avec des cryptos peut être soumis à l'impôt, un peu comme un salaire. Il faut garder une trace de tout ce qu'on fait (dates, sommes, prix), car on peut devoir le déclarer. Les règles changent : ce n'est qu'un repère, pas un conseil d'un spécialiste.",
      how:["Gardez une liste de toutes vos opérations : date, somme, prix.","Pour les cas particuliers (échanger une crypto contre une autre, etc.), cherchez la réponse sur les sites officiels.","Demandez conseil au site officiel des impôts ou à un professionnel."],
      limits:["Les règles ne sont pas les mêmes dans tous les pays et elles changent.","Ce texte ne remplace pas l'avis d'un professionnel."] } },

  /* ================= MODULE : LES MARCHÉS ================= */
  { id:'marches-familles', module:'marches', title:'Les grandes familles de marchés',
    pro:{
      summary:"Situer chaque marché et ses particularités.",
      what:"Les principaux marchés : devises (Forex, de gré à gré, ouvert 24 h/24 du lundi au vendredi), actions (parts du capital d'entreprises, cotées en bourse à horaires fixes), indices (paniers d'actions résumés en un chiffre), matières premières (or, pétrole, blé…) et crypto-actifs (24 h/24, 7 j/7). Chaque marché a ses horaires, sa liquidité, ses coûts et ses facteurs d'influence.",
      how:["Identifier ce qui fait bouger chaque marché : taux d'intérêt pour les devises, résultats d'entreprises pour les actions, offre et demande pour les matières premières.","Vérifier les horaires de cotation et la liquidité avant de trader un instrument.","Commencer par un seul marché et le maîtriser avant d'en suivre plusieurs."],
      limits:["Les marchés sont liés : une annonce majeure peut les faire bouger tous ensemble.","Les frais et la liquidité varient fortement d'un instrument à l'autre."] },
    kid:{
      summary:"Monnaies, entreprises, matières premières, cryptos : chacun son rythme.",
      what:"Un marché, c'est un endroit où l'on achète et vend quelque chose. Il y a plusieurs familles : les devises (les monnaies de chaque pays), les actions (de toutes petites parts d'entreprises), les indices (un résumé de beaucoup d'entreprises), les matières premières (or, pétrole, blé) et les cryptos. Chacune a ses horaires, comme des magasins qui n'ouvrent pas aux mêmes heures.",
      how:["Demandez-vous ce qui fait bouger chaque marché : les taux d'intérêt pour les monnaies, les résultats pour les entreprises, la demande pour l'or ou le pétrole.","Regardez les horaires d'ouverture avant de vous y intéresser.","Apprenez un seul marché à fond avant d'en suivre plusieurs."],
      limits:["Les marchés se touchent : une grosse nouvelle peut les faire bouger tous en même temps.","Les frais ne sont pas les mêmes partout, et certains marchés sont plus calmes que d'autres."] } },

  { id:'indices', module:'marches', title:'Les indices boursiers',
    pro:{
      summary:"Un chiffre qui résume l'évolution d'un panier de valeurs.",
      what:"Un indice boursier résume l'évolution d'un panier de valeurs : CAC 40 (40 grandes sociétés françaises), S&P 500 (500 grandes sociétés américaines), DAX (sociétés allemandes)… Il est le plus souvent pondéré par la capitalisation boursière : les plus grosses entreprises pèsent davantage. On ne peut pas acheter un indice directement : on passe par des ETF, des contrats à terme ou des CFD.",
      how:["Lire l'indice comme un thermomètre de l'économie et du moral des investisseurs d'une zone.","Savoir ce qu'il contient : quelques grandes valeurs peuvent peser lourd.","Distinguer un indice « prix » d'un indice « dividendes réinvestis »."],
      limits:["Un indice peut monter alors que la majorité de ses valeurs baisse, quand les plus grosses tirent la moyenne.","Un produit qui réplique un indice (ETF, CFD) a ses propres frais et risques."] },
    kid:{
      summary:"Une note qui résume la santé de beaucoup d'entreprises d'un coup.",
      what:"Un indice, c'est une note qui résume la santé de beaucoup d'entreprises d'un coup, comme la moyenne générale d'une classe. Le CAC 40 résume 40 grandes entreprises françaises ; le S&P 500, 500 entreprises américaines. Les plus grosses entreprises comptent plus que les petites dans la note. On ne peut pas acheter l'indice lui-même comme un objet : on passe par des produits qui le copient.",
      how:["Regardez l'indice comme un thermomètre de l'économie d'un pays.","Regardez quelles sont les plus grosses entreprises dedans : elles pèsent le plus.","Un indice peut monter même si beaucoup d'entreprises baissent, si les plus grosses montent."],
      limits:["Les produits qui copient un indice ont leurs propres frais et leurs propres risques.","Un indice qui a bien marché dans le passé n'a aucune garantie de continuer."] } },

  { id:'actions-matieres', module:'marches', title:'Actions et matières premières',
    pro:{
      summary:"Deux univers moteurs de la finance, aux logiques différentes.",
      what:"Une action est une part du capital d'une entreprise ; son prix dépend de ses résultats attendus et du climat de marché. Les matières premières (énergie, métaux, agriculture) se traitent surtout via des contrats à terme, des ETF ou des CFD ; leur prix dépend de l'offre, de la demande, de la météo ou de la géopolitique.",
      how:["Pour une action : lire les résultats, la dette et le secteur.","Pour une matière première : suivre les stocks, la saisonnalité et les décisions des pays producteurs.","Garder à l'esprit que le dollar influence souvent les prix des matières premières (cotées en dollars)."],
      limits:["Les annonces d'entreprises et les événements géopolitiques peuvent provoquer des écarts de prix soudains.","Les contrats à terme sur matières premières ont des échéances à gérer."] },
    kid:{
      summary:"Une part d'entreprise, ou une chose concrète comme l'or ou le pétrole.",
      what:"Une action est une toute petite part d'une entreprise : si l'entreprise va bien, la part prend en général de la valeur, sinon elle en perd. Les matières premières sont des choses concrètes qu'on utilise : l'or, le pétrole, le blé. Leur prix dépend de la quantité disponible et du nombre de personnes qui en veulent.",
      how:["Pour une action : regardez comment va l'entreprise (ses ventes, ses dettes).","Pour une matière première : regardez si elle est rare ou abondante, la météo, les décisions des pays qui la produisent.","Beaucoup de matières premières sont cotées en dollars : le prix du dollar compte aussi."],
      limits:["Une mauvaise nouvelle peut faire chuter le prix d'un coup.","Les produits liés aux matières premières ont des dates de fin à surveiller."] } },

  /* ================= MODULE : PRODUITS DÉRIVÉS ================= */
  { id:'derives-def', module:'derives', title:"Qu'est-ce qu'un produit dérivé ?",
    pro:{
      summary:"Un contrat dont la valeur dépend d'un autre actif.",
      what:"Un produit dérivé est un contrat dont la valeur dépend d'un actif sous-jacent (devise, indice, action, matière première, crypto-actif). Les principaux : contrats à terme (futures), CFD (contrats pour différence) et options. Beaucoup offrent un effet de levier, qui amplifie gains et pertes.",
      how:["Identifier le sous-jacent, la durée de vie du contrat et les frais.","Mesurer la perte maximale possible avant d'entrer.","Comprendre le mécanisme de levier et de marge exigée."],
      limits:["Complexité et levier : on peut perdre tout le capital engagé, voire davantage selon le produit.","Les règles de commercialisation aux particuliers sont strictes et évoluent."] },
    kid:{
      summary:"Un contrat dont la valeur suit celle d'autre chose.",
      what:"Un produit dérivé est un contrat dont la valeur suit celle d'autre chose, comme un ticket dont le prix change avec celui du pétrole sans que vous achetiez de pétrole. Il en existe plusieurs sortes : les contrats à terme, les CFD et les options. Beaucoup ont un « effet de levier » : c'est comme une loupe qui grossit autant les gains que les pertes.",
      how:["Demandez-vous toujours : de quoi dépend ce contrat, combien de temps dure-t-il, combien coûte-t-il ?","Calculez la perte maximale avant de commencer.","Comprenez bien l'effet de loupe (le levier) avant d'y toucher."],
      limits:["Avec la loupe, on peut perdre toute sa mise, et parfois plus selon le produit.","Les règles pour les particuliers sont strictes et elles changent."] } },

  { id:'cfd', module:'derives', title:'Les CFD et le levier',
    pro:{
      summary:"Échanger une différence de prix, avec une marge et un levier.",
      what:"Un CFD (contrat pour différence) est un accord avec un courtier pour échanger la différence de prix d'un actif entre l'ouverture et la clôture de la position, sans détenir l'actif. Il se traite avec un effet de levier : seule une fraction de la valeur de la position (la marge) est déposée.",
      how:["Calculer l'exposition réelle : marge × levier.","Surveiller la marge disponible pour éviter l'appel de marge et la clôture forcée (stop out).","Prendre en compte les frais : spread, financement de nuit (swap), commissions."],
      limits:["Pour les particuliers en Europe, le levier est plafonné (par exemple 30:1 sur les grandes paires de devises) ; les valeurs sont à vérifier selon l'actif et la date.","Les publications réglementaires des courtiers montrent qu'une large majorité de comptes de particuliers perdent de l'argent sur les CFD."] },
    kid:{
      summary:"Un accord sur la différence de prix, avec une loupe qui grossit tout.",
      what:"Un CFD, c'est un accord avec un courtier sur la différence de prix entre le moment où l'on ouvre et celui où l'on ferme, sans jamais posséder la chose. On ne dépose qu'une petite partie de la valeur (la « marge »), ce qui permet de jouer gros avec peu : c'est l'effet de loupe, qui grossit aussi les pertes.",
      how:["Calculez la vraie taille de votre position, pas seulement la somme déposée.","Surveillez votre marge : si elle devient trop basse, le courtier peut fermer vos positions d'office.","Comptez les frais : écart entre prix d'achat et de vente, coût de garder la position la nuit, commissions."],
      limits:["En Europe, la loupe est limitée pour les particuliers (par exemple 30 pour 1 sur les grandes devises) ; les chiffres sont à vérifier selon la date.","Les chiffres publiés par les courtiers montrent que la grande majorité des particuliers perdent de l'argent avec les CFD."] } },

  { id:'options-bases', module:'derives', title:'Les options : call et put',
    pro:{
      summary:"Un droit d'acheter ou de vendre, en échange d'une prime.",
      what:"Une option donne le droit, sans l'obligation, d'acheter (call) ou de vendre (put) un actif à un prix fixé (le strike) jusqu'à une date donnée (l'échéance). L'acheteur paie une prime au vendeur. L'acheteur ne peut perdre que la prime ; le vendeur s'expose à des pertes potentiellement bien supérieures, voire illimitées pour un call vendu à nu.",
      formula:"Gain d'un call à l'échéance = max(prix de l'actif − strike ; 0) − prime payée",
      how:["Call : on anticipe la hausse du sous-jacent ; put : la baisse, ou on s'en sert pour se protéger.","Une option « dans la monnaie » a déjà une valeur intrinsèque, une option « hors de la monnaie » n'en a pas.","Le prix de l'option (la prime) dépend du prix de l'actif, du strike, de la durée restante et de la volatilité."],
      limits:["Une option peut expirer sans valeur : la prime est alors entièrement perdue.","Vendre des options sans couverture expose à des pertes très élevées.","Produit complexe : ne pas s'y engager sans en avoir compris le mécanisme."] },
    kid:{
      summary:"Un billet de réservation : le droit d'acheter ou de vendre à un prix fixé.",
      what:"Une option est comme un billet de réservation : en payant un petit prix (la prime), vous gagnez le droit d'acheter (un « call ») ou de vendre (un « put ») quelque chose à un prix fixé à l'avance, avant une date limite. Si ça ne vous avantage pas, vous laissez tomber le billet : vous perdez seulement le prix du billet. Mais celui qui vend ce billet peut, lui, perdre beaucoup plus.",
      formula:"Gain d'un call à la date limite = (prix de l'actif − prix fixé, s'il est positif) − prime payée",
      how:["Un call est utile si vous pensez que le prix va monter ; un put, s'il va descendre (ou pour se protéger).","Le prix du billet dépend du prix de l'actif, du prix fixé, du temps qui reste et de l'agitation du marché.","Si le billet n'a plus d'intérêt à la date limite, il ne vaut plus rien."],
      limits:["Le billet peut valoir zéro à la date limite : on perd alors toute la prime.","Vendre des billets sans protection peut coûter très cher.","C'est un produit compliqué : ne vous lancez pas sans l'avoir compris."] } },

  { id:'options-grecques', module:'derives', title:'Les « grecques » en bref',
    pro:{
      summary:"Mesurer la sensibilité du prix d'une option.",
      what:"Les grecques mesurent la sensibilité du prix d'une option : delta (variation par rapport au prix du sous-jacent), gamma (variation du delta), theta (érosion due au temps), vega (sensibilité à la volatilité) et rho (aux taux d'intérêt).",
      how:["Delta : environ la part du mouvement du sous-jacent que suit l'option (0,5 ≈ la moitié).","Theta : le temps qui passe fait perdre de la valeur à l'option, surtout près de l'échéance.","Vega : une hausse de la volatilité tend à augmenter le prix des options."],
      limits:["Ce sont des estimations qui changent en permanence avec le marché.","Elles viennent de modèles dont les hypothèses ne se vérifient pas toujours."] },
    kid:{
      summary:"Trois petits repères pour comprendre pourquoi le prix d'une option bouge.",
      what:"Ce sont de petits repères qui expliquent pourquoi le prix d'une option bouge. Delta : de combien suit-elle le mouvement du prix de l'actif ? Theta : combien perd-elle de valeur chaque jour qui passe, comme une glace qui fond ? Vega : comment réagit-elle quand le marché devient plus agité ? Il y en a d'autres, mais ces trois-là suffisent pour commencer.",
      how:["Delta de 0,5 : l'option suit environ la moitié du mouvement de l'actif.","Theta : plus on approche de la date limite, plus la glace fond vite.","Vega : quand le marché s'agite, les options valent en général plus cher."],
      limits:["Ce sont des estimations, qui changent tout le temps.","Elles viennent de calculs avec des hypothèses qui ne se vérifient pas toujours."] } },

  { id:'pari-vs-trading', module:'derives', title:'Trading et pari : quelle différence ?',
    pro:{
      summary:"Pourquoi le trading n'est pas un jeu de hasard, et quels produits y ressemblent trop.",
      what:"Un pari est un engagement sur un résultat incertain, dont l'issue ne dépend pas de la personne. Le trading peut s'appuyer sur une analyse, un plan et une gestion du risque, mais il garde une part d'incertitude. Certains produits ressemblent à un pari pur : les options binaires (gain fixe ou perte totale selon que le prix est au-dessus d'un niveau à une échéance) sont interdites à la vente aux particuliers dans l'UE. Les jeux d'argent relèvent d'une autre réglementation (en France, l'ANJ) et d'un autre domaine que fxNOL.",
      how:["Se demander : ai-je un plan, un risque défini et une méthode testée, ou est-ce que je compte sur la chance ?","Refuser tout produit qui promet un gain fixe ou rapide.","Considérer le trading comme une activité à risque de perte, pas comme un jeu."],
      limits:["Une méthode ne supprime jamais l'incertitude : on peut perdre même avec un bon plan.","Le trading peut devenir compulsif : en cas de difficulté, chercher de l'aide auprès d'organismes officiels."] },
    kid:{
      summary:"Dans un pari, on compte sur la chance. En trading, on se prépare, mais le hasard reste là.",
      what:"Dans un pari, on mise sur un résultat et on ne peut rien faire pour l'influencer, comme à pile ou face. En trading, on peut se préparer : apprendre, avoir un plan, limiter ce qu'on risque. Mais attention, il reste du hasard : on peut perdre même en faisant tout bien. Certains produits sont de vrais pièges qui ressemblent à du pari, comme les « options binaires » : elles sont interdites à la vente aux particuliers en Europe. Les jeux d'argent, eux, ont d'autres règles (en France, l'ANJ) et n'ont rien à voir avec ce site.",
      how:["Demandez-vous : ai-je un plan et une limite de perte, ou est-ce que je compte sur la chance ?","Fuyez ce qui promet un gain sûr ou très rapide.","Considérez le trading comme une activité où l'on peut perdre, pas comme un jeu."],
      limits:["Même avec un bon plan, on peut perdre : le hasard reste là.","Si vous sentez que vous ne pouvez plus vous arrêter, parlez-en et cherchez de l'aide auprès d'organismes officiels."] } }
];

/* Mini-quiz par module : mêmes questions pour les deux niveaux, explication adaptée.
   a = index de la bonne réponse. */
const QUIZ = {
  marches: [
    { q:"Que représente un indice comme le CAC 40 ?", opts:["Une seule entreprise","Un résumé de l'évolution de 40 grandes entreprises","Une monnaie","Un courtier"], a:1,
      pro:"Un indice résume l'évolution d'un panier de valeurs, ici 40 grandes sociétés françaises.",
      kid:"C'est une note qui résume la santé de 40 grandes entreprises d'un coup, comme une moyenne de classe." },
    { q:"Pourquoi le prix du dollar compte-t-il pour beaucoup de matières premières ?", opts:["Parce qu'elles sont souvent cotées en dollars","Parce que le dollar est lui-même une matière première","Il ne compte pas","Parce que la loi l'impose"], a:0,
      pro:"Cotées en dollars, elles réagissent souvent aux variations de la devise américaine.",
      kid:"Beaucoup de matières premières sont vendues en dollars : quand le dollar bouge, leur prix bouge aussi." },
    { q:"Peut-on acheter directement un indice comme un objet ?", opts:["Oui, directement en bourse comme une action","Non, on passe par des produits qui le répliquent (ETF, contrats à terme, CFD)","Oui, mais seulement le week-end","Non, c'est interdit"], a:1,
      pro:"Un indice est un calcul : on s'y expose via des produits qui le répliquent, chacun avec ses frais et ses risques.",
      kid:"L'indice est une note, pas un objet : on passe par des produits qui la copient, avec leurs propres frais et risques." }
  ],
  derives: [
    { q:"Si j'achète une option, quelle est ma perte maximale ?", opts:["La prime payée","Illimitée","Le double de la prime","Aucune"], a:0,
      pro:"L'acheteur d'une option ne peut perdre que la prime ; c'est le vendeur qui s'expose à des pertes bien plus grandes.",
      kid:"Le billet a coûté un petit prix : au pire, on perd ce prix. C'est celui qui vend le billet qui risque beaucoup plus." },
    { q:"Que veut dire « effet de levier » ?", opts:["Il amplifie à la fois les gains et les pertes","Il garantit des gains","Il supprime le risque","Il réduit les frais"], a:0,
      pro:"Le levier permet d'exposer plus que le capital déposé, ce qui multiplie gains et pertes.",
      kid:"C'est une loupe : elle grossit les gains, mais elle grossit aussi les pertes." },
    { q:"Que dire des options binaires pour un particulier dans l'UE ?", opts:["Elles sont interdites à la vente aux particuliers","Elles sont conseillées aux débutants","Elles garantissent un gain","Elles sont sans risque"], a:0,
      pro:"Leur commercialisation aux particuliers est interdite dans l'UE depuis 2019 ; à vérifier à la date où vous lisez.",
      kid:"Elles ressemblent à un pari et sont interdites à la vente aux particuliers en Europe (règle de 2019, à vérifier à la date où vous lisez)." },
    { q:"Ce site traite-t-il des paris sportifs et des jeux d'argent ?", opts:["Non : ils relèvent d'une autre réglementation (en France, l'ANJ)","Oui, c'est le même domaine","Oui, mais seulement le week-end","Oui, pour les débutants"], a:0,
      pro:"Les jeux d'argent relèvent d'un cadre distinct ; fxNOL est un site éducatif sur les marchés financiers.",
      kid:"Non. Les jeux d'argent ont leurs propres règles et n'ont rien à voir avec ce site, qui explique les marchés financiers." }
  ],
  graphique: [
    { q:"Que résume une bougie japonaise ?", opts:["Seulement le dernier prix","L'ouverture, le plus haut, le plus bas et la clôture d'une période","Le nombre d'acheteurs","La prévision du lendemain"], a:1,
      pro:"Une bougie condense quatre prix : ouverture, plus haut, plus bas et clôture.",
      kid:"Chaque bougie est un petit résumé : le prix au début, le prix à la fin, le point le plus haut et le plus bas." },
    { q:"Un support est…", opts:["Un ordre de vente","Une zone où le prix a déjà rebondi","Un indicateur chiffré","Une garantie de rebond"], a:1,
      pro:"Un support est une zone où le prix a déjà réagi à la hausse ; ce n'est pas une garantie.",
      kid:"C'est comme un plancher où le prix a déjà rebondi. Mais le plancher peut craquer : rien n'est garanti." },
    { q:"Pour voir la grande direction du marché, on commence par…", opts:["Une unité de temps courte (1 minute)","Une unité de temps longue (1 jour)","Aucune échelle","Toutes les échelles en même temps"], a:1,
      pro:"Une unité de temps longue donne le contexte ; on descend ensuite pour affiner.",
      kid:"On regarde d'abord de loin pour voir la forme générale, puis on zoome." }
  ],
  indicateurs: [
    { q:"Que mesure surtout la largeur des bandes de Bollinger ?", opts:["La direction du prix","La volatilité","Le volume","Le spread"], a:1,
      pro:"Les bandes s'élargissent quand la volatilité augmente : elles mesurent l'amplitude, pas la direction.",
      kid:"L'élastique s'élargit quand le prix s'agite : il mesure l'agitation, pas le sens du mouvement." },
    { q:"Un RSI à 80 signifie…", opts:["Que le prix va forcément baisser","Que les hausses récentes ont nettement dominé (zone haute par convention)","Que le marché est fermé","Que la position est gagnante"], a:1,
      pro:"Au-dessus de 70, on parle de zone de surachat par convention ; cela décrit le passé récent, pas la suite.",
      kid:"Le thermomètre indique « chaud » : les hausses ont dominé. Ça ne veut pas dire que ça va refroidir." },
    { q:"Une moyenne mobile est calculée…", opts:["Sur les prix passés, donc elle est en retard","Sur les prix futurs","Sur le volume uniquement","Au hasard"], a:0,
      pro:"Elle repose sur des clôtures passées : elle lisse la tendance mais réagit avec retard.",
      kid:"Elle est faite avec des prix déjà passés : c'est un peu comme la météo d'hier." }
  ],
  risque: [
    { q:"Avec un ratio risque/rendement de 1:2, à partir de quel taux de réussite approximatif est-on à l'équilibre (hors frais) ?", opts:["Environ 34 %","Environ 10 %","Environ 75 %","100 %"], a:0,
      pro:"Pour 1 perdu / 2 gagnés, l'équilibre est atteint à environ 1/3 de trades gagnants, hors frais.",
      kid:"Si on gagne deux fois plus quand on gagne, il suffit de gagner environ 1 fois sur 3 pour ne rien perdre (sans compter les frais)." },
    { q:"Quand fixer son stop loss ?", opts:["Avant d'entrer dans le trade","Après une perte","Jamais","Quand on a peur"], a:0,
      pro:"Le stop se définit avant l'entrée, d'après le graphique, afin d'éviter les décisions émotionnelles.",
      kid:"On fixe sa sortie avant de commencer, comme une règle du jeu qu'on ne change pas en cours de route." },
    { q:"Pourquoi faire une pause après une série de pertes ?", opts:["Pour éviter de vouloir « se refaire » sous le coup de l'émotion","Pour changer d'ordinateur","Parce que le marché ferme","Pour augmenter la taille des positions"], a:0,
      pro:"Le revenge trading est un biais classique : la pause permet de retrouver un jugement rationnel.",
      kid:"Quand on perd, on a envie de se rattraper tout de suite et on fait des bêtises. Une pause aide à garder la tête froide." }
  ],
  crypto: [
    { q:"Quelle est une différence majeure entre les cryptos et le Forex ?", opts:["Les cryptos s'échangent 24 h/24 et 7 j/7","Les cryptos n'ont pas de prix","Le Forex est bien plus volatil que les cryptos","Il n'y en a aucune"], a:0,
      pro:"Le marché crypto ne ferme jamais et est en général plus volatil que les grandes paires de devises.",
      kid:"Le marché des cryptos ne dort jamais, même le week-end, et son prix bouge souvent beaucoup plus fort." },
    { q:"Si je perds la phrase de récupération de mon portefeuille personnel…", opts:["La plateforme la retrouvera pour moi","Je peux perdre définitivement l'accès à mes fonds","Rien ne change","La banque me rembourse"], a:1,
      pro:"Sans clés privées ou phrase de récupération, il n'existe en général aucun recours.",
      kid:"C'est comme perdre la seule clé d'un coffre-fort : personne ne peut le rouvrir à votre place." },
    { q:"Que faire avant d'ouvrir un compte chez un prestataire crypto ?", opts:["Vérifier son statut sur les listes de l'AMF","Se fier à ses publicités","Envoyer ses papiers sans regarder","Demander un gain garanti"], a:0,
      pro:"Le statut du prestataire se contrôle sur les listes officielles ; aucun gain n'est jamais garanti.",
      kid:"On vérifie que le site a le droit de travailler, avec les listes officielles. Et on se méfie de toute promesse de gain." }
  ]
};
