"use strict";

function deleteUsersById(id, usersArray) {
  var dataToReturn;
  var foundUser = usersArray.find(function (user) {
    return user.id === id;
  });
  var usersFiltered = usersArray.filter(function (user) {
    return user.id !== id;
  });
  if (foundUser) {
    return [dataToReturn = true, usersFiltered];
  }
  return [dataToReturn = false];
  ;
}
module.exports = deleteUsersById;