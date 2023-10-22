function squareRoot(num: number | null | undefined): number | string {
    if (num === undefined || num === null) {
      return 'Input is undefined or null.';
    }

    if (isNaN(num)) {
      return 'Invalid input. Please enter a valid number.';
    }

    if (num < 0) {
      return 'Cannot calculate square root of a negative number.';
    }

    return Math.sqrt(num);
  }

  export { squareRoot };
