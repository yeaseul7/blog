import { useEffect, useRef } from "react";

const Comment = () => {
  const commentsEl = useRef<HTMLDivElement>(null);
  const isMounted = useRef(false); // useRef를 사용하여 마운트 상태를 관리

  useEffect(() => {
    console.log(isMounted, "isMounted");

    if (!isMounted.current) {
      // 첫 실행 때만 실행
      const scriptEl = document.createElement("script");
      scriptEl.async = true;
      scriptEl.src = "https://utteranc.es/client.js";
      scriptEl.setAttribute("repo", "yeaseul7/neekoBlog");
      scriptEl.setAttribute("issue-term", "pathname");
      scriptEl.setAttribute("theme", "github-light");
      scriptEl.setAttribute("crossorigin", "anonymous");
      commentsEl.current?.appendChild(scriptEl);
      isMounted.current = true; // 마운트 상태 업데이트
    }
  }, []); // 빈 배열 의존성으로 한 번만 실행

  return (
    <div>
      댓글
      <div ref={commentsEl} />
    </div>
  );
};

export default Comment;
