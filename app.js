const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const data = require("./products.json");
// const updateData = require("./update_phone_products.json");
// app.use(express.urlencoded({extended:true}))
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));

// // Get product lists by GET method
app.get("/", (req, res) => {
  res.header("Content-Type", "application/json");
  res.status(200).send(JSON.stringify(data));
});

// // //Get product by id with GET method
app.get(`/products/:id`, (req, res) => {
  if (Number(req.params.id) >= data.length) {
    res.status(204).send("No Product in list");
  } else Number(req.params.id) === data[req.params.id].id;
  res.status(200).send(data[req.params.id]);
});
// //Post method
//The main objective of this method is to parse the incoming request with urlencoded payloads and is based upon the body-parser.
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

//PUT Method
// app.put('/')





//listen port section
app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Sever is starting at port ${port}`);
});

// app.post("/products", (req, res) => {
//   res.status(200).send(JSON.stringify(data));
// });

// app.put(`/products/`, (req, res) => {
//   res.status(200).send(JSON.stringify(updateData));
// });

// app.delete(`/delete`, (req, res) => {
//   res.status(204);
//   res.send("Products are deleted");
// });
