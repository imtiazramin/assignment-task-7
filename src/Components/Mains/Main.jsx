import React from 'react';

const Main = (props) => {
   const { main ,hendleFavMark}=props;
   
 
   
    return (


<div>
  <div className="overflow-x-auto rounded-b-2xl border border-base-content/5 bg-base-100">
        <div className="flex py-5 items-center justify-between pr-10">
          <p className="px-7"><img className="w-18 h-14" src={main.image} alt="" /></p>
          <p className="w-64"> {main.title}</p>
           <p  className="px-10">${main.currentBidPrice}</p>
             <p>{main.timeLeft}</p>

        <button id='colorChange'  onClick={()=>hendleFavMark(main,main.currentBidPrice)}>
        <img  className="w-8" src={main.iove} alt="favorite" />
       </button>

        </div>
          

  </div>
</div>

    );
};

export default Main;