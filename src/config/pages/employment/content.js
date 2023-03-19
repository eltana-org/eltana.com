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
      alt: 'rainbow bagels and cream cheese spread',
      // The image to be displayed
      src: import('~/assets/images/rainbow-spread.png'),
    },
  },

  // Configuration for the secondary section of the content component (the second and smaller section)
  secondary: {
    // If the secondary section should be enabled
    enabled: true,

    title: 'Jewish Philosophy',

    // highlight: 'What We Believe',

    description: `<h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">About Our Jewish Roots</h3>
    We are taking an approach that pays homage to the history of bagels as a baked good predominantly produced by Jewish bakers but reinterprets the idea of a "Jewish" company in a way that fits our world today — this place and this time. For thousands of years Jewish teachers and philosophers have attempted to unravel the timeless questions of how to be a better parent, teacher, friend, partner, employer and person. They've been nice enough to write down their attempts at answers and to revise their predecessors' efforts. The result is a lot of good thinking. We want to integrate this tradition into a popular, delicious and inclusive experience. Jewish insights into hospitality, intentional eating, and community dynamics inform everything from our ingredients, sourcing and food production to customer service and employee relationships, as well as our operating principles and venue design. We believe that these values resonate universally, and will draw employees and customers of all religious, cultural, and generational backgrounds.`,

    // Items to be displayed in the secondary section
    items: [],

    // Configuration for the image to be displayed in the secondary section
    image: {
      // If the image should be enabled
      enabled: true,
      // Alt text for the image
      alt: 'Eltana stone way location for employment',
      // The image to be displayed
      src: import('~/assets/images/stoneway-alt.jpg'),
    },
  },

  third: {
    // If the primary section should be enabled
    enabled: true,

    // Small highlight text to go above the title
    highlight: `Our Positions`,

    // Main title text of the primary content component
    title: `Positions Available`,

    // Main description text of the primary content component (HTML supported)
    description: `<h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">You Don't have to be Jewish; Just Curious</h3>
    We are looking to hire a diverse, representative group of people who embody the intentions behind this tradition, and can translate them into productive work. More specifically, we are looking for:`,

    // The items to be displayed in the primary section
    items: [
      {
        title: 'Outgoing and Efficient Counter Servers',
        description:
          'No restaurant experience is required - just street smarts and passion. If you can apply those traits well you may also find yourself, in a few short months, in a position of responsibility as we also need to hire Bakery Managers and Assistant Managers.',
        icon: 'tabler:coffee',
      },
      {
        title: 'Bakery Managers and Assistant Managers',
        description:
          'The people we are looking for bring a mix of front of house and kitchen experience to the table. They have the empathy to work with a smart staff and they understand how to listen to and truly serve customers.',
        icon: 'tabler:report',
      },
    ],

    // Configuration for the image to be displayed in the primary section
    image: {
      // If the image should be enabled
      enabled: true,
      // Alt text for the image
      alt: 'Bagels being shared',
      // The image to be displayed
      src: import('~/assets/images/capitol-hill.jpg'),
    },
  },
};

export default content;
