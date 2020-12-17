// A list of objects;
export interface Cards {
  index: number;
  cards?: Array<Pokemon>;
}

// All cards in a list;
export interface Pokemon {
  id: string;
  name: string;
  imageUrl: string;
}

// Specific object, used when call by id;
export interface SpecificPokemon {
  card: PokemonDetails;
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
  attacks: Array<Attacks>;
}

// Specific object attack;
export interface Attacks {
  // TODO: cost
  name: string;
  text: string;
  damage: string;
  cost: Array<String>;
  convertedEnergyCost: number;
}
