
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import USDC from "../../assects/images/USDT.png"


// import Dollar from "../../assects/images/dollar.png";
// import ETH from "../../assects/images/ETH.png";
// import BNB from "../../assects/images/BNB.png";

// const people = [
//   {
//     id: 1,
//     name: 'USDC',
//     avatar: Dollar,
//   },
//   {
//     id: 2,
//     name: 'ETH',
//     avatar: ETH,
//   }
// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SelectDropdown({ handleCurrency, selected, people }) {
  // const [selected, setSelected] = useState(people[0])

  return (
    <Listbox value={selected} onChange={handleCurrency}>
      {({ open }) => (
        <>
          {/* <Listbox.Label className="block text-sm font-medium text-gray-700">Assigned to</Listbox.Label> */}
          <div className="   mt-1">
            <Listbox.Button className="flex justify-between w-[120px] cursor-default rounded-full py-1 pl-3 pr-3 shadow-sm sm:text-sm bg-[#EDEDED] text-[#252525] font-[500] text-[16px]  -z-10">
              <span className="flex items-center space-x-1">
                <img src={selected?.avatar} alt="" className="h-4 w-4 flex-shrink-0 rounded-full" />
                <span className=" block truncate">{selected?.name}</span>
              </span>
              <span className="">
                <ChevronDownIcon className="h-6 w-6 text-[#646464]" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute w-[120px] z-10 mt-1 max-h-56 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white text-[16px] bg-[#0072BA]' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-3'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img src={person.avatar} alt="" className="h-6 w-6 flex-shrink-0 rounded-full" />
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
