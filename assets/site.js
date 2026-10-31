'use strict';
/* Éléments communs à toutes les pages : données du site + header + bandeaux + footer.
   Pour changer le menu, un lien légal ou l'avertissement de risque, c'est ICI et nulle part ailleurs. */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

// Styles communs (défilement des bandeaux, champs sombres, animations coupées sur demande)
document.head.appendChild(Object.assign(document.createElement('style'), { textContent: `
  @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
  .animate-marquee { animation: marquee 40s linear infinite; }
  .ticker:hover .animate-marquee { animation-play-state: paused; }
  input, select { color-scheme: dark; }
  @media (prefers-reduced-motion: reduce) { .animate-marquee { animation:none; } html { scroll-behavior:auto; } }` }));

const SITE = {
  name: 'fxNOL',
  slogan: 'Maîtriser le Forex par la connaissance',
  tagline: 'Maîtriser le Forex par la connaissance : culture, outils et partenaires.',
  // Libellé affiché sous chaque lien d'affiliation (texte unique)
  affiliateLabel: 'Lien partenaire · publicité',
  // Adresse de contact unique : affichée là où une page porte [data-contact-email]
  contactEmail: 'contact@fxnol.fr',
  // Identifiant Google Analytics (public) : le script ne se charge qu'après consentement
  analyticsId: 'G-9XYXKBM02F',
  // Badge écologique statique (aucun script tiers) : à remettre à jour si la note du rapport change
  carbon: { grade: 'A+', url: 'https://www.websitecarbon.com/website/fxnol-fr/' },
  eduNotice: 'Contenu éducatif — pas de conseil en investissement.',
  // Une page par rubrique ; « #risques » pointe sur l'avertissement du pied de page de la page courante
  nav: [
    ['school.html', 'fxNOL School'],
    ['quiz.html', 'Quiz'],
    ['calculateur.html', 'Calculateur'],
    ['partenaires.html', 'Partenaires'],
    ['journal.html', 'Journal du jour'],
    ['#risques', 'Risques']
  ],
  footerNav: [
    ['school.html', 'fxNOL School'],
    ['quiz.html', 'Quiz'],
    ['calculateur.html', 'Calculateur'],
    ['partenaires.html', 'Partenaires'],
    ['journal.html', 'Journal du jour'],
    ['index.html', 'Accueil']
  ],
  legalNav: [
    ['mentions-legales.html', 'Mentions légales'],
    ['confidentialite.html', 'Politique de confidentialité'],
    ['transparence-affiliation.html', 'Transparence affiliation'],
    ['contact.html', 'Contact']
  ],
  riskWarning: [
    "<strong>Le trading du Forex et des CFD (contrats pour différence) comporte un niveau de risque élevé et peut ne pas convenir à tous les investisseurs.</strong> L'effet de levier amplifie les gains comme les pertes : vous pouvez perdre tout ou partie de votre capital.",
    "Selon les publications réglementaires des courtiers européens, une large majorité des comptes de clients particuliers (généralement entre 70 % et 90 %) perdent de l'argent sur les CFD. Les performances passées ne préjugent pas des performances futures.",
    "Les contenus de fxNOL (quiz, calculateur, cotations simulées) sont strictement éducatifs. Ils ne constituent ni un conseil en investissement, ni une recommandation personnalisée, ni une incitation à acheter ou vendre un instrument financier. N'investissez que de l'argent que vous pouvez vous permettre de perdre.",
    "Vérifiez toujours qu'un prestataire est agréé pour opérer en France (registre REGAFI, liste noire de l'AMF) avant d'ouvrir un compte. Les prop firms ne sont pas des courtiers régulés au même titre : lisez attentivement leurs règles, frais et conditions de retrait. Certains liens de ce site sont des liens d'affiliation rémunérés."
  ]
};

const linkList = (items, cls = '') => items.map(([href, label]) => `<a class="${cls}" href="${href}">${label}</a>`).join('');

// Icône du bouton de menu : trois traits horizontaux (fermé) ou croix (ouvert)
const MENU_ICON = { closed: 'M3 6h16M3 11h16M3 16h16', open: 'M5 5l12 12M17 5L5 17' };

