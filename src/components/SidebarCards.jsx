import { Logo } from "./Logo"
export const SidebarCards=({label,title,data})=>{
    return(
        <div className="flex items-center">
            <div className=" border-1 border-gray-300 shadow-2xl shadow-gray-400 p-2 rounded-md">
                <Logo label={label}></Logo>
            </div>
            <div className="px-3 text-sm py-4">
                <div>{title}</div>
                <div>{data}</div>
            </div>
        </div>
    )
}