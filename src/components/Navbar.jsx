import { useNavigate } from "react-router-dom"
import { useState } from "react";
import Switcher12 from "./Switcher12";
import { SidebarCards } from "./SidebarCards";

export const Navbar=()=>{
    const navigate= useNavigate();
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        const pdfURL = "/Liza-Garg-Resume.pdf";
        window.open(pdfURL, "_blank");
        setOpen(false);
    };
    return <div className="w-full bg-white/70 dark:bg-[#1a1a1a]/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-[#1a1a1a]/60 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-3 text-gray-900 dark:text-white font-medium font-mono">
                <div className="flex items-center gap-3">
                    <button aria-label="Toggle menu" className="md:hidden inline-flex items-center justify-center p-2 rounded hover:bg-gray-100 dark:hover:bg-[#2a2a2a]" onClick={()=>setOpen(!open)}>☰</button>
                    <div onClick={()=>navigate('/')} className="hidden md:block cursor-pointer font-semibold">Liza</div>
                </div>
                <div className="hidden md:flex items-center gap-8">
                    <div onClick={()=>navigate('/')} className="relative cursor-pointer after:block after:h-[2px] after:bg-red-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 text-base">Home</div>
                    <div onClick={()=>navigate('/projects')} className="relative cursor-pointer after:block after:h-[2px] after:bg-red-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 text-base">Projects</div>
                    <div onClick={()=>navigate('/contact')} className="relative cursor-pointer after:block after:h-[2px] after:bg-red-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 text-base">Contact me</div>
                </div>
                <div className="pt-1"><Switcher12></Switcher12></div>
            </div>
            {open && (
                <div className="md:hidden pb-3">
                    <div className="flex flex-col gap-2 text-gray-900 dark:text-white">
                        <button onClick={()=>{navigate('/'); setOpen(false);}} className="text-left px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-[#2a2a2a]">Home</button>
                        <button onClick={()=>{navigate('/projects'); setOpen(false);}} className="text-left px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-[#2a2a2a]">Projects</button>
                        <button onClick={()=>{navigate('/contact'); setOpen(false);}} className="text-left px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-[#2a2a2a]">Contact me</button>
                        <div className="mt-2 pt-2 border-t border-gray-200 dark:border-[#2a2a2a]">
                            <div className="px-2 pb-2 text-gray-600 dark:text-gray-300 text-sm">More</div>
                            <div className="flex flex-col space-y-3 px-1">
                                <SidebarCards label="Contact" title="Email" data="lizagarg5@gmail.com" sociallink="mailto:${lizagarg5@gmail.com}"></SidebarCards>
                                <SidebarCards label="Leetcode" title="Leetcode" data="lizagarg" sociallink="https://leetcode.com/lizagarg"></SidebarCards>
                                <SidebarCards label="Github" title="Github" data="lizagarg" sociallink="https://github.com/lizagarg"></SidebarCards>
                                <SidebarCards label="LinkedIn" title="LinkedIn" data="Liza Garg" sociallink="https://www.linkedin.com/in/liza-garg-2467211a7/"></SidebarCards>
                                <SidebarCards onClick={handleOpen} label="Resume" title="Resume" data="Liza Garg"></SidebarCards>
                                <SidebarCards label="Location" title="Location" data="India"></SidebarCards>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
}