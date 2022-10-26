"use strict";

var _require = require("uuid"),
  v4 = _require.v4;
function createUser(name, age, data) {
  var newUser = {
    id: v4(),
    name: name,
    age: age
  };
  data.push(newUser);
  return data;
}
module.exports = createUser;