const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const dataPath = path.join(__dirname, "..", "data", "videos.json");

const readVideos = () => {
  try {
    const raw = fs.readFileSync(dataPath);
    return JSON.parse(raw);
  } catch {
    return [];
  }
};

const writeVideos = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

router.get("/", (req, res) => {
  res.json(readVideos());
});

router.post("/", (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).send("Missing video id");
  const data = readVideos();
  const newEntry = { id };
  data.push(newEntry);
  writeVideos(data);
  res.json(newEntry);
});

module.exports = router;
