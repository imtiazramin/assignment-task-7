import React from 'react';

const Banner = () => {
    return (
        <div
  className="hero "
  style={{
    backgroundImage:
      "url(https://i.ibb.co.com/s9TV2zRC/Banner-min.jpg)",
    
  }}
>
  
  <div className=" flex items-center py-[200px] hero-overlay px-20">
    <div >
        <h1 className='text-white text-4xl font-bold mb-6 w-[500px]'>Bid on Unique Items from Around the World</h1>
        <p className='text-gray-300 font-semibold mb-6 text-2xl w-[500px]'>Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions</p>
        <button className='btn bg-white rounded-3xl'>Explore Auctions</button>
    </div>
  </div>
</div>
        
    );
};

export default Banner;