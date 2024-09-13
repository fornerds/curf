import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GuideQuestionBox.module.css";

export type GuideQuestionBoxType = {
  className?: string;
  guideQuestionBox?: string;

  /** Style props */
  guideQuestionBoxPosition?: CSSProperties["position"];
};

const GuideQuestionBox: FunctionComponent<GuideQuestionBoxType> = ({
  className = "",
  guideQuestionBox,
  guideQuestionBoxPosition,
}) => {
  const guideQuestionBoxStyle: CSSProperties = useMemo(() => {
    return {
      position: guideQuestionBoxPosition,
    };
  }, [guideQuestionBoxPosition]);

  return (
    <div
      className={[styles.property1small, className].join(" ")}
      style={guideQuestionBoxStyle}
    >
      <div className={styles.guideQuestionBox}>{guideQuestionBox}</div>
    </div>
  );
};

export default GuideQuestionBox;
