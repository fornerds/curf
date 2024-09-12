import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GuideText1.module.css";

export type GuideText1Type = {
  className?: string;
  guideText?: string;

  /** Style props */
  guideTextPosition?: CSSProperties["position"];
};

const GuideText1: FunctionComponent<GuideText1Type> = ({
  className = "",
  guideText,
  guideTextPosition,
}) => {
  const guideText1Style: CSSProperties = useMemo(() => {
    return {
      position: guideTextPosition,
    };
  }, [guideTextPosition]);

  return (
    <div
      className={[styles.property1red, className].join(" ")}
      style={guideText1Style}
    >
      <div className={styles.icon}>
        <img className={styles.iconChild} alt="" src="/polygon-4.svg" />
        <div className={styles.div}>!</div>
      </div>
      <div className={styles.guideText}>{guideText}</div>
    </div>
  );
};

export default GuideText1;
