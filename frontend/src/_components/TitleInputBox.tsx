import { FunctionComponent, useMemo, type CSSProperties } from "react";
import InputBox from "./InputBox";
import styles from "./TitleInputBox.module.css";

export type TitleInputBoxType = {
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
  titleInputBoxWidth?: CSSProperties["width"];
  titleInputBoxPosition?: CSSProperties["position"];
  titleInputBoxAlignSelf?: CSSProperties["alignSelf"];
};

const TitleInputBox: FunctionComponent<TitleInputBoxType> = ({
  className = "",
  prop,
  titleInputBoxWidth,
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
  const titleInputBoxStyle: CSSProperties = useMemo(() => {
    return {
      width: titleInputBoxWidth,
      position: titleInputBoxPosition,
      alignSelf: titleInputBoxAlignSelf,
    };
  }, [titleInputBoxWidth, titleInputBoxPosition, titleInputBoxAlignSelf]);

  return (
    <div
      className={[styles.property1default, className].join(" ")}
      style={titleInputBoxStyle}
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
      </div>
    </div>
  );
};

export default TitleInputBox;
