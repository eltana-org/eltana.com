// Configuration for the locations component on the home page

const locations = {
  // Show or hide the locations component
  enabled: true,

  // Small highlight text at the top of the component
  highlight: 'Physical Locations',

  // Main title text
  title: 'Locations',
  // Subtitle text
  subtitle: 'We have two locations in Seattle for dine-in, takeout, and delivery.',

  // Location cards to display
  locations: [
    {
      name: 'Capitol Hill',
      address: {
        enabled: true,
        line1: '1538 12th Ave',
        city: 'Seattle',
        state: 'WA',
        postcode: '98122',
        country: null,
      },
      description: 'Our Capitol Hill neighborhood location',
      image: {
        alt: 'Capitol Hill Eltana',
        height: '140',
        src: 'https://images.unsplash.com/photo-1678986992005-87c3f4a2b0af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
      },
      buttons: [
        {
          text: 'Directions',
          link: 'https://goo.gl/maps/jMV4grYFKKUYfSGk6', // google maps link
          target: '_blank', // opens in new tab
          size: 'large',
          icon: 'directions',
        },
        {
          text: 'Call',
          link: 'tel:2067240660', // phone number
          target: '_self', // opens in same tab
          size: 'large',
          icon: 'phone',
        },
      ],
    },
    {
      name: 'Stone Way',
      address: {
        enabled: true,
        line1: '3920 Stone Way North',
        city: 'Seattle',
        state: 'WA',
        postcode: '98103',
        country: null,
      },
      description: 'Our Stone Way neighborhood location',
      image: {
        alt: 'Stone Way Eltana',
        height: '140',
        src: 'https://images.unsplash.com/photo-1678986992005-87c3f4a2b0af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
      },
      buttons: [
        {
          text: 'Directions',
          link: 'https://goo.gl/maps/Tet94AG4Hs5P4Lvf8', // google maps link
          target: '_blank', // opens in new tab
          size: 'large',
          icon: 'directions',
        },
        {
          text: 'Call',
          link: 'tel:2064201293', // phone number
          target: '_self', // opens in same tab
          size: 'large',
          icon: 'phone',
        },
      ],
    },
  ],
};

export default locations;
