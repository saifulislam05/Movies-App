import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Multiselect from "multiselect-react-dropdown";
import "./MultiSelectStyles.css";
import { setGenres, setSortBy } from "../../redux/features/filter/filterSlice";
import { sortOptions } from "./sortOptions";

const Filter = () => {
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const { genres } = useSelector((state) => state.genres);
  const dispatch = useDispatch();

  const handleMultiSelect = (list) => {
    dispatch(setGenres(list.map((item) => item.id))); 
  };

  const handleSort = (e) => {
    setSelectedSortOption(e.target.value);
    dispatch(setSortBy(e.target.value));
  };

  return (
    <div className="flex justify-between gap-8">
      <div>
        <Multiselect
          closeOnSelect={true}
          displayValue="name"
          onRemove={handleMultiSelect}
          onSelect={handleMultiSelect}
          options={genres}
          placeholder="Select genres"
          showArrow
        />
      </div>
      <div>
        <select
          className="select select-success w-full max-w-xs"
          onChange={handleSort}
          value={selectedSortOption}
        >
          <option value="" disabled>
            Sort By
          </option>
          {sortOptions.map((option) => (
            <option key={option.id} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
