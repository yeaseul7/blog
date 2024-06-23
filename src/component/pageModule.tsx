import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router-dom";
import remarkGfm from "remark-gfm";
import { markdownMap } from "../asset/markdown/markdownMapping";
interface PageModuleProps {
  type?: string;
}
const PageModule: React.FC<PageModuleProps> = ({ type }) => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];

  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    let content = markdownMap[lastSegment];
    if (type) {
      content = markdownMap[type];
    }

    setMarkdownContent(content || "Content not found.");
  }, [lastSegment]);

  return (
    <div className="m-4 prose" id="capsule">
      <div className="text-left markdown-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {markdownContent}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default PageModule;
