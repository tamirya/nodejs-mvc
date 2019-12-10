const express = require("express");
const app = express();
const logger = require("./middleware/logeer");
const routers = require("./routes/router");

// work for every req
app.use(logger);

app.use(routers);
app.listen(3000);
