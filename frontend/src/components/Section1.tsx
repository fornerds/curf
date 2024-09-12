import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Default from "./Property1Default";
import styles from "./Section1.module.css";

export type Section1Type = {
  className?: string;
};

const Section1: FunctionComponent<Section1Type> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onTextbuttonContainerClick = useCallback(() => {
    navigate("/add-payment");
  }, [navigate]);

  return (
    <div className={[styles.section, className].join(" ")}>
      <div className={styles.title}>
        <div className={styles.div}>정기 결제 수단</div>
        <div className={styles.textbutton} onClick={onTextbuttonContainerClick}>
          <div className={styles.div1}>결제 방식 추가</div>
        </div>
      </div>
      <div className={styles.sectionChild} />
      <Property1Default
        property1DefaultPosition="unset"
        image1672="/image-1672@2x.png"
        image16721="/image-1676@2x.png"
        button="카카오페이"
        button1="네이버페이"
        paymentButtonPosition="unset"
        paymentButtonPosition1="unset"
        paymentButtonBackgroundColor="#b6b4ff"
        paymentButtonBackgroundColor1="#f7f7f7"
        paymentButtonBorder="1px solid #6314e4"
        paymentButtonBorder1="1px solid #c9c9c9"
        image1672IconTop="calc(50% - 11px)"
        image1672IconTop1="calc(50% - 10.5px)"
        image1672IconLeft="calc(50% - 14px)"
        image1672IconLeft1="calc(50% - 13.5px)"
        buttonColor="#222"
        buttonColor1="#767676"
      />
      <div className={styles.payments}>
        <div className={styles.payment}>
          <div className={styles.payment1}>
            <div className={styles.iconpayment}>
              <img
                className={styles.image1672Icon}
                alt=""
                src="/image-1672@2x.png"
              />
            </div>
            <div className={styles.text}>
              <div className={styles.visa1048}>Kakao **** 1048</div>
              <div className={styles.div2}>03/2029 만료 예정</div>
            </div>
          </div>
          <img className={styles.buttonIcon} alt="" src="/button.svg" />
        </div>
        <div className={styles.payment}>
          <div className={styles.payment1}>
            <img
              className={styles.iconpayment1}
              alt=""
              src="/iconpayment1@2x.png"
            />
            <div className={styles.text}>
              <div className={styles.visa1048}>Visa **** 1043</div>
              <div className={styles.div2}>08/2025 만료 예정</div>
            </div>
          </div>
          <img className={styles.buttonIcon} alt="" src="/button.svg" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
