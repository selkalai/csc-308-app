import express from "express";
import cors from "cors";
import userServices from "./user-services.js";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/users", (req, res) => {
	const name = req.query.name;
	const job = req.query.job;

	userServices
		.getUsers(name, job)
		.then((users) => {
			res.send({ users_list: users });
		})
		.catch(() => {
			res.status(500).send("Database error.");
		});
});

app.get("/users/:id", (req, res) => {
	const id = req.params.id;

	userServices
		.findUserById(id)
		.then((user) => {
			if (user === null) {
				res.status(404).send("Resource not found.");
			} else {
				res.send(user);
			}
		})
		.catch(() => {
			res.status(500).send("Database error.");
		});
});

app.post("/users", (req, res) => {
	userServices
		.addUser(req.body)
		.then((newUser) => {
			res.status(201).send(newUser);
		})
		.catch(() => {
			res.status(500).send("Database error.");
		});
});

app.delete("/users/:id", (req, res) => {
	const id = req.params.id;

	userServices
		.deleteUserById(id)
		.then((deletedUser) => {
			if (deletedUser === null) {
				res.status(404).send("Resource not found.");
			} else {
				res.status(204).send();
			}
		})
		.catch(() => {
			res.status(500).send("Database error.");
		});
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});