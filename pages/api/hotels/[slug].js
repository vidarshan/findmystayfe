const { hotels } = require("../data.json");

export default function handler(req, res) {
  if (req.method === "GET") {
    const htl = hotels.filter((hotel) => hotel.slug === req.query.slug);
    res.status(200).json(htl);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} not allowed.` });
  }
}
