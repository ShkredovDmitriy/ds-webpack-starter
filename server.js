const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());
const port = 8081;

// TEST GET
app.get("/api/name", (request, response) => {
  const name = request.body.name;
  console.log(name);
  response.status(200).send({ result: true });
});

// TEST POST
app.post("/api/login", (request, response) => {
  const name = request.body.name;
  console.log(name);
  response.status(200).send({ result: true });
});

app.listen(port, () => {
  console.log("We are live on " + port);
});
