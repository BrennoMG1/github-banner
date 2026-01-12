import { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  const hour = new Date().getHours();

  const banner =
    hour >= 7 && hour < 19
      ? "https://raw.githubusercontent.com/BrennoMG1/BrennoMG1/main/assets/banner_day.png"
      : "https://raw.githubusercontent.com/BrennoMG1/BrennoMG1/main/assets/banner_night.png";

  res.redirect(banner);
}

