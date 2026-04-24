require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", require("./routes/brandRoutes"));
app.get("/", async (req, res) => {
  const Brand = require("./models/Brand");
  const brands = await Brand.find().sort({ createdAt: -1 });

  let html = "<h1>Brands List</h1>";

  brands.forEach(b => {
    html += `
      <div style="border:1px solid #ccc; padding:10px; margin:10px;">
        <h2>${b.brand_name}</h2>
        <p><b>Founder:</b> ${b.founder_name}</p>
        <p><b>Category:</b> ${b.category}</p>
        <p><b>Revenue:</b> ₹${b.monthly_revenue}</p>
        <p><b>Status:</b> ${b.status}</p>
      </div>
    `;
  });

  res.send(html);
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});