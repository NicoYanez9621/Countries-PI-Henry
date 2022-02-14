const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const get_Countries = require("./GET/get_Countries");
const get_Countries_idCountry = require("./GET/get_Countries_idCountry");
const get_Countries_nameCountry = require("./GET/get_Countries_nameCountry");
const post_Activity = require("./POST/post_Activity");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//router.use(Router.json());
router.get("/", (req, res) => {
  res.status(200).json({ msg: "Funcionando perfecto" });
});
router.get("/countries", get_Countries);
router.get("/countries/:idCountry", get_Countries_idCountry);
router.get("/countries?name=nameCountry", get_Countries_nameCountry);
router.post("/activity", post_Activity);

module.exports = router;
