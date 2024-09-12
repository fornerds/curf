import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Textbox1.module.css";

export type Textbox1Type = {
  className?: string;
  userTextBox?: string;

  /** Style props */
  textboxPosition?: CSSProperties["position"];
  textboxBackgroundColor?: CSSProperties["backgroundColor"];
  textboxBorder?: CSSProperties["border"];
  textboxTop?: CSSProperties["top"];
  textboxLeft?: CSSProperties["left"];
  textboxRight?: CSSProperties["right"];
};

const Textbox1: FunctionComponent<Textbox1Type> = ({
  className = "",
  userTextBox,
  textboxPosition,
  textboxBackgroundColor,
  textboxBorder,
  textboxTop,
  textboxLeft,
  textboxRight,
}) => {
  const textboxStyle: CSSProperties = useMemo(() => {
    return {
      position: textboxPosition,
      backgroundColor: textboxBackgroundColor,
      border: textboxBorder,
      top: textboxTop,
      left: textboxLeft,
      right: textboxRight,
    };
  }, [
    textboxPosition,
    textboxBackgroundColor,
    textboxBorder,
    textboxTop,
    textboxLeft,
    textboxRight,
  ]);

  return (
    <div
      className={[styles.property1userTextBox, className].join(" ")}
      style={textboxStyle}
    >
      <div className={styles.userTextBox}>{userTextBox}</div>
    </div>
  );
};

export default Textbox1;
