const session = require("supertest-session");
const app = require("../../src/app.js");
const { TouristActivity, conn } = require("../../src/db.js");

const agent = session(app);
describe("Activity routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("No se puede conectar a la base de datos:", err);
    })
  );

  describe("GET /activity", () => {
    it("debería obtener 200", () => agent.get("/activity").expect(200));
  });
});
