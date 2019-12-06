export interface Citizen {
  id: number;
  name: string;
  age: number;
  weight: number;
  height: number;
  thumbnail: string;
  professions: Array<string>;
  hair_color: string;
}

export interface Town {
  citizens: Array<Citizen>;
  name: string;
}
