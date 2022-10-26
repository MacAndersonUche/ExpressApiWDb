"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createUser;
var _uuid = require("uuid");
var _db = require("../../database/db");
function createUser(name, age, data) {
  var newUser = {
    id: (0, _uuid.v4)(),
    name: name,
    age: age
  };
  data.push(newUser);
  return data;
}