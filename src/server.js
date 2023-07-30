const express = require('express');
//import UserController from './controller/UserController';
const server = express();

server.use(express.json());

const users = ['']

server.post("/cadastro", (req,res) => {

  const { name } = req.body;
  users.push(name);
  console.log(name);
  return res.json(name);

});

server.get("/listar", (req,res) => {

  return res.json(users);

});

server.put("/atualizar/:index", (req,res) => {

  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;
  console.log(name);
  return res.json(users);

});

server.delete("/excluir/:index", (req,res) => {

  const { index } = req.params;

  users.slice(index);
  console.log(index);
  return res.json(users);

});

server.listen(3333);