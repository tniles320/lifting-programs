const router = require("express").Router();
const programController = require("../../controllers/programController");

// finds all programs with url /api/programs
router.route("/").get(programController.findAll).post(programController.create);

// routes for /api/programs/:id
router
  .route("/:id")
  .get(programController.findById)
  .put(programController.update)
  .delete(programController.remove);

module.exports = router;
