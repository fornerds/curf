import { FunctionComponent } from "react";
import InputBox5 from "./InputBox5";
import Button4 from "../components/Button4";
import styles from "./Pw.module.css";

export type PwType = {
  className?: string;
};

const Pw: FunctionComponent<PwType> = ({ className = "" }) => {
  return (
    <div className={[styles.pw, className].join(" ")}>
      <div className={styles.text}>
        <div className={styles.div}>비밀번호 변경</div>
      </div>
      <div className={styles.inputBoxParent}>
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
          guideText="비밀번호가 확인되었습니다."
          guideTextPosition="unset"
        />
        <Button4
          button="확인 완료"
          buttonWidth="100px"
          buttonPosition="unset"
          buttonBorderRadius="10px"
          buttonPadding="11px 10px"
          buttonTop="unset"
          buttonLeft="unset"
          buttonBorder="1px solid #c9c9c9"
          buttonBottom="unset"
          buttonBackgroundColor="rgba(234, 234, 234, 0.6)"
          buttonAlignSelf="unset"
          buttonFlex="unset"
          buttonRight="unset"
          buttonHeight="unset"
          buttonColor="#767676"
        />
      </div>
    </div>
  );
};

export default Pw;
