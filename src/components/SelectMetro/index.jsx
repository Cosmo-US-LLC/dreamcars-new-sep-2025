
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import Twitter from "../../assects/images/benefits.png";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SelectMetro({ handleCurrency, selected, people }) {

  return (
    <Listbox value={selected} onChange={handleCurrency}>
      {({ open }) => (
        <>
          <div className="">
            <Listbox.Button className="flex justify-between  w-[120px] rounded-full py-[7px] pl-3 pr-3 shadow-sm sm:text-sm bg-[#5f5f5f] text-[#252525] font-[500] text-[16px]  -z-10">
              <span className="flex items-center space-x-1">
                <img src={Twitter} alt="" className="h-4 w-4 flex-shrink-0 rounded-full" />
                <span className=" block truncate text-white">SCORP</span>
              </span>
              
            </Listbox.Button>

          </div>
        </>
      )}
    </Listbox>
  )
}
