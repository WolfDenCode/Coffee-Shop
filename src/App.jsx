import { useState } from "react";
import "./App.css";

import Hero from "./components/Hero";
import heroImage from "./assets/images/hero.jpg";
import Process from "./components/Process";
import order from "./assets/images/order.jpg";
import wait from "./assets/images/wait.jpg";
import enjoy from "./assets/images/enjoy.jpg";
function App() {
  const cardData = [
    {
      title: "Act",
      description: "Choose the plan that works best for you.",
      imageSrc: order,
    },
    {
      title: "Wait",
      description: "We are selecting the best coffee for you.",
      imageSrc: wait,
    },
    {
      title: "Enjoy",
      description: "Have coffee delivered right to your doorstep.",
      imageSrc: enjoy,
    },
  ];
  return (
    <>
      <Hero
        title={"HAND-SELECTED COFFEE"}
        subTitle={"DELIVERED TO YOUR DOOR MONTHLY"}
        description={"Have a look at our selection"}
        btnText={"Start Now"}
        bgSrc={heroImage}
      ></Hero>
      <Process title={"Our Process"} cardData={cardData}></Process>
    </>
  );
}

export default App;
