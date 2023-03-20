// Hero configuration on the homepage

// ----------- imports -----------
import { getPermalink } from '~/utils/permalinks';
// ----------- imports -----------

const hero = {
  // If the entire hero section should be enabled or not
  enabled: true,

  // Hero title with HTML support
  title: {
    enabled: true, // If the title should be enabled or not
    text: `<span class="font-bold">Eltana</span>`,
  },

  // Hero subtitle with HTML support
  subtitle: {
    enabled: true, // If the subtitle should be enabled or not
    text: `<span class="hidden sm:inline">
    <span class="font-semibold">Eltana</span> is a wood-fired bagel cafe located in Seattle, WA.<br></span
    >
    <span class="block mb-1 sm:hidden font-bold text-amber-700">Wood-Fired Bagel Cafe</span>Bagels, Coffee, and more.`,
  },

  // First CTA block
  callToAction: {
    // Enable or disable first CTA
    enabled: true,
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
    enabled: true,
    // Image source
    src: import('~/assets/images/hero.jpg'),
    // Image alt text
    alt: 'Eltana bagels hero image',
  },
};

export default hero;
