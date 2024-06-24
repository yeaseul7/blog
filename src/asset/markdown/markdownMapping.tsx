// src/asset/markdown/index.js
import { introMd } from "./intro/introMD";
import { InterpreterAndCompiler } from "./tech/cs/interpreterAndCompiler";
interface MarkdownMap {
  [key: string]: string; // 인덱스 시그니처 추가
}
export const markdownMap: MarkdownMap = {
  introMd,
  InterpreterAndCompiler,
  // 다른 Markdown 파일들도 여기에 추가
};
