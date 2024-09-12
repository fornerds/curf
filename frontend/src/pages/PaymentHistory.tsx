import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Tap2 from "../components/Tap2";
import Header from "../components/Header";
import Contents from "../components/Contents";
import IPhoneStatusBarlower from "../components/IPhoneStatusBarlower";
import IPhoneStatusBarupper from "../components/IPhoneStatusBarupper";
import styles from "./PaymentHistory.module.css";

const PaymentHistory: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTapContainerClick = useCallback(() => {
    // Please sync "mypage" to the project
  }, []);

  const onComponent44ContainerClick = useCallback(() => {
    navigate("/subscription-management");
  }, [navigate]);

  const onIconsimpleArrowClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.paymentHistory}>
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
          tapColor="#222"
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
          tapBackgroundColor="unset"
          tapBorderLeft="unset"
          tapColor="#222"
          onTapContainerClick={onComponent44ContainerClick}
        />
        <Tap2
          tap="결제 내역"
          tapWidth="125.5px"
          tapPosition="unset"
          tapBorder="unset"
          tapBorderTop="1px solid #222"
          tapBorderRight="unset"
          tapBorderBottom="1px solid #222"
          tapBackgroundColor="#6314e4"
          tapBorderLeft="1px solid #222"
          tapColor="#fff"
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
      <Header
        prop="마이페이지"
        headerPosition="absolute"
        headerTop="44px"
        headerLeft="0px"
        divLeft="calc(50% - 39.5px)"
        onIconsimpleArrowClick={onIconsimpleArrowClick}
      />
      <Contents />
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

export default PaymentHistory;
