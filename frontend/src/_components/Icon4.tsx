import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Icon4.module.css";

export type Icon4Type = {
  className?: string;

  /** Style props */
  iconPosition?: CSSProperties["position"];
  iconTop?: CSSProperties["top"];
  iconLeft?: CSSProperties["left"];
};

const Icon4: FunctionComponent<Icon4Type> = ({
  className = "",
  iconPosition,
  iconTop,
  iconLeft,
}) => {
  const iconStyle: CSSProperties = useMemo(() => {
    return {
      position: iconPosition,
      top: iconTop,
      left: iconLeft,
    };
  }, [iconPosition, iconTop, iconLeft]);

  return (
    <div
      className={[styles.property1menu, className].join(" ")}
      style={iconStyle}
    >
      <div className={styles.line}>
        <div className={styles.lineChild} />
        <div className={styles.lineItem} />
        <div className={styles.lineInner} />
      </div>
    </div>
  );
};

export default Icon4;
