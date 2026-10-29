'use strict';
/* Éléments communs à toutes les pages : données du site + header + footer.
   Pour changer le menu, un lien légal ou l'avertissement de risque, c'est ICI et nulle part ailleurs. */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

const SITE = {
  name: 'fxNOL',
  slogan: 'Maîtriser le Forex par la connaissance',
  tagline: 'Maîtriser le Forex par la connaissance : culture, outils et partenaires.',
  // Libellé affiché sous chaque lien d'affiliation (texte unique)
  affiliateLabel: 'Lien partenaire · publicité',
  eduNotice: 'Contenu éducatif — pas de conseil en investissement.',
  // Liens en « index.html#… » pour fonctionner aussi depuis les pages légales
  nav: [
    ['index.html#formation', 'Formation & Quiz'],
    ['index.html#calculateur', 'Calculateur de Risque'],
    ['index.html#partenaires', 'Partenaires'],
    ['index.html#risques', 'Risques']
  ],
  footerNav: [
    ['index.html#formation', 'Quiz'],
    ['index.html#calculateur', 'Calculateur'],
    ['index.html#partenaires', 'Partenaires'],
    ['index.html#top', 'Haut de page']
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

function renderHeader() {
  $('#siteHeader').innerHTML = `
  <header class="sticky top-0 z-50 bg-darkBg/90 backdrop-blur-md border-b border-borderSubtle">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <a href="index.html#top" class="flex items-center" aria-label="${SITE.name} accueil">
        <svg width="130" height="36" viewBox="0 0 130 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <text x="0" y="25" class="fill-slate-50" font-family="Plus Jakarta Sans, sans-serif" font-weight="700" font-size="22" letter-spacing="-0.5">fx</text>
          <text x="30" y="25" class="fill-brandBlue" font-family="Plus Jakarta Sans, sans-serif" font-weight="500" font-size="22" letter-spacing="-0.5">NOL</text>
          <rect x="32" y="7" width="8" height="2" rx="1" class="fill-brandBlue" opacity="0.9"/>
        </svg>
      </a>
      <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300" aria-label="Principale">
        ${linkList(SITE.nav, 'hover:text-brandBlue transition-colors')}
      </nav>
      <div class="flex items-center gap-2">
        <a href="index.html#calculateur" class="hidden sm:inline-flex px-4 py-2.5 text-xs font-semibold rounded-lg bg-brandBlue text-white hover:bg-sky-600 transition-all shadow-sm">Lancer l'outil</a>
        <button id="menuBtn" class="md:hidden rounded-lg border border-borderSubtle p-2" aria-label="Menu" aria-expanded="false">
          <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h16M3 11h16M3 16h16"/></svg>
        </button>
      </div>
    </div>
    <div id="mobileMenu" class="hidden md:hidden border-t border-borderSubtle bg-darkBg">
      <div class="flex flex-col px-6 py-2 text-sm font-medium text-slate-300">${linkList(SITE.nav, 'py-3')}</div>
    </div>
  </header>`;
  $('#menuBtn').addEventListener('click', e => {
    const open = $('#mobileMenu').classList.toggle('hidden') === false;
    e.currentTarget.setAttribute('aria-expanded', String(open));
  });
  $$('#mobileMenu a').forEach(a => a.addEventListener('click', () => $('#mobileMenu').classList.add('hidden')));
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
        <p>© ${new Date().getFullYear()} ${SITE.name}. Tous droits réservés.</p>
        <p>${SITE.eduNotice}</p>
      </div>
    </div>
  </footer>`;
}

renderHeader();
renderFooter();
