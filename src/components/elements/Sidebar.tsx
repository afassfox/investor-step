import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        type='button'
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex lg:hidden flex-col space-y-1 p-2 cursor-pointer${
          isOpen ? " open" : ""
        }`}
      >
        <span className='block w-6 h-0.5 bg-gray-600 '></span>
        <span className='block w-6 h-0.5 bg-gray-600 '></span>
        <span className='block w-6 h-0.5 bg-gray-600 '></span>
      </button>
      <div
        id='sidebar'
        className={`flex  flex-col gap-4 text-end bg-body shadow-md w-1/2 
      h-screen fixed top-0 left-0 p-4 direction-ltr z-20 text-heading-1 
			font-semibold overflow-y-auto animate-slide-right ${
        isOpen ? "flex" : "hidden"
      }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className='cursor-pointer right-10 text-2xl absolute top-4 
			transition-transform duration-500 ease-out animate-slide-down'
          style={{ animation: "slideDown 0.5s ease-out" }}
        >
          X
        </button>

        <a href='/'>Home</a>
        <a href='/'>Work</a>
        <a href='/'>Work Details</a>
        <a href='/'>Blog</a>
        <a href='/'>Blog Details</a>
        <a href='/'>Service</a>
        <a href='/'>Service Details</a>
        <a href='/'>Career</a>
        <a href='/'>Job Application</a>
        <a href='/'>Pricing Plan</a>
        <a href='/'>FAQ's</a>
        <a href='/'>About</a>
        <a href='/'>Team</a>
        <a href='/'>Review</a>
        <a href='/'>Contact</a>
        <a href='/'>Thank you</a>
        <a href='/'>Terms And Conditions</a>
        <a href='/'>Privacy Policy</a>
        <button className='text-white bg-purple rounded-md py-2 mt-6 cursor-pointer'>
          Free Consultation
        </button>
      </div>
    </>
  );
}
