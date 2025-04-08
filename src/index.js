import express from "express";
import path from "path";

const app = express();
const PORT = 3000;
app.use(express.static(path.join(process.cwd(), "public")));

app.get("/api/profile", (req, res) => {
  console.log("API projects route hit");
  res.json({
    name: "John Doe",
    skills: ["JavaScript", "Node.js", "Express", "MongoDB"],
  });
});

app.get("/api/projects", (req, res) => {
  res.json([
    { name: "portfolio website", description: "My personal portfolio website" },
    {
      name: "todo app",
      description: "A simple todo list app built with Node.js",
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`sever is running on http://localhost:${PORT}`);
});
