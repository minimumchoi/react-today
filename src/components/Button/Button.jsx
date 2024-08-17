import "./Button.scss";

function Button({ name, type }) {
  return (
    <button type="button" className={`button button--${type}`}>
      {name}
    </button>
  );
}
export default Button;
