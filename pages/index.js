import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ADDProduct } from "../store/action";
import Banner from "../components/Banner";
import CategoryStrip from "../components/CategoryStrip";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    const Products = localStorage.getItem("cardProducts");
    dispatch(ADDProduct(JSON.parse(Products)));
  }, []);
  return (
    <div>
      <Navbar />
      <CategoryStrip />
      <Banner />
      <ProductCard />
      <Footer />
    </div>
  );
}
