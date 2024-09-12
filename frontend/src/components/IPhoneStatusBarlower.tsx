import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./IPhoneStatusBarlower.module.css";

export type IPhoneStatusBarlowerType = {
  className?: string;

  /** Style props */
  iPhoneStatusBarlowerWidth?: CSSProperties["width"];
  iPhoneStatusBarlowerBackgroundColor?: CSSProperties["backgroundColor"];
  iPhoneStatusBarlowerAlignSelf?: CSSProperties["alignSelf"];
  iPhoneStatusBarlowerPosition?: CSSProperties["position"];
  iPhoneStatusBarlowerBottom?: CSSProperties["bottom"];
  iPhoneStatusBarlowerLeft?: CSSProperties["left"];
  baseBackgroundColor?: CSSProperties["backgroundColor"];
};

const IPhoneStatusBarlower: FunctionComponent<IPhoneStatusBarlowerType> = ({
  className = "",
  iPhoneStatusBarlowerWidth,
  iPhoneStatusBarlowerBackgroundColor,
  iPhoneStatusBarlowerAlignSelf,
  iPhoneStatusBarlowerPosition,
  iPhoneStatusBarlowerBottom,
  iPhoneStatusBarlowerLeft,
  baseBackgroundColor,
}) => {
  const iPhoneStatusBarlowerStyle: CSSProperties = useMemo(() => {
    return {
      width: iPhoneStatusBarlowerWidth,
      backgroundColor: iPhoneStatusBarlowerBackgroundColor,
      alignSelf: iPhoneStatusBarlowerAlignSelf,
      position: iPhoneStatusBarlowerPosition,
      bottom: iPhoneStatusBarlowerBottom,
      left: iPhoneStatusBarlowerLeft,
    };
  }, [
    iPhoneStatusBarlowerWidth,
    iPhoneStatusBarlowerBackgroundColor,
    iPhoneStatusBarlowerAlignSelf,
    iPhoneStatusBarlowerPosition,
    iPhoneStatusBarlowerBottom,
    iPhoneStatusBarlowerLeft,
  ]);

  const baseStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: baseBackgroundColor,
    };
  }, [baseBackgroundColor]);

  return (
    <div
      className={[styles.darkModefalse, className].join(" ")}
      style={iPhoneStatusBarlowerStyle}
    >
      <div className={styles.bar}>
        <div className={styles.base} style={baseStyle} />
      </div>
    </div>
  );
};

export default IPhoneStatusBarlower;
