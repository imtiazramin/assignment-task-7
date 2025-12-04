
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Mains from './Components/Mains/Mains'
import Navber from './Components/Navber/Navber'

function App() {


  return (
    <>
      <Navber></Navber>
      <Banner></Banner>
      <div className="main-contanier bg-gray-100 p-[150px]">
         <div className="my-10">
          <h1 className="text-3xl mb-5 ">Active Auctions</h1>
          <h3>Discover and bid on extraordinary items</h3>
         </div>

        <div className="flex">
       <div className="left-contanier w-[70%]    ">
          <Mains></Mains>
        </div>

        <div className="right-contanier w-[30%] bg-white rounded-2xl mx-28">
           <div className='flex py-6 justify-center gap-3'>
             <img className='w-7 flex' src="https://img.icons8.com/?size=100&id=86721&format=png&color=000000" alt="" /> 
             <h1 className='text-2xl font-semibold text-[#0E2954]'>Favorite Items</h1>
           </div>
           <hr className='text-gray-200'/>
           <div className='text-center py-6'>
              <h3 className='text-2xl font-semibold'>No Favorites yet </h3>
              <p className='py-4 w-60 m-auto'>Click the heart icon on any item to add it to your favorites</p>
           </div>
           <hr className='text-gray-200'/>
           <div className='flex justify-around py-6'>
            <h1 className='text-2xl font-semibold'>Total bids Amount</h1>
            <p className='text-2xl font-semibold'>$0000</p>
           </div>
        </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
