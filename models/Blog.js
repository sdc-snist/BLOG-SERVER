const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  name: String,
  email: String,
  blogNumber: {
    type: Number,
    unique: true,
  },
  content: String,
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
