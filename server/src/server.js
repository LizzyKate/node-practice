const http = require("http");
const app = require("./app");
const { loadPlanetsData } = require("./models/planets.model.js");
const { mongoConnect } = require("./services/mongo.js");
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();
