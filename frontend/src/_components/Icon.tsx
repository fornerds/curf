import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Icon.module.css";

export type IconType = {
  className?: string;

  /** Style props */
  iconPosition?: CSSProperties["position"];
  iconTop?: CSSProperties["top"];
  iconLeft?: CSSProperties["left"];
};

const Icon: FunctionComponent<IconType> = ({
  className = "",
  iconPosition,
  iconTop,
  iconLeft,
}) => {
  const icon1Style: CSSProperties = useMemo(() => {
    return {
      position: iconPosition,
      top: iconTop,
      left: iconLeft,
    };
  }, [iconPosition, iconTop, iconLeft]);

  return (
    <div
      className={[styles.property1profile, className].join(" ")}
      style={icon1Style}
    >
      <img
        className={styles.imageHolderIcon}
        alt=""
        src="/image-holder@2x.png"
      />
      <div className={styles.curly1} />
    </div>
  );
};

export default Icon;
