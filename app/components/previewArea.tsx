import Markdown from "react-markdown";
export default function PreviewArea({ markdown }) {
  return (
    <Markdown className="prose p-5 bg-white h-screen">{markdown}</Markdown>
  );
}
