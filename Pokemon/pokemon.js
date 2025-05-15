async function getPokemonData(pokemonList) {
  for (const pokemon of pokemonList) {

    try {

      let pokemonLower = pokemon.trim().toLowerCase();
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonLower}`
      );

      if (!response.ok) {
        throw new Error("Pokemon not found!");
      }

      const data = await response.json();

      const type = data.types.map((t) => t.type.name);
      const abilities = data.abilities.map((a) => a.ability.name);

      console.log(`\nName: ${data.name}`);
      console.log(`Type(s): ${type.join(", ")}`);
      console.log(`Abilities: ${abilities.join(", ")}`);

    } 
    catch (error) {
      console.error("Error", error.message);
    }
  }
}

getPokemonData(["Pikachu", "charizard", "notReal"]);
