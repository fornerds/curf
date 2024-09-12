import { FunctionComponent, useMemo, type CSSProperties } from "react";
import InputBox from "./InputBox";
import Button4 from "../components/Button4";
import InputBox5 from "./InputBox5";
import styles from "./Phone.module.css";

export type PhoneType = {
  className?: string;
  button?: string;
  button1?: string;
  buttonWidth?: string;
  buttonWidth1?: string;
  buttonPosition?: string;
  buttonPosition1?: string;
  buttonBorderRadius?: string;
  buttonBorderRadius1?: string;
  buttonPadding?: string;
  buttonPadding1?: string;
  buttonTop?: string;
  buttonTop1?: string;
  buttonLeft?: string;
  buttonLeft1?: string;
  buttonBorder?: string;
  buttonBorder1?: string;
  buttonBottom?: string;
  buttonBottom1?: string;
  buttonBackgroundColor?: string;
  buttonBackgroundColor1?: string;
  buttonAlignSelf?: string;
  buttonAlignSelf1?: string;
  buttonFlex?: string;
  buttonFlex1?: string;
  buttonRight?: string;
  buttonRight1?: string;
  buttonHeight?: string;
  buttonHeight1?: string;
  buttonColor?: string;
  buttonColor1?: string;
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
  propAlignSelf?: CSSProperties["alignSelf"];
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propGap?: CSSProperties["gap"];
  propGap1?: CSSProperties["gap"];
};

const Phone: FunctionComponent<PhoneType> = ({
  className = "",
  propAlignSelf,
  propPosition,
  propTop,
  propLeft,
  propWidth,
  propGap,
  propGap1,
  button,
  button1,
  buttonWidth,
  buttonWidth1,
  buttonPosition,
  buttonPosition1,
  buttonBorderRadius,
  buttonBorderRadius1,
  buttonPadding,
  buttonPadding1,
  buttonTop,
  buttonTop1,
  buttonLeft,
  buttonLeft1,
  buttonBorder,
  buttonBorder1,
  buttonBottom,
  buttonBottom1,
  buttonBackgroundColor,
  buttonBackgroundColor1,
  buttonAlignSelf,
  buttonAlignSelf1,
  buttonFlex,
  buttonFlex1,
  buttonRight,
  buttonRight1,
  buttonHeight,
  buttonHeight1,
  buttonColor,
  buttonColor1,
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
  const phoneStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth,
    };
  }, [propAlignSelf, propPosition, propTop, propLeft, propWidth]);

  const autolayout1Style: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const autolayout2Style: CSSProperties = useMemo(() => {
    return {
      gap: propGap1,
    };
  }, [propGap1]);

  return (
    <div className={[styles.phone, className].join(" ")} style={phoneStyle}>
      <div className={styles.text}>
        <div className={styles.div}>휴대폰 번호</div>
      </div>
      <div className={styles.autolayout1} style={autolayout1Style}>
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
        <Button4
          button={button}
          buttonWidth={buttonWidth}
          buttonPosition={buttonPosition}
          buttonBorderRadius={buttonBorderRadius}
          buttonPadding={buttonPadding}
          buttonTop={buttonTop}
          buttonLeft={buttonLeft}
          buttonBorder={buttonBorder}
          buttonBottom={buttonBottom}
          buttonBackgroundColor={buttonBackgroundColor}
          buttonAlignSelf={buttonAlignSelf}
          buttonFlex={buttonFlex}
          buttonRight={buttonRight}
          buttonHeight={buttonHeight}
          buttonColor={buttonColor}
        />
      </div>
      <div className={styles.autolayout1} style={autolayout2Style}>
        <InputBox5
          iconx="/iconx.svg"
          showWriting={false}
          showIconx={false}
          inputBoxPosition="unset"
          inputBoxWidth="unset"
          inputBoxFlex="1"
          inputBoxBackgroundColor="rgba(234, 234, 234, 0.6)"
          inputBoxBorder="1px solid #c9c9c9"
          inputBoxHeight="41px"
          writingAlignSelf="unset"
          writingFlex="unset"
          writingFontFamily="Inter"
          writingOverflow="unset"
          writingTextOverflow="unset"
          writingWidth="47px"
        />
        <Button4
          button={button1}
          buttonWidth={buttonWidth1}
          buttonPosition={buttonPosition1}
          buttonBorderRadius={buttonBorderRadius1}
          buttonPadding={buttonPadding1}
          buttonTop={buttonTop1}
          buttonLeft={buttonLeft1}
          buttonBorder={buttonBorder1}
          buttonBottom={buttonBottom1}
          buttonBackgroundColor={buttonBackgroundColor1}
          buttonAlignSelf={buttonAlignSelf1}
          buttonFlex={buttonFlex1}
          buttonRight={buttonRight1}
          buttonHeight={buttonHeight1}
          buttonColor={buttonColor1}
        />
      </div>
    </div>
  );
};

export default Phone;
