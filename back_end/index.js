const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const knex = require("knex");
const bodyParser = require("body-parser");
const app = express();
const port = 3333;
const jwt = require("jsonwebtoken");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.get("/teste", (req, res, next) => {
  knex({
    client: "mysql2",
    connection: {
      host: "localhost",
      user: "root",
      password: "1234",
      database: "teste",
    },
  })
    .raw("SELECT * FROM teste.new_table")
    .then((data) => {
      res.json(data[0]);
    })
    .catch(console.log);
});
app.post("/cadastro", (req, res, next) => {
  knex({
    client: "mysql2",
    connection: {
      host: "localhost",
      user: "root",
      password: "1234",
      database: "teste",
    },
  })("new_table")
    .insert(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch(console.log);
});

app.put("/edit/:id", (req, res, next) => {
  console.log("");
  const { id } = req.params;
  knex({
    client: "mysql2",
    connection: {
      host: "localhost",
      user: "root",
      password: "1234",
      database: "teste",
    },
  })("new_table")
    .update(req.body)
    .where({ id })
    .then((data) => {
      res.json(data);
    })
    .catch(console.log);
});

app.delete("/delete/:id", (req, res, next) => {
  const { id } = req.params;
  knex({
    client: "mysql2",
    connection: {
      host: "localhost",
      user: "root",
      password: "1234",
      database: "teste",
    },
  })("new_table")
    .where({ id })
    .delete()
    .then((data) => {
      res.json(data);
    })
    .catch(console.log);
});

app.post("/login", (req, res, next) => {
  const { name, password } = req.body;
  knex({
    client: "mysql2",
    connection: {
      host: "localhost",
      user: "root",
      password: "1234",
      database: "teste",
    },
  })("user")
    .where({ name })
    .andWhere({ password })
    .first()
    .then((data) => {
      data
        ? res.json(
            jwt.sign({ id: data.id, sub: data.name, iss: "server" }, "{1234}")
          )
        : res.status(403).json({ msg: "Dados invalidos" });
    })
    .catch(console.log);
});

app.listen(port, () => console.log(`rodando na porta ${port}`));
