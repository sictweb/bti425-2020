---
title: JavaScript Spread and Object Mapping
layout: default
---

## JavaScript Spread and Object Mapping

A common task for programmers is to "map" an object to another object that has a different shape. We do this frequently when we are working with a web API. Why?

The shape of the object as defined by a web API may not match the shape of the object in our own app. This can be true for both requests and responses. 

For example, assume a scenario where we are gathering information about a new user, in an app that allows new public users to "register" for a user account. We collect the user's:
* username
* desired password 
* repeated, desired password (to confirm data entry)

The request to the web API to add that data requires data that has a different shape. Maybe it looks like this:
* full name (one or two fields)
* username
* password 
* full name (one or two fields)
* date the account was created
* initially-configured access level (e.g. "member")
* etc. 

Good programming practice and safety demands that we gather, from the form, ONLY the data we need to do the task. Therefore, we must write a custom-designed data model class for the form, with these properties:
```ts
class DataForm {
  username: string;
  password1: string;
  password2: string;
}
```

After the form gets submitted (or perhaps during user interaction, by handling input field changes), we must lookup the "username" to ensure there are no existing user accounts that have the same "username". We also typically validate the passwords against each other, and with a regular expression (and other programmatic supports) that holds our password rules. (And somewhere in the processing chain, the password gets encrypted and hashed.)

Next, the data must be sent with the "add new user account" request. Maybe its shape is different (and perhaps defined in the `data-classes.ts` source code file), and looks like this:
```ts
export class UserAccount {

  constructor() {
    let now = new Date();
    this.dateCreated = now.toISOString();
    this.accessLevel = 'member';
  }

  fullname: string;
  username: string;
  password: string;
  dateCreated: string;
  accessLevel: string;
  accountLocked: boolean = false;
  accountCredits: number = 0;
}
```

Comparing the two classes, only one property is common. You may be tempted to use the `UserAccount` class as your form's data model class, but *DO NOT* do it. 

Instead, plan on this procedure:
1. Gather the form data, which will match the data model design 
1. In the form submit handler, do whatever needs to be done to get or generate some missing values
1. Create a new instance of the web API request's data model class (i.e. `UserAccount`) 
1. Copy over property values

If the *source* object has fewer properties than the *target* object (which is this situation), we can use a manual procedure to do #4 above, or we can use the new-ish JavaScript object spread syntax. 

<br>

### Object spread syntax

The [official documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) has complete reference-like content for this feature.

> The specific section that interests us is  
> [Spread in object literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals)

Here, we present actionable advice and explanation in the context of Angular template-driven forms handling, where we are working with a web API. 

From above, assume that we have a DataForm object instance named `userData`. We get its values from the form submission. 

We must send a UserAccount object instance with the web API request. Here's how the property values would map or match up:

Source property | Task to be done | Target property
--- | --- | ---
username | Clean the string<br>Pass it on | username
password1 and password2 | Confirm they match<br>Validate rules<br>Other (as necessary) | password
 | Set it (for now) as<br>an empty string | fullname
 | Get the current date-and-time<br>Transform to ISO8601 | dateCreated
 | Set the access level<br>(maybe to "member") | accessLevel
 | Set it to "false" | accountLocked
 | Set it to zero | accountCredits

<br>

#### Sample coding plan 

Assume that the component has a property to hold the data from the form:

```ts
userData: DataForm;
```

In the form submit button handler method, we assemble the package to be sent to the web API. Remember, the package must have the UserAccount shape. 

```ts
// userData already exists in scope

// Create a new mostly-empty 
// default instance of UserAccount
let newUserAccount = new UserAccount();

// If necessary, calculate or generate more property values
// Assume that "MakeSafePassword()" is a function that does
// something to encrypt and hash the user-entered password
newUserAccount.password = MakeSafePassword(userData.password1);

// Do any other preparation, for example...
userData.username = userData.username.toLowerCase().trim();

// Assemble the properties 
// The sequence is important...
// 1. The new object
// 2. Other known values
// 3. The form data object
newUserAccount = {
  ...newUserAccount,
  fullname: '',
  ...userData
}
```

<br>

At this point, `newUserAccount` is ready to send in the request to the web API. 

<br>
