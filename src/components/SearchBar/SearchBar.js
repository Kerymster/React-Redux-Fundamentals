import React from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";

const SearchBar = () => {
  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="I'm looking for..."
          aria-label="search"
          aria-describedby="basic-addon2"
        />
        <Button variant="dark" id="button-addon2">
          Find It
        </Button>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
