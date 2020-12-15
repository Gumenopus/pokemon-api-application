/* A list of random cards, an array declared */
interface Pokemon {
  name: string;
  imageUrl: string;
}

export interface Cards {
  cards?: Array<Pokemon>;
}
