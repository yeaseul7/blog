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
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {componentList.map((capsule, index) => (
        <div
          id="capsule"
          onClick={() => navigate(capsule.path)}
          key={index}
          className="w-64 p-3 overflow-hidden border border-gray-300 rounded-lg shadow-sm "
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
