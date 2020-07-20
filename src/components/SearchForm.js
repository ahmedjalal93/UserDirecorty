import React from "react";

function SearchForm(props) {
  return (
      <div className="form-group">
      <br />
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For a User"
          id="search"
        />
        <br />
      </div>
  );
}

export default SearchForm;
