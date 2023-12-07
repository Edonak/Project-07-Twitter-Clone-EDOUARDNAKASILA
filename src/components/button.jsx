export default function Button({ name, ...props }) {
  return <button {...props}>{name}</button>
}
