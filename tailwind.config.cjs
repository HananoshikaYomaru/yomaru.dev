const withAnimations = require('animated-tailwindcss');

module.exports = withAnimations({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),

    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

)