import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ProfileDefault from "../components/ProfileDefault";
import IPhoneStatusBarlower from "../components/IPhoneStatusBarlower";
import IPhoneStatusBarupper from "../components/IPhoneStatusBarupper";
import styles from "./NotificationDetail.module.css";

const NotificationDetail: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIconsimpleArrowClick = useCallback(() => {
    navigate("/announcement");
  }, [navigate]);

  return (
    <div className={styles.notificationDetail}>
      <Header
        prop="알림 상세"
        headerPosition="absolute"
        headerTop="44px"
        headerLeft="0px"
        divLeft="calc(50% - 33.5px)"
        onIconsimpleArrowClick={onIconsimpleArrowClick}
      />
      <div className={styles.title}>
        <b className={styles.b}>
          [공지사항] 컬프에서 새로운 큐레이터의 출시를 알립니다!
        </b>
      </div>
      <div className={styles.profile}>
        <ProfileDefault />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <div className={styles.div}>
            <p className={styles.p}>안녕하세요 여러분! 버킷트레블입니다 :)</p>
            <p className={styles.p}>&nbsp;</p>
            <p className={styles.p}>
              오늘은 공지사항에 관련해서 말씀드릴건데요!
            </p>
            <p className={styles.p}>&nbsp;</p>
            <p className={styles.p}>
              공지사항은 공지사항일 뿐, 크게 의미는 없지만 아무말이라도 적기
              위해서 공지사항을 작성했답니다. 글이 좀 길어야 되거든요 조금 더
              쓸게요!
            </p>
            <p className={styles.p}>&nbsp;</p>
            <p
              className={styles.p}
            >{`그렇게 공지사항을 확인하시면, 다시 돌아가시면 됩니다. 앞으로도 더 열심히 하는 컬프가 되겠습니다. `}</p>
            <p className={styles.p}>&nbsp;</p>
            <p className={styles.p}>감사합니다!</p>
          </div>
        </div>
      </div>
      <div className={styles.imageContainerParent}>
        <div className={styles.imageContainer}>
          <img className={styles.curly2Icon} alt="" src="/curly-2@2x.png" />
        </div>
        <div className={styles.imageContainer1}>
          <img className={styles.curly2Icon1} alt="" src="/curly-21@2x.png" />
        </div>
        <img className={styles.molly2Icon} alt="" src="/molly-2@2x.png" />
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

export default NotificationDetail;
