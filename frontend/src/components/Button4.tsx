import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Button4.module.css";

export type Button4Type = {
  className?: string;
  button?: string;

  /** Style props */
  buttonWidth?: CSSProperties["width"];
  buttonPosition?: CSSProperties["position"];
  buttonBorderRadius?: CSSProperties["borderRadius"];
  buttonPadding?: CSSProperties["padding"];
  buttonTop?: CSSProperties["top"];
  buttonLeft?: CSSProperties["left"];
  buttonBorder?: CSSProperties["border"];
  buttonBottom?: CSSProperties["bottom"];
  buttonBackgroundColor?: CSSProperties["backgroundColor"];
  buttonAlignSelf?: CSSProperties["alignSelf"];
  buttonFlex?: CSSProperties["flex"];
  buttonRight?: CSSProperties["right"];
  buttonHeight?: CSSProperties["height"];
  buttonColor?: CSSProperties["color"];
};

const Button4: FunctionComponent<Button4Type> = ({
  className = "",
  button,
  buttonWidth,
  buttonPosition,
  buttonBorderRadius,
  buttonPadding,
  buttonTop,
  buttonLeft,
  buttonBorder,
  buttonBottom,
  buttonBackgroundColor,
  buttonAlignSelf,
  buttonFlex,
  buttonRight,
  buttonHeight,
  buttonColor,
}) => {
  const button1Style: CSSProperties = useMemo(() => {
    return {
      width: buttonWidth,
      position: buttonPosition,
      borderRadius: buttonBorderRadius,
      padding: buttonPadding,
      top: buttonTop,
      left: buttonLeft,
      border: buttonBorder,
      bottom: buttonBottom,
      backgroundColor: buttonBackgroundColor,
      alignSelf: buttonAlignSelf,
      flex: buttonFlex,
      right: buttonRight,
      height: buttonHeight,
    };
  }, [
    buttonWidth,
    buttonPosition,
    buttonBorderRadius,
    buttonPadding,
    buttonTop,
    buttonLeft,
    buttonBorder,
    buttonBottom,
    buttonBackgroundColor,
    buttonAlignSelf,
    buttonFlex,
    buttonRight,
    buttonHeight,
  ]);

  const button2Style: CSSProperties = useMemo(() => {
    return {
      color: buttonColor,
    };
  }, [buttonColor]);

  return (
    <div
      className={[styles.property1size4Property2de, className].join(" ")}
      style={button1Style}
    >
      <div className={styles.button} style={button2Style}>
        {button}
      </div>
    </div>
  );
};

export default Button4;
