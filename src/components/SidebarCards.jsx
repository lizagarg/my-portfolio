import { Logo } from "./Logo"
export const SidebarCards=({label,title,data, sociallink, onClick})=>{
    return(
        <a href={sociallink}>
        <div onClick={onClick} className="flex items-center cursor-pointer">
            <div className=" border-1 border-gray-300 dark:border-0 dark:text-yellow-200 shadow-2xl shadow-gray-400 p-2 rounded-md">
                <Logo label={label}></Logo>
            </div>
            <div className="px-3 text-sm py-4">
                <div>{title}</div>
                <div>{data}</div>
            </div>
        </div>
        </a>
    )
}