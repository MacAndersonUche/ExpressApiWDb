"use strict";

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
module.exports = getUsersById;