import fs from "fs";
import path from "path";

const filePath = path.resolve(".", "public/ogIMG.png");
const imageBuffer = fs.readFileSync(filePath);

export default function OgImage(req, res) {
  res.setHeader("Content-Type", "image/png");
  res.send(imageBuffer);
}
