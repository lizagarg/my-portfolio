import { SidebarCards } from "./SidebarCards";

export const Sidebar = () => {
  return (
    <div className="bg-white w-60 mx-6 rounded-2xl px-3 py-3 flex flex-col items-center h-full border border-gray-300">
      <div className="flex flex-col items-center text-3xl font-bold text-gray-800">
        <div className="w-30 h-30 rounded-2xl "><img className='bg-blue-50 rounded-2xl' src="src\assets\avatar_1738345162-removebg-preview.png" alt="" /></div>
        <div>Liza Garg</div>
      </div>
      <div className="py-4">
        <SidebarCards label="Contact" title="Email" data="lizagarg5@gmail.com"></SidebarCards>
        <SidebarCards label="Leetcode" title="Leetcode" data="lizagarg"></SidebarCards>
        <SidebarCards label="Github" title="Github" data="lizagarg"></SidebarCards>
        <SidebarCards label="LinkedIn" title="LinkedIn" data="Liza Garg"></SidebarCards>
        <SidebarCards label="Resume" title="Resume" data="Liza Garg"></SidebarCards>
      </div>
    </div>
  );
};
