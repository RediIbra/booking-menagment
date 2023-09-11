import React, { useState, useEffect } from "react";
import TextField from "../genericTextField/TextField";
import axios from "axios";

import { Select, Option } from "./SearchDropdown.style.js";
function SearchDropdown(props) {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  console.log(items);
  console.log("search", searchTerm);
  const getItems = async () => {
    try {
      const response = await axios.get(props.api, {
        headers: {
          Authorization: `Bearer ${props.token}`,
        },
      });

      setItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getItems();
  }, []);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    props.getValue(event.target.value.toLowerCase());
  };

  const filteredItems = items?.filter(
    (item) =>
      item.listing?.toLowerCase().includes(searchTerm) ??
      item.source?.toLowerCase().includes(searchTerm)
  );
  const handleSelectItem = (selectedValue) => {
    setSearchTerm(selectedValue);
    setShowDropdown(false);
    props.getValue(searchTerm);
  };
  const selectSize =
    filteredItems.length === 1
      ? filteredItems.length
      : filteredItems.length / 2;

  return (
    <div>
      <h1>{showDropdown}</h1>
      <TextField
        id="searchInput"
        type="text"
        placeholder="Search"
        onFocus={() => setShowDropdown(true)}
        // onBlur={() => setShowDropdown(false)}
        onChange={handleSearchTermChange}
        value={[searchTerm]}
      />

      {searchTerm.length === 0 ? (
        <div></div>
      ) : (
        showDropdown && (
          <Select
            size={selectSize}
            onChange={handleSearchTermChange}
            value={[searchTerm]}
            multiple
          >
            {filteredItems.length > 0 ? (
              filteredItems.map((result) => (
                <Option
                  key={result.id}
                  value={result.listing || result.source}
                  onClick={() =>
                    handleSelectItem(result.listing || result.source)
                  }
                >
                  {result.listing || result.source}
                </Option>
              ))
            ) : (
              <option disabled>No results found</option>
            )}
          </Select>
        )
      )}
    </div>
  );
}
export default SearchDropdown;
