import { FunctionComponent } from "react";
import Button4 from "/";
import styles from "./PopUp3.module.css";

export type PopUp3Type = {
  className?: string;
};

const PopUp3: FunctionComponent<PopUp3Type> = ({ className = "" }) => {
  return (
    <div className={[styles.popUp, className].join(" ")}>
      <div className={styles.parent}>
        <div className={styles.div}>문의가 접수 완료되었습니다.</div>
        <div className={styles.exlegmailcom}>ex***le@gmail.com</div>
      </div>
      <Button4
        button="확인"
        buttonWidth="260px"
        buttonPosition="absolute"
        buttonBorderRadius="10px"
        buttonPadding="11px 10px"
        buttonTop="unset"
        buttonLeft="calc(50% - 130px)"
        buttonBorder="1px solid #7d7d7d"
        buttonBottom="40px"
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

export default PopUp3;
