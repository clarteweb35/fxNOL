'use strict';
/* Partenaires et réglages d'affiliation, partagés par toutes les pages :
   la page Partenaires affiche les cartes, le bandeau du haut affiche les logos des courtiers. */

const CONFIG = {
  utmSource: 'fxnol',
  appendUtm: true,          // ajoute utm_source/medium/campaign/content aux liens (mets false si ton programme l'interdit)
  trackingEndpoint: '',     // ex : 'https://ton-domaine.fr/api/click' (reçoit un POST JSON via sendBeacon)
  storageKey: 'fxnol_clicks'
};

/* Partenaires réels uniquement : jamais de note ni d'avis inventés.
   - url : TON lien d'affiliation fourni par le programme (« # » tant qu'il n'est pas signé)
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
  { id:'tradingview', name:'TradingView', type:'outil', rating:null, reviews:0, pros:[], url:'#', cta:"Voir l'outil", regulator:'', regNumber:'', logo:'', affiliateProgram:'TradingView (programme à vérifier)' }
];
const NO_LINK = '#'; // partenaire sans lien d'affiliation réel (programme pas encore signé)
const TYPES = { broker:['Broker','border-brandBlue/40 bg-brandBlue/10 text-brandBlue'], outil:["Outil d'analyse",'border-slate-500/40 bg-slate-500/10 text-slate-300'] };

/* ============ BANDEAU DES LOGOS (haut de chaque page) ============ */
// Chaque moitié doit être plus large que l'écran pour que la boucle soit continue, d'où la répétition ;
// seule la 1re copie est lue par les lecteurs d'écran.
function renderLogoBand() {
  const logos = PARTNERS.filter(p => p.type === 'broker' && p.logo);
  if (!logos.length) return;
  const REPEAT = 6;
  const tile = (p, first) => `<a href="partenaires.html" ${first ? '' : 'tabindex="-1" aria-hidden="true"'} class="mx-5 block h-10 w-20 shrink-0"><img src="${esc(p.logo)}" alt="${first ? esc(p.name) : ''}" width="80" height="40" class="h-10 w-20 rounded bg-white object-contain"></a>`;
  const half = readable => Array.from({ length: REPEAT }, (_, i) => logos.map(p => tile(p, readable && i === 0)).join('')).join('');
  $('#logoBand').innerHTML = `<div class="flex items-center">${half(true)}</div><div class="flex items-center" aria-hidden="true">${half(false)}</div>`;
}
renderLogoBand();
