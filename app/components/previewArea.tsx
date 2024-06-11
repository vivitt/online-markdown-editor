import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  markdown: string;
};

export default function PreviewArea({ markdown }: Props) {
  return (
    <Markdown className="prose px-3 flex bg-white " remarkPlugins={[remarkGfm]}>
      {markdown}
    </Markdown>
  );
}
