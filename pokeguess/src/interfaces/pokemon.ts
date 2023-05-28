export interface Pokemon {
  id: number,
  name: string;
  url: string;
}

export async function fetchPokemonList(): Promise<Pokemon[]> {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151");
  const data = await response.json();

  return data.results.map((pokemon: {id: number, name: string, url: string }) => {
    const urlParts = pokemon.url.split("/");
    return {
      name: pokemon.name,
      url: pokemon.url,
      id: parseInt(urlParts[urlParts.length - 2])
    };
  });
}