import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import MultiSelector from './MultiSelector';
import { sortOptions } from "./sortOptions";

import Multiselect from "multiselect-react-dropdown";
import "./MultiSelectStyles.css";
import { useDispatch } from "react-redux";
import { setGenres, setSortBy } from "../../redux/features/filter/filterSlice";

const Filter = () => {
  // const [selectedOptions, setSelectedOptions] = useState();
  const { genres } = useSelector((state) => state.genres);
  const dispatch = useDispatch();

  // useEffect(() => {
  const handleMultiSelect = (list) => {
    
    dispatch(setGenres(list));
  }
  
  // }, [selectedOptions, dispatch]);

  const handleSort = (e) => {
    dispatch(setSortBy(e.target.value))
  }

  return (
    <div className=" flex justify-between gap-8">
      <div className="">
        {/* <MultiSelector placeholder="Select Generes" options={genres} /> */}
        <Multiselect
          closeOnSelect={true}
          displayValue="name"
          keepSearchTerm
          onRemove={(list) => handleMultiSelect(list)}
          onSelect={(list) => handleMultiSelect(list)}
          options={genres}
          placeholder={"Select genres"}
          showArrow
        />
      </div>
      <div className="">
        <select className="select select-success w-full max-w-xs *:px-0.5 *:py-1" onChange={handleSort}>
          <option disabled selected>
            Sort By
          </option>
          {sortOptions.map((option) => {
            return (
              <option key={option.id} value={option.value}>
                {option.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Filter;
