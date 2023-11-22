export enum Kind {
  CAT = 'CAT',
  DOG = 'DOG',
}

export interface Pet {
  description: any;
  id: number;
  name: string;
  kind: Kind;
  image: string;
  profileText: string;
  popularity: number;
}
