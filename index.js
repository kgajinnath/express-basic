const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("It worked and my Name is Ajin!");
});

app.listen(3000);
