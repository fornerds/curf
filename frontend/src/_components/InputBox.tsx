import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./InputBox.module.css";

export type InputBoxType = {
  className?: string;
  placeholder?: string;

  /** Style props */
  inputBoxWidth?: CSSProperties["width"];
  inputBoxPosition?: CSSProperties["position"];
  inputBoxHeight?: CSSProperties["height"];
  inputBoxFlex?: CSSProperties["flex"];
  inputBoxAlignSelf?: CSSProperties["alignSelf"];
  placeholderDisplay?: CSSProperties["display"];
  placeholderWebkitLineClamp?: CSSProperties["webkitLineClamp"];
  placeholderWebkitBoxOrient?: CSSProperties["webkitBoxOrient"];
};

const InputBox: FunctionComponent<InputBoxType> = ({
  className = "",
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
  const inputBox2Style: CSSProperties = useMemo(() => {
    return {
      width: inputBoxWidth,
      position: inputBoxPosition,
      height: inputBoxHeight,
      flex: inputBoxFlex,
      alignSelf: inputBoxAlignSelf,
    };
  }, [
    inputBoxWidth,
    inputBoxPosition,
    inputBoxHeight,
    inputBoxFlex,
    inputBoxAlignSelf,
  ]);

  const placeholderStyle: CSSProperties = useMemo(() => {
    return {
      display: placeholderDisplay,
      webkitLineClamp: placeholderWebkitLineClamp,
      webkitBoxOrient: placeholderWebkitBoxOrient,
    };
  }, [
    placeholderDisplay,
    placeholderWebkitLineClamp,
    placeholderWebkitBoxOrient,
  ]);

  return (
    <div
      className={[styles.property1size3Property2de, className].join(" ")}
      style={inputBox2Style}
    >
      <div className={styles.placeholder} style={placeholderStyle}>
        {placeholder}
      </div>
    </div>
  );
};

export default InputBox;
