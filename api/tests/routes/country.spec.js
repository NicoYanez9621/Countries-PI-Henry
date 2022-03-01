/* eslint-disable import/no-extraneous-dependencies */

const session = require("supertest-session");
const app = require("../../src/app.js");
const { conn } = require("../../src/db.js");

const agent = session(app);

describe("Country routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("GET /countries", () => {
    it("should get 200", () => agent.get("/countries").expect(200));
  });

  describe("GET /countries/id", () => {
    it("should get 200", () => agent.get("/countries/1").expect(200));
  });

  describe("GET /countries/id", () => {
    it("should get 404", () => agent.get("/countries/300").expect(404));
  });

  describe("GET /countries?name=nameCountry", () => {
    it("should get 200", () => agent.get("/countries?name=peru").expect(200));
  });
});
