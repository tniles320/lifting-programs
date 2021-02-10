const router = require("express").Router();
const programRoutes = require("./program");

// User routes
router.use("/programs", programRoutes);
module.exports = router;
