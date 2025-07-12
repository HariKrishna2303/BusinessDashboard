const express = require("express");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: ["https://business-dashboard-iota.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const sampleHeadlines = [
  "Why {{name}} is {{location}}'s Favorite Local Gem",
  "Discover the Magic of {{name}} in {{location}}",
  "{{name}}: Redefining Excellence in {{location}}",
  "Why {{name}} Is {{location}}’s Sweetest Destination in 2025",
  "{{location}} Locals Love {{name}} — Here’s Why",
  "Top-Rated Cakes in {{location}}? Visit ${{name}}",
  "Explore {{name}}: {{location}}'s Hidden Gem for Desserts",
  "How {{name}} Became {{location}}'s Most Loved Cake Shop",
  "{{name}}: Setting the Standard for Bakeries in {{location}}",
  "The Story Behind {{location}}’s Most Trusted Dessert Spot — {{name}}",
  "Fall in Love With Every Bite at {{name}}, {{location}}",
  "Cravings Solved: {{location}}'s Most Addictive Cakes Live at {{name}}",
  "Experience Dessert Like Never Before at {{name}}, {{location}}",
  "Best Cakes in ${{location}} – Try {{name}} Today",
  "Top-Rated Cake Shop Near You – Visit {{name}}, {{location}}",
  "{{location}} Bakery with 100+ 5-Star Reviews – {{name}}",
  "Visit {{name}} in {{location}} – Where Every Slice Tells a Story",
  "Looking for the Best Cake in {{location}}? Try {{name}} Now!",
  "Desserts That Delight – Only at {{name}}, {{location}}",
  "{{name}} Is the Talk of {{location}} This Festive Season",
  "Viral Cakes in {{location}}? You’ll Find Them at {{name}}",
  "Join the Dessert Trend at {{location}}’s Favorite — {{name}}",
  "Why {{name}} Has Over 100 Five-Star Reviews in {{location}}",
  "What Makes {{name}} a Customer Favorite in {{location}}",
  "{{name}} in {{location}} — 4.8★ Rated and Rising!",
];

function generateHeadline(name, location) {
  const template =
    sampleHeadlines[Math.floor(Math.random() * sampleHeadlines.length)];
  return template.replace("{{name}}", name).replace("{{location}}", location);
}

app.post("/business-data", (req, res) => {
  const { name, location } = req.body;
  console.log("running");
  res.json({
    name,
    location,
    rating: (Math.random() * 1 + 4).toFixed(1),
    reviews: Math.floor(Math.random() * 500 + 20),
    headline: generateHeadline(name, location),
  });
});

app.get("/regenerate-headline", (req, res) => {
  const { name, location } = req.query;
  res.json({ headline: generateHeadline(name, location) });
});
