import { FunctionComponent } from "react";
import Button4 from "/";
import styles from "./Modal.module.css";

export type ModalType = {
  className?: string;
};

const Modal: FunctionComponent<ModalType> = ({ className = "" }) => {
  return (
    <div className={[styles.modal, className].join(" ")}>
      <Button4
        button="더 대화할래요!"
        buttonWidth="335px"
        buttonPosition="absolute"
        buttonBorderRadius="16px 16px 0px 16px"
        buttonPadding="16px 10px"
        buttonTop="unset"
        buttonLeft="calc(50% - 168px)"
        buttonBorder="1px solid #222"
        buttonBottom="60px"
        buttonBackgroundColor="#6314e4"
        buttonAlignSelf="unset"
        buttonFlex="unset"
        buttonRight="unset"
        buttonHeight="unset"
        buttonColor="#fff"
      />
      <Button4
        button="더 대화할래요!"
        buttonWidth="335px"
        buttonPosition="absolute"
        buttonBorderRadius="16px 16px 0px 16px"
        buttonPadding="16px 10px"
        buttonTop="unset"
        buttonLeft="calc(50% - 168.5px)"
        buttonBorder="1px solid #222"
        buttonBottom="60px"
        buttonBackgroundColor="#6314e4"
        buttonAlignSelf="unset"
        buttonFlex="unset"
        buttonRight="unset"
        buttonHeight="unset"
        buttonColor="#fff"
      />
      <div className={styles.text}>
        <div className={styles.div}>가지고 있는 토큰을 모두 사용했어요</div>
        <div className={styles.div1}>
          더 대화를 나누기 위해서는 토큰 추가 구입이 필요해요.
        </div>
      </div>
      <img className={styles.icon} alt="" src="/icon2.svg" />
    </div>
  );
};

export default Modal;
