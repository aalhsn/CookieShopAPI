const express = require("express");
const router = express.Router();
module.exports = router;
let cookies = require("../cookies");

const {
    cookieCreate,
    cookieList,
    cookieDetail,
    cookieUpdate,
    cookieDelete
  } = require("../controllers/cookieController");


// Cookie Create
router.post("/", cookieCreate);
// Cookie List
router.get("/", cookieList);

router.use((req, res, next) => {
  console.log("I'm another middleware method");
  next();
});

// Cookie Detail
router.get("/:cookieId", cookieDetail);
//Cookie Update
router.put("/:cookieId", cookieUpdate);
 // Cookie Delete
router.delete("/:cookieId", cookieDelete);

