import React, { useEffect, useState } from "react";
import Card from "../Cards/Card";
import { toast } from "react-toastify";

const ProductContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dglobalconsultancy.onrender.com/api", { mode: 'no-cors' })
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched products:", data);
        setProducts(data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const handlePurchase = (productId, email, days) => {
    fetch("https://dglobalconsultancy.onrender.com/api/purchase", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, email, days }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to purchase");
        return res.json();
      })
      .then((data) => {
        console.log("Purchase response:", data);
        setProducts((prev) =>
          prev.map((p) => (p._id === productId ? data.product : p))
        );
      })
      .catch((err) => {
        console.error("Purchase error:", err);
        toast.error("An error occurred during purchase.");
      });
  };

  const handleRenew = (productId, days) => {
    fetch("https://dglobalconsultancy.onrender.com/api/renew", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, days }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to renew");
        return res.json();
      })
      .then((data) => {
        console.log("Renew response:", data);
        setProducts((prev) =>
          prev.map((p) => (p._id === productId ? data.product : p))
        );
      })
      .catch((err) => {
        console.error("Renew error:", err);
        toast.error("An error occurred during renewal.");
      });
  };

  return (
    <div className="product-container">
      {products.map((product) => (
        <Card
          key={product._id}
          product={product}
          onPurchase={handlePurchase}
          onRenew={handleRenew}
        />
      ))}
    </div>
  );
};

export default ProductContainer;
