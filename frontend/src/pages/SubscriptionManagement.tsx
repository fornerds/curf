import { FunctionComponent, useState, useCallback } from "react";
import PopUp5 from "../components/PopUp5";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import Tap2 from "../components/Tap2";
import Header from "../components/Header";
import Tag2 from "../components/Tag2";
import Row from "../components/Row";
import Section from "../components/Section";
import Section1 from "../components/Section1";
import IPhoneStatusBarlower from "../components/IPhoneStatusBarlower";
import IPhoneStatusBarupper from "../components/IPhoneStatusBarupper";
import styles from "./SubscriptionManagement.module.css";

const SubscriptionManagement: FunctionComponent = () => {
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const navigate = useNavigate();

  const openPopUp = useCallback(() => {
    setPopUpOpen(true);
  }, []);

  const closePopUp = useCallback(() => {
    setPopUpOpen(false);
  }, []);

  const onTapContainerClick = useCallback(() => {
    // Please sync "mypage" to the project
  }, []);

  const onComponent45ContainerClick = useCallback(() => {
    navigate("/payment-history");
  }, [navigate]);

  const onIconsimpleArrowClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <>
      <div className={styles.subscriptionManagement}>
        <div className={styles.tap}>
          <Tap2
            tap="계정 관리"
            tapWidth="125.5px"
            tapPosition="unset"
            tapBorder="unset"
            tapBorderTop="1px solid #222"
            tapBorderRight="1px solid #222"
            tapBorderBottom="1px solid #222"
            tapBackgroundColor="unset"
            tapBorderLeft="unset"
            tapColor="#000"
            onTapContainerClick={onTapContainerClick}
          />
          <Tap2
            tap="구독 관리"
            tapWidth="126px"
            tapPosition="unset"
            tapBorder="1px solid #222"
            tapBorderTop="unset"
            tapBorderRight="unset"
            tapBorderBottom="unset"
            tapBackgroundColor="#6314e4"
            tapBorderLeft="unset"
            tapColor="#fff"
          />
          <Tap2
            tap="결제 내역"
            tapWidth="125.5px"
            tapPosition="unset"
            tapBorder="unset"
            tapBorderTop="1px solid #222"
            tapBorderRight="unset"
            tapBorderBottom="1px solid #222"
            tapBackgroundColor="unset"
            tapBorderLeft="1px solid #222"
            tapColor="#222"
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
              <div className={styles.usd}>12</div>
              <div className={styles.div3}>개</div>
            </div>
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
        <div className={styles.section}>
          <div className={styles.title1}>
            <div className={styles.div4}>청구 정보</div>
            <div className={styles.textbutton} onClick={openPopUp}>
              <div className={styles.div5}>정보 수정</div>
            </div>
          </div>
          <div className={styles.information}>
            <div className={styles.row}>
              <div className={styles.div6}>이름</div>
              <div className={styles.artkim01gmailcom}>김아트</div>
            </div>
            <div className={styles.row}>
              <div className={styles.div6}>이메일</div>
              <div className={styles.artkim01gmailcom}>artkim01@gmail.com</div>
            </div>
          </div>
        </div>
        <div className={styles.section1}>
          <div className={styles.title2}>
            <div className={styles.div4}>청구 내역</div>
            <div className={styles.textbutton1}>
              <div className={styles.div5}>정보 업데이트</div>
            </div>
          </div>
          <div className={styles.information1}>
            <div className={styles.row2}>
              <div className={styles.usd}>2024. 07. 04</div>
              <div className={styles.standard}>Standard</div>
              <div className={styles.money}>
                <div className={styles.artkim01gmailcom}>19.00</div>
                <div className={styles.usd}>USD</div>
              </div>
              <Tag2
                tag="결제완료"
                tagPosition="unset"
                tagBackgroundColor="#b6b4ff"
                tagBorder="unset"
                tagAlignSelf="unset"
                tagColor="#6314e4"
              />
              <div className={styles.standard1}>Standard</div>
            </div>
            <div className={styles.row2}>
              <div className={styles.usd}>2024. 07. 04</div>
              <div className={styles.standard}>Standard</div>
              <div className={styles.money}>
                <div className={styles.artkim01gmailcom}>19.00</div>
                <div className={styles.usd}>USD</div>
              </div>
              <Tag2
                tag="결제완료"
                tagPosition="unset"
                tagBackgroundColor="#b6b4ff"
                tagBorder="unset"
                tagAlignSelf="unset"
                tagColor="#6314e4"
              />
              <div className={styles.standard1}>Standard</div>
            </div>
            <div className={styles.row4}>
              <div className={styles.div15}>날짜</div>
              <div className={styles.div16}>청구내역</div>
              <div className={styles.money2}>
                <div className={styles.div17}>금액</div>
                <div className={styles.div18}>청구 금액</div>
              </div>
              <div className={styles.money3}>
                <div className={styles.div17}>19.00</div>
                <div className={styles.div20}>승인 여부</div>
              </div>
              <div className={styles.tag}>
                <div className={styles.tag1}>결제완료</div>
              </div>
              <div className={styles.standard1}>청구명</div>
            </div>
            <Row
              rowPosition="unset"
              tag="결제완료"
              tagPosition="unset"
              tagBackgroundColor="#b6b4ff"
              tagBorder="unset"
              tagAlignSelf="unset"
              tagColor="#6314e4"
            />
            <Row
              rowPosition="unset"
              tag="결제완료"
              tagPosition="unset"
              tagBackgroundColor="#b6b4ff"
              tagBorder="unset"
              tagAlignSelf="unset"
              tagColor="#6314e4"
            />
            <Row
              rowPosition="unset"
              tag="결제완료"
              tagPosition="unset"
              tagBackgroundColor="#b6b4ff"
              tagBorder="unset"
              tagAlignSelf="unset"
              tagColor="#6314e4"
            />
          </div>
        </div>
        <Section />
        <Section1 />
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
      {isPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopUp}
        >
          <PopUp5 onClose={closePopUp} />
        </PortalPopup>
      )}
    </>
  );
};

export default SubscriptionManagement;
