import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router-dom";
import remarkGfm from "remark-gfm";
import { markdownMap } from "../asset/markdown/markdownMapping";
import Comment from "./Comment";
interface PageModuleProps {
  type?: string;
  img?: string;
}
const PageModule: React.FC<PageModuleProps> = ({ type, img }) => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const pageSagment = pathSegments[pathSegments.length - 2];
  const imgSagment = pathSegments[pathSegments.length - 1];

  const [markdownContent, setMarkdownContent] = useState("");
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    let content = markdownMap[pageSagment];

    let img = imgSagment
      ? `https://yeaseul7.github.io/neekoBlog/images/${imgSagment}.png`
      : "";
    console.log(img, "img");

    setImgSrc(img || "");
    if (type) {
      content = markdownMap[type];
    }

    setMarkdownContent(content || "Content not found.");
  }, [pageSagment]);

  return (
    <div className="m-4 prose" id="capsule">
      {imgSrc && (
        <div className="text-center">
          <img src={imgSrc} alt="img" className="rounded-lg" />
        </div>
      )}

      <div className="text-left markdown-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {markdownContent}
        </ReactMarkdown>
      </div>
      <hr />
      <Comment />
    </div>
  );
};

export default PageModule;
