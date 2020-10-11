module.exports = {
  siteTitle: 'Murat Aslan | FullStack Developer',
  siteDescription:
    'Murat Aslan is a fullstack developer who specializes in developing  web applications.',
  siteKeywords:
    'Murat Aslan, Ilhan Aslan, Demirci, mrtasln01, software engineer, machine learning engineer, web developer, devops',
  siteUrl: 'https://murat.aslan.com',
  siteLanguage: 'en_US',

  googleVerification: '',

  name: 'Murat Aslan',
  location: 'Ankara, TR',
  email: 'murataslan562@gmail.com',
  github: 'https://github.com/mrtasln01/',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/mrtasln01/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/mrtasln01',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/murataslan1/',
    },
    {
      name: 'Devto',
      url: 'https://dev.to/mrtasln01',
    },
    {
      name: 'PGP',
      url: 'pgp_keys.asc',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@iedmrc',
  googleAnalyticsID: '',

  navHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
