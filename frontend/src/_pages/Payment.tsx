import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button4 from "../_components/Button4";
import Section2 from "../_components/Section2";
import Checkbox from "../_components/Checkbox";
import Header from "../_components/Header";
import InputBox from "../_components/InputBox";
import IPhoneStatusBarlower from "../_components/IPhoneStatusBarlower";
import IPhoneStatusBarupper from "../_components/IPhoneStatusBarupper";
import styles from "./Payment.module.css";

const Payment: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIconsimpleArrowClick = useCallback(() => {
    navigate("/payment-item");
  }, [navigate]);

  return (
    <div className={styles.payment}>
      <Button4
        button="결제하기"
        buttonWidth="calc(100% - 40px)"
        buttonPosition="absolute"
        buttonBorderRadius="16px 16px 0px 16px"
        buttonPadding="16px 10px"
        buttonTop="unset"
        buttonLeft="20px"
        buttonBorder="1px solid #222"
        buttonBottom="72px"
        buttonBackgroundColor="#6314e4"
        buttonAlignSelf="unset"
        buttonFlex="unset"
        buttonRight="20px"
        buttonHeight="unset"
        buttonColor="#fff"
      />
      <Section2 />
      <Checkbox
        prop="구매조건 확인 및 결제진행 동의"
        checkboxPosition="absolute"
        checkboxTop="868px"
        checkboxLeft="calc(50% - 163.5px)"
        checkboxAlignSelf="unset"
      />
      <Header
        prop="서비스 결제"
        headerPosition="absolute"
        headerTop="44px"
        headerLeft="0px"
        divLeft="calc(50% - 41.5px)"
        onIconsimpleArrowClick={onIconsimpleArrowClick}
      />
      <div className={styles.groupParent}>
        <img
          className={styles.frameChild}
          alt=""
          src="/group-1707481448@2x.png"
        />
        <div className={styles.section}>
          <div className={styles.title}>
            <div className={styles.div}>상품 정보</div>
          </div>
          <div className={styles.information}>
            <div className={styles.row}>
              <div className={styles.div1}>상품명</div>
              <div className={styles.div2}>토큰 정기 구독</div>
            </div>
            <div className={styles.row}>
              <div className={styles.div1}>다음 결제일</div>
              <div className={styles.div4}>2025-07-10</div>
            </div>
          </div>
        </div>
        <img className={styles.logoIcon} alt="" src="/logo.svg" />
        <div className={styles.section1}>
          <div className={styles.title1}>
            <div className={styles.div}>쿠폰 사용</div>
          </div>
          <div className={styles.row2}>
            <InputBox
              placeholder="쿠폰 번호 입력"
              inputBoxWidth="unset"
              inputBoxPosition="unset"
              inputBoxHeight="41px"
              inputBoxFlex="1"
              inputBoxAlignSelf="unset"
              placeholderDisplay="unset"
              placeholderWebkitLineClamp="unset"
              placeholderWebkitBoxOrient="unset"
            />
            <Button4
              button="쿠폰 사용하기"
              buttonWidth="100px"
              buttonPosition="unset"
              buttonBorderRadius="10px"
              buttonPadding="11px 10px"
              buttonTop="unset"
              buttonLeft="unset"
              buttonBorder="1px solid #222"
              buttonBottom="unset"
              buttonBackgroundColor="#6314e4"
              buttonAlignSelf="unset"
              buttonFlex="unset"
              buttonRight="unset"
              buttonHeight="39px"
              buttonColor="#fff"
            />
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.section3}>
            <div className={styles.title1}>
              <div className={styles.div}>결제 금액</div>
            </div>
            <div className={styles.information1}>
              <div className={styles.row}>
                <div className={styles.div1}>상품가격</div>
                <div className={styles.div8}>20,000원</div>
              </div>
              <div className={styles.row}>
                <div className={styles.div1}>일반 할인</div>
                <div className={styles.div4}>-5,000원</div>
              </div>
              <div className={styles.row}>
                <div className={styles.div1}>쿠폰 할인</div>
                <div className={styles.div4}>-10,000원</div>
              </div>
            </div>
          </div>
          <div className={styles.sectionChild} />
          <div className={styles.title3}>
            <div className={styles.div1}>총 결제 금액</div>
            <div className={styles.div14}>5,000원</div>
          </div>
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

export default Payment;
