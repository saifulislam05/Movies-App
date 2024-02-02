import React from 'react'
import Carousel from '../Carousel/Carousel';


const Collection = ({ title, collectionData }) => {

  return (
    <div className="w-10/12 mx-auto my-14">
      <div className="mb-5 ml-1 ">
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <div className="w-full flex gap-6">
        <Carousel/>
      </div>
    </div>
  );
}

export default Collection