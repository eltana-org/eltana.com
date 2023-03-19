// Configuration for the primary content component on the home page

const content = {
  // If the entire content component should be enabled
  enabled: true,

  // Configuration for the primary section of the content component (the first and larger section)
  primary: {
    // If the primary section should be enabled
    enabled: true,

    // Small highlight text to go above the title
    highlight: 'Yummm',

    // Main title text of the primary content component
    title: 'Eltana Bagels',

    // Main description text of the primary content component (HTML supported)
    description: `<h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Delicious Montreal Style Bagels</h3>
    Eltana bagels are unique in many ways. Our distinct wood-fired Montreal style bagels are made with a special blend of flours and are boiled in honey water before baking. This process gives our bagels a unique taste and texture that you'll love.`,

    // The items to be displayed in the primary section
    items: [
      {
        title: 'Montreal Style',
        description:
          'Our bagels are made with a special blend of flours and hand-rolled making each bagel unique in shape and size.',
        icon: 'tabler:star',
      },
      {
        title: 'Honey Boiled',
        description: 'Our bagels are boiled in honey water before baking for a soft, chewy texture.',
        icon: 'tabler:droplet',
      },
      {
        title: 'Wood-Fired',
        description: 'All our bagels are wood-fired for a flavorful char and a unique texture.',
        icon: 'tabler:flame',
      },
      {
        title: 'A Variety of Flavors',
        description: `We offer a variety of bagel flavors including plain, sesame, poppy, za'atar, salt, everything, rainbow and more.`,
        icon: 'tabler:tools-kitchen',
      },
      {
        title: 'A Variety of Spreads',
        description: `We offer a variety of spreads including plain cream cheese, fig cherry compote, almond butter, scallion, spicy garlic, lox spread, and so much more!`,
        icon: 'tabler:mood-happy',
      },
    ],

    // Configuration for the image to be displayed in the primary section
    image: {
      // If the image should be enabled
      enabled: true,
      // Alt text for the image
      alt: 'Eltana bagels',
      // The image to be displayed
      src: import('~/assets/images/bagels-in-bin.jpg'),
    },
  },

  // Configuration for the secondary section of the content component (the second and smaller section)
  secondary: {
    // If the secondary section should be enabled
    enabled: true,

    title: 'Locally Roasted Coffee',
    highlight: 'The Brew',
    description: `<h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">BioWilly's Beans</h3>
    Coffee With A Conscience - From seed to cup, <a class="text-amber-600 hover:underline dark:text-gray-200" target="_blank" href="https://biowillysbeans.com/">BioWilly's Beans</a> are grown, processed, and roasted to meet a premium coffee standard. Eltana is proud to serve BioWilly's Beans, a local coffee roaster that is committed to sustainability and social responsibility.`,

    // Items to be displayed in the secondary section
    items: [
      {
        title: 'Roasted sustainably',
        icon: 'tabler:plant',
      },
      {
        title: 'Sourced from all major coffee growing regions',
        icon: 'tabler:globe',
      },
      {
        title: 'Fair trade and organic',
        icon: 'tabler:scale',
      },
      {
        title: 'Roasted locally in Seattle',
        icon: 'tabler:pin',
      },
      {
        title: 'Delicious',
        icon: 'tabler:coffee',
      },
    ],

    // Configuration for the image to be displayed in the secondary section
    image: {
      // If the image should be enabled
      enabled: true,
      // Alt text for the image
      alt: 'Eltana coffee beans',
      // The image to be displayed
      src: import('~/assets/images/coffee-beans.jpg'),
    },
  },
};

export default content;
