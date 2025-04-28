import { Picture } from "./Picture"
import { SkillCard } from "./SkillCard"

export const ProjectCard=({description, title, picture, skill1, skill2})=>{
    return(
        <div className="bg-white w-100 ml-4 px-5 rounded-2xl h-50 pb-2 mb-4 border border-gray-300 cursor-pointer">
            <div className="pt-4 text-red-400"><Picture picture={picture}></Picture></div>
            <div className="text-xl font-medium pt-2">{title}</div>
            <div className="pt-3">{description}</div>
            <div className="flex mt-2"> 
                <div className="pt-2"><SkillCard skill={skill1}></SkillCard></div>
                <div className="pt-2"><SkillCard skill={skill2}></SkillCard></div>
            </div>
          
        </div>
    )
}