import { getUsers } from "../../database";

export default function getUsersById(id) {
	(async () => {
		let dataToReturn;
		dataToReturn = await getUsers();
		const user = dataToReturn.find((user) => user.id === id);
		if (user) {
			dataToReturn = user;
			return dataToReturn;
		}

		return false;
	})();
}
