
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Navber from './Components/Navber/Navber'

function App() {


  return (
    <>
      <Navber></Navber>
      <Banner></Banner>
      <div className="main-contanier bg-gray-50 p-[150px]">
         <div>
          <h1 className="text-3xl mb-5 ">Active Auctions</h1>
          <h3>Discover and bid on extraordinary items</h3>
         </div>

        <div className="flex">
       <div className="left-contanier">
     
        </div>

        <div className="right-contanier">
        
        </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
