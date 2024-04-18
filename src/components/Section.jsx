export default function Section({ children, title, ...props }) {
  console.log(props);
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
