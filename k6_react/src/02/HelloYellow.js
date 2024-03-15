import styles from "./HelloYellow.module.css"
import { RiAlertFill } from "react-icons/ri";
import { TfiAlignJustify } from "react-icons/tfi";

export default function HelloYellow() {
  return (
    <div>

      <RiAlertFill className="text-white"/>
      <TfiAlignJustify className ="text-white"/>
      <h1 className={styles.ch1}>안녕하세요</h1>
    </div>
  )
}
