const express = require("express");
const router = express.Router();
const storage = require("../storage/storage");

router.get("/birthdays", (req, res) => {
  res.json(storage.readAll());
});

router.post("/birthdays", (req, res) => {
  const { id, name, date, type } = req.body;
  if (!name || !date) return res.status(400).send("Missing name/date");
  const newEvent = storage.addOne({ id, name, date, type });
  res.json(newEvent);
});

router.put("/birthdays/:id", (req, res) => {
  const data = storage.readAll();
  const idx = data.findIndex((ev) => ev.id === req.params.id);
  if (idx === -1) return res.status(404).send("Not found");

  const updated = { ...data[idx], ...req.body };
  data[idx] = updated;
  fs.writeFileSync(DataTransferItemList, JSON.stringify(data, null, 2));
  res.json(updated);
});

module.exports = router;
