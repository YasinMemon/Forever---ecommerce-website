require("dotenv").config();
const express = require("express");
const connectDB = require("./config/mongo.js");
const connectCloudinary = require("./config/cloudinary.js");
const userRouter = require("./routes/userRoute.js");
const productRouter = require("./routes/productRoutes.js");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 4000;
const multer = require("multer");
const cors = require("cors");

connectDB();
connectCloudinary();

app.use(
    cors({
      origin: "*", // Allows requests from any origin
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow specific HTTP methods
      allowedHeaders: ['Content-Type', 'Authorization'], // Allow certain headers
      preflightContinue: false,
      optionsSuccessStatus: 204
}));

app.options('*', cors()); // Preflight request for all routes
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/user", userRouter);
app.use("/api/products", productRouter);


app.get("/", (req, res) => {
  res.send("<h1> all set <h1/>");
});

app.listen(PORT, () => {
  console.log(`app listening on http://localhost:${PORT}/`);
});
