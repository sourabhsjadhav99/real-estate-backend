const mongoose = require("mongoose");
let url = "mongodb://localhost:27017/RealEstateCatalog";
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.log(`Error connecting to the database. n${err}`);
  });
