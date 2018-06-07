import React from "react";

function SearchBox ({handleChange}) {
 
    const options = ['Amphibians', 'Birds', 'Dinosaurs', 'Fish', 'Invertibrates', 'Mammals', 'Reptiles', 'Synapsids', 'Bobby'];

    return (
      <div className="searchbox-container">
      <select onChange={handleChange}>
        <option font='Amatic SC'value="">Select your dino here</option>
        {options.map((dino, i) => (
          <option key={i} value={dino}>
            {dino}
          </option>
        ))}
      </select>
    </div>
    );

}

export default SearchBox;
