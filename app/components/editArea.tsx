export default function EditArea({ onChange, lines }) {
  return (
    <div
      className="flex font-mono "
      role="textbox"
      lang="markdown"
      aria-multiline="true"
      aria-live="polite"
    >
      <div
        id="gutter"
        aria-hidden="true"
        className="w-5  flex flex-col items-center bg-white px-5"
      >
        {!!lines[0] &&
          lines.some((el) => el.trim !== "") &&
          lines.map((i, index) => {
            return (
              <span className="" key={index + 1}>
                {index + 1}
              </span>
            );
          })}
      </div>
      <textarea
        aria-autocomplete="list"
        data-language="markdown"
        className="resize-none w-full h-screen focus:outline-0"
        onChange={(e) => onChange(e)}
      ></textarea>
      {/* <div
        contentEditable="true"
       
       
       
        style={{ tabSize: 2 }}
        className="resize-none w-full min-h-screen"
        onChange={(e) => onChange(e)}
      ></div> */}
    </div>
  );
}
