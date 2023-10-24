

import Image from 'next/image'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
// import Ilus from './components/Ilus'
import Container from "./components/Hero_container/Container";
import Modul from './components/Modul/Modul'
import Footer from './components/footer/Footer'




export default function Home() {
  return (
    <>



      {/* <div className="ground"> */}

      <img
        className=" parcel h-full w-full object-cover object-center lg:h-full lg:w-full "
        src='./images/Tlo01_ok.jpg'
        alt=""
      />
      <div className='hello'>
        <span className='bar'>Barbara Litwiniec</span>
        <span className='bar1'>Illustrations</span>

      </div >
      <div className='boxy'>
        <Modul />

      </div>
      <Footer />

      {/* </div> */}

      <div>


      </div>
    </>


  )
}
