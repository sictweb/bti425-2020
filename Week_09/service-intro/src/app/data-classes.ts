
// Data model classes for the app

// Example - describes a product
export class Product {
  id: number;
  name: string;
  description?: string;   // optional property, can be null
}

// Add more data model classes below...

// From the "typicode" web API...
// https://jsonplaceholder.typicode.com

export class Post {
  id:         number;
  userId:     number;
  title:      string;
  body:       string;
}

export class Comment {
  id:         number;
  postId:     number;
  email:      string;
  name:       string;
  body:       string;
}

export class Geo {
  lat:        number;
  lng:        number;
}

export class Address {
  city:       string;
  geo:        Geo;
  street:     string;
  suite:      string;
  zipcode:    string;
}

export class Company {
  bs:             string;
  catchPhrase:    string;
  name:           string;
}

export class User {
  address:        Address;
  company:        Company;
  email:          string;
  id:             number;
  name:           string;
  phone:          string;
  username:       string;
  website:        string;
}
