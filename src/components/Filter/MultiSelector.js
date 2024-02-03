import React, { useEffect, useState } from "react";

import Multiselect from "multiselect-react-dropdown";
import "./MultiSelectStyles.css";
import { useDispatch } from "react-redux";
import { setGenres } from "../../redux/features/filter/filterSlice";

const MultiSelector = ({placeholder,options}) => {

  const [selectedOptions, setSelectedOptions] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setGenres(()=>selectedOptions));
  }, [selectedOptions,dispatch]);
  return (
    <Multiselect
      closeOnSelect={true}
      displayValue="name"
      keepSearchTerm
      onRemove={(list) => setSelectedOptions(list)}
      onSelect={(list) => setSelectedOptions(list)}
      options={options}
      placeholder={placeholder}
      showArrow
    />
  );
};

export default MultiSelector;
