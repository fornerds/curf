import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../_components/Header";
import Notification11 from "../_components/Notification11";
import Tap2 from "../_components/Tap2";
import IPhoneStatusBarlower from "../_components/IPhoneStatusBarlower";
import IPhoneStatusBarupper from "../_components/IPhoneStatusBarupper";
import styles from "./Announcement.module.css";

const Announcement: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIconsimpleArrowClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onNotificationContainerClick = useCallback(() => {
    navigate("/notification-detail");
  }, [navigate]);

  const onTapContainerClick = useCallback(() => {
    // Please sync "mypage" to the project
  }, []);

  const onComponent44ContainerClick = useCallback(() => {
    navigate("/notification");
  }, [navigate]);

  const onComponent45ContainerClick = useCallback(() => {
    navigate("/payment-history");
  }, [navigate]);

  return (
    <div className={styles.announcement}>
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
          icon="/icon5.svg"
          prop="[공지사항] 2024년 9월 2일에 업데이트가 진행될"
          prop1="여러분 안녕하세요! 컬프의 다양한 큐레이터를 소개합니다. "
          prop2="2024. 8. 22"
          mynauipin="/mynauipin.svg"
          showDiv
          notificationWidth="unset"
          notificationPosition="unset"
          notificationAlignSelf="stretch"
          divAlignSelf="stretch"
          divWidth="unset"
        />
        <Notification11
          icon="/icon5.svg"
          prop="[공지사항] 컬프에서 새로운 큐레이터의 출시를 알립니다!"
          prop1="안녕하세요 여러분! 버킷트레블입니다 :) 오늘은 공지사항에 관련"
          prop2="2024. 8. 22"
          mynauipin="/mynauipin.svg"
          showDiv
          notificationWidth="unset"
          notificationPosition="unset"
          notificationAlignSelf="stretch"
          divAlignSelf="stretch"
          divWidth="unset"
          onNotificationContainerClick={onNotificationContainerClick}
        />
        <Notification11
          icon="/icon5.svg"
          prop="[공지사항] 구독 서비스 환불 요청에 관한 안내"
          prop1="여러분 안녕하세요! 컬프의 다양한 큐레이터를 소개합니다. "
          prop2="2024. 8. 22"
          mynauipin="/mynauipin.svg"
          showDiv
          notificationWidth="unset"
          notificationPosition="unset"
          notificationAlignSelf="stretch"
          divAlignSelf="stretch"
          divWidth="unset"
        />
        <Notification11
          icon="/icon5.svg"
          prop="[공지사항] 컬프 사용 방법에 대해 안내드립니다."
          prop1="여러분 안녕하세요! 컬프의 다양한 큐레이터를 소개합니다. "
          prop2="2024. 8. 22"
          mynauipin="/mynauipin.svg"
          showDiv
          notificationWidth="unset"
          notificationPosition="unset"
          notificationAlignSelf="stretch"
          divAlignSelf="stretch"
          divWidth="unset"
        />
        <Notification11
          icon="/icon5.svg"
          prop="[알림] 2024년 8월 12일에 업데이트가 진행될 예정입니다."
          prop1="여러분 안녕하세요! 컬프의 다양한 큐레이터를 소개합니다. "
          prop2="2024. 8. 22"
          mynauipin="/mynauipin.svg"
          showDiv
          notificationWidth="unset"
          notificationPosition="unset"
          notificationAlignSelf="stretch"
          divAlignSelf="stretch"
          divWidth="unset"
        />
        <Notification11
          icon="/icon5.svg"
          prop="[알림] 2024년 8월 6일에 업데이트가 진행될 예정입니다."
          prop1="여러분 안녕하세요! 컬프의 다양한 큐레이터를 소개합니다. "
          prop2="2024. 8. 22"
          mynauipin="/mynauipin.svg"
          showDiv
          notificationWidth="unset"
          notificationPosition="unset"
          notificationAlignSelf="stretch"
          divAlignSelf="stretch"
          divWidth="unset"
        />
        <Notification11
          icon="/icon5.svg"
          prop="[알림] 신규 큐레이터 추가"
          prop1="여러분 안녕하세요! 컬프의 다양한 큐레이터를 소개합니다. "
          prop2="2024. 8. 22"
          mynauipin="/mynauipin.svg"
          showDiv
          notificationWidth="unset"
          notificationPosition="unset"
          notificationAlignSelf="stretch"
          divAlignSelf="stretch"
          divWidth="unset"
        />
        <Notification11
          icon="/icon5.svg"
          prop="[공지사항] 2024년 9월 2일에 업데이트가 진행될"
          prop1="여러분 안녕하세요! 컬프의 다양한 큐레이터를 소개합니다. "
          prop2="2024. 8. 22"
          mynauipin="/mynauipin.svg"
          showDiv
          notificationWidth="unset"
          notificationPosition="unset"
          notificationAlignSelf="stretch"
          divAlignSelf="stretch"
          divWidth="unset"
        />
        <Notification11
          icon="/icon5.svg"
          prop="[공지사항] 2024년 9월 2일에 업데이트가 진행될"
          prop1="여러분 안녕하세요! 컬프의 다양한 큐레이터를 소개합니다. "
          prop2="2024. 8. 22"
          mynauipin="/mynauipin.svg"
          showDiv
          notificationWidth="unset"
          notificationPosition="unset"
          notificationAlignSelf="stretch"
          divAlignSelf="stretch"
          divWidth="unset"
        />
        <Notification11
          icon="/icon5.svg"
          prop="[공지사항] 2024년 9월 2일에 업데이트가 진행될"
          prop1="여러분 안녕하세요! 컬프의 다양한 큐레이터를 소개합니다. "
          prop2="2024. 8. 22"
          mynauipin="/mynauipin.svg"
          showDiv
          notificationWidth="unset"
          notificationPosition="unset"
          notificationAlignSelf="stretch"
          divAlignSelf="stretch"
          divWidth="unset"
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
          tapBackgroundColor="#6314e4"
          tapBorderLeft="unset"
          tapColor="#fff"
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
          tapBackgroundColor="unset"
          tapBorderLeft="unset"
          tapColor="#000"
          onTapContainerClick={onComponent44ContainerClick}
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

export default Announcement;
