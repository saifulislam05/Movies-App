import React, { useState } from "react";

import Multiselect from "multiselect-react-dropdown";
import "./MultiSelectStyles.css";
const MultiSelector = ({placeholder}) => {

  const [selectedOptions, setSelectedOptions] = useState();

    const options = [
        {
            cat: "Group 1",
            key: "Option 1",
        },
        {
            cat: "Group 1",
            key: "Option 2",
        },
        {
            cat: "Group 1",
            key: "Option 3",
        },
        {
            cat: "Group 2",
            key: "Option 4",
        },
        {
            cat: "Group 2",
            key: "Option 5",
        },
        {
            cat: "Group 2",
            key: "Option 6",
        },
        {
            cat: "Group 2",
            key: "Option 7",
        },
    ];


  return (
    <Multiselect
      closeOnSelect={false}
      displayValue="key"
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
