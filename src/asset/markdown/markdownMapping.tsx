// src/asset/markdown/index.js
import { introMd } from "./intro/introMD";
interface MarkdownMap {
  [key: string]: string; // 인덱스 시그니처 추가
}
export const markdownMap: MarkdownMap = {
  introMd,
  // 다른 Markdown 파일들도 여기에 추가
};
