import { FunctionComponent } from "react";
import Radiobox from "./Radiobox";
import styles from "./Section2.module.css";

export type Section2Type = {
  className?: string;
};

const Section2: FunctionComponent<Section2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.section, className].join(" ")}>
      <div className={styles.wrapper}>
        <b className={styles.b}>결제 방법</b>
      </div>
      <div className={styles.radioboxParent}>
        <Radiobox
          radiobox="/radiobox.svg"
          prop="신용카드"
          radioboxPosition="unset"
        />
        <Radiobox
          radiobox="/radiobox.svg"
          prop="가상계좌"
          radioboxPosition="unset"
        />
        <Radiobox
          radiobox="/radiobox.svg"
          prop="무통장 입금"
          radioboxPosition="unset"
        />
        <Radiobox
          radiobox="/radiobox.svg"
          prop="핸드폰 결제"
          radioboxPosition="unset"
        />
        <Radiobox
          radiobox="/radiobox.svg"
          prop="카카오페이"
          radioboxPosition="unset"
        />
      </div>
    </div>
  );
};

export default Section2;
