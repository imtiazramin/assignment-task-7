import React from 'react';

const Footer = () => {
    return (
        <div className="p-28 bg-white">
            <div className="text-center">
            <h1 className='text-yellow-500 font-bold text-2xl'> <span className='text-blue-500 font-bold'>Auction</span>Gallery</h1>
         </div>
         <div className="flex items-center justify-center gap-5 py-4">
            <h3>Bid.</h3>
            <h3>Win.</h3>
            <h3>Own.</h3>
         </div>
         <div className="flex items-center justify-center gap-7 pb-4">
            <p>Home</p>
            <p>Auctions</p>
            <p>Categories</p>
            <p>How to works</p>
         </div>
         <div className="text-center">
            <p>© 2025 AuctionHub. All rights reserved.</p>
         </div>
        </div>
    );
};

export default Footer;