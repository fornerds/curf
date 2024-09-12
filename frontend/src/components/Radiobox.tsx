import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Radiobox.module.css";

export type RadioboxType = {
  className?: string;
  radiobox?: string;
  prop?: string;

  /** Style props */
  radioboxPosition?: CSSProperties["position"];
};

const Radiobox: FunctionComponent<RadioboxType> = ({
  className = "",
  radiobox,
  prop,
  radioboxPosition,
}) => {
  const radioboxStyle: CSSProperties = useMemo(() => {
    return {
      position: radioboxPosition,
    };
  }, [radioboxPosition]);

  return (
    <div
      className={[styles.property1default, className].join(" ")}
      style={radioboxStyle}
    >
      <img className={styles.radioboxIcon} alt="" src={radiobox} />
      <div className={styles.div}>{prop}</div>
    </div>
  );
};

export default Radiobox;
