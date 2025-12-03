import React, { useEffect, useState } from 'react';
import Main from './Main';

const Mains = () => {

    const [mains,setMains]=useState([]);

   useEffect(()=>{fetch("main.json")
    .then(res=>res.json())
    .then(data=>setMains(data))},
    [])
// console.log(mains)

    return (
        <div>
            
            <div className="all-main bg-white rounded-2xl">
      
       
       <div className="flex justify-between px-16 py-6">
        <h4>Itmes</h4>
        <div className="flex justify-around gap-32 px-28">
          <h4>Current Bid</h4>
           <h4>Time Left</h4>
           <h4>Bid Now</h4>
        </div> 
       </div>

             {
                  mains.map((main)=><Main main={main}></Main>)
                }
            </div>
        </div>
    );
};

export default Mains;