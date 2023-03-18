// Configuration for the faqs component on the homepage

const faqs = {
  // If the faqs component should be enabled or not on the homepage
  enabled: true,

  // highlight text for the faqs component
  highlight: 'FAQs',

  // Title for the faqs component
  title: 'Frequently Asked Questions',

  // Subtitle for the faqs component
  subtitle:
    'Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar.',

  // List of FAQs to display with HTML support
  items: [
    [
      {
        question: 'What do I need to start?',
        answer:
          'Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds. Many say exploration is part of our destiny, but it’s actually our duty to future generations.',
      },
      {
        question: 'How to install the Astro + Tailwind CSS template?',
        answer:
          "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.",
      },
      {
        question: "What's something that you don't understand?",
        answer:
          "A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear. I didn't even know we were calling him Big Bear.",
      },
    ],
    [
      {
        question: "What's an example of when you changed your mind?",
        answer:
          "Michael Knight a young loner on a crusade to champion the cause of the innocent. The helpless. The powerless in a world of criminals who operate above the law. Here he comes Here comes Speed Racer. He's a demon on wheels.",
      },
      {
        question: 'What is something that you would like to try again?',
        answer:
          "A business big enough that it could be listed on the NASDAQ goes belly up. Disappears! It ceases to exist without me. No, you clearly don't know who you're talking to, so let me clue you in.",
      },
      {
        question: 'If you could only ask one question to each person you meet, what would that question be?',
        answer:
          "This is not about revenge. This is about justice. A lot of things can change in twelve years, Admiral. Well, that's certainly good to know. About four years. I got tired of hearing how young I looked.",
      },
    ],
  ],
};

export default faqs;
