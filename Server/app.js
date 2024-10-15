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
const OrderRouter = require("./routes/OrderRoute.js");

connectDB();
connectCloudinary();

app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/user", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", OrderRouter);

app.get("/", (req, res) => {
  res.send("<h1> all set <h1/>");
});

app.listen(PORT, () => {
  console.log(`app listening on http://localhost:${PORT}/`);
});
