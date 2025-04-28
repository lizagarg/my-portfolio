import { ContactForm } from "../components/ContactForm"
import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"
export const Contact=()=>{
    return(
        <div className="dark:bg-[#1a1a1a]">
            <Navbar></Navbar>
            <div className="flex">
                    <Sidebar></Sidebar>
                    <ContactForm></ContactForm>
            </div>
        </div>
    )
}