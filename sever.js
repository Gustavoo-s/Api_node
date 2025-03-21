import express from "express";
import mongoose from "mongoose";
import User from "./models/User.js";

const app = express();
app.use(express.json());

app.post("/users", async (request, response) => {
  try {
    const user = await User.create(request.body);
    return response.status(201).json(user);
  } catch (error) {
    return response.status(400).json({ error: "Erro ao criar usuário" });
  }
});

app.get("/users", async (request, response) => {
  try {
    const users = await User.find();
    return response.status(200).json(users);
  } catch (error) {
    return response.status(500).json({ error: "Erro ao buscar usuários" });
  }
});

mongoose
  .connect(
    "mongodb+srv://gustavosantos:V4rXr8uWZgqHa8rW@teste1.gufqw.mongodb.net/?retryWrites=true&w=majority&appName=Teste1"
  )
  .then(() => console.log("Banco de dados conectado"))
  .catch(() => console.log("Deu ruim na conexão"));

app.listen(4000);
