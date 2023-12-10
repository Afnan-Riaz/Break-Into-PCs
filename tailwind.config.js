/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily:{
      sans:['Montserrat', 'sans-serif'],
      orbitron:['Orbitron', 'sans-serif'],
    },
    extend: {
      colors: {
        'red-primary': '#FF0000',
      },
      backgroundImage: {
        'attributes-bg':"url(/images/attributes-bg.png)",
        'testimonial-bg':"url(/images/testimonial-bg.png)",
        'brands-bg':"url(/images/brands-bg.png)",
        'red-gradient': 'linear-gradient(99deg, #9D0208 0.07%, #D83C3C 51.09%, #B70000 106.32%)',
        'yellow-gradient': 'linear-gradient(99deg, rgba(166,153,42,1) 0%, rgba(212,199,38,1) 51%, rgba(200,162,25,1) 100%)',
        'gray-gradient':'linear-gradient(180deg, #4E4D4D 0%, #2A2A2A 100%)',
        'dark-gradient':'linear-gradient(180deg, #313131 0%, #191919 70%)'
      },
      backgroundSize: {
        'size-200': '200% 200%',
        'size-180': '180% 180%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
      },

    },
  },
  plugins: [],
}
