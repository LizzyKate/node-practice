const request = require("supertest");
const app = require("../../app");
describe("Test GET /launches", () => {
  test("It should respond with 200 success", async () => {
    const response = await request(app).get("/launches").expect(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe("Test POST /launch", () => {
  test("It should respond with 200 success", async () => {
    const response = await request(app)
      .post("/launches")
      .send({
        mission: "USS Enterprise",
        rocket: "NCC 1701-D ",
        destination: "Kepler-186 f",
        launchDate: "2022-10-01",
      })
      .expect(201);
    const requestDate = new Date(response.body.launchDate);
    const responseDate = new Date(response.body.launchDate);
    expect(requestDate).toEqual(responseDate);
    expect(response.body).toMatchObject({
      mission: "USS Enterprise",
      rocket: "NCC 1701-D ",
      destination: "Kepler-186 f",
      launchDate: "2022-10-01T00:00:00.000Z",
    });
  });

  test("It should catch missing required properties", async () => {
    const response = await request(app)
      .post("/launches")
      .send({
        mission: "USS Enterprise",
        destination: "Kepler-186 f",
        launchDate: "2022-10-01",
      })
      .expect(400);
    expect(response.body).toStrictEqual({
      error: "Missing required launch property",
    });
  });

  test("It should catch invalid data", async () => {
    const response = await request(app)
      .post("/launches")
      .send({
        mission: "USS Enterprise",
        rocket: "NCC 1701-D ",
        destination: "Kepler-186 f",
        launchDate: "invalid date",
      })
      .expect(400);
    expect(response.body).toStrictEqual({
      error: "Invalid launch date",
    });
  });
});
