import { SetStateAction, useEffect, useState } from "react";
import TailwindMd from "./ErrorPage/TailwindMd";
import CapsuleGrid from "./ErrorPage/CapsuleGrid";
import Post from "./Post";

type Capsule = {
  title: string;
  summary: string;
  img: string;
  component: React.ReactNode;
};

const ProjectMain = () => {
  const [nowComponent, setNowComponent] = useState("all");
  const [isGridMode, setIsGridMode] = useState(true);
  const [selectedCapsule, setSelectedCapsule] = useState<Capsule | null>(null);

  const onSelect = (capsule: Capsule): Capsule => {
    setSelectedCapsule(capsule);
    return capsule;
  };

  //이 페이지가 처음에 mount될 때 get요청으로 현재 있는 페이지의 개수와 각 페이지의 사진과 제목, 요약을 받아옵니다.
  //이후 map을 사용하여 화면에 배포합니다.
  //아직 back 개발이 완료되지 않았기 때문에 주석으로 설명해놓습니다.

  const [capsuleList, setCapsuleList] = useState([
    {
      title: "TailwindCss 환경에서 Markdown 스타일 error",
      summary:
        "TailwindCss이 사용자로 하여금 자유로운 css 활용을 위해 markdown의 스타일을 적용하는데에 어려움이 있습니다.",
      img: "react.png",
    },
    {
      title: "Vue",
      summary: "Vue는 Evan You가 만든 라이브러리입니다.",
      img: "vue.png",
    },
    {
      title: "Angular",
      summary: "Angular는 구글에서 만든 라이브러리입니다.",
      img: "angular.png",
    },
  ]);

  useEffect(() => {
    // nowComponent가 변경될 때마다 이 함수가 실행됩니다.
    console.log(`nowComponent has changed to: ${nowComponent}`);
  }, [nowComponent]);
  return (
    <div className="w-5/7">
      <div className="flex justify-center h-14">
        <ul className="flex space-x-4">
          <li>
            <button
              className="px-4 py-2 rounded linkStyle"
              onClick={() => setNowComponent("style")}
            >
              style
            </button>
          </li>
          <li>
            <button
              className="px-4 py-2 rounded linkStyle"
              onClick={() => setNowComponent("error")}
            >
              error
            </button>
          </li>
          <li>
            <button
              className="px-4 py-2 rounded linkStyle"
              onClick={() => setNowComponent("feature")}
            >
              feature
            </button>
          </li>
        </ul>
      </div>
      <div id="subMain" className="h-fit-content">
        {isGridMode ? (
          <CapsuleGrid onSelect={onSelect} />
        ) : (
          <Post capsule={selectedCapsule} />
        )}
      </div>
    </div>
  );
};
export default ProjectMain;
