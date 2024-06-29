// src/asset/markdown/index.js
import { Recursion } from "./algorithm/recursion";
import { introMd } from "./intro/introMD";
import { gdsc } from "./retrospect/2023/gdsc";
import { AzureFunctions } from "./tech/azure/AzureFunctions";
import { InterpreterAndCompiler } from "./tech/cs/interpreterAndCompiler";
import { DocumentAndHTML } from "./tech/web/DocumentAndHTML";
interface MarkdownMap {
  [key: string]: string; // 인덱스 시그니처 추가
}
export const markdownMap: MarkdownMap = {
  introMd,
  InterpreterAndCompiler,
  gdsc,
  DocumentAndHTML,
  Recursion,
  AzureFunctions,
  // 다른 Markdown 파일들도 여기에 추가
};
