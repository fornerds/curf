import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GuideText.module.css";

export type GuideTextType = {
  className?: string;
  guideText?: string;

  /** Style props */
  guideTextPosition?: CSSProperties["position"];
};

const GuideText: FunctionComponent<GuideTextType> = ({
  className = "",
  guideText,
  guideTextPosition,
}) => {
  const guideTextStyle: CSSProperties = useMemo(() => {
    return {
      position: guideTextPosition,
    };
  }, [guideTextPosition]);

  return (
    <div
      className={[styles.property1green, className].join(" ")}
      style={guideTextStyle}
    >
      <img className={styles.icon} alt="" src="/icon1.svg" />
      <div className={styles.guideText}>{guideText}</div>
    </div>
  );
};

export default GuideText;
