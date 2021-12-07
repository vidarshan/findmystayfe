export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://find-your-home.vercel.app"
    : "http://localhost:1337";
