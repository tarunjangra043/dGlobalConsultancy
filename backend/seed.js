const mongoose = require("mongoose");
const { productModel } = require("./models/productModel.js"); // Import the Product model
require("dotenv").config(); // Load environment variables

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

const connectDB = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected for seeding.");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

// Sample product data
const seedProducts = async () => {
  const products = [
    {
      title: "Product 1",
      description: "Description for Product 1",
      price: 29.99,
      basePrice: 25.99,
      image:
        "https://imgs.search.brave.com/Shq7xH37sb1IC_m1w9xxsrww0hE7toQWnbcbTszmRis/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ3/NjYxNjYxNy9waG90/by93aXJlbGVzcy1p/bnRlcm5ldC1yb3V0/ZXItb24tYmx1ZS1i/YWNrZHJvcC0zZC1y/ZW5kZXJpbmcuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPXZM/V0NtS1lwVlg0eFV0/WllKQUc4dkU2Z1ND/eGJVYXoxQ2tzaEVs/bU9zNlE9",
    },
    {
      title: "Product 2",
      description: "Description for Product 2",
      price: 39.99,
      basePrice: 35.99,
      image:
        "https://imgs.search.brave.com/aiUmrBVQk3_XSYsQeMlpwMoaAAvWODXodESVBHS4JLo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM2/NTc2NTQxMi9waG90/by9taW5pbWFsLW1v/ZGVybi0zZC1yb3V0/ZXItd2l0aC13aS1m/aS1zeW1ib2wuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPS02/eEdIVWFBSlBZUDFF/c3djaks5ZnNpS2tB/NjBJYU84R25hZ1dY/SkFwUm89",
    },
    {
      title: "Product 3",
      description: "Description for Product 3",
      price: 49.99,
      basePrice: 45.99,
      image:
        "https://imgs.search.brave.com/hKx9JjPI75cicMXiZYHnpvP73g98tMZYG5cEbgw5cU4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/NjExNDk4L3Bob3Rv/L2ludGVybmV0LWNv/bm5lY3Rpb24td2l0/aC1yb3V0ZXIuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUFW/MlhBOU9Ca3VzY2JG/WlRKR2N6MDFBMDRn/S205VllIWEw4cTdv/Y19vSFE9",
    },
  ];

  try {
    await productModel.deleteMany(); // Clear existing data
    await productModel.insertMany(products); // Insert sample data
    console.log("Products seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("Error seeding products:", error.message);
    process.exit(1);
  }
};

// Seed the database
connectDB().then(seedProducts);
