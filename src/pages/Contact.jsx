import { ContactForm } from "../components/ContactForm"
import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"
export const Contact=()=>{
    return(
        <div>
            <Navbar></Navbar>
            <div className="flex">
                    <Sidebar></Sidebar>
                    <ContactForm></ContactForm>
            </div>
        </div>
    )
}