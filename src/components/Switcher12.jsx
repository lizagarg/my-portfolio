import React, { useState, useEffect } from 'react';

const Switcher12 = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
 

    useEffect(()=>{
        localStorage.setItem("isDarkMode",true);
        document.documentElement.classList.add("dark");
    },[])
   const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("isDarkMode", newMode.toString());

    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleTheme}  // ✅ should be onChange, not onClick
          className="sr-only"
        />
        <span className="label flex items-center text-sm font-medium text-black dark:text-white">
          Light
        </span>
        <span
          className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
            isDarkMode ? 'bg-[#212b36]' : 'bg-[#CCCCCE]'
          }`}
        >
          <span
            className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
              isDarkMode ? 'translate-x-[28px]' : 'bg-black'
            }`}
          ></span>
        </span>
        <span className="label flex items-center text-sm font-medium text-black dark:text-white">
          Dark
        </span>
      </label>
    </>
  );
};

export default Switcher12;
