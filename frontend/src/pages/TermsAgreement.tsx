import { FunctionComponent } from "react";
import Button4 from "../components/Button4";
import Logo1 from "../components/Logo1";
import Checkbox from "../components/Checkbox";
import Autolayout from "../components/Autolayout";
import IPhoneStatusBarlower from "../components/IPhoneStatusBarlower";
import IPhoneStatusBarupper from "../components/IPhoneStatusBarupper";
import styles from "./TermsAgreement.module.css";

const TermsAgreement: FunctionComponent = () => {
  return (
    <div className={styles.termsAgreement}>
      <div className={styles.title}>
        <b className={styles.b}>약관 동의가 필요해요.</b>
        <div className={styles.div}>함께 여행을 떠나볼까요?</div>
      </div>
      <Button4
        button="다음"
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
      <div className={styles.back}>
        <img
          className={styles.iconsimpleArrow}
          alt=""
          src="/iconsimple-arrow.svg"
        />
        <div className={styles.div1}>회원가입</div>
      </div>
      <div className={styles.header}>
        <div className={styles.icon}>
          <div className={styles.line}>
            <div className={styles.lineChild} />
            <div className={styles.lineItem} />
            <div className={styles.lineInner} />
          </div>
        </div>
        <Logo1
          logoPosition="absolute"
          logoTop="13px"
          logoLeft="calc(50% - 30.5px)"
        />
      </div>
      <Checkbox
        prop="모두 동의"
        checkboxPosition="absolute"
        checkboxTop="221px"
        checkboxLeft="22px"
        checkboxAlignSelf="unset"
      />
      <Autolayout />
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
                <div className={styles.div2}>커뮤니티</div>
              </div>
            </div>
            <div className={styles.buttonnavBar}>
              <div className={styles.iconnavBarParent}>
                <img
                  className={styles.iconnavBar}
                  alt=""
                  src="/iconnav-bar.svg"
                />
                <div className={styles.div2}>매거진</div>
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
                <div className={styles.div2}>스토어</div>
              </div>
            </div>
            <div className={styles.buttonnavBar}>
              <div className={styles.iconnavBarParent}>
                <div className={styles.iconnavBar3}>
                  <div className={styles.iconnavBarChild} />
                  <div className={styles.iconnavBarItem} />
                </div>
                <div className={styles.div2}>마이페이지</div>
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
          baseBackgroundColor="#000"
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

export default TermsAgreement;
