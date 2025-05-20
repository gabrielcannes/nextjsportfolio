import { EyeIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  previewUrl?: string;
}

export const ProjectCard = ({
  imgUrl,
  title,
  description,
  previewUrl = "/",
}: ProjectCardProps) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="gap-10 items-center justify-center overlay absolute top-0 left-0 w-full h-full bg-[#18120F] hidden opacity-80 group-hover:flex group-hover:bg-opacity-0 transition-all duration-500">
          <Link
            className="h-14 w-14 border-2 relative rounded-full border-[#D6C7A1] hover:border-white"
            href={previewUrl}
          >
            <EyeIcon className="h-10 w-10 text-[#D6C7A1] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-[#F3EFE7] mb-5 rounded-b-xl  bg-[#100c0a] py-6 px-4">
        <h5 className="text-lg font-semibold mb-2">{title}</h5>
        <p className="text-[#BFAF9B]">{description}</p>
      </div>
    </div>
  );
};
