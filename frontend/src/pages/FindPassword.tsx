import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button4 from "../components/Button4";
import InputBox from "../components/InputBox";
import Phone from "../components/Phone";
import NewPwCheck from "../components/NewPwCheck";
import Header from "../components/Header";
import IPhoneStatusBarlower from "../components/IPhoneStatusBarlower";
import IPhoneStatusBarupper from "../components/IPhoneStatusBarupper";
import styles from "./FindPassword.module.css";

const FindPassword: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIconsimpleArrowClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.findPassword}>
      <Button4
        button="비밀번호 변경하기"
        buttonWidth="335px"
        buttonPosition="absolute"
        buttonBorderRadius="16px 16px 0px 16px"
        buttonPadding="16px 10px"
        buttonTop="unset"
        buttonLeft="calc(50% - 167.5px)"
        buttonBorder="1px solid #7d7d7d"
        buttonBottom="72px"
        buttonBackgroundColor="#6314e4"
        buttonAlignSelf="unset"
        buttonFlex="unset"
        buttonRight="unset"
        buttonHeight="unset"
        buttonColor="#fff"
      />
      <div className={styles.email}>
        <div className={styles.text}>
          <div className={styles.div}>이메일</div>
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
      <div className={styles.title}>
        <b className={styles.b}>비밀번호 변경</b>
        <div className={styles.div1}>함께 여행을 떠나볼까요?</div>
      </div>
      <Phone
        propAlignSelf="unset"
        propPosition="absolute"
        propTop="221px"
        propLeft="calc(50% - 167.5px)"
        propWidth="335px"
        propGap="16px"
        propGap1="16px"
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
      <div className={styles.email1}>
        <div className={styles.text}>
          <div className={styles.div}>신규 비밀번호</div>
        </div>
        <InputBox
          placeholder="Placeholder"
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
        writing="Writing"
        propAlignSelf="unset"
        propPosition="absolute"
        propTop="589px"
        propLeft="calc(50% - 167.5px)"
        propWidth="335px"
        guideText="입력한 비밀번호와 다릅니다."
        guideTextPosition="unset"
      />
      <Header
        prop="비밀번호 찾기"
        headerPosition="absolute"
        headerTop="44px"
        headerLeft="0px"
        divLeft="calc(50% - 49.5px)"
        onIconsimpleArrowClick={onIconsimpleArrowClick}
      />
      <div className={styles.navBar}>
        <div className={styles.navBar1}>
          <div className={styles.navBar2}>
            <div className={styles.buttonnavBar}>
              <div className={styles.iconnavBarParent}>
                <div className={styles.iconnavBar}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <div className={styles.ellipseParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.frameChild} />
                    <div className={styles.frameChild} />
                  </div>
                </div>
                <div className={styles.div3}>커뮤니티</div>
              </div>
            </div>
            <div className={styles.buttonnavBar}>
              <div className={styles.iconnavBarParent}>
                <img
                  className={styles.iconnavBar}
                  alt=""
                  src="/iconnav-bar.svg"
                />
                <div className={styles.div3}>매거진</div>
              </div>
            </div>
            <div className={styles.buttonnavBar}>
              <div className={styles.iconnavBar2}>
                <img
                  className={styles.applogo1Icon}
                  alt=""
                  src="/applogo-1@2x.png"
                />
              </div>
            </div>
            <div className={styles.buttonnavBar}>
              <div className={styles.iconnavBarParent}>
                <img
                  className={styles.iconnavBar3}
                  alt=""
                  src="/iconnav-bar1.svg"
                />
                <div className={styles.div3}>스토어</div>
              </div>
            </div>
            <div className={styles.buttonnavBar}>
              <div className={styles.iconnavBarParent}>
                <div className={styles.iconnavBar3}>
                  <div className={styles.iconnavBarChild} />
                  <div className={styles.iconnavBarItem} />
                </div>
                <div className={styles.div3}>마이페이지</div>
              </div>
            </div>
          </div>
        </div>
        <IPhoneStatusBarlower
          iPhoneStatusBarlowerWidth="unset"
          iPhoneStatusBarlowerBackgroundColor="unset"
          iPhoneStatusBarlowerAlignSelf="stretch"
          iPhoneStatusBarlowerPosition="relative"
          iPhoneStatusBarlowerBottom="unset"
          iPhoneStatusBarlowerLeft="unset"
          baseBackgroundColor="#222"
        />
      </div>
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

export default FindPassword;
