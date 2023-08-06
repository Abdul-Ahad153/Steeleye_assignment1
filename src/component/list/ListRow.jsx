import styles from "./ListRow.module.css";

const ListCell = (props) => {
  return <tr className={styles.cell} onClick={props.onClick}>{props.children}</tr>;
};

export default ListCell;
