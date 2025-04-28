import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"
import { Main } from "../components/Main"
import { ProjectCard } from "../components/ProjectCard"
export const About=()=>{
    return(
        <div className='bg-[#ffffff] dark:bg-[#1a1a1a]'>
        <Navbar></Navbar>
        <div className="flex">
        <div className='py-6 '><Sidebar></Sidebar></div>
        <div className="flex flex-col">
        <div className="bg-white dark:bg-[#1a1a1a] my-6 rounded-2xl h-50 px-2 mx-2 dark:border-0 "><Main></Main></div>
        <div className="grid lg:grid-cols-2">
            <div><ProjectCard picture="paytm" title="Paytm" description="Clone of Paytm application where users can track balances and send and receive money." skill1="react.js" skill2="express.js"/></div>
            <div><ProjectCard picture="blog" title="MegaBlogs" description="An app where users can create, edit, delete and update their blogs." skill1="next.js" skill2="hono.js"/></div>
            <div><ProjectCard picture="disease" title="Alzeimer Disease Detection" description="Analyzed records from a Kaggle dataset to predict Alzheimer’s disease." skill1="machine learning" skill2="python"/></div>
            <div><ProjectCard picture="news" title="News App" description="Fetches the latest headlines for you." skill1="react.js" skill2="express.js"/></div>
        </div>
        </div>
        
        </div>
      
      </div>
    )
}