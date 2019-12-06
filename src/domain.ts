export interface Citizen {
  id: number;
  name: string;
  age: number;
  weight: number;
  height: number;
  hair_color: string;
  thumbnail: string;
  professions: Array<string>;
  friends: Array<string>;
}

export interface Town {
  citizens: Array<Citizen>;
  name: string;
}
