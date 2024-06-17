import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  markdown: string;
};

export default function PreviewArea({ markdown }: Props) {
  return (
    <Markdown className="prose px-3 w-full bg-white h-screen" remarkPlugins={[remarkGfm]}>
      {markdown}
    </Markdown>
  );
}
