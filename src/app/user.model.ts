export class User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
}

export interface IMovie {
  id: number;
  name: string;
  time: string;
  year: string;
  imageUrl: string;
  plot: string;
  favorite: string[]
}
