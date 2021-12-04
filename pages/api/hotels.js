const { hotels } = require("../api/data.json");

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(hotels);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} not allowed.` });
  }
}

//inverted buttons to be added
