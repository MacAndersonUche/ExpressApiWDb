"use strict";

function updateUsersById(id, name, age, usersArray) {
  var dataToReturn;
  var foundUser = usersArray.find(function (user) {
    return user.id === id;
  });
  var usersFiltered = usersArray.filter(function (user) {
    return user.id !== id;
  });
  var newUser = {
    id: id,
    name: name,
    age: age
  };
  if (foundUser) {
    usersFiltered.push(newUser);
    return [dataToReturn = true, usersFiltered];
  }
  return [dataToReturn = false];
}
module.exports = updateUsersById;