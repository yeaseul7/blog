import { useState } from "react";
import TailwindMd from "./TailwindMd";

type Capsule = {
  title: string;
  summary: string;
  img: string;
  component: React.ReactNode;
};

type CapsuleGridProps = {
  onSelect: (capsule: Capsule) => Capsule;
};

const mockData: Capsule[] = [
  {
    title: "[Style] TailwindCss 환경에서 Markdown 스타일 error",
    summary:
      "하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하",
    img: "/logo512.png",
    component: <TailwindMd />,
  },
  {
    title: "[Style] TailwindCss 환경에서 Markdown 스타일 error",
    summary:
      "TailwindCss이 사용자로 하여금 자유로운 css 활용을 위해 markdown의 스타일을 적용하는데에 어려움이 있습니다.",
    img: "/logo512.png",
    component: <TailwindMd />,
  },
  {
    title: "[Style] TailwindCss 환경에서 Markdown 스타일 error",
    summary:
      "TailwindCss이 사용자로 하여금 자유로운 css 활용을 위해 markdown의 스타일을 적용하는데에 어려움이 있습니다.",
    img: "/logo512.png",
    component: <TailwindMd />,
  },
];

function CapsuleGrid({ onSelect }: CapsuleGridProps) {
  const [capsules, setCapsules] = useState<Capsule[]>(mockData);

  const handleSelect = (capsule: Capsule) => {
    onSelect(capsule);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {capsules.map((capsule, index) => (
        <div
          id="capsule"
          onClick={() => handleSelect(capsule)}
          key={index}
          className="border border-gray-300 shadow-sm w-80"
        >
          <div id="imgFrame">
            <img
              src={capsule.img}
              alt="error"
              className="absolute top-0 left-0 object-cover w-full h-full"
            />
          </div>
          <div className="p-2 ">
            <h3 className="my-4 font-bold text-left ">{capsule.title}</h3>
            <p className="my-4 text-sm text-left text-gray-500">
              {capsule.summary}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default CapsuleGrid;
