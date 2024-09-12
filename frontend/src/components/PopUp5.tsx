import { FunctionComponent } from "react";
import Button4 from "../components/Button4";
import InputBox from "./InputBox";
import styles from "./PopUp5.module.css";

export type PopUp5Type = {
  className?: string;
};

const PopUp5: FunctionComponent<PopUp5Type> = ({ className = "" }) => {
  return (
    <div className={[styles.popUp, className].join(" ")}>
      <Button4
        button="확인"
        buttonWidth="260px"
        buttonPosition="absolute"
        buttonBorderRadius="10px"
        buttonPadding="11px 10px"
        buttonTop="unset"
        buttonLeft="calc(50% - 130px)"
        buttonBorder="1px solid #7d7d7d"
        buttonBottom="42px"
        buttonBackgroundColor="#6314e4"
        buttonAlignSelf="unset"
        buttonFlex="unset"
        buttonRight="unset"
        buttonHeight="unset"
        buttonColor="#fff"
      />
      <div className={styles.frameParent}>
        <div className={styles.parent}>
          <b className={styles.b}>청구 정보 수정</b>
          <img className={styles.icon} alt="" src="/icon2.svg" />
        </div>
        <div className={styles.autolayout}>
          <div className={styles.name}>
            <div className={styles.text}>
              <div className={styles.div}>이름</div>
            </div>
            <InputBox
              placeholder="이름을 적어주세요"
              inputBoxWidth="260px"
              inputBoxPosition="unset"
              inputBoxHeight="41px"
              inputBoxFlex="unset"
              inputBoxAlignSelf="unset"
              placeholderDisplay="unset"
              placeholderWebkitLineClamp="unset"
              placeholderWebkitBoxOrient="unset"
            />
          </div>
          <div className={styles.name}>
            <div className={styles.text}>
              <div className={styles.div}>이메일</div>
            </div>
            <InputBox
              placeholder="example@gmail.com"
              inputBoxWidth="260px"
              inputBoxPosition="unset"
              inputBoxHeight="41px"
              inputBoxFlex="unset"
              inputBoxAlignSelf="unset"
              placeholderDisplay="unset"
              placeholderWebkitLineClamp="unset"
              placeholderWebkitBoxOrient="unset"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp5;
