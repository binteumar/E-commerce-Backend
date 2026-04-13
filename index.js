const express = require("express");
const connectDB = require("./config/db.js");
const cors = require("cors");
require("dotenv").config();
const app = express();
// Middleware
app.use(express.json());
app.use(cors())

connectDB();

app.use('/uploads', express.static('uploads'));

// Test API
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend + Database connected 🚀" });
});

// References
const userRoutes = require("./routes/userRoutes.js");
const brandRoutes = require("./routes/brandRoutes.js")
const cartRoutes = require("./routes/cartRoutes.js")
const categoryRoutes = require("./routes/categoryRoutes.js")
const customerRoutes = require("./routes/customerRoutes.js")
const employeeRoutes = require("./routes/employeeRoutes.js")
const orderRoutes = require("./routes/orderRoutes.js")
const paymentMethodsRoutes = require("./routes/paymentMethodRoutes.js")
const paymentRoutes = require("./routes/paymentRoutes.js")
const productRoutes = require("./routes/productRoutes.js")
// const reviewRoutes = require("./routes/reviewRoutes.js")
const subCategoryRoutes = require("./routes/subCategory.js")
const authRoutes = require("./routes/authRoutes.js");



// Routes
app.use("/api/users", userRoutes);
app.use("/api/brands",brandRoutes);
app.use("/api/carts",cartRoutes);
app.use("/api/categories",categoryRoutes);
app.use("/api/customers",customerRoutes)
app.use("/api/employees",employeeRoutes)
app.use("/api/orders",orderRoutes)
app.use("/api/methods",paymentMethodsRoutes)
app.use("/api/payments",paymentRoutes)
app.use("/api/products",productRoutes)
// app.use("/api/reviews",reviewRoutes)
app.use("/api/subCategory",subCategoryRoutes)
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
