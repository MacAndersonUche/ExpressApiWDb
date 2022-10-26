"use strict";

var _require = require("./app"),
  app = _require.app;
var port = 5000;
app.listen(port, function () {
  console.log("Server running on port ".concat(port));
});