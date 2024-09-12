import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Notification11 from "../components/Notification11";
import Tap2 from "../components/Tap2";
import IPhoneStatusBarlower from "../components/IPhoneStatusBarlower";
import IPhoneStatusBarupper from "../components/IPhoneStatusBarupper";
import styles from "./Notification1.module.css";

const Notification1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIconsimpleArrowClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onNotificationContainerClick = useCallback(() => {
    navigate("/notification-detail");
  }, [navigate]);

  const onTapContainerClick = useCallback(() => {
    navigate("/announcement");
  }, [navigate]);

  const onComponent45ContainerClick = useCallback(() => {
    navigate("/payment-history");
  }, [navigate]);

  return (
    <div className={styles.notification}>
      <Header
        prop="알림"
        headerPosition="absolute"
        headerTop="44px"
        headerLeft="0px"
        divLeft="calc(50% - 16.5px)"
        onIconsimpleArrowClick={onIconsimpleArrowClick}
      />
      <div className={styles.notificationParent}>
        <Notification11
          icon="/icon.svg"
          prop="토큰 50개 결제가 완료되었습니다."
          prop2="2024. 8. 23"
          mynauipin="/mynauipin.svg"
          showDiv={false}
          notificationWidth="unset"
          notificationPosition="unset"
          notificationAlignSelf="stretch"
          divAlignSelf="unset"
          divWidth="335px"
        />
        <Notification11
          icon="/icon.svg"
          prop="구독 신청되었습니다."
          prop1="안녕하세요 여러분! 버킷트레블입니다 :) 오늘은 공지사항에 관련"
          prop2="2024. 8. 22"
          mynauipin="/mynauipin.svg"
          showDiv={false}
          notificationWidth="unset"
          notificationPosition="unset"
          notificationAlignSelf="stretch"
          divAlignSelf="unset"
          divWidth="335px"
          onNotificationContainerClick={onNotificationContainerClick}
        />
        <Notification11
          icon="/icon.svg"
          prop="첫 해외여행 큐레이터와의 대화를 축하드려요!"
          prop1="여러분 안녕하세요! 컬프의 다양한 큐레이터를 소개합니다. "
          prop2="2024. 8. 22"
          mynauipin="/mynauipin.svg"
          showDiv={false}
          notificationWidth="unset"
          notificationPosition="unset"
          notificationAlignSelf="stretch"
          divAlignSelf="unset"
          divWidth="335px"
        />
      </div>
      <div className={styles.tap}>
        <Tap2
          tap="공지사항"
          tapWidth="188px"
          tapPosition="unset"
          tapBorder="unset"
          tapBorderTop="1px solid #000"
          tapBorderRight="1px solid #000"
          tapBorderBottom="1px solid #000"
          tapBackgroundColor="unset"
          tapBorderLeft="unset"
          tapColor="#000"
          onTapContainerClick={onTapContainerClick}
        />
        <Tap2
          tap="내 알림"
          tapWidth="188.5px"
          tapPosition="unset"
          tapBorder="1px solid #000"
          tapBorderTop="unset"
          tapBorderRight="unset"
          tapBorderBottom="unset"
          tapBackgroundColor="#6314e4"
          tapBorderLeft="unset"
          tapColor="#fff"
        />
        <div
          className={styles.component45}
          onClick={onComponent45ContainerClick}
        >
          <div className={styles.tap1}>결제 내역</div>
        </div>
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

export default Notification1;
