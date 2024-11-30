const http = require("http");
const mongoose = require("mongoose");
const app = require("./app");
const { loadPlanetsData } = require("./models/planets.model.js");
const PORT = process.env.PORT || 8000;
const MONGO_URL =
  "mongodb+srv://Lizzy:1234567890@cluster0.pgusj.mongodb.net/nasa?retryWrites=true&w=majority&appName=Cluster0";
const server = http.createServer(app);

async function startServer() {
  await mongoose.connect(MONGO_URL);
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();
