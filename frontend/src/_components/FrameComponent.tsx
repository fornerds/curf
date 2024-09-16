import { FunctionComponent } from "react";
import Radiobox from "./Radiobox";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.textParent, className].join(" ")}>
      <div className={styles.text}>
        <div className={styles.div}>성별</div>
      </div>
      <div className={styles.radioboxParent}>
        <Radiobox
          radiobox="/radiobox1.svg"
          prop="여성"
          radioboxPosition="unset"
        />
        <Radiobox
          radiobox="/radiobox.svg"
          prop="남성"
          radioboxPosition="unset"
        />
        <Radiobox
          radiobox="/radiobox.svg"
          prop="선택하지 않음"
          radioboxPosition="unset"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
