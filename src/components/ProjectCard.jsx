import { Picture } from "./Picture";
import { SkillCard } from "./SkillCard";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

export const ProjectCard = ({ description, title, picture, skills = [] }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const onMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <div className="mb-4">
      <motion.div
        onMouseMove={onMouseMove}
        className="dark:bg-[#282828] dark:border-0 group relative dark:text-[#c1c0c0] bg-white w-full px-4 sm:px-5 py-3 rounded-2xl border border-gray-300 cursor-pointer overflow-hidden transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg"
      >
        <Effect mouseX={mouseX} mouseY={mouseY} />
        <div className="relative z-10">
          <div className="pt-4 text-red-400">
            <Picture picture={picture || title.toLowerCase()} />
          </div>
          <div className="text-lg sm:text-xl font-medium pt-2">{title}</div>
          <div className="pt-2 sm:pt-3 text-sm sm:text-base">{description}</div>
          <div className="flex flex-wrap gap-2 mt-2">
            {skills.map((skill, index) => (
              <div key={index} className="pt-2">
                <SkillCard skill={skill} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

function Effect({ mouseX, mouseY }) {
  const maskImage = useMotionTemplate`radial-gradient(200px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#ffbe8a] to-[#f6b5b3] opacity-0 transition duration-500 group-hover:opacity-100"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-500 group-hover:opacity-100"
        style={style}
      />
    </div>
  );
}
