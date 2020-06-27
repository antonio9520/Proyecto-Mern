//rutas para authenticar usuarios
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const authController = require("../controllers/authController");
const auth = require("../middleware/auth");

//iniciar sesion
//api/auth
router.post(
  "/",

  authController.autenticarUsuario
);

//obtiene al usuario autenticado
router.get("/", auth, authController.usuarioAutenticado);
module.exports = router;
