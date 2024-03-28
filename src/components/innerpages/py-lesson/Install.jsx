import React from 'react'
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import control from "../../../assets/control.png";


const Install = () => {
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

    <>

        {/* <img
            src="https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-programming-course-logo-dark.svg"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          /> */}


        <div className="flex ">



        
      <div
    className={` ${
        open ? "w-72" : "md:w-16 w-0 "
      } bg-white h-full pt-8 fixed duration-300 border-r-[1px] border-black`}
      
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
      <div className={`flex-1 p-8 move ${open ? 'md:ml-56' : 'ml-1'}`}>
    

    <div className=' container overflow-y-scroll mx-auto'>
    <h1 className="text-6xl text-center font-bold ">Install and Setup</h1>

     <div className=' flex justify-center md:mt-10 my-10'>
    <img className='md:w-[60%] w-[85%] ' src="https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-programming-course-featured-image.jpg" alt="" />
      </div>


<div className='container md:w-[62%] mx-auto my-5'>

<p className='text-xl font-bold py-4'>Fringilla aliquam amet, molestie morbi faucibus sem quisque accumsan tortor tincidunt molestie sagittis, enim scelerisque feugiat suspendisse augue aliquam elit integer gravida non mus.</p>

<p className='leading-8 text-[18px] font-normal text-gray-500 pr-12'>Mi vitae purus urna, viverra risus eget porttitor massa laoreet commodo sed libero sagittis, mauris leo non enim lectus imperdiet suspendisse sed sed integer diam in etiam in commodo tellus nunc nascetur duis amet, id felis in ornare viverra ut justo vitae amet, mauris magnis enim quam maecenas nunc pellentesque nulla pretium id venenatis sapien, nunc, bibendum vitae feugiat diam id vitae at egestas in egestas purus, amet non rhoncus est tortor egestas tincidunt feugiat sapien vitae id vulputate nunc tortor cras viverra tristique lorem eget ultrices blandit pellentesque risus sit fusce tortor suspendisse bibendum vitae id rhoncus placerat nunc.</p>

<p className='leading-8 text-[18px] font-normal text-gray-500 pr-12 py-5'>
Est cras vulputate vitae varius mauris et tristique nibh mauris, elementum, pulvinar ultricies enim vel sed et laoreet ultricies leo ac fringilla id pretium dictumst nibh urna dictum vestibulum in quis venenatis vestibulum in lacus, at ut eget vel in mauris facilisis et mattis elementum vestibulum sapien purus ultrices maecenas sed eu lectus in posuere ut nam neque, tristique neque aliquam, leo urna pellentesque ullamcorper lorem facilisis leo tortor porttitor netus in varius risus odio velit eu molestie varius posuere.
</p>

{/* <div className='grid md:grid-cols-2 grid-cols-1 my-8'>

<div className='md:w-[85%]'>
<p className='text-3xl font-semibold pt-4'>What You'll Learn</p>


<div className='grid md:grid-cols-1 gap-2 pt-8'>
            <div className='flex align-middle justify-self-start'>
       <p className='py-5 text-blue-700'>< FaCheckCircle /> </p>
       <p className='px-4  text-lg font-semibold text-gray-600'>Have a fundamental understanding of the Python programming language.</p>
        </div>


     <div className='flex align-middle justify-self-start'>
       <p className='py-1 text-blue-700'>< FaCheckCircle /> </p>
       <p className='px-4  text-lg font-semibold text-gray-600'>Understand both Python 2 and Python 3.</p>
        </div>

        <div className='flex align-middle justify-self-start'>
       <p className='py-1 text-blue-700'>< FaCheckCircle /> </p>
       <p className='px-4  text-lg font-semibold text-gray-600'>Learn function programming.</p>
       </div>

        <div className='flex align-middle justify-self-start'>
       <p className='py-1 text-blue-700'>< FaCheckCircle /> </p>
       <p className='px-4  text-lg font-semibold text-gray-600'>Object-Oriented Programming.</p>
        </div>
        <div className='flex align-middle justify-self-start'>
       <p className='py-5 text-blue-700'>< FaCheckCircle /> </p>
       <p className='px-4  text-lg font-semibold text-gray-600'>Learn best practices to write clean, performant, and bug free code.</p>
        </div>
 




</div>


</div>

<div className='md:w-[80%]'>
    <p className='text-lg font-semibold pt-10'>Student Testimonial</p>
    <p className='text-[16px] font-normal py-5 leading-7'>"Purus, porta enim sed feugiat tincidunt hac condimentum erat amet arcu duis in vehicula sit nibh in mattis cras quis placerat eu, et aliquet curabitur laoreet erat nunc adipiscing elementum nec neque laoreet id enim, magna aenean fermentum tortor."</p>
    
    
    <div className='flex justify-start'>

        <img className='rounded-full w-[15%] h-[15%]'  src="https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-programming-course-review-03.jpg" alt="" />
        <div className='ml-5 mt-2 '>
            <p className='text-lg font-bold'>	Jonathan Doe</p>
            <p className='text-gray-400 leading-3'>Web developer</p>
        </div>
    </div>


</div>

</div>



<div>

<p className='text-3xl font-semibold py-4 text-center md:text-left'>Course Content</p>

<p className='text-xl font-bold text-gray-600 pt-4'>Python Lessons</p>

<div className='my-4 md:pb-20'>


<div className='flex align-middle justify-self-start border-2 border-gray-200 rounded-md p-4'>
       <p className='pl-3 py-1 text-gray-300 text-2xl font-bold'><FaRegCircle /> </p>
       <a href="https://websitedemos.net/online-coding-course-02/lessons/install-and-setup/" className='px-4  text-xl font-normal text-gray-600  hover:text-blue-400'>Install and Setup</a>
        </div>


        <div className='flex align-middle justify-self-start border-2 border-gray-200 rounded-md p-4 my-4 '>
       <p className='pl-3 py-1 text-gray-300 text-2xl font-bold'><FaRegCircle /> </p>
       <a href="https://websitedemos.net/online-coding-course-02/lessons/python-basic/" className='px-4  text-xl font-normal text-gray-600 hover:text-blue-400'>Python Basic</a>
        </div>


        <div className='flex align-middle justify-self-start border-2 border-gray-200 rounded-md p-4 '>
       <p className='pl-3 py-1 text-gray-300 text-2xl font-bold'><FaRegCircle /> </p>
       <a href="https://websitedemos.net/online-coding-course-02/lessons/python-advanced/" className='px-4  text-xl font-normal text-gray-600  hover:text-blue-400'>Python Advance</a>
        </div>
        


</div>



</div> */}




</div>
</div>
</div>
</div>

</>
  );
}




export default Install




