import { useEffect } from "react";
import "./App.css";
import HeaderImg from "./components/HeaderImg";
import TextOfImg from "./components/TextOfImg";
import PreparationTime from "./components/PreparationTime";
import Ingredients from "./components/Ingredients";
import Instructions from "./components/Instructions";
import Nutrition from "./components/Nutrition";

function App() {
  useEffect(() => {
    return () => {
      alert("Welcome in Our Recipe Page");
    };
  }, []);
  return (
    <main className="main">
      <HeaderImg />
      <TextOfImg />
      <PreparationTime />
      <Ingredients />
      <Instructions />
      <Nutrition />
    </main>
  );
}

export default App;
