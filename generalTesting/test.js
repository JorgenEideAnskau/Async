async function getJoke() {
    try {
      const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json"
        }
      });
      
      const data = await response.json(); // wait for JSON to be parsed
      console.log("Here's your joke:");
      console.log(data.joke);
    } catch (error) {
      console.error("Something went wrong!", error);
    }
  }
  
  getJoke();
  console.log("Fetching a joke...");
  