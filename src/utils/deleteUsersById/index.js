export default function deleteUsersById(id, usersArray) {
	let dataToReturn;
	const foundUser = usersArray.find((user) => user.id === id);
	const usersFiltered = usersArray.filter((user) => user.id !== id);

	if (foundUser) {
		return [dataToReturn = true, usersFiltered];
	}
	 return [dataToReturn = false];;
}
