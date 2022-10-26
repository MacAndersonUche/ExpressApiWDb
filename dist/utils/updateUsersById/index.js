"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = updateUsersById;
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
    // write("src/database/db.json", usersFiltered);
    setUsersArray(usersFiltered);
    return dataToReturn = true;
  }
  return dataToReturn = false;
}