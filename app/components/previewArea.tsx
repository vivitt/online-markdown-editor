import Markdown from "react-markdown";
export default function PreviewArea({ markdown }) {
  return <Markdown className="prose px-3 bg-white ">{markdown}</Markdown>;
}
