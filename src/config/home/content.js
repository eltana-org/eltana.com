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
        title: 'Per ei quaeque sensibus',
        description:
          'Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.',
      },
      {
        title: 'Cu imperdiet posidonium sed',
        description:
          'Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.',
      },
      {
        title: 'Nulla omittam sadipscing mel ne',
        description:
          'At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.',
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
    enabled: true,

    title: 'Locally Roasted Coffee',
    highlight: 'The Brew',
    description:
      'We serve a variety of coffee drinks, including lattes, cappuccinos, and espresso shots. We also serve a variety of teas, including chai and green tea.',

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
