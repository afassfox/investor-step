import { Button } from "../shared/Button";
import Sidebar from "./Sidebar";

export default function Navbar() {
  return (
    <nav
      className='w-full bg-body flex flex-nowrap justify-between items-center 
      py-4  xl:px-43 lg:px-14 md:px-15 px-7 fixed top-0 left-0 right-0 bg-white shadow-md z-30 
      overflow-x-auto animate-navbar'
    >
      <div>
        <a href='/' className='text-[rgb(109,40,217)] font-bold text-2xl '>
          خطوة{" "}
          <span className='bg-purple text-white font-bold px-2 text-lg'>
            المستثمر
          </span>
        </a>
      </div>
      <ul
        className='hidden lg:flex flex-row flex-nowrap justify-center 
        gap-14 text-heading-1 font-semibold text-sm min-w-0 mr-10'
      >
        <li>
          <a href='/home'>الرئيسية</a>
        </li>
        <li>
          <a href='/services'>الخدمات</a>
        </li>
        <li>
          <a href='/previous-works'>اعمالنا السابقة </a>
        </li>
        <li>
          <a href='/contact'>اتصل بنا</a>
        </li>
      </ul>
      <Sidebar />
      <Button className='hidden lg:block mr-auto'>استشارة مجانية</Button>
    </nav>
  );
}
