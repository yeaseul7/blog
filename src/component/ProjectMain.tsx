import { SetStateAction, useEffect, useState } from "react";
import CapsuleGrid from "./CapsuleGrid";

import { useNavigate } from "react-router-dom";

type Capsule = {
  title: string;
  summary: string;
  img: string;
  path: string;
  component: JSX.Element;
};
type SubMenu = {
  name: string;
  path: string;
  list: Capsule[];
};
interface ProjectMainProps {
  subMenuList: SubMenu[];
}

const ProjectMain = ({ subMenuList }: ProjectMainProps) => {
  //! useNavigate에 대해
  const navigate = useNavigate();
  // subMenuList가 변경될 때마다 첫 번째 subMenu로 이동
  useEffect(() => {
    navigate(subMenuList[0].path);
    setComponentList(subMenuList[0].list);
  }, [subMenuList]);
  const [componentList, setComponentList] = useState([] as Capsule[]);

  return (
    <div className="rounded-lg">
      <div className="flex justify-center h-auto mx-auto my-5">
        <ul className="flex space-x-4">
          {subMenuList.map((subMenu: SubMenu, index: number) => (
            <li key={index} className="inline-block">
              <button
                onClick={() => {
                  navigate(subMenu.path);
                  setComponentList(subMenu.list);
                }}
                className="text-lg font-semibold"
              >
                {subMenu.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div id="subMain" className="h-fit-content">
        <CapsuleGrid componentList={componentList} />
      </div>
    </div>
  );
};
export default ProjectMain;
