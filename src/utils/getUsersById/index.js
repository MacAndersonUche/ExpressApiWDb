function getUsersById(id, usersArray) {
	let dataToReturn;
	const user = usersArray.find((user) => user.id === id);
	if (user) {
		dataToReturn = user;
		return dataToReturn;
	}

	return false;
}

module.exports = getUsersById;
