async function fetchSequential() {
  console.time("Sequential");

  const names = ["charizard", "pikachu", "snorlax"];

  for (const name of names) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    const data = await response.json();

    console.log("Name", data.name);
  }

  console.timeEnd("Sequential");
  console.log("\n");
}

async function fetchParallel(params) {
  console.time("Parallel");

  const names = ["pikachu", "bulbasaur", "charmander"];

  const promises = names.map(async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return await response.json();
  });

  const results = await Promise.all(promises);

  results.forEach((pokemon) => {
    console.log("Name", pokemon.name);
  });

  console.timeEnd("Parallel");
  console.log("\n");
}

fetchSequential();

fetchParallel();