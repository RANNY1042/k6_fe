import styles from "./HelloWhite.module.css"
import { RiAccountCircleLine } from "react-icons/ri";

export default function HelloWhite() {
  return (
    <div>
    <h1 className={styles.ch1}><RiAccountCircleLine size="50"/>
    안녕하세요</h1>
    </div>
  );
}
