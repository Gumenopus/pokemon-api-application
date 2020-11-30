class Pokemon {
  id: number;

  name: string;

  height: number;

  imageFront: string;

  constructor(id: number, name: string, height: number, imageFront: string) {
    this.id = id;
    this.name = name;
    this.height = height;
    this.imageFront = imageFront;
  }
}

export default Pokemon;
