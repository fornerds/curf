import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Text1 from "./Text1";
import styles from "./InputSection.module.css";

export type InputSectionType = {
  className?: string;
  textPosition?: string;

  /** Style props */
  inputSectionWidth?: CSSProperties["width"];
  inputSectionPosition?: CSSProperties["position"];
  inputSectionAlignSelf?: CSSProperties["alignSelf"];
};

const InputSection: FunctionComponent<InputSectionType> = ({
  className = "",
  inputSectionWidth,
  inputSectionPosition,
  inputSectionAlignSelf,
  textPosition,
}) => {
  const inputSectionStyle: CSSProperties = useMemo(() => {
    return {
      width: inputSectionWidth,
      position: inputSectionPosition,
      alignSelf: inputSectionAlignSelf,
    };
  }, [inputSectionWidth, inputSectionPosition, inputSectionAlignSelf]);

  return (
    <div
      className={[styles.property1default, className].join(" ")}
      style={inputSectionStyle}
    >
      <div className={styles.inputBox}>
        <img className={styles.icon} alt="" src="/icon3.svg" />
        <Text1 textPosition={textPosition} />
      </div>
      <div className={styles.action}>
        <div className={styles.icon1}>
          <div className={styles.iconChild} />
          <div className={styles.div}>카메라</div>
        </div>
        <div className={styles.icon1}>
          <div className={styles.iconChild} />
          <div className={styles.div}>카메라</div>
        </div>
        <div className={styles.icon1}>
          <div className={styles.iconChild} />
          <div className={styles.div}>카메라</div>
        </div>
        <div className={styles.icon1}>
          <div className={styles.iconChild} />
          <div className={styles.div}>카메라</div>
        </div>
      </div>
    </div>
  );
};

export default InputSection;
