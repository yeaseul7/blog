import { useNavigate } from "react-router-dom";

type Capsule = {
  title: string;
  summary: string;
  img: string;
  path: string;
};

type CapsuleGridProps = {
  componentList: Capsule[];
};

function CapsuleGrid({ componentList }: CapsuleGridProps) {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-3 gap-4">
      {componentList.map((capsule, index) => (
        <div
          id="capsule"
          onClick={() => navigate(capsule.path)}
          key={index}
          className="border border-gray-300 rounded-lg shadow-sm w-80 overflow-hidden p-3 "
        >
          <div id="imgFrame">
            <img
              src={capsule.img}
              alt={capsule.title}
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
