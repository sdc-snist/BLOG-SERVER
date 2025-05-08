const express = require("express");
const connectDB = require("./config/db.js");
const blogRoutes = require("./routes/blogRoutes.js");

const app = express();

app.use(express.json());
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError) {
    return res.status(400).json({ message: "Invalid JSON format" });
  }
  next();
});

connectDB();

app.use("/api", blogRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
