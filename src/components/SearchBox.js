import React from "react";
import "./searchbox.css";
const SearchBox = ({ searchchange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search robots"
        onChange={searchchange}
      />
    </div>
  );
};
export default SearchBox;
