// Configuration for the site wide call to action
// This component config can be used on any page to display an identical call to action

// ----------- imports -----------
import { getPermalink } from '~/utils/permalinks';
// ----------- imports -----------

const callToAction = {
  // If the call to action should be displayed
  enabled: true,

  // The title of the call to action component
  title: 'About Eltana',

  // The subtitle of the call to action component (supports HTML)
  subtitle: `Click the link below to learn more about Eltana, our culture, and our history!`,

  // Button configuration for the call to action component
  button: {
    // If the button should be displayed
    enabled: true,
    // The text of the button
    text: 'About',
    // The link of the button
    href: getPermalink('/about'),
    // The icon to the left of the button text
    icon: 'tabler:bulb',
    // HTML target attribute
    target: '_self',
    // HTML rel attribute
    rel: [],
  },
};

export default callToAction;
