import ReactMarkdown from "react-markdown";
import React from "react";
import remarkGfm from "remark-gfm";

const BlogIntro = () => {
  const markdownText = `
  ## Hello, Welcome to SsaongBlog👋🏻
  저는 **SSaongBlog**를 학업과 성장을 목적으로 제작하였습니다.  
  
  현재 저는 IT회사에서 개발자로 근무하고 있습니다.  
  CRM 시스템을 개발하고 있으며, 주로 **Vue.js**와 **Node.js**를 사용하고 있습니다.

  ---  
  해당 블로그는 **React, TypeScript, TailwindCSS, Node.js**를 사용하여 제작하였습니다.  
  `;
  return (
    <div className="prose" id="capsule">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownText}</ReactMarkdown>
    </div>
  );
};

export default BlogIntro;
