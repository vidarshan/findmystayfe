export default function handler(req, res) {
  try {
    const hotels = require("../api/data.json");
    res.status(200).json(hotels);
  } catch (err) {
    res.status(400).json({ message: "An error occurred" });
  }
}

//inverted buttons to be added
