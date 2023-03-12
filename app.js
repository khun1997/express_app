const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const products = require("./products.json");
// const updateData = require("./update_phone_products.json");
// app.use(express.urlencoded({extended:true}))
// app.use(express.static("public"));
// app.use(express.static("/delete.html"));

app.use(bodyParser.urlencoded({ extended: true }));
// // Get product lists by GET method
app.get("/", (req, res) => {
  res.header("Content-Type", "application/json");
  res.status(200).send(JSON.stringify(products));
});

// // // //Get product by id with GET method
app.get(`/products/:id`, (req, res) => {
  if (Number(req.params.id) >= products.length) {
    res.status(404).send("<h1> No product in list </h1");
  } else Number(req.params.id) === products[req.params.id].id;
  res.status(200).send(products[req.params.id]);
});

// //Post method
// The main objective of this method is to parse the incoming request with urlencoded payloads and is based upon the body-parser.
app.post("/product", (req, res) => {
  const newProduct = JSON.stringify({
    id: req.body.newId,
    name: req.body.newName,
    image: req.body.newImage,
    rom: req.body.newRom,
    price: req.body.newPrice,
  });
  res.status(200).send(`${newProduct}`);
});

//PUT method
app.put("/products/:id", (req, res) => {
  const productId = Number(req.params.id);
  const product = products.find((product) => product.id === productId);
  if (!product) {
    res.status(200).send("<h1>New product is added</h1>");
  } else {
    res.status(409).send("<h1>Product is already have!</h1>");
  }
});

//Delete Method
app.delete("/products/:id", (req, res) => {
  const productId = Number(req.params.id);
  const newProduct = products.filter((product) => product.id !== productId);
  if (!newProduct) {
    res.status(404).send("<h1>Product is not in list</h1>");
  } else {
    res.status(200).send(newProduct);
  }
});

//listen port section
app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Sever is starting at port ${port}`);
});
