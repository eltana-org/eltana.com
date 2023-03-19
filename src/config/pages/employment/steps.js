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
      title: 'Step 3: <span class="font-medium">Customize styles</span>',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.',
      icon: 'tabler:paint',
    },
    {
      title: 'Ready!',
      icon: 'tabler:check',
    },
  ],

  // The image to be displayed on the right side of the component
  image: {
    src: import('~/assets/images/hero.jpg'),
    alt: 'Steps image',
  },
};

export default steps;
