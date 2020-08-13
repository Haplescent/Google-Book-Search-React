const express = require("express");
const path = require("path");
const app = express();
const db = require(path.resolve(__dirname, "./models/index.js"));
const PORT = process.env.PORT || 8080;
var cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "./client/build")));
const apiRoutes = require(path.join(__dirname, "./routes/apiRoutes"));
app.use("/api", apiRoutes);
// const clientRoutes = require(path.join(__dirname, "./routes/clientRoutes.js"));
// app.use("/", clientRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on: http://localhost:${PORT}`);
  });
});
