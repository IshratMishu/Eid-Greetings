import { useState } from 'react';
import './App.css'
import Marquee from "react-fast-marquee";
import { GiDrippingStar } from "react-icons/gi";
import bag from "../src/image/gratis-png-basmati-biryani-cocina-india-arroz-y-guisantes-arroz-basmati-removebg-preview.png";
import bgPhoto from "../src/image/30c7395af35bf09c4174a6d1dc603227.jpg"


function App() {
  const [isBouncing, setIsBouncing] = useState(true);

  const toggleAnimation = () => {
    setIsBouncing(!isBouncing);
  }

  const handleModalClose = () => {
    setIsBouncing(true);
  }

  return (
    <>
      <div className='lg:flex'>
        <div className='flex justify-center'>
          <h1 className='animate-pulse text-red-700'><GiDrippingStar /></h1>
          <h1 className='animate-pulse'><GiDrippingStar /></h1>
          <h1 className='animate-pulse text-red-700'><GiDrippingStar /></h1>
          <h1 className='text-3xl font-bold text-red-700 mt-4 animate-pulse'>ঈদ মোবারক </h1>
          <h1 className='animate-pulse text-red-700'><GiDrippingStar /></h1>
          <h1 className='animate-pulse'><GiDrippingStar /></h1>
          <h1 className='animate-pulse text-red-700'><GiDrippingStar /></h1>
        </div>
        <Marquee>
          <h1 className='text-lg font-semibold'>ঈদের  চাঁদ  আকাশে, সালামি  দিন  বিকাশে 🥳 </h1>
        </Marquee>
      </div>



      <div className="mt-20 relative" style={{ backgroundImage: `url(${bgPhoto})` }}>
        <img className={`mx-auto ${isBouncing ? 'animate-bounce' : ''}`} src={bag} alt="" />



        <button className="btn bg-red-800 rounded-xl border border-red-950 absolute top-1/2 left-1/2 -translate-x-1/2 text-white" onClick={() => { toggleAnimation(); document.getElementById('eid').showModal(); }}>বস্তা খুলুন</button>
        <dialog id="eid" className="modal">
          <div className="modal-box bg-red-800 text-white">
            <form method="dialog">

              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleModalClose}>✕</button>
            </form>
            <h3 className="font-bold text-lg py-4">ঈদ আনে বস্তা ভর্তি খুশি,

              তাই আপনি খেয়েন পেট পুরে,

              পোলাও আর খাশি। </h3>
            <h1 className="py-4">ঈদ মোবারক</h1>
          </div>
        </dialog>
      </div>
    </>
  )
}

export default App;


