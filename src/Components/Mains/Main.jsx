import React from 'react';

const Main = (props) => {
   const { main }=props;
    return (
        <div>
           
      <div className="overflow-x-auto rounded-b-2xl  border border-base-content/5 bg-base-100">
  <table className="table">
    
    {/* <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead> */}
    <tbody>
  
      <tr className="grid grid-cols-5 justify-between items-center">
        <td className="mx-7"><img className="w-12" src={main.image} alt="" /></td>
        <td className= "w-64 -mx-20">{main.title}</td>
        <td className= " mx-10">${main.currentBidPrice}</td>
        <td>{main.timeLeft}</td>
        <td><img className="w-8" src={main.image} alt="" /></td>
      </tr>
    
       
       
   
    </tbody>
  </table>
</div>
      
    
        </div>
    );
};

export default Main;