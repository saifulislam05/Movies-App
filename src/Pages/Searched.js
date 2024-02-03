import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from '../components/Cards/Card';

const Searched = () => {

    const { searched } = useSelector((state) => state.search);
    const {text}=useParams()

 return (
   <div className="w-10/12 mx-auto my-14">
     <div className="mb-14 ml-1 flex justify-between">
       <h2 className="text-2xl font-semibold">
         Search results for "{text}"
       </h2>
       
     </div>

     <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center ">
       {searched?.data.map((movie) => {
         return <Card key={movie.id} data={movie} />;
       })}
     </div>
   </div>
 );
}

export default Searched