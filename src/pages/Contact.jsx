import { ContactForm } from "../components/ContactForm";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

export const Contact = () => {
  return (
    <div className="bg-[#ffffff] dark:bg-[#1a1a1a] min-h-screen flex flex-col">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="hidden md:block py-6">
            <Sidebar />
          </div>
          <div className="flex-1 px-0 md:px-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};


