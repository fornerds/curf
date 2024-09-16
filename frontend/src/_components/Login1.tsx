import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Login1.module.css";

export type Login1Type = {
  className?: string;
  prop?: string;
  label?: string;

  /** Style props */
  loginWidth?: CSSProperties["width"];
  loginPosition?: CSSProperties["position"];
  loginBackgroundColor?: CSSProperties["backgroundColor"];
  loginAlignSelf?: CSSProperties["alignSelf"];
  labelColor?: CSSProperties["color"];
};

const Login1: FunctionComponent<Login1Type> = ({
  className = "",
  prop,
  label,
  loginWidth,
  loginPosition,
  loginBackgroundColor,
  loginAlignSelf,
  labelColor,
}) => {
  const loginStyle: CSSProperties = useMemo(() => {
    return {
      width: loginWidth,
      position: loginPosition,
      backgroundColor: loginBackgroundColor,
      alignSelf: loginAlignSelf,
    };
  }, [loginWidth, loginPosition, loginBackgroundColor, loginAlignSelf]);

  const labelStyle: CSSProperties = useMemo(() => {
    return {
      color: labelColor,
    };
  }, [labelColor]);

  return (
    <div className={[styles.property1, className].join(" ")} style={loginStyle}>
      <img className={styles.icon} alt="" src={prop} />
      <div className={styles.label} style={labelStyle}>
        {label}
      </div>
    </div>
  );
};

export default Login1;
