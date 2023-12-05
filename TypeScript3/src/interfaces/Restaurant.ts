interface Location {
    coordinates: [number, number];
    type: string;
  }

  interface Restaurant {
    _id: string;
    name: string;
    address: string;
    city: string;
    postalCode: string;
    phone: string;
    company: string;
    location: Location;
  }

  export type { Restaurant };
