import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Text1.module.css";

export type Text1Type = {
  className?: string;

  /** Style props */
  textPosition?: CSSProperties["position"];
};

const Text1: FunctionComponent<Text1Type> = ({
  className = "",
  textPosition,
}) => {
  const textStyle: CSSProperties = useMemo(() => {
    return {
      position: textPosition,
    };
  }, [textPosition]);

  return (
    <div
      className={[styles.property1default, className].join(" ")}
      style={textStyle}
    >
      <div className={styles.div}>무엇이 궁금하신가요?</div>
      <img className={styles.icon} alt="" src="/icon4.svg" />
    </div>
  );
};

export default Text1;
