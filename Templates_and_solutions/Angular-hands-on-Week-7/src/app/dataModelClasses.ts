// Data shapes

//export interface Person {
export class Person {
  _id?: string;
  id?: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
  url: string;
  creditScore: number;
  rating: number;
}

// export class PersonAdd {
//   _id?: string;
//   id?: number;
//   firstName: string;
//   lastName: string;
//   birthDate: string;
//   email: string;
//   url: string;
//   creditScore: number;
//   rating: number;
// }

export class PersonAdd implements Person {
  _id?: string;
  id?: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
  url: string;
  creditScore: number;
  rating: number;
}