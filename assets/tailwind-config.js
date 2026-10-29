/* Config Tailwind partagée par toutes les pages : les couleurs et polices sont définies ici, une seule fois. */
tailwind.config = { theme: { extend: {
  colors: {
    darkBg: '#0B0F19',      // fond de page
    altBg: '#0D121E',       // fond des sections en alternance
    deepBg: '#080B12',      // fond du ticker et du footer
    cardBg: '#111827',
    borderSubtle: '#1F2937',
    brandBlue: '#0EA5E9',
    brandGreen: '#10B981'
  },
  fontFamily: { sans: ['Inter', 'sans-serif'], heading: ['Plus Jakarta Sans', 'sans-serif'] }
}}};
