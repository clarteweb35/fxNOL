/** Config Tailwind : les couleurs et polices sont définies ici, une seule fois. */
module.exports = {
  // Tailwind ne garde dans le CSS que les classes trouvées dans ces fichiers (les .js en fabriquent aussi).
  content: ['./*.html', './assets/**/*.js'],
  theme: { extend: {
    colors: {
      darkBg: '#0B0F19',      // fond de page
      altBg: '#0D121E',       // fond des sections en alternance
      deepBg: '#080B12',      // fond du ticker et du footer
      cardBg: '#111827',
      borderSubtle: '#1F2937',
      brandBlue: '#0EA5E9',
      brandBlueDeep: '#0369A1', // bleu des boutons à texte blanc (contraste 5,9:1, le bleu clair n'atteint que 2,8:1)
      brandGreen: '#10B981'
    },
    fontFamily: { sans: ['Inter', 'sans-serif'], heading: ['Plus Jakarta Sans', 'sans-serif'] }
  }},
  plugins: []
};
