require("dotenv-ts").config()

import cors from "cors"
import express  from "express"

const PORT = (process.env.PORT ? parseInt(process.env.PORT) : 3001)
const app = express()

app.use(cors());
app.use(express.json());

app.listen(
    PORT,
    "0.0.0.0",
    function () {
      console.log(`API Freelalink aberta na porta ${PORT}`);
    }
  );

  module.exports = app;