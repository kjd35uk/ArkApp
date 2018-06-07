import React from "react";

const DinoDisplay = ({ dino }) => {
  return (
    <div className = "dino-container">
          <h2 className="dino-title">{dino.name}</h2>
            <p>dino species: {dino.species}</p>
            <p>dino name: {dino.name}</p>
            <div className="dino-image"
        style={{
          backgroundImage: `url(${dino.imageURL})`,
          backgroundSize: 'cover',
          height: '35rem'
        }}
         />
    </div>
  );
};

export default DinoDisplay;

{/* <p>{dino.health.L1}</p>
            <p>{dino.health.W}</p>
            <p>{dino.health.T}</p>
            <p>{dino.stamina.L1}</p>
            <p>{dino.stamina.W}</p>
            <p>{dino.stamina.T}</p>
            <p>{dino.oxygen.L1}</p>
            <p>{dino.oxygen.W}</p>
            <p>{dino.oxygen.T}</p>
            <p>{dino.food.L1}</p>
            <p>{dino.food.W}</p>
            <p>{dino.food.T}</p>
            <p>{dino.weight.L1}</p>
            <p>{dino.weight.W}</p>
            <p>{dino.weight.T}</p>
            <p>{dino.imageURL}</p> */}