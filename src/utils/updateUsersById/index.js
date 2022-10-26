function updateUsersById(id, name, age, usersArray) {
	let dataToReturn;
	const foundUser = usersArray.find((user) => user.id === id);
	const usersFiltered = usersArray.filter((user) => user.id !== id);
	const newUser = {
		id: id,
		name: name,
		age: age,
	};
	if (foundUser) {
		usersFiltered.push(newUser);
		return [(dataToReturn = true), usersFiltered];
	}
	return [(dataToReturn = false)];
}


module.exports  = updateUsersById;