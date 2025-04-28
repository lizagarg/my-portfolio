export const Main=()=> {
    return(
        <div className="py-4 px-5 w-230 border border-red-100  dark:bg-[#282828] dark:border-none dark:shadow-none dark:text-[#c1c0c0] rounded-md shadow-sm shadow-red-100">
            <div className="py-4 font-bold text-3xl text-gray-800 dark:text-white">About Me</div>
            <div className="flex">
            <div className="w-120">My days start with coffee and end with code. In between, there's a little chaos and a constant drive to make something better than yesterday.</div>
            
                <div className="flex text-xs items-center pl-2 border pr-2 border-gray-300 shadow-md mx-2 dark:border-[#232323] dark:border-2">
                <div><img className="h-11 w-11 rounded-4xl p-2" src="/275014389_5249073775112247_3700986186374416778_n.jpg" alt="" /></div>
                <div className="pr-3">
                    <div className="font-bold">Thapar Institute Of Engineering And Technology</div>
                    <div className="font-light">B.E. Computer Engineering</div>
                </div>
                <div className="">2022-2026</div>
                </div>
                
        
            </div>
        </div>
    )
}