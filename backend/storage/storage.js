const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const dataFile = path.join(__dirname, "../data/data.json");

function readAll() {
  try {
    const raw = fs.readFileSync(dataFile);
    return JSON.parse(raw);
  } catch (err) {
    return [];
  }
}

function addOne(event) {
  const data = readAll();
  const newEvent = { id: uuidv4(), ...event };
  data.push(newEvent);
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
  console.log(event);
  return newEvent;
}

module.exports = { readAll, addOne };