function renderHeader() {
  const box = $('#siteHeader');
  box.className = 'contents';   // le header collant se repère alors sur toute la page, pas seulement sur ce bloc
  box.innerHTML = `
  <header class="sticky top-0 z-50 bg-darkBg/90 backdrop-blur-md border-b border-borderSubtle">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <a href="index.html" class="flex items-center" aria-label="${SITE.name} accueil">
        <svg width="130" height="36" viewBox="0 0 130 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <text x="0" y="25" class="fill-slate-50" font-family="Plus Jakarta Sans, sans-serif" font-weight="700" font-size="22" letter-spacing="-0.5">fx</text>
          <text x="30" y="25" class="fill-brandBlue" font-family="Plus Jakarta Sans, sans-serif" font-weight="500" font-size="22" letter-spacing="-0.5">NOL</text>
          <rect x="32" y="7" width="8" height="2" rx="1" class="fill-brandBlue" opacity="0.9"/>
        </svg>
      </a>
      <nav class="hidden lg:flex items-center gap-5 xl:gap-8 text-[13px] xl:text-sm whitespace-nowrap font-medium text-slate-300" aria-label="Principale">
        ${linkList(SITE.nav, 'hover:text-brandBlue transition-colors')}
      </nav>
      <div class="flex items-center gap-2">
        <a href="calculateur.html" class="hidden sm:inline-flex px-4 py-2.5 text-xs font-semibold rounded-lg bg-brandBlue text-white hover:bg-sky-600 transition-all shadow-sm">Lancer l'outil</a>
        <button id="menuBtn" type="button" class="lg:hidden grid h-11 w-11 place-items-center rounded-lg border border-borderSubtle text-slate-200 hover:border-brandBlue" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="mobileMenu">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path id="menuIcon" d="${MENU_ICON.closed}"/></svg>
        </button>
      </div>
    </div>
    <div id="mobileMenu" class="hidden lg:hidden border-t border-borderSubtle bg-darkBg">
      <nav class="flex flex-col px-6 py-2 text-base font-medium text-slate-200 divide-y divide-borderSubtle" aria-label="Menu mobile">${linkList(SITE.nav, 'py-3.5')}</nav>
    </div>
  </header>
  <!-- Bandeaux défilants (remplis par market.js et partners.js) -->
  <div class="ticker bg-deepBg border-b border-borderSubtle h-14 flex items-center overflow-hidden whitespace-nowrap text-xs text-slate-400" aria-label="Cotations simulées">
    <div id="ticker" class="inline-flex shrink-0 animate-marquee"></div>
  </div>
  <div class="ticker bg-deepBg border-b border-borderSubtle h-14 flex items-center overflow-hidden whitespace-nowrap" aria-label="Courtiers présentés">
    <div id="logoBand" class="inline-flex shrink-0 items-center animate-marquee"></div>
  </div>`;

  const setMenu = open => {
    $('#mobileMenu').classList.toggle('hidden', !open);
    $('#menuBtn').setAttribute('aria-expanded', String(open));
    $('#menuBtn').setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    $('#menuIcon').setAttribute('d', open ? MENU_ICON.open : MENU_ICON.closed);
  };
  $('#menuBtn').addEventListener('click', () => setMenu($('#mobileMenu').classList.contains('hidden')));
  $$('#mobileMenu a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
}

function renderFooter() {
  const col = (title, items, label) => `<nav aria-label="${label}"><p class="text-sm font-semibold text-slate-200">${title}</p>
    <ul class="mt-3 space-y-2 text-sm text-slate-400">${items.map(([h, l]) => `<li><a class="hover:text-brandBlue" href="${h}">${l}</a></li>`).join('')}</ul></nav>`;
  $('#siteFooter').innerHTML = `
  <footer id="risques" class="border-t border-borderSubtle bg-deepBg">
    <div class="max-w-7xl mx-auto px-6 py-14">
      <div class="rounded-xl border border-red-400/30 bg-red-400/5 p-5 sm:p-7">
        <h3 class="font-heading text-lg font-bold text-red-300">Avertissement sur les risques</h3>
        <div class="mt-3 space-y-3 text-sm leading-relaxed text-slate-300">${SITE.riskWarning.map(p => `<p>${p}</p>`).join('')}</div>
      </div>
      <div class="mt-10 grid gap-8 md:grid-cols-4">
        <div class="md:col-span-2">
          <p class="font-heading text-xl font-bold">fx<span class="text-brandBlue">NOL</span></p>
          <p class="mt-2 max-w-sm text-sm text-slate-400">${SITE.tagline}</p>
        </div>
        ${col('Naviguer', SITE.footerNav, 'Navigation')}
        ${col('Légal', SITE.legalNav, 'Légal')}
      </div>
      <div class="mt-10 flex flex-col sm:flex-row justify-between gap-2 border-t border-borderSubtle pt-6 text-xs text-slate-500">
        <p>© ${new Date().getFullYear()} ${SITE.name}. Tous droits réservés. · <button type="button" id="cookieSettings" class="underline hover:text-brandBlue">Gérer les cookies</button></p>
        <a href="${SITE.carbon.url}" target="_blank" rel="noopener" class="inline-flex w-fit items-center gap-2 rounded-full border border-borderSubtle px-3 py-1 hover:border-brandGreen" aria-label="Site noté ${SITE.carbon.grade} sur Website Carbon (nouvel onglet)">
          <span class="font-bold text-brandGreen">${SITE.carbon.grade}</span><span>Site léger · Website Carbon</span></a>
        <p>${SITE.eduNotice}</p>
      </div>
    </div>
  </footer>`;
}

/* ============ MESURE D'AUDIENCE (consentement) ============ */
// Google Analytics ne se charge qu'après un « Accepter » explicite ; le choix est redemandé au bout de 6 mois (recommandation CNIL).
const CONSENT_KEY = 'fxnol_consent';
const CONSENT_MONTHS = 6;
const GA_COOKIE_DAYS = 390; // ~13 mois : durée maximale conseillée pour un cookie de mesure

function readConsent() {
  try {
    const saved = JSON.parse(localStorage.getItem(CONSENT_KEY));
    if (saved && Date.now() - saved.at < CONSENT_MONTHS * 30 * 864e5) return saved.choice;
  } catch (e) { /* stockage indisponible : on redemandera */ }
  return null;
}

function loadAnalytics() {
  if (window.gtag || !SITE.analyticsId) return;
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + SITE.analyticsId;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', SITE.analyticsId, { cookie_expires: GA_COOKIE_DAYS * 86400 });
}

// Un refus (ou un retrait d'accord) supprime les cookies de mesure déjà déposés
function clearAnalyticsCookies() {
  const host = location.hostname;
  document.cookie.split(';').map(c => c.split('=')[0].trim()).filter(n => n.startsWith('_ga')).forEach(n => {
    [host, '.' + host, ''].forEach(d => { document.cookie = n + '=; Max-Age=0; path=/' + (d ? '; domain=' + d : ''); });
  });
}

function applyConsent(choice) {
  try { localStorage.setItem(CONSENT_KEY, JSON.stringify({ choice, at: Date.now() })); } catch (e) { /* ignoré */ }
  if (choice === 'granted') loadAnalytics();
  else { window['ga-disable-' + SITE.analyticsId] = true; clearAnalyticsCookies(); }
}

function showConsentBanner() {
  if ($('#consentBanner')) return;
  const box = document.createElement('div');
  box.id = 'consentBanner';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-label', "Mesure d'audience");
  box.className = 'fixed inset-x-0 bottom-0 z-[60] border-t border-borderSubtle bg-cardBg p-4 shadow-2xl';
  const btn = 'rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition';
  box.innerHTML = `<div class="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
    <p class="text-sm leading-relaxed text-slate-300">Ce site peut mesurer son audience avec Google Analytics pour s'améliorer. Rien n'est mesuré sans votre accord. <a class="text-brandBlue hover:underline" href="confidentialite.html">En savoir plus</a></p>
    <div class="flex shrink-0 gap-3">
      <button type="button" data-consent="denied" class="${btn} bg-slate-700 hover:bg-slate-600">Refuser</button>
      <button type="button" data-consent="granted" class="${btn} bg-brandBlue hover:bg-sky-600">Accepter</button>
    </div></div>`;
  box.addEventListener('click', e => {
    const choice = e.target.closest('[data-consent]');
    if (!choice) return;
    applyConsent(choice.dataset.consent);
    box.remove();
  });
  document.body.appendChild(box);
}

renderHeader();
renderFooter();
$$('[data-contact-email]').forEach(a => { a.textContent = SITE.contactEmail; a.href = 'mailto:' + SITE.contactEmail; });

const savedConsent = readConsent();
if (savedConsent === 'granted') loadAnalytics();
else if (savedConsent === null) showConsentBanner();
$('#cookieSettings').addEventListener('click', showConsentBanner);
