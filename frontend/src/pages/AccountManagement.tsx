import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Tap2 from "../components/Tap2";
import InputBox from "../components/InputBox";
import Phone from "../components/Phone";
import Pw from "../components/Pw";
import ChangePw from "../components/ChangePw";
import Button4 from "../components/Button4";
import Header from "../components/Header";
import IPhoneStatusBarlower from "../components/IPhoneStatusBarlower";
import IPhoneStatusBarupper from "../components/IPhoneStatusBarupper";
import styles from "./AccountManagement.module.css";

const AccountManagement: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTapContainerClick = useCallback(() => {
    // Please sync "mypage" to the project
  }, []);

  const onComponent44ContainerClick = useCallback(() => {
    navigate("/subscription-management");
  }, [navigate]);

  const onComponent45ContainerClick = useCallback(() => {
    navigate("/payment-history");
  }, [navigate]);

  const onIconsimpleArrowClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.accountManagement}>
      <div className={styles.tap}>
        <Tap2
          tap="계정 관리"
          tapWidth="125.5px"
          tapPosition="unset"
          tapBorder="unset"
          tapBorderTop="1px solid #000"
          tapBorderRight="1px solid #000"
          tapBorderBottom="1px solid #000"
          tapBackgroundColor="#6314e4"
          tapBorderLeft="unset"
          tapColor="#fff"
          onTapContainerClick={onTapContainerClick}
        />
        <Tap2
          tap="구독 관리"
          tapWidth="126px"
          tapPosition="unset"
          tapBorder="1px solid #000"
          tapBorderTop="unset"
          tapBorderRight="unset"
          tapBorderBottom="unset"
          tapBackgroundColor="unset"
          tapBorderLeft="unset"
          tapColor="#000"
          onTapContainerClick={onComponent44ContainerClick}
        />
        <Tap2
          tap="결제 내역"
          tapWidth="125.5px"
          tapPosition="unset"
          tapBorder="unset"
          tapBorderTop="1px solid #000"
          tapBorderRight="unset"
          tapBorderBottom="1px solid #000"
          tapBackgroundColor="unset"
          tapBorderLeft="1px solid #000"
          tapColor="#000"
          onTapContainerClick={onComponent45ContainerClick}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.parent}>
          <b className={styles.b}>컬프렌드</b>
          <div className={styles.div}>님</div>
        </div>
        <div className={styles.title}>
          <div className={styles.div1}>잔여 토큰</div>
          <div className={styles.number}>
            <div className={styles.div2}>12</div>
            <div className={styles.div3}>개</div>
          </div>
        </div>
      </div>
      <div className={styles.autolayout}>
        <div className={styles.email}>
          <div className={styles.text}>
            <div className={styles.div2}>이메일</div>
          </div>
          <InputBox
            placeholder="example@gmail.com"
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
        <div className={styles.email}>
          <div className={styles.text}>
            <div className={styles.div2}>닉네임</div>
          </div>
          <InputBox
            placeholder="example@gmail.com"
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
        <Phone
          button="인증번호 발송"
          button1="인증하기"
          buttonWidth="100px"
          buttonWidth1="100px"
          buttonPosition="unset"
          buttonPosition1="unset"
          buttonBorderRadius="10px"
          buttonBorderRadius1="10px"
          buttonPadding="11px 10px"
          buttonPadding1="11px 10px"
          buttonTop="unset"
          buttonTop1="unset"
          buttonLeft="unset"
          buttonLeft1="unset"
          buttonBorder="1px solid #7d7d7d"
          buttonBorder1="1px solid #c9c9c9"
          buttonBottom="unset"
          buttonBottom1="unset"
          buttonBackgroundColor="#6314e4"
          buttonBackgroundColor1="rgba(234, 234, 234, 0.6)"
          buttonAlignSelf="unset"
          buttonAlignSelf1="unset"
          buttonFlex="unset"
          buttonFlex1="unset"
          buttonRight="unset"
          buttonRight1="unset"
          buttonHeight="unset"
          buttonHeight1="unset"
          buttonColor="#fff"
          buttonColor1="#767676"
          placeholder="010-0000-0000"
          inputBoxWidth="unset"
          inputBoxPosition="unset"
          inputBoxHeight="unset"
          inputBoxFlex="1"
          inputBoxAlignSelf="unset"
          placeholderDisplay="unset"
          placeholderWebkitLineClamp="unset"
          placeholderWebkitBoxOrient="unset"
        />
        <div className={styles.section}>
          <Pw />
          <ChangePw />
        </div>
      </div>
      <div className={styles.button}>
        <Button4
          button="변경사항 저장"
          buttonWidth="unset"
          buttonPosition="unset"
          buttonBorderRadius="16px 16px 0px 16px"
          buttonPadding="16px 10px"
          buttonTop="unset"
          buttonLeft="unset"
          buttonBorder="1px solid #222"
          buttonBottom="unset"
          buttonBackgroundColor="#6314e4"
          buttonAlignSelf="stretch"
          buttonFlex="unset"
          buttonRight="unset"
          buttonHeight="unset"
          buttonColor="#fff"
        />
        <div className={styles.buttonParent}>
          <Button4
            button="계정탈퇴하기"
            buttonWidth="unset"
            buttonPosition="unset"
            buttonBorderRadius="10px"
            buttonPadding="11px 10px"
            buttonTop="unset"
            buttonLeft="unset"
            buttonBorder="1px solid #ff4a4a"
            buttonBottom="unset"
            buttonBackgroundColor="#fbfbfb"
            buttonAlignSelf="unset"
            buttonFlex="1"
            buttonRight="unset"
            buttonHeight="unset"
            buttonColor="#ff4a4a"
          />
          <Button4
            button="로그아웃"
            buttonWidth="unset"
            buttonPosition="unset"
            buttonBorderRadius="10px"
            buttonPadding="11px 10px"
            buttonTop="unset"
            buttonLeft="unset"
            buttonBorder="1px solid #6314e4"
            buttonBottom="unset"
            buttonBackgroundColor="#fbfbfb"
            buttonAlignSelf="unset"
            buttonFlex="1"
            buttonRight="unset"
            buttonHeight="unset"
            buttonColor="#6314e4"
          />
        </div>
      </div>
      <Header
        prop="마이페이지"
        headerPosition="absolute"
        headerTop="44px"
        headerLeft="0px"
        divLeft="calc(50% - 39.5px)"
        onIconsimpleArrowClick={onIconsimpleArrowClick}
      />
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

export default AccountManagement;
