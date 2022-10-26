"use strict";

var createUser = require("./createUser");
var deleteUsersById = require("./deleteUsersById");
var getUsersById = require("./getUsersById");
var updateUsersById = require("./updateUsersById");
module.exports = {
  createUser: createUser,
  deleteUsersById: deleteUsersById,
  getUsersById: getUsersById,
  updateUsersById: updateUsersById
};