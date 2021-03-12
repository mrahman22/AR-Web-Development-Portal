const express = require("express");
const apiRouter = require('./routers/api_router');
const bodyParser = require("body-parser")
const cors = require("cors");


const app = express();
app.use(cors());
app.use(bodyParser.json())



app.use("/api", apiRouter);


app.listen(3000, () => {
  console.log("listening on port 3000");
});

module.exports = app;