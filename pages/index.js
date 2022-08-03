import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

export default function Home() {
  const state = useSelector((state) => state);
  return (
    <div>
      <Navbar />
    </div>
  );
}
