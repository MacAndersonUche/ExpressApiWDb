"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getUsersById;
function getUsersById(id, usersArray) {
  var dataToReturn;
  var user = usersArray.find(function (user) {
    return user.id === id;
  });
  if (user) {
    dataToReturn = user;
    return dataToReturn;
  }
  return false;
}