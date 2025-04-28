import { useNavigate } from "react-router-dom"

export const Navbar=()=>{
    const navigate= useNavigate();
    return <div className=" flex justify-between px-15 py-3 text-gray-900 font-medium font-mono">
        <div className="flex space-x-20  ">
            <div onClick={()=>navigate('/')}className="relative cursor-pointer after:block after:h-[2px] after:bg-red-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 text-lg">
                Home
            </div>
            <div onClick={()=>navigate('/projects')}className="relative cursor-pointer after:block after:h-[2px] after:bg-red-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 pt-1">
                Projects
            </div>
            <div>

            </div>
        </div>
        <div className="pt-1">
            Toggle
        </div>
    </div>
}