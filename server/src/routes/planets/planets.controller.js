const planets = require("../../models/planets.modelå");

function getAllPlanets(req, res) {
  res.status(200).json(planets);
}

module.exports = {
  getAllPlanets,
};
