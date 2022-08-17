import { useSelector } from "react-redux";
import Banner from "../components/Banner";
import CategoryStrip from "../components/CategoryStrip";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const state = useSelector((state) => state);
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
