import React, { useEffect, useState } from 'react';
import Main from './Main';

const Mains = ({hendleFavMark}) => {

    const [mains,setMains]=useState([]);

   useEffect(()=>{fetch("main.json")
    .then(res=>res.json())
    .then(data=>setMains(data))},
    [])


    return (
        <div>
            
            <div className="all-main bg-white rounded-2xl">
      
       
       <div className="flex justify-between px-10 py-6">
        <h4>Itmes</h4>
        <div className="flex justify-around gap-20 ">
          <h4>Current Bid</h4>
           <h4>Time Left</h4>
           <h4>Bid Now</h4>
        </div> 
       </div>

             {
                  mains.map((main)=><Main hendleFavMark={hendleFavMark} main={main} key={main.id}></Main>)
                }
            </div>
        </div>
    );
};

export default Mains;