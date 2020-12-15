/* A list of random cards, an array declared */
interface Pokemon {
  id: string;
  name: string;
  imageUrl: string;
}

export interface Cards {
  index: number;
  cards?: Array<Pokemon>;
}

export interface Position {
  index: number;
}
