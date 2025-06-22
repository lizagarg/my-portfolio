import { ContactForm } from "../components/ContactForm";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

export const Contact = () => {
  return (
    <div className="dark:bg-[#1a1a1a] min-h-screen flex flex-col overflow-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Sidebar - Hidden on small screens */}
        <div className="hidden md:block">
          <Sidebar />
        </div>
        {/* Contact Form */}
        <div className="flex-1 px-4 sm:px-6 md:px-10">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};


