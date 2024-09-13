import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Section5 from "../_components/Section5";
import Section6 from "../_components/Section6";
import Button4 from "../_components/Button4";
import Section7 from "../_components/Section7";
import Header from "../_components/Header";
import IPhoneStatusBarupper from "../_components/IPhoneStatusBarupper";
import IPhoneStatusBarlower from "../_components/IPhoneStatusBarlower";
import styles from "./PaymentItem.module.css";

const PaymentItem: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIconsimpleArrowClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.paymentItem}>
      <div className={styles.aiWrapper}>
        <b className={styles.ai}>
          <p className={styles.p}>토큰🪙을 구매해</p>
          <p className={styles.p}>AI큐레이터들과 대화해보세요.</p>
        </b>
      </div>
      <Section5 />
      <Section6 />
      <Button4
        button="결제하기"
        buttonWidth="335px"
        buttonPosition="absolute"
        buttonBorderRadius="16px 16px 0px 16px"
        buttonPadding="16px 10px"
        buttonTop="867px"
        buttonLeft="calc(50% - 167.5px)"
        buttonBorder="1px solid #222"
        buttonBottom="unset"
        buttonBackgroundColor="#6314e4"
        buttonAlignSelf="unset"
        buttonFlex="unset"
        buttonRight="unset"
        buttonHeight="unset"
        buttonColor="#fff"
      />
      <Section7 />
      <Header
        prop="서비스 결제"
        headerPosition="absolute"
        headerTop="44px"
        headerLeft="0px"
        divLeft="calc(50% - 41.5px)"
        onIconsimpleArrowClick={onIconsimpleArrowClick}
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
      <IPhoneStatusBarlower
        iPhoneStatusBarlowerWidth="375px"
        iPhoneStatusBarlowerBackgroundColor="unset"
        iPhoneStatusBarlowerAlignSelf="unset"
        iPhoneStatusBarlowerPosition="absolute"
        iPhoneStatusBarlowerBottom="0px"
        iPhoneStatusBarlowerLeft="0px"
        baseBackgroundColor="#000"
      />
    </div>
  );
};

export default PaymentItem;
