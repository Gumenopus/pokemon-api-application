//Specific object in a list;
export interface Pokemon {
  id: string;
  name: string;
  imageUrl: string;
}

//Specific object, used when call by id;
export interface SpecificPokemon {
  card: Pokemon;
}
// A list of objects;
export interface Cards {
  index: number;
  cards?: Array<Pokemon>;
}
