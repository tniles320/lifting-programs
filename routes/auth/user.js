const router = require("express").Router();
const userController = require("../../controllers/userController");

// routes for /api/user/:id
router
  .route("/:id")
  .get(userController.findById)
  .get(userController.login)
  .post(userController.register)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
