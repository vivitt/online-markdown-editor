export default function editArea({ onChange }) {
  return (
    <section>
      <h2>Edit</h2>
      <textarea onChange={(e) => onChange(e)}></textarea>
    </section>
  );
}
