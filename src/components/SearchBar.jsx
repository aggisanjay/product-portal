

import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

const SearchBar = ({ search, setSearch }) => {
  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Search Product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchBar;
