// Configuration for the header component on all pages

// ----------- imports -----------
import { getPermalink, getBlogPermalink } from '~/utils/permalinks';
// ----------- imports -----------

const headerData = {
  // List of links to be displayed in the header
  links: [
    // A single link with no dropdown
    {
      text: 'Menu',
      href: getPermalink('/menu'),
    },

    // The blog link is a special case, it uses the getBlogPermalink function
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },

    // A link with a dropdown
    {
      text: 'Pages',
      links: [
        {
          text: 'Order',
          href: getPermalink('/order'),
        },
        {
          text: 'Catering',
          href: getPermalink('/schedule-order'),
        },
        {
          text: 'Locations',
          href: getPermalink('/locations'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Employment',
          href: getPermalink('/employment'),
        },
        {
          text: 'Giving',
          href: getPermalink('/giving'),
        },
        {
          text: 'Gallery',
          href: getPermalink('/gallery'),
        },
      ],
    },
  ],

  // List of buttons to be displayed in the header
  actions: [
    {
      // text to display on the button
      text: 'Order',
      // link to go to when the button is clicked
      href: getPermalink('/order'),
      // can be 'button', 'primary', or 'ghost'
      type: 'button',
      // HTML rel attribute
      rel: [],
      // HTML target attribute
      target: '_self',
    },
  ],
};

export default headerData;
