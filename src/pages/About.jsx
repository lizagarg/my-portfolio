import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"
import { Main } from "../components/Main"
import { ProjectCard } from "../components/ProjectCard"

export const About = () => {
  return (
    <div className="bg-[#ffffff] dark:bg-[#1a1a1a] min-h-screen"> 
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-4">
        <div className="py-6 hidden md:block">
          <Sidebar />
        </div>
        <div className="flex flex-col flex-1">
          <div className="bg-white dark:bg-[#1a1a1a] my-6 rounded-2xl px-4 sm:px-6 py-4 dark:border-0 shadow-md">
            <Main />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
          <ProjectCard
              picture="echoverse"
              title="EchoVerse"
              description="A secure blogging platform that allows users to create, edit, and manage blogs effortlessly, with robust authentication and authorization."
              skills={["React.js", "Hono.js", "Prisma", "PostgreSQL"]}
            />

            <ProjectCard
              picture="bhavanuvad"
              title="BhavAnuvad"
              description="A Hindi sentiment analysis app which is fine-tuned on IndicBERT, achieving 90% accuracy across 7 sentiment categories."
              skills={["NLP", "Python", "Transformers", "IndicBERT"]}
            />

            <ProjectCard
              picture="sahayika"
              title="Sahayika"
              description="A web app to auto-fill financial forms for underserved women, cutting manual effort by 80% using BERT, spaCy, and Vosk."
              skills={["React.js", "BERT", "Tesseract.js", "Vosk", "spaCy"]}
            />

            <ProjectCard
              picture="newsbot"
              title="NewsBot"
              description="An AI-powered tool to automate news research with question-answering, semantic search, and document chunking."
              skills={["LangChain", "Streamlit", "Gemini API", "FAISS"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
