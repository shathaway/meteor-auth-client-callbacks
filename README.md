```diff
- NOTE: This package is not maintained anymore.
- If you want to help, please reach out to gwendall.esnault@gmail.com
```

This package is edited to reference Tracker.autorun() instead of Meteor.autorun().
This edit supports Meteor versions >= 6.00.

Meteor Auth Client Callbacks
============================

Adds client-side onLogin and onLogout callbacks.  

Installation
------------

``` sh
meteor add gwendall:auth-client-callbacks
```

Methods
-------

**Accounts.onLogin(callback)**
Callback called whenever the client logs in.
```javascript
Accounts.onLogin(function() {
  console.log("I just logged in.");
});
```

**Accounts.onLogout(callback)**
Callback called whenever the client logs out.
```javascript
Accounts.onLogout(function() {
  console.log("I just logged out.");
});
```
