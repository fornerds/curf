import { FunctionComponent } from "react";
import Button4 from "../components/Button4";
import styles from "./PopUp7.module.css";

export type PopUp7Type = {
  className?: string;
};

const PopUp7: FunctionComponent<PopUp7Type> = ({ className = "" }) => {
  return (
    <div className={[styles.popUp, className].join(" ")}>
      <div className={styles.parent}>
        <div className={styles.div}>정말 취소하시겠습니까?</div>
        <div className={styles.exlegmailcom}>ex***le@gmail.com</div>
      </div>
      <div className={styles.buttons}>
        <Button4
          button="예"
          buttonWidth="100px"
          buttonPosition="unset"
          buttonBorderRadius="10px"
          buttonPadding="11px 10px"
          buttonTop="unset"
          buttonLeft="unset"
          buttonBorder="1px solid #6314e4"
          buttonBottom="unset"
          buttonBackgroundColor="#fff"
          buttonAlignSelf="unset"
          buttonFlex="unset"
          buttonRight="unset"
          buttonHeight="unset"
          buttonColor="#6314e4"
        />
        <Button4
          button="아니오"
          buttonWidth="100px"
          buttonPosition="unset"
          buttonBorderRadius="10px"
          buttonPadding="11px 10px"
          buttonTop="unset"
          buttonLeft="unset"
          buttonBorder="1px solid #7d7d7d"
          buttonBottom="unset"
          buttonBackgroundColor="#6314e4"
          buttonAlignSelf="unset"
          buttonFlex="unset"
          buttonRight="unset"
          buttonHeight="unset"
          buttonColor="#fff"
        />
      </div>
    </div>
  );
};

export default PopUp7;
