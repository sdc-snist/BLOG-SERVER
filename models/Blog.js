const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  name: String,
  email: String,
  content: String,
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
