// 7. Fetch nested data
// - Fetch a Pokémon, get its species URL (data.species.url), then fetch that URL.
// - Log the flavor_text from the species data.

async function fetchNested() {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
    const data = await response.json();

    const speciesUrl = data.species.url;
    const speciesResponse = await fetch(`${speciesUrl}`);

    const speciesData = await speciesResponse.json();

    // Find the first English flavor text entry

    const englishEntry = speciesData.flavor_text_entries.find(
      (entry) => entry.language.name === "en"
    );

    console.log("Flavor text:", englishEntry.flavor_text);
  } catch (error) {
    console.error("Error", error.message);
  }
}

fetchNested();
