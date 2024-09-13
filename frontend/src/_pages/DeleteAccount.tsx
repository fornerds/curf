import { FunctionComponent } from "react";
import Header1 from "../_components/Header1";
import Checkbox from "../_components/Checkbox";
import InputBox from "../_components/InputBox";
import Button4 from "../_components/Button4";
import IPhoneStatusBarlower from "../_components/IPhoneStatusBarlower";
import IPhoneStatusBarupper from "../_components/IPhoneStatusBarupper";
import styles from "./DeleteAccount.module.css";

const DeleteAccount: FunctionComponent = () => {
  return (
    <div className={styles.deleteAccount}>
      <Header1 />
      <div className={styles.parent}>
        <img className={styles.icon} alt="" src="/--.svg" />
        <img className={styles.icon1} alt="" src="/----.svg" />
      </div>
      <div className={styles.wrapper}>
        <img className={styles.icon2} alt="" src="/-------.svg" />
      </div>
      <div className={styles.checkbox}>
        <Checkbox
          prop="사용을 잘 안해요"
          checkboxPosition="unset"
          checkboxTop="unset"
          checkboxLeft="unset"
          checkboxAlignSelf="unset"
        />
        <Checkbox
          prop="컨텐츠가 큰 도움이 안돼요"
          checkboxPosition="unset"
          checkboxTop="unset"
          checkboxLeft="unset"
          checkboxAlignSelf="unset"
        />
        <Checkbox
          prop="챗봇이 생각보다 별로에요"
          checkboxPosition="unset"
          checkboxTop="unset"
          checkboxLeft="unset"
          checkboxAlignSelf="unset"
        />
        <Checkbox
          prop="너무 비싸요"
          checkboxPosition="unset"
          checkboxTop="unset"
          checkboxLeft="unset"
          checkboxAlignSelf="unset"
        />
        <Checkbox
          prop="삭제해야하는 개인정보가 있어요"
          checkboxPosition="unset"
          checkboxTop="unset"
          checkboxLeft="unset"
          checkboxAlignSelf="stretch"
        />
        <div className={styles.etc}>
          <Checkbox
            prop="기타"
            checkboxPosition="unset"
            checkboxTop="unset"
            checkboxLeft="unset"
            checkboxAlignSelf="unset"
          />
          <InputBox
            placeholder="Placeholder"
            inputBoxWidth="unset"
            inputBoxPosition="unset"
            inputBoxHeight="128px"
            inputBoxFlex="unset"
            inputBoxAlignSelf="stretch"
            placeholderDisplay="-webkit-inline-box"
            placeholderWebkitLineClamp="unset"
            placeholderWebkitBoxOrient="unset"
          />
        </div>
      </div>
      <div className={styles.buttonParent}>
        <Button4
          button="예, 탈퇴할게요"
          buttonWidth="unset"
          buttonPosition="unset"
          buttonBorderRadius="10px"
          buttonPadding="11px 10px"
          buttonTop="unset"
          buttonLeft="unset"
          buttonBorder="1px solid #767676"
          buttonBottom="unset"
          buttonBackgroundColor="#fbfbfb"
          buttonAlignSelf="unset"
          buttonFlex="1"
          buttonRight="unset"
          buttonHeight="unset"
          buttonColor="#767676"
        />
        <Button4
          button="아니오"
          buttonWidth="unset"
          buttonPosition="unset"
          buttonBorderRadius="10px"
          buttonPadding="11px 10px"
          buttonTop="unset"
          buttonLeft="unset"
          buttonBorder="1px solid #7b4fff"
          buttonBottom="unset"
          buttonBackgroundColor="#fbfbfb"
          buttonAlignSelf="unset"
          buttonFlex="1"
          buttonRight="unset"
          buttonHeight="unset"
          buttonColor="#7b4fff"
        />
      </div>
      <IPhoneStatusBarlower
        iPhoneStatusBarlowerWidth="375px"
        iPhoneStatusBarlowerBackgroundColor="unset"
        iPhoneStatusBarlowerAlignSelf="unset"
        iPhoneStatusBarlowerPosition="absolute"
        iPhoneStatusBarlowerBottom="0px"
        iPhoneStatusBarlowerLeft="calc(50% - 187.5px)"
        baseBackgroundColor="#000"
      />
      <IPhoneStatusBarupper
        networkSignalLight="/network-signal-light.svg"
        wiFiSignalLight="/wifi-signal--light.svg"
        batteryLight="/battery--light.svg"
        timeLight="/time--light.svg"
        iPhoneStatusBarupperPosition="absolute"
        iPhoneStatusBarupperBackgroundColor="#fff"
        iPhoneStatusBarupperTop="0px"
        iPhoneStatusBarupperLeft="calc(50% - 187.5px)"
      />
    </div>
  );
};

export default DeleteAccount;
