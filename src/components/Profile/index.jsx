import "./styles.css";

export function Profile({ name, age, children }) {
  return (
    <div>
      <span>{name}</span>
      <span>{age}</span>
      {children}
    </div>
  );
}
