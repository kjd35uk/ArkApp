import React from "react";

const Dinos = ({ dinos }) => {
  return (
    <div className="dino-container">
      {dinos.map(dino => {
        return (
          <div className = 'dino-unit'>
            <div><h3>{dino.name}</h3></div>
            <div><img alt="dinosaur" className = 'dino-image' src={require(`./public/images/${dino.name}.jpg`)} /></div>
          </div>
        );
      })}
    </div>
  );
};

export default Dinos;
