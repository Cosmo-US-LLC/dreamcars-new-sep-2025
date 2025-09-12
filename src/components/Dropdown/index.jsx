// import { useState } from 'react';
// import Ticon from "../../assects/svgs/t.svg"
// import { Listbox, Transition } from '@headlessui/react'




// const Dropdown = ({ handleCurrency, selected, people }) => {

// // const [selectedValue, setSelectedValue] = useState('');

// // const handleSelectChange = (event) => {
// //   setSelectedValue(event.target.value);
// // };

// return (
//     <Listbox>
//     {({ open }) => (
//       <>
//         <div className="   mt-1">
//           <Listbox.Button className="flex justify-between w-[120px] rounded-full py-1 pl-3 pr-3 shadow-sm sm:text-sm bg-[#EDEDED] text-[#252525] font-[500] text-[16px]  -z-10">
//             <span className="flex items-center space-x-1">
//               <img src={Ticon} alt="" className="h-4 w-4 flex-shrink-0 rounded-full" />
//               <span className=" block truncate">USDT</span>
//             </span>
//             <span className="">
//             </span>
//           </Listbox.Button>
          

//         </div>
//       </>
//     )}
//   </Listbox>
// )


// }
// export default Dropdown;


import React, { useState } from "react";
import Select, { components } from "react-select";

import "../../index.css";
import Ticon from "../../assects/svgs/t.svg"


const countries = [
  { value: "MG", label: "USDT", icon: Ticon },
  { value: "UE", label: "ETH", icon: Ticon }
];

const Option = (props) => (
  <components.Option {...props} className="country-option">
    <img src={props.data.icon} alt="logo" className="country-logo " />
    {props.data.label}
  </components.Option>
);

const Dropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleChange = (value) => {
    setSelectedCountry(value);
  };

  const SingleValue = ({ children, ...props }) => (
    <components.SingleValue {...props}>
      <img src={selectedCountry.icon} alt="s-logo" className="selected-logo 	" />
      {children}
    </components.SingleValue>
  );

  return (
    <div className="">
      <Select
        value={selectedCountry}
        options={countries}
        onChange={handleChange}   
        className="bgdrop" 
        styles={{
          singleValue: (base) => ({
            ...base,
            display: "flex",
            alignItems: "center",
            width:"70px",
            color:"white",
            
           
           
          })
        }}
        components={{
          Option,
          SingleValue
        }}
      />
    </div>
  );
};

export default Dropdown;
