import React from "react";

const Process = ({ title, cardData }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-white">
      <h1 className="my-10 text-4xl font-bold text-black">{title}</h1>
      <div className="flex justify-evenly items-center flex-col md:flex-row">
        {cardData.map((card, i) => (
          <div
            key={i}
            className="flex flex-col justify-center items-center gap-5 mx-8 "
          >
            <img className="w-full " src={card.imageSrc} alt={card.title} />
            <h2 className="text-2xl font-semibold">{card.title}</h2>
            <p className="text-center font-light text-lg mb-10">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
