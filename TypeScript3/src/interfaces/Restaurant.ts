interface Restaurant {
    _id: string;
    name: string;
    address: string;
    company: string;
    location: {
      type: string;
      coordinates: [number, number];
    };
    city?: string;
    postalCode?: string;
    phone?: string;
  }

  export default Restaurant;
