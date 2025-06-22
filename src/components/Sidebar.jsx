import { SidebarCards } from "./SidebarCards";
import { useState } from "react";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    const pdfURL = "/Liza-Garg-Resume.pdf";
    window.open(pdfURL, "_blank");
  };

  return (
    <>
      {/* Sidebar for medium screens and above */}
      <div className="hidden md:flex bg-white dark:text-[#c1c0c0] dark:bg-[#282828] dark:border-0 w-60 mx-6 rounded-2xl px-3 py-2 flex-col items-center border border-gray-300 min-h-screen">
        <div className="flex flex-col items-center text-3xl font-bold text-gray-800">
          <div className="w-30 h-30 rounded-2xl">
            <img
              className="bg-blue-50 dark:bg-[#1a1a1a] rounded-2xl"
              src="/avatar_1738345162-removebg-preview.png"
              alt=""
            />
          </div>
          <div className="dark:text-white">Liza Garg</div>
        </div>
        <div className="py-4 flex flex-col space-y-4">
          <SidebarCards
            label="Contact"
            title="Email"
            data="lizagarg5@gmail.com"
            sociallink="mailto:${lizagarg5@gmail.com}"
          ></SidebarCards>
          <SidebarCards
            label="Leetcode"
            title="Leetcode"
            data="lizagarg"
            sociallink="https://leetcode.com/lizagarg"
          ></SidebarCards>
          <SidebarCards
            label="Github"
            title="Github"
            data="lizagarg"
            sociallink="https://github.com/lizagarg"
          ></SidebarCards>
          <SidebarCards
            label="LinkedIn"
            title="LinkedIn"
            data="Liza Garg"
            sociallink="https://www.linkedin.com/in/liza-garg-2467211a7/"
          ></SidebarCards>
          <SidebarCards
            onClick={handleOpen}
            label="Resume"
            title="Resume"
            data="Liza Garg"
          ></SidebarCards>
          <SidebarCards
            label="Location"
            title="Location"
            data="India"
          ></SidebarCards>
        </div>
      </div>

      {/* Sidebar for small screens */}
      <div className="md:hidden">
        <button
          className="fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        {isOpen && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-50">
            <div className="bg-white dark:bg-[#282828] w-60 h-full p-4">
              <button
                className="text-gray-800 dark:text-white mb-4"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
              <div className="flex flex-col items-center text-3xl font-bold text-gray-800">
                <div className="w-30 h-30 rounded-2xl">
                  <img
                    className="bg-blue-50 dark:bg-[#1a1a1a] rounded-2xl"
                    src="/avatar_1738345162-removebg-preview.png"
                    alt=""
                  />
                </div>
                <div className="dark:text-white">Liza Garg</div>
              </div>
              <div className="py-4 flex flex-col space-y-4">
                <SidebarCards
                  label="Contact"
                  title="Email"
                  data="lizagarg5@gmail.com"
                  sociallink="mailto:${lizagarg5@gmail.com}"
                ></SidebarCards>
                <SidebarCards
                  label="Leetcode"
                  title="Leetcode"
                  data="lizagarg"
                  sociallink="https://leetcode.com/lizagarg"
                ></SidebarCards>
                <SidebarCards
                  label="Github"
                  title="Github"
                  data="lizagarg"
                  sociallink="https://github.com/lizagarg"
                ></SidebarCards>
                <SidebarCards
                  label="LinkedIn"
                  title="LinkedIn"
                  data="Liza Garg"
                  sociallink="https://www.linkedin.com/in/liza-garg-2467211a7/"
                ></SidebarCards>
                <SidebarCards
                  onClick={handleOpen}
                  label="Resume"
                  title="Resume"
                  data="Liza Garg"
                ></SidebarCards>
                <SidebarCards
                  label="Location"
                  title="Location"
                  data="India"
                ></SidebarCards>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
