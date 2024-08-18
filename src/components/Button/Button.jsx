import "./Button.scss";

function Button({ onClick, children, type }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`button button--${type}`}>
      {children}
    </button>
  );
}
export default Button;
