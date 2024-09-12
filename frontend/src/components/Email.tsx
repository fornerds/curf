import { FunctionComponent } from "react";
import InputBox5 from "./InputBox5";
import styles from "./Email.module.css";

export type EmailType = {
  className?: string;
};

const Email: FunctionComponent<EmailType> = ({ className = "" }) => {
  return (
    <div className={[styles.email, className].join(" ")}>
      <div className={styles.text}>
        <div className={styles.div}>닉네임</div>
      </div>
      <InputBox5
        iconx="/iconx1.svg"
        showWriting
        showIconx
        inputBoxPosition="unset"
        inputBoxWidth="335px"
        inputBoxFlex="unset"
        inputBoxBackgroundColor="#fbfbfb"
        inputBoxBorder="1px solid #7d7d7d"
        inputBoxHeight="unset"
        writingAlignSelf="stretch"
        writingFlex="1"
        writingFontFamily="'Pretendard Variable'"
        writingOverflow="hidden"
        writingTextOverflow="ellipsis"
        writingWidth="unset"
        guideText="사용할 수 있는 닉네임입니다"
        guideTextPosition="unset"
      />
    </div>
  );
};

export default Email;
