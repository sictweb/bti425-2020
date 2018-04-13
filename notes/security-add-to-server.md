---
title: Add security features to web service
layout: default
---

## Add security features to web service

After learning something about [security topics](security-intro), we are ready to write some code. 

In our context, we must:
1. Add security features to the Teams API, and
2. Add security features to an Angular app

This document focuses on the first task, adding security features to the Teams API. 

<br>

### Prepare to work on your Teams API


### Testing

Postman


Register a new user account, for the "user account manager", headers

![Register](../media/sec-pm-req-register-headers.png)

<br>

Body

![Register](../media/sec-pm-req-register-body.png)

<br>

Response

![Response](../media/sec-pm-res-register.png)

<br>

Another register

![Register](../media/sec-pm-req-register-peter.png)

<br>

![Register](../media/sec-pm-req-register-arash.png)

<br>

Login a user

![Login](../media/sec-pm-req-login-arash.png)

<br>

Decode the token, initial paste 

![Decode](../media/sec-jwt-token-val-1.png)

<br>

After supplying the secret

![Decode](../media/sec-jwt-token-val-2.png)

<br>

Requesting `/employees` without a token

![Employees](../media/sec-pm-req-emp-token-no.png)

<br>

Configuring the token in the authorization header

![Employees](../media/sec-pm-req-emp-token-add-to-headers.png)

<br>

Requesting `/employees` WITH a token

![Employees](../media/sec-pm-req-emp-token-yes.png)

<br>
