const { TouristActivity, conn } = require("../../src/db.js");

describe("Gender model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("No se puede conectar a la base de datos:", err);
    })
  );
  describe("validar nombre Action", () => {
    it("debería funcionar cuando es un nombre válido", () => {
      TouristActivity.create({
        name: "Visitar Machu Pichu",
        difficulty: "2",
        duration: "1 horas",
        season: ["verano", "invierno"],
        countriesId: ["3"],
      });
    });
  });
});
