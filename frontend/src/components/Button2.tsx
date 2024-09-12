import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Button2.module.css";

export type Button2Type = {
  className?: string;
  iconmenu?: string;
  button?: string;

  /** Style props */
  buttonWidth?: CSSProperties["width"];
  buttonPosition?: CSSProperties["position"];
  buttonAlignSelf?: CSSProperties["alignSelf"];
};

const Button2: FunctionComponent<Button2Type> = ({
  className = "",
  iconmenu,
  button,
  buttonWidth,
  buttonPosition,
  buttonAlignSelf,
}) => {
  const button3Style: CSSProperties = useMemo(() => {
    return {
      width: buttonWidth,
      position: buttonPosition,
      alignSelf: buttonAlignSelf,
    };
  }, [buttonWidth, buttonPosition, buttonAlignSelf]);

  return (
    <div
      className={[styles.property1size1Property2pl, className].join(" ")}
      style={button3Style}
    >
      <img className={styles.iconmenu} alt="" src={iconmenu} />
      <div className={styles.button}>{button}</div>
    </div>
  );
};

export default Button2;
