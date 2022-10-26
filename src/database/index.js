const { QuickDB } = require("quick.db");
const db = new QuickDB();

let usersArray = [
	{ id: "5da179cd-0fb3-4112-aa09-d03c8786a7d1", name: "Andy", age: 25 },
	{
		id: "eca526d2-eb5d-4e23-8b38-5e271e87d989",
		name: "Macky",
		age: 25,
	},
	{ id: "88736698-0052-4dc5-b4ae-bec8a7e8a5db", name: "Macky", age: 25 },
];

async function setUsers(user) {
	try {
		const data = await db.set("userInfo", user);
		return data;
	} catch (error) {
		console.log(error);
	}
}

async function getUsers() {
	try {
		const data = await db.get("userInfo");

		return data;
	} catch (error) {
		console.log(error);
	}
}

module.exports = {  getUsers, setUsers };
