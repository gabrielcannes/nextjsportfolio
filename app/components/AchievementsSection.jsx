"use client";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const achievementsList = [
  {
    metric: "Projects",
    value: "5",
    postFix: "+",
  },
  {
    metric: "Impact",
    value: "30",
    postFix: "s",
  },
  {
    metric: "Courses",
    value: "10",
    postFix: "+",
  },
  {
    metric: "Years",
    value: "5",
    postFix: "+",
  },
];

export const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
      <div className="border-[#33353F] border rounded-md py-8 md:px-16 flex flex-wrap justify-center gap-6 sm:justify-between">

        {achievementsList.map((a, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4"
            >
              <h2 className="text-white text-4xl font-bold flex items-center">
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(a.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => ({
                    mass: 1,
                    tension: 140 * (index + 1),
                    friction: 100,
                  })}
                />
                <span className="ml-1">{a.postFix}</span>
              </h2>
              <p className="text-[#ADB7BE] text-base">{a.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
