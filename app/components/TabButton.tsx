import { motion } from "framer-motion";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  text: string;
}

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

export const TabButton = ({ active, selectTab, text }: TabButtonProps) => {
  const buttonClasses = active
    ? "text-[#EDE6D3] "
    : "text-[#C2A48C] hover:text-[#EDE6D3]";

  return (
    <button onClick={selectTab} className="cursor-pointer">
      <p
        className={`mr-3 font-semibold transition-colors duration-300 ${buttonClasses}`}
      >
        {text}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-[#EDE6D3] mt-2 mr-3"
      ></motion.div>
    </button>
  );
};
