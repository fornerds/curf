import { FunctionComponent, useMemo, type CSSProperties } from "react";
import InputBox from "./InputBox";
import styles from "./TitleInputBox1.module.css";

export type TitleInputBox1Type = {
  className?: string;
  prop?: string;
  placeholder?: string;
  inputBoxWidth?: string;
  inputBoxPosition?: string;
  inputBoxHeight?: string;
  inputBoxFlex?: string;
  inputBoxAlignSelf?: string;
  placeholderDisplay?: string;
  placeholderWebkitLineClamp?: string;
  placeholderWebkitBoxOrient?: string;

  /** Style props */
  titleInputBoxPosition?: CSSProperties["position"];
  titleInputBoxAlignSelf?: CSSProperties["alignSelf"];
};

const TitleInputBox1: FunctionComponent<TitleInputBox1Type> = ({
  className = "",
  prop,
  titleInputBoxPosition,
  titleInputBoxAlignSelf,
  placeholder,
  inputBoxWidth,
  inputBoxPosition,
  inputBoxHeight,
  inputBoxFlex,
  inputBoxAlignSelf,
  placeholderDisplay,
  placeholderWebkitLineClamp,
  placeholderWebkitBoxOrient,
}) => {
  const titleInputBox1Style: CSSProperties = useMemo(() => {
    return {
      position: titleInputBoxPosition,
      alignSelf: titleInputBoxAlignSelf,
    };
  }, [titleInputBoxPosition, titleInputBoxAlignSelf]);

  return (
    <div
      className={[styles.property1long, className].join(" ")}
      style={titleInputBox1Style}
    >
      <div className={styles.textParent}>
        <div className={styles.text}>
          <div className={styles.div}>{prop}</div>
        </div>
        <InputBox
          placeholder={placeholder}
          inputBoxWidth={inputBoxWidth}
          inputBoxPosition={inputBoxPosition}
          inputBoxHeight={inputBoxHeight}
          inputBoxFlex={inputBoxFlex}
          inputBoxAlignSelf={inputBoxAlignSelf}
          placeholderDisplay={placeholderDisplay}
          placeholderWebkitLineClamp={placeholderWebkitLineClamp}
          placeholderWebkitBoxOrient={placeholderWebkitBoxOrient}
        />
        <div className={styles.wrapper}>
          <div className={styles.div1}>0/1000</div>
        </div>
      </div>
    </div>
  );
};

export default TitleInputBox1;
