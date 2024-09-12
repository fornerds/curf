import { FunctionComponent, useMemo, type CSSProperties } from "react";
import GuideText from "./GuideText";
import styles from "./InputBox5.module.css";

export type InputBox5Type = {
  className?: string;
  iconx?: string;
  showWriting?: boolean;
  showIconx?: boolean;
  guideText?: string;
  guideTextPosition?: string;

  /** Style props */
  inputBoxPosition?: CSSProperties["position"];
  inputBoxWidth?: CSSProperties["width"];
  inputBoxFlex?: CSSProperties["flex"];
  inputBoxBackgroundColor?: CSSProperties["backgroundColor"];
  inputBoxBorder?: CSSProperties["border"];
  inputBoxHeight?: CSSProperties["height"];
  writingAlignSelf?: CSSProperties["alignSelf"];
  writingFlex?: CSSProperties["flex"];
  writingFontFamily?: CSSProperties["fontFamily"];
  writingOverflow?: CSSProperties["overflow"];
  writingTextOverflow?: CSSProperties["textOverflow"];
  writingWidth?: CSSProperties["width"];
};

const InputBox5: FunctionComponent<InputBox5Type> = ({
  className = "",
  iconx,
  showWriting,
  showIconx,
  inputBoxPosition,
  inputBoxWidth,
  inputBoxFlex,
  inputBoxBackgroundColor,
  inputBoxBorder,
  inputBoxHeight,
  writingAlignSelf,
  writingFlex,
  writingFontFamily,
  writingOverflow,
  writingTextOverflow,
  writingWidth,
  guideText,
  guideTextPosition,
}) => {
  const inputBoxStyle: CSSProperties = useMemo(() => {
    return {
      position: inputBoxPosition,
      width: inputBoxWidth,
      flex: inputBoxFlex,
    };
  }, [inputBoxPosition, inputBoxWidth, inputBoxFlex]);

  const inputBox1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: inputBoxBackgroundColor,
      border: inputBoxBorder,
      height: inputBoxHeight,
    };
  }, [inputBoxBackgroundColor, inputBoxBorder, inputBoxHeight]);

  const writingStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: writingAlignSelf,
      flex: writingFlex,
      fontFamily: writingFontFamily,
      overflow: writingOverflow,
      textOverflow: writingTextOverflow,
      width: writingWidth,
    };
  }, [
    writingAlignSelf,
    writingFlex,
    writingFontFamily,
    writingOverflow,
    writingTextOverflow,
    writingWidth,
  ]);

  return (
    <div
      className={[styles.property1size2Property2wr, className].join(" ")}
      style={inputBoxStyle}
    >
      <div className={styles.inputBox} style={inputBox1Style}>
        {showWriting && (
          <div className={styles.writing} style={writingStyle}>
            Writing
          </div>
        )}
        {showIconx && <img className={styles.iconx} alt="" src={iconx} />}
      </div>
      <GuideText guideText={guideText} guideTextPosition={guideTextPosition} />
    </div>
  );
};

export default InputBox5;
