import { FunctionComponent } from "react";
import Button4 from "/";
import styles from "./PopUp2.module.css";

export type PopUp2Type = {
  className?: string;
};

const PopUp2: FunctionComponent<PopUp2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.popUp, className].join(" ")}>
      <b className={styles.b}>
        <p className={styles.p}>결제에 실패하였습니다.</p>
        <p className={styles.p}>오류코드 500 : 오류내용</p>
      </b>
      <Button4
        button="뒤로"
        buttonWidth="260px"
        buttonPosition="absolute"
        buttonBorderRadius="10px"
        buttonPadding="11px 10px"
        buttonTop="179px"
        buttonLeft="calc(50% - 130px)"
        buttonBorder="1px solid #222"
        buttonBottom="unset"
        buttonBackgroundColor="#6314e4"
        buttonAlignSelf="unset"
        buttonFlex="unset"
        buttonRight="unset"
        buttonHeight="unset"
        buttonColor="#fff"
      />
    </div>
  );
};

export default PopUp2;
