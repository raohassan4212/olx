import React, {useEffect} from "react";
import CategoryStrip from "../../components/CategoryStrip";
import Navbar from "../../components/Navbar";
import ProductOverview from "../../components/ProductOverview";
import Footer from "../../components/Footer";
import { useDispatch } from "react-redux";
import { ADDProduct } from "../../store/action";

const ProductDetail = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const Products = localStorage.getItem("cardProducts");
    dispatch(ADDProduct(JSON.parse(Products)));
  }, []);
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
