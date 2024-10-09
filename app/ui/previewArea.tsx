import Markdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

type Props = {
  markdown: string;
};

export default function PreviewArea({ markdown }: Props) {
  return (
    <Markdown
      className="prose px-3 w-full bg-white h-screen"
      remarkPlugins={[gfm]}
      rehypePlugins={[rehypeRaw]}
    >
      {markdown}
    </Markdown>
  );
}
