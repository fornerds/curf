import { FunctionComponent } from "react";
import Cardsubscribe from "./Cardsubscribe";
import styles from "./Section5.module.css";

export type Section5Type = {
  className?: string;
};

const Section5: FunctionComponent<Section5Type> = ({ className = "" }) => {
  return (
    <div className={[styles.section, className].join(" ")}>
      <div className={styles.title}>
        <div className={styles.div}>구독 결제</div>
      </div>
      <Cardsubscribe />
    </div>
  );
};

export default Section5;
