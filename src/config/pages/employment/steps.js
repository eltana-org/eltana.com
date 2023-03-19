// Configuration for the steps component on the homepage

const steps = {
  // Whether the component is enabled or not
  enabled: true,

  // The title text of the component
  title: 'Apply',

  subtitle:
    'Please answer three of the questions below in 250 words or less. Send your completed questions and a resume to: daniel@eltana.com',

  // Items to be displayed as steps
  items: [
    {
      title: 'About: <span class="font-medium">Tell Us About Yourself</span>',
      description: 'Tell us about yourself. Who are you? What do you do well?',
      icon: 'tabler:user',
    },
    {
      title: 'Service: <span class="font-medium">Great Service Examples</em>',
      description: 'What does great service mean to you? Describe and give examples.',
      icon: 'tabler:tools-kitchen',
    },
    {
      title: 'Life: <span class="font-medium">Goals</span>',
      description: 'What do you want out of life? Describe the type of person you aspire to be',
      icon: 'tabler:bulb',
    },
    {
      title: 'Food: <span class="font-medium">What Do You Like</span>',
      description: 'What kind of food do you like? What about this food makes it appealing to you?',
      icon: 'tabler:cookie',
    },
    {
      title: 'Group: <span class="font-medium">Experience</span>',
      description: 'Tell us about a great group experience you had and what made it positive and memorable',
      icon: 'tabler:friends',
    },
    {
      title: 'Spirit: <span class="font-medium">Influences and Inspiration</span>',
      description:
        'Identify and explain the influences and inspirations that helped you become candid, efficient, and generous of spirit.',
      icon: 'tabler:star',
    },
    {
      title: 'Apply!',
      description: 'Send your completed questions and a resume to: daniel@eltana.com',
      icon: 'tabler:check',
    },
  ],

  // The image to be displayed on the right side of the component
  image: {
    src: import('~/assets/images/bagel-paper.jpg'),
    alt: 'Bagel on crossword paper',
  },
};

export default steps;
