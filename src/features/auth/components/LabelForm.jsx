export default function LabelForm({ id, text }) {
  return <label htmlFor={id}>{text}</label>;
}
