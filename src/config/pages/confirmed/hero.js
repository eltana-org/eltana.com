// Hero configuration on the homepage

// ----------- imports -----------
import { getPermalink } from '~/utils/permalinks';
// ----------- imports -----------

const hero = {
  // If the entire hero section should be enabled or not
  enabled: true,

  // Custom CSS padding for the hero element
  padding: 'pt-12 md:pt-20',

  // Hero title with HTML support
  title: {
    enabled: true, // If the title should be enabled or not
    text: `Confirmed`,
  },

  // Hero subtitle with HTML support
  subtitle: {
    enabled: true, // If the subtitle should be enabled or not
    text: `Your order has been confirmed`,
  },

  // First CTA block
  callToAction: {
    // Enable or disable first CTA
    enabled: false,
    // CTA text
    text: 'Menu',
    // CTA link
    href: getPermalink('/menu'),
    // Target html <a> tag
    target: '_self',
    // Rel html <a> tag
    rel: [],
    // CTA icon
    icon: 'tabler:clipboard',
  },

  // Second CTA block (optional)
  callToAction2: {
    // Enable or disable second CTA
    enabled: false,
    // CTA text
    text: 'Learn more',
    // CTA link
    href: '#features',
    // Target html <a> tag
    target: '_blank',
    // Rel html <a> tag
    rel: 'noopener',
    icon: 'tabler:book',
  },

  // Hero image
  image: {
    // If the image should be enabled or not
    enabled: false,
    // Image source
    src: import('~/assets/images/menu-hero.jpg'),
    // Image alt text
    alt: 'Eltana menu page hero image',
  },
};

export default hero;
