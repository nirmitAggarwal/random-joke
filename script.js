document.addEventListener("DOMContentLoaded", () => {
  const jokeElement = document.getElementById("joke");
  const getJokeButton = document.getElementById("get-joke");

  async function fetchJoke() {
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await response.json();
      jokeElement.textContent = `${data.setup} - ${data.punchline}`;
    } catch (error) {
      jokeElement.textContent = "Sorry, there was an error fetching the joke.";
    }
  }

  getJokeButton.addEventListener("click", fetchJoke);
});
