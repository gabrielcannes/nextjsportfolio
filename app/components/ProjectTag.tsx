interface ProjectTagProps {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}

export const ProjectTag = ({ name, onClick, isSelected }: ProjectTagProps) => {
  const buttonStyles = isSelected
    ? "text-white border-[#C2A48C]"
    : "text-[#EDE6D3] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2  px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};
