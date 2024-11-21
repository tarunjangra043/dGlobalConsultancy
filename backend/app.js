const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { productRoute } = require("./routes/productRoute");

const app = express();

// Middleware
app.use(cors({ origin: 'https://d-global-consultancy.vercel.app' }));
app.use(bodyParser.json());

// Routes
app.use("/api", productRoute);

module.exports = app;
