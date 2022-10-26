"use strict";

var _app = require("./app");
var port = 5000;
_app.app.listen(port, function () {
  console.log("Server running on port ".concat(port));
});