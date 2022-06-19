const express = require("express");
const app = express();
const cors = require("cors");

const { MongoClient, ObjectId } = require("mongodb");

require("dotenv").config();

let db,
  dbConnectionStr = process.env.DB_URI,
  dbName = "sample_mflix",
  collection;
const PORT = process.env.PORT || 8000;

MongoClient.connect(dbConnectionStr).then((client) => {
  console.log(`connected to database`);
  db = client.db(dbName);
  collection = db.collection("movies");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
