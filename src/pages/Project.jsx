import { Navbar } from "../components/Navbar"
import { ProjectCard } from "../components/ProjectCard"
import { Sidebar } from "../components/Sidebar"
export const Project=()=>{
    return(
        <div>
        <Navbar></Navbar>
        <div className="flex">
        <Sidebar></Sidebar>
        <div className="grid lg:grid-cols-2">
                    <div><ProjectCard picture="paytm" title="Paytm" description="Clone of Paytm application where users can track balances and send and receive money." skill1="react.js" skill2="express.js"/></div>
                    <div><ProjectCard picture="blog" title="MegaBlogs" description="An app where users can create, edit, delete and update their blogs." skill1="next.js" skill2="hono.js"/></div>
                    <div><ProjectCard picture="disease" title="Alzeimer Disease Detection" description="Analyzed records from a Kaggle dataset to predict Alzheimer’s disease." skill1="machine learning" skill2="python"/></div>
                    <div><ProjectCard picture="news" title="News App" description="Fetches the latest headlines for you." skill1="react.js" skill2="express.js"/></div>
        </div>
        </div>
        </div>
    )
}