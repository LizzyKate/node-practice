const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://Lizzy:1234567890@cluster0.pgusj.mongodb.net/nasa?retryWrites=true&w=majority&appName=Cluster0";

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

module.exports = { mongoConnect };
