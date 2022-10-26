import { setUsersArray, usersArray } from "../../database/db";

export default function deleteUsersById(id) {
	let dataToReturn;
	const foundUser = usersArray.find((user) => user.id === id);
	const usersFiltered = usersArray.filter((user) => user.id !== id);

	if (foundUser) {
		setUsersArray(usersFiltered);
		return (dataToReturn = true);
	}
	return (dataToReturn = false);
}
