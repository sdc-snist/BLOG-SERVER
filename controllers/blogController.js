const Blog = require("../models/Blog.js");

const insertBlog = async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    res.status(400).json({ message: "Invalid data", error: err.message });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Some error occurred", error: err.message });
  }
};

module.exports = {
  insertBlog,
  getAllBlogs,
};
