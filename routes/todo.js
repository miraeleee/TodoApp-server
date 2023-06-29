const express = require("express");
const router = express.Router();
const controller = require("../controller/index");


router.get("/todos", controller.geTtodo);
router.post("/todo", controller.posttodo);
router.patch("/todo/:todoId", controller.patchtodo);
router.delete("/todo/:todoId", controller.deletetodo);

module.exports = router;
