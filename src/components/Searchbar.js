import React from "react";
import "./css/searchbar.css";
import SearchIcon from "@material-ui/icons/Search";
import { Form, FormControl } from "react-bootstrap";
//searchbar in header
function Searchbar() {
  return (
    <div class="container">
      <Form>
        <div id="searchBar">
          <SearchIcon
            className="icon"
            id="searchicon"
            style={{ fontSize: 27.1 }}
          />
          <FormControl
            type="text"
            id="searching"
            placeholder="Search for Clubs"
            className="form-center"
          />
        </div>
      </Form>
    </div>
  );
}

export default Searchbar;