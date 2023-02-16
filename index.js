const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

// localhost ou 127.0.0.1
// const DB_URL = "mongodb://127.0.0.1:27017"
const DB_URL = "mongodb+srv://admin:nZYsHnbJCPs45bdE@cluster0.6nxmsr6.mongodb.net/?retryWrites=true&w=majority"
const DB_NAME = "ocean-fullstack"

async function main() {
  //Conexão com o banco de dado
  console.log("Conectando com o banco de dados. . .")
  const client = await MongoClient.connect(DB_URL)
  const db = client.db(DB_NAME)
  const collection = db.collection("itens")
  console.log('Conectado com o banco de dados')

  const app = express();

  // O que vier na requisição body, está em JSON
  app.use(express.json())

  // Endpoint / -> Hello World
  app.get("/", function (req, res) {
    res.send("Hello World");
  });

  // Endpoint / -> Olá, mundo!
  app.get("/oi", (req, res) => {
    res.send("Olá, mundo!")
  })

  // lista de informações
  const itens = ["Rick Sanchez", "Morty Smith", "Summer Smith"]

  // CRUD -> Lista de informações

  // Endpoint Read All -> [GET] /item
  app.get("/item", async (req, res) => {
    const documentos = await collection.find().toArray()
    res.send(documentos)
  })

  // Endpoint Read Single by ID -> [GET] /item/:id
  app.get("/item/:id", async (req, res) => {
    const id = req.params.id
    const item = await collection.findOne({ _id: new ObjectId(id)})
    res.send(item)
  })

  // Endpoint create -> [POST] /item
  app.post("/item", async (req, res) => {
    // console.log(req.body)
    const item = req.body
    await collection.insertOne(item)
    res.send(item)
  })

  // Endpoint Update -> [PUT] /item/:id
  app.put("/item/:id", async (req, res) => {
    const id = req.params.id
    const body = req.body
    await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: body }
    )

    res.send(body)
  })

  // Endpoint Delete  -> [DELETE] /item/:id
  //Exercício:
  // - pesuqisar sobre a operação de remover itens
  // - implementar o endpoint de delete
  // - realizar a operação de excluir item

  app.delete("/item/:id", async (req, res) => {
    const id = req.params.id

    await collection.deleteOne({ _id: new ObjectId(id) })

    res.send("Registro removido com sucesso!" + id)
  })


  console.log('server running!')
  app.listen(3000);
}

main()