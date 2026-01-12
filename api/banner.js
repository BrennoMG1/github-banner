export default function handler(req, res) {
  const hour = new Date().getHours();

  const banner =
    hour >= 7 && hour < 19
      ? "https://raw.githubusercontent.com/BrennoMG1/BrennoMG1/main/assets/banner_day.png"
      : "https://raw.githubusercontent.com/BrennoMG1/BrennoMG1/main/assets/banner_night.png";

  res.redirect(banner);
}
