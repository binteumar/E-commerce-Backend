const express = require("express");
const router = express.Router();
const employeeController = require("../controller/employeeController.js");

router.post("/", employeeController.create);
router.get("/", employeeController.getAll);
router.get("/:id", employeeController.getOne);
router.put("/:id", employeeController.update);
router.delete("/:id", employeeController.delete);

module.exports = router;
