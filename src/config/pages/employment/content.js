// Configuration for the primary content component on the home page

const content = {
  // If the entire content component should be enabled
  enabled: true,

  // Configuration for the primary section of the content component (the first and larger section)
  primary: {
    // If the primary section should be enabled
    enabled: true,

    // Small highlight text to go above the title
    highlight: `What We're About`,

    // Main title text of the primary content component
    title: `Culture & Values`,

    // Main description text of the primary content component (HTML supported)
    description: `<h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Eltana's People and Culture</h3>
    Eltana takes a unique approach to business (and hiring), which requires a little explaining. Our culture and brand is based on the practical interpersonal wisdom developed by Jewish philosophers and teachers over thousands of years. That doesn’t mean you have to be Jewish to work at Eltana. We are equal opportunity employers and looking to hire a diverse group of people who reflect the traits we admire most in our employees. Specifically:`,

    // The items to be displayed in the primary section
    items: [
      {
        title: 'Candor',
        description: 'People who are comfortable being direct and honest',
        icon: 'tabler:mood-smile',
      },
      {
        title: 'Efficiency',
        description: 'Excited by finding smarter and more effective ways of doing things',
        icon: 'tabler:bolt',
      },
      {
        title: 'Generosity of Spirit',
        description: 'Assume the best in people and tend to give others the benefit of the doubt',
        icon: 'tabler:heart',
      },
    ],

    // Configuration for the image to be displayed in the primary section
    image: {
      // If the image should be enabled
      enabled: true,
      // Alt text for the image
      alt: 'Colorful Image',
      // The image to be displayed
      src: import('~/assets/images/hero.jpg'),
    },
  },

  // Configuration for the secondary section of the content component (the second and smaller section)
  secondary: {
    // If the secondary section should be enabled
    enabled: false,

    // Items to be displayed in the secondary section
    items: [
      {
        title: 'Per ei quaeque sensibus',
      },
      {
        title: 'Cu imperdiet posidonium sed',
      },
      {
        title: 'Nulla omittam sadipscing mel ne',
      },
      {
        title: 'Per ei quaeque sensibus',
      },
      {
        title: 'Cu imperdiet posidonium sed',
      },
      {
        title: 'Nulla omittam sadipscing mel ne',
      },
    ],

    // Configuration for the image to be displayed in the secondary section
    image: {
      // If the image should be enabled
      enabled: true,
      // Alt text for the image
      alt: 'Vintage Image',
      // The image to be displayed
      src: import('~/assets/images/hero.jpg'),
    },
  },
};

export default content;
