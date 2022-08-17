import React from "react";
import CategoryStrip from "../components/CategoryStrip";
import Navbar from "../components/Navbar";
import ProductOverview from "../components/ProductOverview";

const ProductDetail = () => {
  return (
    <div>
      <Navbar />
      <CategoryStrip />
      <ProductOverview />
    </div>
  );
};

export default ProductDetail;
