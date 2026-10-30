'use strict';
/* Marché simulé, partagé par toutes les pages : alimente le ticker du haut et le calculateur.
   Les prix sont inventés (marche aléatoire), pas de vraies cotations. */

// Table unique des instruments : prix, décimales, présence dans le ticker / le calculateur,
// et valeur du pip en $ pour 1 lot standard (fonction de px = prix courant d'une paire).
// Pour ajouter une paire, il suffit d'une ligne ici.
const px = s => MARKET[s].price;
const PIP_USD = 10;                      // paires cotées en USD : 100 000 unités × 0,0001
const pipJpy = () => 1000 / px('USD/JPY'); // paires en yen : 100 000 × 0,01 converti en $
const MARKET = {
  'EUR/USD': { price: 1.0845,  dec: 4, ticker: true,  calc: true,  pip: () => PIP_USD },
  'GBP/USD': { price: 1.2650,  dec: 4, ticker: true,  calc: true,  pip: () => PIP_USD },
  'AUD/USD': { price: 0.6580,  dec: 4, ticker: false, calc: true,  pip: () => PIP_USD },
  'USD/JPY': { price: 155.20,  dec: 2, ticker: true,  calc: true,  pip: pipJpy },
  'USD/CHF': { price: 0.9020,  dec: 4, ticker: false, calc: true,  pip: () => PIP_USD / px('USD/CHF') },
  'USD/CAD': { price: 1.3650,  dec: 4, ticker: false, calc: true,  pip: () => PIP_USD / px('USD/CAD') },
  'EUR/GBP': { price: 0.8530,  dec: 4, ticker: false, calc: true,  pip: () => PIP_USD * px('GBP/USD') },
  'EUR/JPY': { price: 168.30,  dec: 2, ticker: false, calc: true,  pip: pipJpy },
  'GBP/JPY': { price: 196.30,  dec: 2, ticker: true,  calc: true,  pip: pipJpy },
  'XAU/USD': { price: 2335.80, dec: 2, ticker: true,  calc: true,  pip: () => PIP_USD }, // or : 100 oz × 0,10 $
  'BTC/USD': { price: 67450,   dec: 0, ticker: true,  calc: false, pip: null, crypto: true },
  'ETH/USD': { price: 3450,    dec: 2, ticker: true,  calc: false, pip: null, crypto: true },
  // Indices (valeurs simulées) : pas de pip, donc absents du calculateur
  'US500':   { price: 5800,    dec: 0, ticker: true,  calc: false, pip: null },
  'FR40':    { price: 7700,    dec: 0, ticker: true,  calc: false, pip: null }
};
Object.values(MARKET).forEach(m => m.open = m.price);
const TICKER = Object.keys(MARKET).filter(s => MARKET[s].ticker);
const PAIRS = Object.keys(MARKET).filter(s => MARKET[s].calc);

function renderTicker() {
  const row = TICKER.map(s => {
    const m = MARKET[s], c = (m.price / m.open - 1) * 100, up = c >= 0;
    return `<span class="mx-6 inline-flex items-center gap-2"><strong class="text-slate-200">${s}</strong> ${m.price.toLocaleString('fr-FR',{minimumFractionDigits:m.dec,maximumFractionDigits:m.dec})} <span class="${up ? 'text-brandGreen' : 'text-red-400'}">${up ? '+' : '-'}${Math.abs(c).toFixed(2)}%</span></span>`;
  }).join('');
  $('#ticker').innerHTML = `<div>${row}</div><div aria-hidden="true">${row}</div>`;
}
renderTicker();
// Les prix bougent et le ticker se redessine au même rythme. Le calculateur, lui, ne se
// recalcule que sur une action de l'utilisateur (sinon les résultats bougent pendant la lecture).
setInterval(() => {
  Object.entries(MARKET).forEach(([s, m]) => { m.price *= 1 + (Math.random() - .5) * (m.crypto ? .0014 : .0003); });
  renderTicker();
}, 2500);
