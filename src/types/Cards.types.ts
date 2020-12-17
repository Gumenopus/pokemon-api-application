//All cards in a list;
export interface Pokemon {
  id: string;
  name: string;
  imageUrl: string;
}

/* 
  Specific object in a list; this need to be separated because the "imageUrlHiRes" 
  wait to long to load when it is in a list. Need to be used just when user
  click on it.
*/
export interface PokemonDetails {
  id: string;
  name: string;
  imageUrlHiRes: string;
  supertype: string;
  subtype: string;
  hp: string;
}

//Specific object, used when call by id;
export interface SpecificPokemon {
  card: PokemonDetails;
}
// A list of objects;
export interface Cards {
  index: number;
  cards?: Array<Pokemon>;
}
