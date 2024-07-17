// src/asset/markdown/index.js
import { Recursion } from "./algorithm/recursion";
import { introMd } from "./intro/introMD";
import { notfoundError } from "./project/blog/notfoundError";
import { gdsc } from "./retrospect/2023/gdsc";
import { AzureFunctions } from "./tech/azure/AzureFunctions";
import { MsRetrieveData } from "./tech/azure/MsRetrieveData";
import { NodeAWS } from "./tech/azure/NodeAWS";
import { InterpreterAndCompiler } from "./tech/cs/interpreterAndCompiler";
import { Join } from "./tech/sql/join";
import { CsrAndSeo } from "./tech/web/CsrAndSeo";
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
  notfoundError,
  Join,
  MsRetrieveData,
  NodeAWS,
  CsrAndSeo,
  // 다른 Markdown 파일들도 여기에 추가
};
