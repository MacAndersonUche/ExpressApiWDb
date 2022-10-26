import {
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
const router = express.Router();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use("/.netlify/functions/app", router); // path must route to lambda

router.get("/", (req, res) => {
	res.writeHead(200, { "Content-Type": "text/html" });
	res.write("<h1>Up and running</h1>");
	res.end();
});
router.get("/users", (req, res) => {
	let dataToReturn;
	(async () => {
		dataToReturn = await getUsers();
		res.send(dataToReturn);
	})();
});
router.post("/users", (req, res) => {
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
router.put("/users", (req, res) => {
	const { id, name, age } = req.body;
    (async () => {
		const dataToReturn = await getUsers();
		const [updated, data]  = updateUsersById(id, name, age, dataToReturn);
		if (updated) {
			const newData = await setUsers(data);
			res.send(newData);
		}else {
            res.send("User not found");
        }
	})();
});
router.delete("/user/:id", (req, res) => {
	const { id } = req.params;
    (async () => {
		const users = await getUsers();
		const [deleted, data] = deleteUsersById(id,users);
		if (deleted) {
			const newData = await setUsers(data);
			res.send(newData);
		}else {
            res.send("User not found");
        }
	})();
});
router.get("/user/:id", (req, res) => {
	const { id } = req.params;
    (async () => {
        const dataToReturn = await getUsers();
        const foundUser = getUsersById(id, dataToReturn);
        if(foundUser) {
            res.send(foundUser);
        } else{
            res.send("User not found");
        }
    })();
});

export { app };
export const handler = serverless(app);
