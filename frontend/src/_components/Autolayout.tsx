import { FunctionComponent } from "react";
import Checkbox1 from "./Checkbox1";
import Checkbox from "./Checkbox";
import styles from "./Autolayout.module.css";

export type AutolayoutType = {
  className?: string;
};

const Autolayout: FunctionComponent<AutolayoutType> = ({ className = "" }) => {
  return (
    <div className={[styles.autolayout, className].join(" ")}>
      <Checkbox1
        prop="(필수) 제 나이는 만 14세 이상입니다."
        checkboxPosition="unset"
        checkboxAlignSelf="stretch"
      />
      <Checkbox
        prop="(필수) 서비스약관 동의"
        checkboxPosition="unset"
        checkboxTop="unset"
        checkboxLeft="unset"
        checkboxAlignSelf="unset"
      />
      <Checkbox
        prop="(필수) 개인정보수집이용 동의"
        checkboxPosition="unset"
        checkboxTop="unset"
        checkboxLeft="unset"
        checkboxAlignSelf="unset"
      />
      <Checkbox
        prop="(선택) 마케팅정보활용 동의"
        checkboxPosition="unset"
        checkboxTop="unset"
        checkboxLeft="unset"
        checkboxAlignSelf="unset"
      />
    </div>
  );
};

export default Autolayout;
