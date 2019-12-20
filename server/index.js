const massive = require("massive");
require("dotenv").config();
const express = require("express");
const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;
const ctrl = require("./controller");

app.use(express.json());

app.get('/api/inventory', ctrl.getProducts)
app.post('/api/inventory', ctrl.postProduct)
app.delete('/api/inventory/:id', ctrl.deleteProduct)
app.put('/api/inventory/:id', ctrl.updateProduct)

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  app.listen(SERVER_PORT, () =>
    console.log(`listening on server port ${SERVER_PORT}`)
  );
});
