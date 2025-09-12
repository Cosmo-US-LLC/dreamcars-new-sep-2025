
import React, { useState }  from 'react';
import Home from '../Page/Home';
import Footer from './Footer/Footer';
import Navbar from './Navbar';

const Layout = ({ handelClick, handleClose, open }) => {
    

  
  const [range, setRange] = useState(1000);
  const handleRange = (test) => {
    setRange(test)
  }
    return (
        <>
            <div className=''>
                <div className='mb-[4rem] z-[99] w-[100%] fixed xs:mb-[3rem] sm:mb-[3rem] md:mb-[3rem]'>
                    <Navbar handelClick={handelClick}  handleClose={handleClose} open={open} className="" />
                </div>
                <div className=''>
                    <Home className="" handleClose={handleClose} handleRange={handleRange} range={range}/>
                </div>
                <div>
                    <Footer className="bg-[#111010]" />
                </div>
            </div>
        </>
    )
}
export default Layout;