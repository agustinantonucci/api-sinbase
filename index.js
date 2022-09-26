const express = require("express");
const { getAll } = require("./controllers/medicoController.js");
const app = express();
// import {PORT} from './config.js';

app.use(express.json());

app.get("/", async function (request, response) {
  try {
    const [result] = await getAll();

    response.send({ success: true, result });
  } catch (error) {
    response.status(500).send({
      success: false,

      error: "Algo salió mal",
    });
  }
});

const port = 6331 || 5000;
app.listen(port, () => console.log(`Listening on Port: ${port}`));
