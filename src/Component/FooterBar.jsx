import React from 'react'
import BackBtn from '../assets/backBtn.png'
import FrowardBtn from '../assets/forwarBtn.png'
import { Link } from 'react-router-dom'

const FooterBar = () => {
  return (
    <div className='flex  flex-row justify-between  px-3 xl:px-36 xl:py-6  w-full backdrop-blur-sm bg-white/30 items-center'>
        <div className='flex  xl:gap-5 boder'>
            <Link to='/'> <button className='bg-transparent text-white xl:px-5 xl:py-2 rounded-2xl'>
            <img src={BackBtn} alt="backBtn" className='xl:w-20 xl:h-20' />
            </button></Link>

            <Link to='/page2'>
            <button className='bg-transparent text-white px-5 py-2 rounded-2xl'>
            <img src={FrowardBtn} alt="forwardBtn" className='xl:w-20 xl:h-20' />
            </button>
            </Link>
            

            
            
            
        </div>
        <div className='text-white'>
            <span className='xl:text-7xl'>01/03</span>
        </div>
    </div>
  )
}

export default FooterBar