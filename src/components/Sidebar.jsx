import React from 'react'
import { useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import control from "../assets/control.png";

const Sidebar = () => {

    const [open, setOpen] = useState(true);

    const handleToggle = () => {
      setOpen(!open);
    };
 
  const Menus = [
    { title: "Install and Setup", src: <FaRegCircle /> },
    { title: "Python Basic", src: <FaRegCircle /> },
    { title: "Python Advance", src: <FaRegCircle /> },

  ];

  return (
    <div>

<div
    className={` ${
        open ? "w-72" : "md:w-16 w-0 "
      } bg-white h-full  fixed duration-300 border-r-[1px] border-black `}
      
      >
        <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={handleToggle}
        />


        <div className="flex gap-x-4 items-center  bg-blue-600">
      
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 m-5 ${
              !open && "scale-0 hidden "
            }`}
          >
          Complete Python Masterclass For Web Development
          </h1>
        </div>
<h3   className={`text-black origin-left font-medium text-xl py-5 ml-8 ${
              !open && "scale-0"
            }`}>Python lesson</h3>

        <ul className=" ml-5">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex border-b-[1px] border-black  cursor-pointer hover:text-slate-500 text-black text-sm items-start gap-4 
              ${!open && "hidden"} ${
                index === 0 && ""
              } `}
            >
              < p className={`${!open && "hidden"} origin-left duration-200 py-4`} >{Menu.src}</p> 
              <span className={`${!open && "hidden"} origin-left duration-200 py-4 `}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>





    </div>
  )
}

export default Sidebar
