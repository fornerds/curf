import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Textbox1 from "../components/Textbox1";
import Icon from "../components/Icon";
import Header from "../components/Header";
import Autolayout1 from "../components/Autolayout1";
import IPhoneStatusBarlower from "../components/IPhoneStatusBarlower";
import IPhoneStatusBarupper from "../components/IPhoneStatusBarupper";
import styles from "./Chat1.module.css";

const Chat1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIconsimpleArrowClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.chat}>
      <div className={styles.chatChild} />
      <div className={styles.chatChild} />
      <div className={styles.culf}>Cul.f</div>
      <div className={styles.line}>
        <div className={styles.lineChild} />
        <div className={styles.date}>
          <div className={styles.div}>2024.</div>
          <div className={styles.div}>08.</div>
          <div className={styles.div}>03</div>
        </div>
        <div className={styles.lineChild} />
      </div>
      <Textbox1
        userTextBox="혹시 지금 여행중이신가요?"
        textboxPosition="absolute"
        textboxBackgroundColor="#f7f7f7"
        textboxBorder="1px solid #c9c9c9"
        textboxTop="150px"
        textboxLeft="68px"
        textboxRight="unset"
      />
      <Textbox1
        userTextBox="여행은 언제나 즐겁죠! 어디를 여행하고 계신가요?"
        textboxPosition="absolute"
        textboxBackgroundColor="#f7f7f7"
        textboxBorder="1px solid #c9c9c9"
        textboxTop="264px"
        textboxLeft="68px"
        textboxRight="unset"
      />
      <Textbox1
        userTextBox="프라하에 관해서 궁금한 점이 있으신가요?"
        textboxPosition="absolute"
        textboxBackgroundColor="#f7f7f7"
        textboxBorder="1px solid #c9c9c9"
        textboxTop="399px"
        textboxLeft="68px"
        textboxRight="unset"
      />
      <Textbox1
        userTextBox="프라하의 맛집, 미술관, 박물관, 관광지, 편집숍 등을 추천해 드릴 수 있어요."
        textboxPosition="absolute"
        textboxBackgroundColor="#f7f7f7"
        textboxBorder="1px solid #c9c9c9"
        textboxTop="444px"
        textboxLeft="68px"
        textboxRight="unset"
      />
      <Textbox1
        userTextBox="예 지금 여행 중입니다."
        textboxPosition="absolute"
        textboxBackgroundColor="#b6b4ff"
        textboxBorder="1px solid #7b4fff"
        textboxTop="207px"
        textboxLeft="unset"
        textboxRight="20px"
      />
      <Textbox1
        userTextBox="프라하를 여행하고 있어요."
        textboxPosition="absolute"
        textboxBackgroundColor="#b6b4ff"
        textboxBorder="1px solid #7b4fff"
        textboxTop="342px"
        textboxLeft="unset"
        textboxRight="20px"
      />
      <Icon iconPosition="absolute" iconTop="150px" iconLeft="20px" />
      <Icon iconPosition="absolute" iconTop="286px" iconLeft="20px" />
      <Icon iconPosition="absolute" iconTop="466px" iconLeft="20px" />
      <div className={styles.slider}>
        <div className={styles.sliderChild} />
        <div className={styles.sliderItem} />
        <div className={styles.sliderInner} />
      </div>
      <Header
        prop="해외여행 큐레이터"
        headerPosition="absolute"
        headerTop="44px"
        headerLeft="0px"
        divLeft="calc(50% - 64.5px)"
        onIconsimpleArrowClick={onIconsimpleArrowClick}
        iconPosition="absolute"
        iconTop="calc(50% - 14px)"
        iconLeft="323px"
      />
      <Autolayout1 />
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

export default Chat1;
