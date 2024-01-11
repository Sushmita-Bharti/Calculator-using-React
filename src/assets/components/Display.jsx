import styles from "./Display.module.css";

const Display = ({ currentvalue }) => {
  return (
    <>
      <input
        type="text"
        id={styles.input_container}
        value={currentvalue}
        readOnly
      ></input>
    </>
  );
};
export default Display;
