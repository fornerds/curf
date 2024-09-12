import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Logo1.module.css";

export type Logo1Type = {
  className?: string;

  /** Style props */
  logoPosition?: CSSProperties["position"];
  logoTop?: CSSProperties["top"];
  logoLeft?: CSSProperties["left"];
};

const Logo1: FunctionComponent<Logo1Type> = ({
  className = "",
  logoPosition,
  logoTop,
  logoLeft,
}) => {
  const logoStyle: CSSProperties = useMemo(() => {
    return {
      position: logoPosition,
      top: logoTop,
      left: logoLeft,
    };
  }, [logoPosition, logoTop, logoLeft]);

  return (
    <div
      className={[styles.property1default, className].join(" ")}
      style={logoStyle}
    >
      <div className={styles.xParent}>
        <img className={styles.xIcon} alt="" src="/-24x@2x.png" />
        <img className={styles.xIcon1} alt="" src="/-24x1@2x.png" />
      </div>
    </div>
  );
};

export default Logo1;
