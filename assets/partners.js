'use strict';
/* Partenaires et réglages d'affiliation, partagés par toutes les pages :
   la page Partenaires affiche les cartes, le bandeau du haut affiche les logos des courtiers. */

const CONFIG = {
  utmSource: 'fxnol',
  appendUtm: true,          // ajoute utm_source/medium/campaign/content aux liens (mets false si ton programme l'interdit)
  trackingEndpoint: '',     // ex : 'https://ton-domaine.fr/api/click' (reçoit un POST JSON via sendBeacon)
  storageKey: 'fxnol_clicks'
};

/* ⚠️ PARTENAIRES D'EXEMPLE FICTIFS : remplace par tes vrais partenaires.
   - url : TON lien d'affiliation fourni par le programme
   - regulator / regNumber : agrément à vérifier sur REGAFI (ex. passeport MiFID II) ; laisse '' pour les outils
   - disclosure : mention spécifique éventuellement exigée par le programme */
const PARTNERS = [
  // Vrais courtiers : pas de note ni d'avis tant qu'on n'a pas de méthode de notation réelle.
  // logo : chemin du fichier déposé dans assets/logos/ (voir LISEZ-MOI.md) ; vide = initiales.
  // affiliateProgram : nom du programme (non affiché, pour mémoire).
  { id:'xtb', name:'XTB', type:'broker', rating:null, reviews:0, pros:[], url:'#', cta:'Voir le courtier', regulator:'À vérifier sur REGAFI', regNumber:'', logo:'assets/logos/xtb.png', affiliateProgram:'XTB Partners' },
  { id:'etoro', name:'eToro', type:'broker', rating:null, reviews:0, pros:[], url:'#', cta:'Voir le courtier', regulator:'À vérifier sur REGAFI', regNumber:'', logo:'assets/logos/etoro.png', affiliateProgram:'eToro Partners' },
  { id:'exness', name:'Exness', type:'broker', rating:null, reviews:0, pros:[], url:'#', cta:'Voir le courtier', regulator:'À vérifier sur REGAFI', regNumber:'', logo:'assets/logos/exness.png', affiliateProgram:'Exness Affiliates' },
  { id:'vantage', name:'Vantage', type:'broker', rating:null, reviews:0, pros:[], url:'#', cta:'Voir le courtier', regulator:'À vérifier sur REGAFI', regNumber:'', logo:'assets/logos/vantage.png', affiliateProgram:'Vantage Partners' },
  { id:'avatrade', name:'AvaTrade', type:'broker', rating:null, reviews:0, pros:[], url:'#', cta:'Voir le courtier', regulator:'À vérifier sur REGAFI', regNumber:'', logo:'assets/logos/avatrade.png', affiliateProgram:'AvaPartner' },
  { id:'xm', name:'XM', type:'broker', rating:null, reviews:0, pros:[], url:'#', cta:'Voir le courtier', regulator:'À vérifier sur REGAFI', regNumber:'', logo:'assets/logos/xm.png', affiliateProgram:'XM Partners' },
  { id:'fundededge', name:'FundedEdge', type:'prop', rating:4.5, reviews:2150, pros:['Challenge en 1 ou 2 phases','Partage des profits jusqu\'à 90 %','Drawdown clairement défini'], url:'#', cta:'Démarrer le challenge', regulator:'', regNumber:'' },
  { id:'vertex', name:'Vertex Capital Funding', type:'prop', rating:4.2, reviews:970, pros:['Pas de limite de temps','Scaling du capital','Retraits bimensuels'], url:'#', cta:'Voir les règles', regulator:'', regNumber:'' },
  { id:'pipforge', name:'PipForge Challenge', type:'prop', rating:3.9, reviews:410, pros:["Frais d'entrée abordables",'Règles simples','Communauté active'], url:'#', cta:'Démarrer le challenge', regulator:'', regNumber:'' },
  { id:'tradingview', name:'TradingView', type:'outil', rating:null, reviews:0, pros:[], url:'#', cta:"Voir l'outil", regulator:'', regNumber:'', logo:'', affiliateProgram:'TradingView (programme à vérifier)' },
  { id:'chartlab', name:'ChartLab Pro', type:'outil', rating:4.8, reviews:3400, pros:['Graphiques multi-timeframes','Alertes personnalisées','Backtesting visuel'], url:'#', cta:'Essayer gratuitement', regulator:'', regNumber:'' },
  { id:'macropulse', name:'MacroPulse Calendar', type:'outil', rating:4.3, reviews:720, pros:['Calendrier économique en direct','Filtres par impact','Notifications mobiles'], url:'#', cta:'Découvrir', regulator:'', regNumber:'' },
  { id:'journalfx', name:'JournalFX', type:'outil', rating:4.5, reviews:1100, pros:['Journal de trading automatisé','Statistiques de performance','Import MT4/MT5'], url:'#', cta:'Essayer gratuitement', regulator:'', regNumber:'' }
];
const NO_LINK = '#'; // partenaire sans lien d'affiliation réel (exemples fictifs)
const TYPES = { broker:['Broker','border-brandBlue/40 bg-brandBlue/10 text-brandBlue'], prop:['Prop Firm','border-brandGreen/40 bg-brandGreen/10 text-brandGreen'], outil:["Outil d'analyse",'border-slate-500/40 bg-slate-500/10 text-slate-300'] };

/* ============ BANDEAU DES LOGOS (haut de chaque page) ============ */
// Chaque moitié doit être plus large que l'écran pour que la boucle soit continue, d'où la répétition ;
// seule la 1re copie est lue par les lecteurs d'écran.
function renderLogoBand() {
  const logos = PARTNERS.filter(p => p.type === 'broker' && p.logo);
  if (!logos.length) return;
  const REPEAT = 6;
  const tile = (p, first) => `<a href="partenaires.html" ${first ? '' : 'tabindex="-1" aria-hidden="true"'} class="mx-4 block h-7 w-14 shrink-0"><img src="${esc(p.logo)}" alt="${first ? esc(p.name) : ''}" width="56" height="28" class="h-7 w-14 rounded bg-white object-contain"></a>`;
  const half = readable => Array.from({ length: REPEAT }, (_, i) => logos.map(p => tile(p, readable && i === 0)).join('')).join('');
  $('#logoBand').innerHTML = `<div class="flex items-center">${half(true)}</div><div class="flex items-center" aria-hidden="true">${half(false)}</div>`;
}
renderLogoBand();
