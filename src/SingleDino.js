import React from "react";

const SingleDino = ({ dino }) => {
  return (
    <div className="single-dino">
      <h1>Dino name: {dino.name}</h1>
      <p>Dino name: {dino.name}</p>
      <h2>⚕️Health</h2>
      <p>Level 1: {dino.health.L1}</p>
      <p>Increase of health in the wild: {dino.health.W}</p>
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
    </div>
  );
};

export default SingleDino;
