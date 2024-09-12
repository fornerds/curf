import { FunctionComponent, useState, useCallback } from "react";
import PopUp7 from "./PopUp7";
import PortalPopup from "./PortalPopup";
import Tag2 from "./Tag2";
import Button4 from "../components/Button4";
import styles from "./Section.module.css";

export type SectionType = {
  className?: string;
};

const Section: FunctionComponent<SectionType> = ({ className = "" }) => {
  const [isPopUp1Open, setPopUp1Open] = useState(false);

  const openPopUp1 = useCallback(() => {
    setPopUp1Open(true);
  }, []);

  const closePopUp1 = useCallback(() => {
    setPopUp1Open(false);
  }, []);

  return (
    <>
      <div className={[styles.section1, className].join(" ")}>
        <div className={styles.background}>
          <div className={styles.backgroundChild} />
          <div className={styles.backgroundItem} />
        </div>
        <div className={styles.div}>현재 구독 플랜</div>
        <div className={styles.info}>
          <Tag2
            tag="Standard"
            tagPosition="unset"
            tagBackgroundColor="#6314e4"
            tagBorder="unset"
            tagAlignSelf="unset"
            tagColor="#fff"
          />
          <div className={styles.text}>
            <div className={styles.price}>
              <b className={styles.b}>19.00</b>
              <b className={styles.b}>USD</b>
              <div className={styles.text1}>
                <div className={styles.b}>/</div>
                <div className={styles.b}>월</div>
              </div>
            </div>
            <div className={styles.div3}>
              다음 결제일은 2024년 8월 4일입니다.
            </div>
          </div>
          <div className={styles.payment}>
            <img
              className={styles.iconpayment}
              alt=""
              src="/iconpayment@2x.png"
            />
            <div className={styles.visa1048}>Visa **** 1048</div>
          </div>
        </div>
        <div className={styles.section1Child} />
        <div className={styles.bottom}>
          <div className={styles.textbutton} onClick={openPopUp1}>
            <div className={styles.div4}>구독 취소</div>
          </div>
          <Button4
            button="플랜 변경"
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
            buttonHeight="unset"
            buttonColor="#fff"
          />
        </div>
      </div>
      {isPopUp1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopUp1}
        >
          <PopUp7 onClose={closePopUp1} />
        </PortalPopup>
      )}
    </>
  );
};

export default Section;
