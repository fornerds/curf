import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Checkbox1.module.css";

export type Checkbox1Type = {
  className?: string;
  prop?: string;

  /** Style props */
  checkboxPosition?: CSSProperties["position"];
  checkboxAlignSelf?: CSSProperties["alignSelf"];
};

const Checkbox1: FunctionComponent<Checkbox1Type> = ({
  className = "",
  prop,
  checkboxPosition,
  checkboxAlignSelf,
}) => {
  const checkboxStyle: CSSProperties = useMemo(() => {
    return {
      position: checkboxPosition,
      alignSelf: checkboxAlignSelf,
    };
  }, [checkboxPosition, checkboxAlignSelf]);

  return (
    <div
      className={[styles.property1checked, className].join(" ")}
      style={checkboxStyle}
    >
      <div className={styles.checkbox}>
        <div className={styles.checked}>
          <div className={styles.checkedChild} />
          <img className={styles.checkedItem} alt="" src="/vector-9.svg" />
        </div>
      </div>
      <div className={styles.div}>{prop}</div>
    </div>
  );
};

export default Checkbox1;
