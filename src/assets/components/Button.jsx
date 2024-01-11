import styles from "./Button.module.css";
const Button = ({ onClickButton }) => {
  const list = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div id={styles.button_container}>
      {list.map((icon) => (
        <button id={styles.btn} onClick={() => onClickButton(icon)}>
          {icon}
        </button>
      ))}
    </div>
  );
};
export default Button;
