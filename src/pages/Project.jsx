import { Navbar } from "../components/Navbar"
import { ProjectCard } from "../components/ProjectCard"
import { Sidebar} from "../components/Sidebar"
import { Main } from "../components/Main"
export const Project=()=>{
    return(
         <div className='bg-[#ffffff] dark:bg-[#1a1a1a] min-h-screen'>
                <Navbar></Navbar>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-4">
                    <div className='py-6 hidden md:block'><Sidebar></Sidebar></div>
                    <div className="flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pb-8">
                            <ProjectCard picture="paytm" title="Paytm" description="Clone of Paytm application where users can track balances and send and receive money." skill1="react.js" skill2="express.js"/>
                            <ProjectCard picture="blog" title="MegaBlogs" description="An app where users can create, edit, delete and update their blogs." skill1="next.js" skill2="hono.js"/>
                            <ProjectCard picture="disease" title="Alzeimer Disease Detection" description="Analyzed records from a Kaggle dataset to predict Alzheimer’s disease." skill1="machine learning" skill2="python"/>
                            <ProjectCard picture="news" title="News App" description="Fetches the latest headlines for you." skill1="react.js" skill2="express.js"/>
                        </div>
                    </div>
                </div>
              </div>
    )
}