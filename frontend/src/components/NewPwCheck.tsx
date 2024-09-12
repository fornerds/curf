import { FunctionComponent, useMemo, type CSSProperties } from "react";
import GuideText1 from "./GuideText1";
import styles from "./NewPwCheck.module.css";

export type NewPwCheckType = {
  className?: string;
  prop?: string;
  writing?: string;
  guideText?: string;
  guideTextPosition?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
};

const NewPwCheck: FunctionComponent<NewPwCheckType> = ({
  className = "",
  prop,
  writing,
  propAlignSelf,
  propPosition,
  propTop,
  propLeft,
  propWidth,
  guideText,
  guideTextPosition,
}) => {
  const newPwCheckStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth,
    };
  }, [propAlignSelf, propPosition, propTop, propLeft, propWidth]);

  return (
    <div
      className={[styles.newPwCheck, className].join(" ")}
      style={newPwCheckStyle}
    >
      <div className={styles.text}>
        <div className={styles.div}>{prop}</div>
      </div>
      <div className={styles.inputBox}>
        <div className={styles.inputBox1}>
          <div className={styles.writing}>{writing}</div>
          <img className={styles.iconx} alt="" src="/iconx1.svg" />
        </div>
        <GuideText1
          guideText={guideText}
          guideTextPosition={guideTextPosition}
        />
      </div>
    </div>
  );
};

export default NewPwCheck;
