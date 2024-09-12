import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./IPhoneStatusBarupper.module.css";

export type IPhoneStatusBarupperType = {
  className?: string;
  notch?: string;
  networkSignalLight?: string;
  wiFiSignalLight?: string;
  batteryLight?: string;
  indicator?: string;
  timeLight?: string;

  /** Style props */
  iPhoneStatusBarupperPosition?: CSSProperties["position"];
  iPhoneStatusBarupperBackgroundColor?: CSSProperties["backgroundColor"];
  iPhoneStatusBarupperTop?: CSSProperties["top"];
  iPhoneStatusBarupperLeft?: CSSProperties["left"];
};

const IPhoneStatusBarupper: FunctionComponent<IPhoneStatusBarupperType> = ({
  className = "",
  notch,
  networkSignalLight,
  wiFiSignalLight,
  batteryLight,
  indicator,
  timeLight,
  iPhoneStatusBarupperPosition,
  iPhoneStatusBarupperBackgroundColor,
  iPhoneStatusBarupperTop,
  iPhoneStatusBarupperLeft,
}) => {
  const iPhoneStatusBarupperStyle: CSSProperties = useMemo(() => {
    return {
      position: iPhoneStatusBarupperPosition,
      backgroundColor: iPhoneStatusBarupperBackgroundColor,
      top: iPhoneStatusBarupperTop,
      left: iPhoneStatusBarupperLeft,
    };
  }, [
    iPhoneStatusBarupperPosition,
    iPhoneStatusBarupperBackgroundColor,
    iPhoneStatusBarupperTop,
    iPhoneStatusBarupperLeft,
  ]);

  return (
    <div
      className={[styles.darkModefalse, className].join(" ")}
      style={iPhoneStatusBarupperStyle}
    >
      <img className={styles.notchIcon} alt="" src={notch} />
      <div className={styles.statusIcons}>
        <img
          className={styles.networkSignalLight}
          alt=""
          src={networkSignalLight}
        />
        <img className={styles.wifiSignalLight} alt="" src={wiFiSignalLight} />
        <img className={styles.batteryLight} alt="" src={batteryLight} />
      </div>
      <img className={styles.indicatorIcon} alt="" src={indicator} />
      <img className={styles.timeLight} alt="" src={timeLight} />
    </div>
  );
};

export default IPhoneStatusBarupper;
