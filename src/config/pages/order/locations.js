// Configuration for the locations component on the home page

const locations = {
  // Show or hide the locations component
  enabled: true,

  // Small highlight text at the top of the component
  highlight: `Online`,

  // Main title text
  title: 'Alternate Delivery Services',
  // Subtitle text
  subtitle: 'We offer delivery services through our partners at Postmates, and Uber Eats.',

  // Location cards to display
  locations: [
    {
      name: 'Capitol Hill - Postmates',
      address: {
        enabled: true,
        line1: '1538 12th Ave',
        city: 'Seattle',
        state: 'WA',
        postcode: '98122',
        country: null,
      },
      description: 'Place an order with Postmates at our Capitol Hill location',
      image: {
        alt: 'Capitol Hill Eltana',
        height: '140',
        // local image stored in public/assets (size in pixels must be identical to the location below)
        src: '/assets/capitol-hill.jpg',
      },
      buttons: [
        {
          text: 'Order',
          link: 'https://postmates.com/merchant/eltana-wood-fired-bagel-cafe-seattle',
          target: '_blank', // opens in new tab
          size: 'large',
          icon: 'store',
        },
      ],
    },
    {
      name: 'Stone Way - Postmates',
      address: {
        enabled: true,
        line1: '3920 Stone Way North',
        city: 'Seattle',
        state: 'WA',
        postcode: '98103',
        country: null,
      },
      description: 'Place an order with Postmates at our Stone Way location',
      image: {
        alt: 'Stone Way Eltana',
        height: '140',
        // local image stored in public/assets (size in pixels must be identical to the location above)
        src: '/assets/stoneway.jpg',
      },
      buttons: [
        {
          text: 'Order',
          link: 'https://postmates.com/merchant/eltana-wood-fired-bagel-cafe-3920-stone-way-n',
          target: '_blank', // opens in new tab
          size: 'large',
          icon: 'store',
        },
      ],
    },
    {
      name: 'Capitol Hill - Uber Eats',
      address: {
        enabled: true,
        line1: '1538 12th Ave',
        city: 'Seattle',
        state: 'WA',
        postcode: '98122',
        country: null,
      },
      description: 'Place an order with Uber Eats at our Capitol Hill location',
      image: {
        alt: 'Capitol Hill Eltana',
        height: '140',
        // local image stored in public/assets (size in pixels must be identical to the location below)
        src: '/assets/capitol-hill.jpg',
      },
      buttons: [
        {
          text: 'Order',
          link: 'https://www.ubereats.com/store/eltana-wood-fired-bagel-cafe-capitol-hill/8TfTe89HQjO72OJSfVSbkg',
          target: '_blank', // opens in new tab
          size: 'large',
          icon: 'store',
        },
      ],
    },
    {
      name: 'Stone Way - Uber Eats',
      address: {
        enabled: true,
        line1: '3920 Stone Way North',
        city: 'Seattle',
        state: 'WA',
        postcode: '98103',
        country: null,
      },
      description: 'Place an order with Uber Eats at our Stone Way location',
      image: {
        alt: 'Stone Way Eltana',
        height: '140',
        // local image stored in public/assets (size in pixels must be identical to the location above)
        src: '/assets/stoneway.jpg',
      },
      buttons: [
        {
          text: 'Order',
          link: 'https://www.ubereats.com/store/eltana-wood-fired-bagel-cafe-stone-way/SefECpmnQjayZrSZW-kY7w',
          target: '_blank', // opens in new tab
          size: 'large',
          icon: 'store',
        },
      ],
    },
  ],
};

export default locations;
