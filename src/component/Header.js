// import 'Logo.png'
import logo from '../Logo.png';
import React from 'react';
import {Link} from 'react-router-dom'

function Header(props) {

    return (
        <div className='fixed top-0 w-full z-50 bg-slate-700'>
           <nav className="container px-2 py-3 mx-auto ">
                <div className=" flex flex-wrap justify-between items-center mx-auto">
                    <Link to="first-react/" className="flex items-center">
                        <img src={logo} className="mr-3 h-9 sm:h-9" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-white ">DoraPhim</span>
                    </Link>
                    <div className='relative text-slate-200'>
                        <input className='border-none outline-none pr-7 p-2 rounded-md bg-slate-500 w-[150px] sm:w-[250px]' placeholder='Seach....'></input>
                        <i className="fa-solid fa-magnifying-glass absolute top-[50%] right-0 translate-x-[-50%] translate-y-[-50%] cursor-pointer opacity-[70%]"></i>
                    </div>
                    <div className='md:hidden text-white text-2xl'>
                        <i className="fa-solid fa-bars cursor-pointer hover:text-slate-400"></i>
                    </div>
                    <div className='hidden md:block'>
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
                            <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-200 border-b border-gray-100 hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 " aria-current="page">Phim hay</a>
                            </li>
                            <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-200 border-b border-gray-100 hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 ">Phim lẻ</a>
                            </li>
                            <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-200 border-b border-gray-100 hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 ">Phim bộ</a>
                            </li>
                            <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-200 border-b border-gray-100 hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 ">Phim hoạt hình </a>
                            </li>
                        </ul>
                    </div>
                </div> 
            </nav>
        </div>
    );
}

export default Header;