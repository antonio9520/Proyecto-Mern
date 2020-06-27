const express = require("express");
const auth = require("../middleware/auth");
const { check } = require("express-validator");
const tareaController = require("../controllers/tareaController");

const router = express.Router();

//crear una tarea
//api/tareas
router.post(
  "/",
  auth,
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("proyecto", "El proyecto es obligatorio").not().isEmpty(),
  ],
  tareaController.crearTarea
);

//Obtener las tareas por proyectos
router.get("/", auth, tareaController.obtenerTareas);

//actualizar tarea
router.put("/:id", auth, tareaController.actualizarTarea);

//eliminar tarea
router.delete("/:id", auth, tareaController.eliminarTarea);

module.exports = router;
