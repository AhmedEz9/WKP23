async function fetchData() {
  try {
      const response = await fetch('https://reqres.in/api/unknown/23');
      if (!response.ok) {
        throw new Error(`Failed to fetch user data: ${response.statusText}`);
      }
      const data = await response.json();
      console.log(data);
  } catch (error) {
      console.error(`An error occurred while fetching the user data: ${error}`);
  }
}

fetchData();
