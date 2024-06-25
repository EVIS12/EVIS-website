import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        lg: '5rem',
        xl: '6rem',
        '2xl': '7rem',
      },
    },

    extend: {
      backgroundImage: {
        'icon-bg': 'linear-gradient(134deg, #25BDB9 0%, #5DDCD8 100%)',
        'home-bg': "url('/imgs/homeHeroBg.webp')",
        'exhibitor-bg': "url('/imgs/exhibitorHeroBg.webp')",
        'conference-bg': "url('/imgs/conferenceHeroBg.webp')",
        'visit-bg': "url('/imgs/visitHeroBg.webp')",
        'press-bg': "url('/imgs/pressHeroBg.webp')",
        'awards-bg': "url('/imgs/awardsHeroBg.webp')",
        'awardsStudents-bg': "url('/imgs/awardsStudentsBanner.webp')",
        'awardsInnovation-bg': "url('/imgs/awardsInnovationBanner.webp')",
        'marketGateway-bg': "url('/imgs/marketGatewayHeroBg.webp')",
        'testDrive-bg': "url('/imgs/testDriveHeroBg.webp')",
        'techPark-bg': "url('/imgs/techParkHeroBg.webp')",
        'openTech-bg': "url('/imgs/openTechHeroBg.webp')",
        'evehicleShow-bg': "url('/imgs/evehicleShowHeroBg.webp')",
        'plan-visit-bg': "url('/imgs/planVisitHero.webp')",
        'testimonials-bg': "url('/imgs/testimonialsHeroBg.webp')",
        'sponsors-bg': "url('/imgs/sponsorsHeroBg.webp')",
        'cpd-bg': "url('/imgs/cpdHeroBg.webp')",
        'previous-attendees-bg': "url('/imgs/previousAttendeesBg.webp')",
        'green-gradient': 'linear-gradient(#2EBDB9, #3D7B76)',
        'blue-gradient': 'linear-gradient(#013790, #1e1e35)',
        'main-gradient': 'linear-gradient(135deg, #08DDC9, #013790)',
      },
      colors: {
        'main-color': '#25BDB9',
        'second-color': '#E1E9EB',
        'dark-color': '#2A3030',
        'light-gray': '#939393',
        'body-gray': '#191919',
      },
      textShadow: {
        'title-shadow': ' -4px 4px 20px rgba(46, 189, 185, 0.47);',
      },
      animation: {
        'attendees-cards': 'translate-cards 2s',
      },
      keyframes: {
        'translate-cards': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
export default config;
