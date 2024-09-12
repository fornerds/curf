import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Buttonrequest.module.css";

export type ButtonrequestType = {
  className?: string;

  /** Style props */
  buttonrequestWidth?: CSSProperties["width"];
  buttonrequestAlignSelf?: CSSProperties["alignSelf"];
};

const Buttonrequest: FunctionComponent<ButtonrequestType> = ({
  className = "",
  buttonrequestWidth,
  buttonrequestAlignSelf,
}) => {
  const buttonrequestStyle: CSSProperties = useMemo(() => {
    return {
      width: buttonrequestWidth,
      alignSelf: buttonrequestAlignSelf,
    };
  }, [buttonrequestWidth, buttonrequestAlignSelf]);

  return (
    <div
      className={[styles.buttonrequest, className].join(" ")}
      style={buttonrequestStyle}
    >
      <div className={styles.buttonrequestChild} />
      <div className={styles.autolayout}>
        <img
          className={styles.autolayoutChild}
          alt=""
          src="/group-1707481462.svg"
        />
        <div className={styles.div}>문의하기</div>
      </div>
    </div>
  );
};

export default Buttonrequest;
