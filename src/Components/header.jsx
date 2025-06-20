import { Link } from "react-router-dom"
import { RiArrowDropDownLine } from "react-icons/ri";
import Eldrinai from ".././assets/Eldrinai.png"
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
const Header=()=>{
    const [hamOn,setHamOn]=useState(false)
return(
    <header style={{ boxShadow: ' inset 0px 0px 2px #3B2EC0' }}
 className="flex flex-row z-20 md:w-[90%] sm:w-[90%] w-[90%] bg-white justify-between h-[52.73px] rounded-full p-2 items-center  lg:w-[70vw]  fixed left-1/2 top-[34.77px] transform -translate-x-1/2 ">
    <img alt="Eldrin Ai" src={Eldrinai} className="w-[168.94px] h-[33.32px] py-[1.32px] px-[11.88px]"/>
    <div className="flex flex-row gap-10 ">
    <nav className="flex flex-row gap-[13.91px] text-[#6156D3] h-[52.72px] items-center justify-around">
<span className="flex-row cursor-pointer md:flex sm:hidden hidden lg:flex">Products<RiArrowDropDownLine size={20}/> </span>
<span className="flex-row cursor-pointer md:flex sm:hidden hidden lg:flex">Pricing <RiArrowDropDownLine size={20}/></span>
<Link>
<span className="lg:block md:block sm:hidden hidden max-md:hidden">
company
</span>
</Link>
    </nav>
    <div className="lg:flex md:flex flex-row gap-[17.55px] hidden items-center h-[52.73px] ">
    <Link>
    <span className="text-[#6156D3] lg:block md:block sm:hidden hidden max-md:hidden">
Login        
    </span>
    </Link>
    <Link>
    <span className="px-3 py-2 lg:block md:block sm:hidden hidden max-md:hidden bg-[#8645FF] cursor-pointer text-white rounded-full">
        Open Account
    </span>
</Link>
    </div>
    {!hamOn?
<button className="flex-row cursor-pointer lg:hidden md:hidden sm:block block max-sm:block   max-md:hidden relative mr-10" onClick={()=>{setHamOn(true)}}><RxHamburgerMenu size={25}/></button>
:<button className="flex-row cursor-pointer lg:hidden md:hidden sm:block block max-sm:block   max-md:hidden relative mr-10" onClick={()=>{setHamOn(false)}}><RxCross1 size={25}/></button>}
    </div>

        <div className={` overflow-hidden ${hamOn?"h-[250px]":"h-0"} w-[150px] top-[100%]  duration-200 ease-in right-0 transition-all bg-white rounded-lg absolute`}>
  <div className="sm:flex flex-col gap-[17.55px] pt-5 flex items-center h-[52.73px] ">
  <span className="flex-row text-[#6156D3] cursor-pointer flex">Products<RiArrowDropDownLine size={20}/> </span>
<span className="flex-row text-[#6156D3] cursor-pointer flex">Pricing <RiArrowDropDownLine size={20}/></span>
  
  <span className=" text-[#6156D3] ">
company
</span>  <Link>
    <span className="text-[#6156D3] ">
Login        
    </span>
    </Link>
    <Link>
    <span className="px-3 py-2  bg-[#3B2EC0] cursor-pointer text-white rounded-full">
        Open Account
    </span>
</Link>
     
    </div>
   
    </div>
    </header>
)
}

export default Header