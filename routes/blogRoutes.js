const express = require("express");
const router = express.Router();

const {
  insertBlog,
  getAllBlogs,
  updateBlogByID,
  deleteBlogByID,
} = require("../controllers/blogController.js");

router.post("/blogs", insertBlog);

router.get("/blogs", getAllBlogs);

router.put("/blogs/:id", updateBlogByID);

router.delete("/blogs/:id", deleteBlogByID);

module.exports = router;
