import React from "react";

const SearchBox = ({handleChange, dinos}) => {
 
    const options = dinos.map(dino => dino.name);

    return (
      <div className="searchbox-container">
      <select className = 'select-button' onChange={handleChange}>
        <option font='Amatic SC'value="">Select your creature here</option>
        {options.map((dino, i) => (
          <option key={i} font='Amatic SC' value={dino}>
            {dino}
          </option>
        ))}
      </select>
    </div>
    );

}

export default SearchBox;
