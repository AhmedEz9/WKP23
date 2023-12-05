interface Course {
    name: string;
    diets?: string[];
    price?: number;
  }

  interface Menu {
    courses: Course[];
  }

  export type { Menu, Course };
