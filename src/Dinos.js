import React from "react";

const Dinos = ({ dinos }) => {
  return (
    <div className="dino-container">
      {dinos.map(dino => {
        return (
          <div className = 'dino-unit'>
            <div><h2>{dino.name}</h2></div>
            <div><img className = 'dino-image' src={require(`./public/images/${dino.name}.jpg`)} /></div>
          </div>
        );
      })}
    </div>
  );
};

export default Dinos;
