export const Main=()=> {
    return(
        <div className="py-4 px-5 border border-red-100  dark:bg-[#282828] dark:border-none dark:shadow-none dark:text-[#c1c0c0] rounded-md shadow-sm shadow-red-100">
            <div className="py-2 sm:py-4 font-bold text-2xl sm:text-3xl text-gray-800 dark:text-white">About Me</div>
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
                <div className="md:flex-1 text-sm sm:text-base">My days start with coffee and end with code. In between, there's a little chaos and a constant drive to make something better than yesterday.</div>
                <div className="flex text-[10px] sm:text-xs items-center pl-2 pr-2 border border-gray-300 shadow-md md:ml-2 dark:border-[#232323] dark:border-2 rounded-md">
                    <div><img className="h-9 w-9 sm:h-11 sm:w-11 rounded-4xl p-2" src="/275014389_5249073775112247_3700986186374416778_n.jpg" alt="" /></div>
                    <div className="pr-3">
                        <div className="font-bold">Thapar Institute Of Engineering And Technology</div>
                        <div className="font-light">B.E. Computer Engineering</div>
                    </div>
                    <div className="ml-auto">2022-2026</div>
                </div>
            </div>
        </div>
    )
}