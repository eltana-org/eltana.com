// Configuration for the site wide call to action
// This component config can be used on any page to display an identical call to action

// ----------- imports -----------
import { getPermalink } from '~/utils/permalinks';
// ----------- imports -----------

const callToAction = {
  // If the call to action should be displayed
  enabled: true,

  // The title of the call to action component
  title: 'Looking for Same Day Delivery?',

  // The subtitle of the call to action component (supports HTML)
  subtitle: `Check out our same day delivery page.`,

  // Button configuration for the call to action component
  button: {
    // If the button should be displayed
    enabled: true,
    // The text of the button
    text: 'Order Now',
    // The link of the button
    href: getPermalink('/order'),
    // The icon to the left of the button text
    icon: 'tabler:bolt',
    // HTML target attribute
    target: '_self',
    // HTML rel attribute
    rel: [],
  },
};

export default callToAction;
