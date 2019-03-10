// Write classes or interfaces that describe the shape
// of the data to-and-from the web service

// For example...
/*
export class Product {
  id: number;
  name: string;
  // etc.
}
*/

// reqres.in data shapes

// User 
export class ReqresUser {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}

// Package that delivers a collection of users
export class ReqresUserCollectionPackage {
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
  data: ReqresUser[];
}

// Package that delivers one user
export class ReqresUserSinglePackage {
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
  data: ReqresUser;
}
