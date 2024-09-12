import { FunctionComponent } from "react";
import InputBox from "./InputBox";
import NewPwCheck from "./NewPwCheck";
import styles from "./ChangePw.module.css";

export type ChangePwType = {
  className?: string;
};

const ChangePw: FunctionComponent<ChangePwType> = ({ className = "" }) => {
  return (
    <div className={[styles.changePw, className].join(" ")}>
      <div className={styles.newPw}>
        <div className={styles.text}>
          <div className={styles.div}>신규 비밀번호</div>
        </div>
        <InputBox
          placeholder="비밀번호 입력"
          inputBoxWidth="335px"
          inputBoxPosition="unset"
          inputBoxHeight="unset"
          inputBoxFlex="unset"
          inputBoxAlignSelf="unset"
          placeholderDisplay="unset"
          placeholderWebkitLineClamp="unset"
          placeholderWebkitBoxOrient="unset"
        />
      </div>
      <NewPwCheck
        prop="신규 비밀번호 확인"
        writing="입력중"
        guideText="입력한 비밀번호와 다릅니다."
        guideTextPosition="unset"
      />
    </div>
  );
};

export default ChangePw;
