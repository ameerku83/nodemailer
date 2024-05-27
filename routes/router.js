const router=require("express").Router()

const emailSend = require("../controller/sendemail");
const asyncHandler = require("../utils/asynchandler");

router.post("/sendemail", asyncHandler(emailSend));

module.exports = router;
