import { FunctionComponent } from "react";
import HeroBanner from "../_components/HeroBanner";
import Section3 from "../_components/Section3";
import Section4 from "../_components/Section4";
import Icon4 from "../_components/Icon4";
import Logo1 from "../_components/Logo1";
import IPhoneStatusBarlower from "../_components/IPhoneStatusBarlower";
import IPhoneStatusBarupper from "../_components/IPhoneStatusBarupper";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  return (
    <div className={styles.home}>
      <div className={styles.homeChild} />
      <div className={styles.homeChild} />
      <div className={styles.culf}>Cul.f</div>
      <div className={styles.contents}>
        <HeroBanner />
        <Section3 />
        <Section4 />
      </div>
      <div className={styles.header}>
        <Icon4
          iconPosition="absolute"
          iconTop="calc(50% - 14px)"
          iconLeft="323px"
        />
        <Logo1
          logoPosition="absolute"
          logoTop="13px"
          logoLeft="calc(50% - 30.5px)"
        />
      </div>
      <div className={styles.homeInner} />
      <div className={styles.autolayout}>
        <div className={styles.row}>
          <div className={styles.div}>상호명 :</div>
          <div className={styles.div}>아트키</div>
        </div>
        <div className={styles.row1}>
          <div className={styles.div}>주소 :</div>
          <div className={styles.div}>서울특별시 서대문구 성산로 7길 89-8</div>
        </div>
        <div className={styles.row}>
          <div className={styles.div}>사업자등록번호 :</div>
          <div className={styles.div}>000-00-0000</div>
        </div>
      </div>
      <div className={styles.culfAllRights}>ⓒCul.f. All rights reserved.</div>
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
                <div className={styles.div6}>커뮤니티</div>
              </div>
            </div>
            <div className={styles.buttonnavBar}>
              <div className={styles.iconnavBarParent}>
                <img
                  className={styles.iconnavBar}
                  alt=""
                  src="/iconnav-bar.svg"
                />
                <div className={styles.div6}>매거진</div>
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
                <div className={styles.div6}>스토어</div>
              </div>
            </div>
            <div className={styles.buttonnavBar}>
              <div className={styles.iconnavBarParent}>
                <div className={styles.iconnavBar3}>
                  <div className={styles.iconnavBarChild} />
                  <div className={styles.iconnavBarItem} />
                </div>
                <div className={styles.div6}>마이페이지</div>
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

export default Home;
