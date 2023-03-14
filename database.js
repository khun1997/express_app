const { urlencoded } = require("body-parser");
const express = require("express");

const app = express();
const { Pool, Client } = require("pg");

app.use(express, urlencoded({ extended: true }));
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "8121997",
  port: 5432,
});

let products = pool.query("SELECT * from phone_products", (err, res) => {
  console.log("res", res);
  pool.end();
});
console.log('productssss',products);
app.get("/", (req, res) => {
  //   res.header("Content-Type", "application/json");
  res.status(200).send(products);
});
const port = pool.port;
app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Sever is starting at port ${port}`);
});

// const client = new Client({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'postgres',
//   password: '8121997',
//   port: 5432,
// })
// client.connect()

// client.query('SELECT email from person1', (err, res) => {
//     console.log('conn')
//   console.log(err, res)
//   client.end()
// })
// function After() {
//   return new Promise(() => {

//   });
// }
