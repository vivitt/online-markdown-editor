import Markdown from "react-markdown";

import remarkGfm from "remark-gfm";

export default function PreviewArea({
  markdown 
}
) {
  return (
    <Markdown className="prose px-3 bg-white " remarkPlugins={[remarkGfm]}>
      {markdown}
    </Markdown>
  );
}
