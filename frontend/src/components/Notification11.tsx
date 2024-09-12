import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Notification11.module.css";

export type Notification11Type = {
  className?: string;
  icon?: string;
  prop?: string;
  prop1?: string;
  prop2?: string;
  mynauipin?: string;
  showDiv?: boolean;

  /** Style props */
  notificationWidth?: CSSProperties["width"];
  notificationPosition?: CSSProperties["position"];
  notificationAlignSelf?: CSSProperties["alignSelf"];
  divAlignSelf?: CSSProperties["alignSelf"];
  divWidth?: CSSProperties["width"];

  /** Action props */
  onNotificationContainerClick?: () => void;
};

const Notification11: FunctionComponent<Notification11Type> = ({
  className = "",
  icon,
  prop,
  prop1,
  prop2,
  mynauipin,
  showDiv,
  notificationWidth,
  notificationPosition,
  notificationAlignSelf,
  divAlignSelf,
  divWidth,
  onNotificationContainerClick,
}) => {
  const notificationStyle: CSSProperties = useMemo(() => {
    return {
      width: notificationWidth,
      position: notificationPosition,
      alignSelf: notificationAlignSelf,
    };
  }, [notificationWidth, notificationPosition, notificationAlignSelf]);

  const div2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: divAlignSelf,
      width: divWidth,
    };
  }, [divAlignSelf, divWidth]);

  return (
    <div
      className={[styles.property1default, className].join(" ")}
      style={notificationStyle}
      onClick={onNotificationContainerClick}
    >
      <div className={styles.info}>
        <img className={styles.icon} alt="" src={icon} />
        <div className={styles.text}>
          <div className={styles.div}>{prop}</div>
          {showDiv && (
            <div className={styles.div1} style={div2Style}>
              {prop1}
            </div>
          )}
          <div className={styles.div2}>{prop2}</div>
        </div>
      </div>
      <img className={styles.mynauipinIcon} alt="" src={mynauipin} />
    </div>
  );
};

export default Notification11;
