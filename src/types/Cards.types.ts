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
  types: Array<String>;
  supertype: string;
  subtype: string;
  ability: Abilities;
  hp: string;
  attacks: Array<Attacks>;
  retreatCost: Array<String>;
  resistances: Array<ResistancesAndWeakness>;
  weaknesses: Array<ResistancesAndWeakness>;
  /* Trainer properties */
  text: string;
}

interface ResistancesAndWeakness {
  type: string;
  value: string;
}

export interface Abilities {
  name: string;
  text: string;
  type?: string;
}

// Specific object attack;
export interface Attacks {
  name: string;
  text: string;
  damage: string;
  cost: Array<String>;
  convertedEnergyCost: number;
}
