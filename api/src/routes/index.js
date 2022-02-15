const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const get_Countries = require("./GET/get_Countries");
const get_Countries_idCountry = require("./GET/get_Countries_idCountry");
const post_Activity = require("./POST/post_Activity");
const get_Activity = require("./GET/get_Activity");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//router.use(Router.json());
router.get("/", (req, res) => {
  res.status(200).json({ msg: "Funcionando." });
});

router.get("/countries", get_Countries);

router.get("/countries/:idCountry", get_Countries_idCountry);

router.get("/countries?name=nameCountry", get_Countries);

router.get("/activity", get_Activity);

router.post("/activity", post_Activity);

module.exports = router;
