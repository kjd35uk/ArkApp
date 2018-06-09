import React from "react";

const SearchBox = ({handleChange}) => {
 
    const options = ['Achatina', 'Allosaurus', 'Alpha Basilisk', 'Alpha Carnotaurus', 'Alpha Deathworm', 'Alpha Fire Wyvern', 'Alpha Karkinos', 'Alpha Leedsichthys', 'Alpha Megalodon'];

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
