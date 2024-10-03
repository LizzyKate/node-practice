const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: "kepler exploration x",
  rocket: "explorer is1",
  launchDate: new Date("December 27, 2030"),
  destination: "Kepler-442 b",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  sucess: true,
};

launches.set(launch.flightNumber, launch);

module.exports = {
  launches,
};
