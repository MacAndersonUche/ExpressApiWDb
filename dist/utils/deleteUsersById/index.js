"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = deleteUsersById;
var _db = require("../../database/db");
function deleteUsersById(id) {
  var dataToReturn;
  var foundUser = _db.usersArray.find(function (user) {
    return user.id === id;
  });
  var usersFiltered = _db.usersArray.filter(function (user) {
    return user.id !== id;
  });
  if (foundUser) {
    (0, _db.setUsersArray)(usersFiltered);
    return dataToReturn = true;
  }
  return dataToReturn = false;
}