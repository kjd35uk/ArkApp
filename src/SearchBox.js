import React from "react";

const SearchBox = ({handleChange, dinos}) => {
 
    const options = dinos.map(dino => dino.name);

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
