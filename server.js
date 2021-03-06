const express = require("express");
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);

let PORT = 8080;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
