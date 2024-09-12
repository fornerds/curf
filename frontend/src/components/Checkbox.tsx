import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Checkbox.module.css";

export type CheckboxType = {
  className?: string;
  prop?: string;

  /** Style props */
  checkboxPosition?: CSSProperties["position"];
  checkboxTop?: CSSProperties["top"];
  checkboxLeft?: CSSProperties["left"];
  checkboxAlignSelf?: CSSProperties["alignSelf"];
};

const Checkbox: FunctionComponent<CheckboxType> = ({
  className = "",
  prop,
  checkboxPosition,
  checkboxTop,
  checkboxLeft,
  checkboxAlignSelf,
}) => {
  const checkbox1Style: CSSProperties = useMemo(() => {
    return {
      position: checkboxPosition,
      top: checkboxTop,
      left: checkboxLeft,
      alignSelf: checkboxAlignSelf,
    };
  }, [checkboxPosition, checkboxTop, checkboxLeft, checkboxAlignSelf]);

  return (
    <div
      className={[styles.property1default, className].join(" ")}
      style={checkbox1Style}
    >
      <div className={styles.property1defaultChild} />
      <div className={styles.div}>{prop}</div>
    </div>
  );
};

export default Checkbox;
