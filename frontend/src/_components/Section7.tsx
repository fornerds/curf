import { FunctionComponent } from "react";
import Buttonrequest from "./Buttonrequest";
import styles from "./Section7.module.css";

export type Section7Type = {
  className?: string;
};

const Section7: FunctionComponent<Section7Type> = ({ className = "" }) => {
  return (
    <div className={[styles.section, className].join(" ")}>
      <div className={styles.title}>
        <div className={styles.div}>기업이신가요?</div>
        <div className={styles.div1}>기업전용 서비스에 문의하세요</div>
      </div>
      <Buttonrequest
        buttonrequestWidth="unset"
        buttonrequestAlignSelf="stretch"
      />
    </div>
  );
};

export default Section7;
