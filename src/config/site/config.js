// General configuration for the website

import defaultImage from '../../assets/images/default.png';
import blog from './blog';

const CONFIG = {
  // The name of the website
  name: 'Eltana',
  // The origin of the website (without trailing slash)
  origin: 'https://eltana.com',
  // The base pathname of the website
  basePathname: '/',
  // If the website uses trailing slashes in the URLs
  trailingSlash: false,

  // The website title which is displayed in the browser tab
  title: 'Eltana | Wood-Fired Bagel Cafe | Seattle, WA',

  // Website description
  description:
    'Wood-fired bagel cafe located in the neighborhoods of Seattle, WA. Bagels, Breakfast, Coffee, and more!',

  // The website's preview image that is displayed when sharing the website on social media
  defaultImage: defaultImage,

  // Default site theme
  // Values: "system" | "light" | "dark" | "light:only" | "dark:only"
  defaultTheme: 'light:only',

  // The default language of the website
  language: 'en',
  // The default text direction (ltr is left-to-right, rtl is right-to-left)
  textDirection: 'ltr',

  // Date format (used in blog posts)
  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  // Google Analytics configuration
  googleAnalyticsId: 'G-7Y9RT7Y1PY', // or "G-XXXXXXXXXX",
  googleSiteVerificationId: '',

  // If the RSS feed button should be displayed
  showRssFeed: false,

  // If the theme switcher should be displayed
  showToggleTheme: false,

  // If the header should be stick to the top of the page
  isSticky: true,

  // The position of the header
  // Values: "center" | "right" | "left"
  headerPosition: 'right',
};

export default CONFIG;
export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
