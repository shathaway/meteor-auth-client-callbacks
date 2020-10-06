Package.describe({
  name: "shathaway:auth-client-callbacks",
  summary: "Adds client-side onLogin and onLogout methods",
  version: "0.1.6"
});

Package.on_use(function (api, where) {

  api.use([
    "underscore",
    "accounts-base",
    "tracker"
  ], "client");

  api.imply([
    "accounts-base"
  ], "client");

  api.add_files([
    "client/lib.js"
  ], "client");

});
