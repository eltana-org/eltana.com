// Configuration for the footer component on all pages

// ----------- imports -----------
import { getPermalink } from '~/utils/permalinks';
// ----------- imports -----------

const footerData = {
  // List of links to be displayed in the footer
  links: [
    {
      // The title of the section
      title: 'Order',
      // List of links to be displayed in the section
      links: [
        { text: 'Ordering', href: getPermalink('/order') },
        { text: 'Menu', href: getPermalink('/menu') },
      ],
    },
    {
      title: 'About Us',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Team', href: getPermalink('/team') },
        { text: 'Employment', href: getPermalink('/employment') },
      ],
    },
    {
      title: 'Contact',
      links: [{ text: 'Contact Us', href: getPermalink('/contact') }],
    },
    {
      title: 'Programs',
      links: [{ text: 'Hidden36', href: 'https://www.hidden36.com/' }],
    },
  ],

  // Secondary links to be displayed in the footer
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],

  // A list of social links to be displayed in the footer
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/eltanabagels/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/eltanabagels' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/eltana-org/eltana.com' },
  ],

  // The footnote to be displayed in the footer (can contain HTML)
  footNote: `
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" target="_blank" href="https://github.com/eltana-org"> Eltana</a> with ❤️
  `,
};

export default footerData;
