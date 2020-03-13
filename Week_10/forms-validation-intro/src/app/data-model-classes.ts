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

// Packaging for "add new" request
// NOTICE...
// The same package works for the "edit existing" request
export class ReqresUserCreate {
  name: string;
  job: string;
}

// Response from "add new" POST request
// NOTICE...
// The same package works for the "edit existing" request, 
// except that the web service does NOT return the "id" value,
// which is why it has been configured (below) as optional
export class ReqresUserCreateResponse {
  id?: number;
  name: string;
  job: string;
  createdAt: string;  // ISO8601 date and time string
}
