const express = require("express");
const router = express.Router();
const { insertBlog, getAllBlogs } = require("../controllers/blogController.js");

router.post("/blogs", insertBlog);
router.get("/blogs", getAllBlogs);

module.exports = router;
