const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 8080;

const app = express();
app.use(cors());

app.listen(port, () => console.log("Server running @: " + port));
