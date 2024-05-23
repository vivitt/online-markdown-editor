export default function EditArea({ onChange }) {
  return (
    <textarea
      className="resize-none w-full min-h-screen"
      onChange={(e) => onChange(e)}
    ></textarea>
  );
}
