import React from "react"
import { FaSearch } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <div>
      <div className="flex justify-between items-center bg-[#77764a] pt-4 pr-20 pb-3 pl-20">
                <div className="font-sans text-white">
                    <Link to="/"><h3 className="text-2xl">Edume International Institute</h3></Link>
                </div>
                <div className="flex relative">
                    
                    <input type="text" placeholder="search here.." className="h-h29 w-w250 outline-none rounded-2xl pl-4 border-none font-sans"/>
                    <button className="w-w29 h-h29 rounded-2xl relative border-none bg-white -left-7 hover:bg-gray-300 active:bg-gray-200 pl-1"><FaSearch/></button>
                </div>
                <div className="items-center">
                    <div>
                        <a className="flex justify-center text-base"><VscAccount/></a>
                    </div>
                    <div className="font-sans text-white">
                        <ul>
                            <Link to="/signInPage" className="cursor-pointer">Login</Link>
                            <a className="a2"> | </a>
                            <Link to="/signUpPage" className="acursor-pointer3 ">SignUp</Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <ul className="flex justify-center  relative h-0 -bottom-6">
                    <li className="mr-16 text-base cursor-pointer text-white "><a className="hover:text-lg hover:underline decoration-1 font-semibold ">Home</a></li>
                    <li className="mr-16 text-base cursor-pointer text-white "><a className="hover:text-lg hover:underline decoration-1 font-semibold ">Programs</a></li>
                    <li className="mr-16 text-base cursor-pointer text-white "><a className="hover:text-lg hover:underline decoration-1 font-semibold ">Support</a></li>
                    <Link to='/aboutUs'><li className="mr-16 text-base cursor-pointer text-white "><a className="hover:text-lg hover:underline decoration-1 font-semibold ">About Us</a></li></Link>
                    <li className="mr-16 text-base cursor-pointer text-white "><a className="hover:text-lg hover:underline decoration-1 font-semibold ">Contact Us</a></li>
                    <Link to='/coursesPage'><li className="mr-16 text-base cursor-pointer text-white "><a className="hover:text-lg hover:underline decoration-1 font-semibold ">Courses</a></li></Link>
                    
                    <li className="mr-16 text-base cursor-pointer text-white "><a className="hover:text-lg hover:underline decoration-1 font-semibold ">Student Manuals</a></li>
                </ul>
            </div>
    </div>
  )
}

export default TopBar
