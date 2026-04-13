const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");
const verifyToken = require("../Middleware/verifyToken");
const authorizeRole = require("../Middleware/authorizeRole");

router.get("/", verifyToken, authorizeRole("admin"), userController.getAll);
router.get("/:id", verifyToken, authorizeRole("admin"), userController.getOne);
router.post("/", verifyToken, authorizeRole("admin"), userController.create);
router.put("/:id", verifyToken, authorizeRole("admin"), userController.update);
router.delete("/:id", verifyToken, authorizeRole("admin"), userController.delete);

module.exports = router;