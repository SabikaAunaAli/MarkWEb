import React from "react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <>
    
      <div className='lg:h-[1400px] md:h-[1000px] h-[1400px]  '>          
       <div className="bg-[url('https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-programming-course-hero-section-bg.svg')] w-full md:h-[800px] lg:h-[750px] h-[1150px] bg-cover md:bg-center bg-right absolute top-0">

    
        {/* <p className="text-center  pl-5 pt-40 pb-3"> Get In Touch </p>
        <h2 className="text-black font-bold  text-1xl text-center text-5xl  mb-3">
          Contact Us
        </h2>
      </div> */}
      <div className="container m-auto">
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 rounded-2xl shadow-2xl bg-white mt-40 w-[80%] m-auto">
          <div className="bg-gradient-to-br to-[#e9e8e5e6] from-[#ffffffe3] px-5 ">
            <p className="pt-20 text-black font-bold  text-5xl px-10 ">
              CONTACT US
            </p>
            <p className="ml-10 mt-5 text-lg text-gray-500 pr-10">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id tempor, congue justo at, lobortis orci.
            </p>
            <a
              className="block text-black font-bold text-2xl ml-10 mt-3"
              href="tel:9-334-7565-9787"
            >
              123 Fifth Avenue, New York,
            </a>
            <a
              className="block text-black font-bold  text-2xl ml-10 mt-5"
              href="mailto:"
            >
              contact@info.com
            </a>
            <a
              className="block text-black font-bold  text-2xl ml-10 mt-3 pb-20"
              href="tel:9-334-7565-9787"
            >
              9-334-7565-9787
            </a>
          </div>
          <div className="lg:py-20 p-0">
            {/* form  */}
            <div className="max-w-md mx-auto shadow shadow-slate-300 rounded p-10">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block  text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-300 hover:text-black transition-all ease-in-out cursor-pointer text-white font-semibold py-2 px-4 rounded-md"
                  >
                    Send
                  </button>
                </div>
              </form>
              {isSent && (
                <p className="mt-4 text-green-600">
                  Message sent successfully!
                </p>
              )}
            </div>
          </div>
        </div>
        </div>

        <div className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 -m-12 -z-10 relative">
          <iframe
            className="rounded shadow-lg w-full sm:w-full md:w-full lg:w-full "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.0338910964488!2d-73.99362858890693!3d40.73927977127021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3b24b424f%3A0x618680d3f8c2f773!2s123%205th%20Ave%2C%20New%20York%2C%20NY%2010003%2C%20USA!5e0!3m2!1sen!2s!4v1710419318730!5m2!1sen!2s"
            width="100%"
            height="680"
            style={{ border: 1 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      </div>
    </>
  );
}