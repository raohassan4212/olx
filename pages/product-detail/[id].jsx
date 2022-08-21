import React from "react";
import CategoryStrip from "../../components/CategoryStrip";
import Navbar from "../../components/Navbar";
import ProductOverview from "../../components/ProductOverview";
import Footer from "../../components/Footer";

const ProductDetail = () => {
  return (
    <div>
      <Navbar />
      <CategoryStrip />
      <ProductOverview />
      <Footer />
    </div>
  );
};

export default ProductDetail;
