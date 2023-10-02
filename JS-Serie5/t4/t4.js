async function fetchData(url, options) {
  try {
      const response = await fetch(url, options);
      if (!response.ok) {
          throw new Error('Network response failed: ' + response.statusText);
      }
      return await response.json();
  } catch (error) {
      console.error('Problem with your fetch operation:', error);
  }
}

(async function() {
  try {
      const user = {
          name: 'Ahmed Ezzaroui',
          job: 'Developer'
      };
      const url = 'https://reqres.in/api/users';
      const options = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
      }

      const userData = await fetchData(url, options);
      console.log(userData);
  } catch (error) {
      console.error('An error occurred:', error);
  }
})();
