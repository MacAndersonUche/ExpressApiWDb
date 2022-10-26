import {
	getAllUsers,
	createUser,
	getUsersById,
	deleteUsersById,
	updateUsersById,
} from "./utils";
import { getUsers, setUsers } from "./database";
import serverless from "serverless-http";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
// const router = express.Router();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use("/.netlify/functions/app", router); // path must route to lambda

app.get("/", (req, res) => {
	res.writeHead(200, { "Content-Type": "text/html" });
	res.write("<h1>Up and running</h1>");
	res.end();
});
app.get("/users", (req, res) => {
	let dataToReturn;
	(async () => {
		dataToReturn = await getUsers();
		res.send(dataToReturn);
	})();
});
app.post("/users", (req, res) => {
	const { name, age } = req.body;
	(async () => {
		const dataToReturn = await getUsers();
		const created = createUser(name, age, dataToReturn);
		if (created) {
			const data = await setUsers(created);
			res.send(data);
		}
	})();
});
app.put("/users", (req, res) => {
	const { id, name, age } = req.body;
	res.send(updateUsersById(id, name, age));
});
app.delete("/users/:id", (req, res) => {
	const { id } = req.params;
	res.send(deleteUsersById(id));
});
app.get("/user/:id", (req, res) => {
	const { id } = req.params;
    const user = getUsersById(id);
    console.log(user);
	res.send(user);
});

export { app };
export const handler = serverless(app);
