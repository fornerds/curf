import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Tap2.module.css";

export type Tap2Type = {
  className?: string;
  tap?: string;

  /** Style props */
  tapWidth?: CSSProperties["width"];
  tapPosition?: CSSProperties["position"];
  tapBorder?: CSSProperties["border"];
  tapBorderTop?: CSSProperties["borderTop"];
  tapBorderRight?: CSSProperties["borderRight"];
  tapBorderBottom?: CSSProperties["borderBottom"];
  tapBackgroundColor?: CSSProperties["backgroundColor"];
  tapBorderLeft?: CSSProperties["borderLeft"];
  tapColor?: CSSProperties["color"];

  /** Action props */
  onTapContainerClick?: () => void;
};

const Tap2: FunctionComponent<Tap2Type> = ({
  className = "",
  tap,
  tapWidth,
  tapPosition,
  tapBorder,
  tapBorderTop,
  tapBorderRight,
  tapBorderBottom,
  tapBackgroundColor,
  tapBorderLeft,
  tapColor,
  onTapContainerClick,
}) => {
  const tapStyle: CSSProperties = useMemo(() => {
    return {
      width: tapWidth,
      position: tapPosition,
      border: tapBorder,
      borderTop: tapBorderTop,
      borderRight: tapBorderRight,
      borderBottom: tapBorderBottom,
      backgroundColor: tapBackgroundColor,
      borderLeft: tapBorderLeft,
    };
  }, [
    tapWidth,
    tapPosition,
    tapBorder,
    tapBorderTop,
    tapBorderRight,
    tapBorderBottom,
    tapBackgroundColor,
    tapBorderLeft,
  ]);

  const tap1Style: CSSProperties = useMemo(() => {
    return {
      color: tapColor,
    };
  }, [tapColor]);

  return (
    <div
      className={[styles.property12tapClick, className].join(" ")}
      style={tapStyle}
      onClick={onTapContainerClick}
    >
      <div className={styles.tap} style={tap1Style}>
        {tap}
      </div>
    </div>
  );
};

export default Tap2;
