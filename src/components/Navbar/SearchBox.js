import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { searchThunk } from '../../redux/features/search/searchSlice';


const SearchBox = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
 const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(searchThunk(text))
      .then(() => {
        navigate(`/search/${text}`); 
      })
      .catch((error) => {
        console.error("Failed to fetch the search results:", error);
      });
  }


  return (
    <form action="" onSubmit={submitHandler}>
      <input
      type="text"
      placeholder="Search"
      onChange={(e)=>setText(e.target.value)}
      className="input bg-white w-24 md:w-auto input-sm "
    />
    </form>
    
  );
}

export default SearchBox