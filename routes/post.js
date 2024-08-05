const express = require("express")
const router = express.Router();

const postControllers = require("../controllers/post")

router.post("/post", postControllers.createPost);
router.get("/posts", postControllers.getPosts);

module.exports = router