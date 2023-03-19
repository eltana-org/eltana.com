// Configuration for the site wide call to action
// This component config can be used on any page to display an identical call to action

const neighborhoodDelivery = {
  // If the call to action should be displayed
  enabled: true,

  // The title of the call to action component
  title: 'Looking for Neighborhood Delivery?',

  // The subtitle of the call to action component (supports HTML)
  subtitle: `Join our Neighborhood Delivery program and get your favorite bagels delivered to your door.`,

  // Button configuration for the call to action component
  button: {
    // If the button should be displayed
    enabled: true,
    // The text of the button
    text: 'Schedule an Order',
    // The link of the button
    href: 'https://eltanabagels.bottle.com/',
    // The icon to the left of the button text
    icon: 'tabler:truck-delivery',
    // HTML target attribute
    target: '_blank',
    // HTML rel attribute
    rel: [],
  },
};

export default neighborhoodDelivery;
