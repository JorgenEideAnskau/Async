document
  .getElementById("pokemonName")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      fetchPokemon();
    }
  });

async function fetchPokemon() {
  const pokemonInput = document.getElementById("pokemonName");
  const pokemonName = pokemonInput.value.trim().toLowerCase();

  // Clear input and get elements
  pokemonInput.value = "";
  const pokemonImage = document.getElementById("pokemonSprite");
  const errorText = document.getElementById("errorText");

  if (pokemonName === "") {
    pokemonImage.style.display = "none";
    pokemonImage.src = "";
    errorText.textContent = "Please enter a Pokémon name";
    errorText.classList.add("text-danger");
    return;
  }

  // Reset error and sprite
  errorText.classList.remove("text-danger");
  errorText.textContent = "Loading ...";
  pokemonImage.style.display = "none";
  pokemonImage.src = "";

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Pokemon not found ☹️");
    }

    const data = await response.json();
    const pokemonImageUrl = data.sprites.front_default;

    pokemonImage.src = pokemonImageUrl;
    pokemonImage.style.display = "block";
    errorText.textContent = "";
  } catch (error) {
    console.error("Error: ", error.message);
    pokemonImage.style.display = "none";
    errorText.classList.add("text-danger");
    errorText.textContent = error.message;
  }
}
