import { FunctionComponent } from "react";
import styles from "./Cardsubscribe.module.css";

export type CardsubscribeType = {
  className?: string;
};

const Cardsubscribe: FunctionComponent<CardsubscribeType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.property1default, className].join(" ")}>
      <div className={styles.property1defaultChild} />
      <div className={styles.bottom}>
        <div className={styles.off}>25% OFF</div>
        <div className={styles.parent}>
          <div className={styles.div}>20,000원</div>
          <div className={styles.group}>
            <b className={styles.b}>15,000원</b>
            <b className={styles.b1}>/월</b>
          </div>
        </div>
      </div>
      <div className={styles.guideText}>
        <img className={styles.icon} alt="" src="/icon6.svg" />
        <div className={styles.guideText1}>현재 구독중인 플랜</div>
      </div>
      <div className={styles.top}>
        <div className={styles.container}>
          <b className={styles.b2}>정기 구독</b>
          <div className={styles.div1}>정기구독에 관한 설명을 첨부합니다.</div>
        </div>
        <img className={styles.topChild} alt="" src="/group-1707481442.svg" />
      </div>
    </div>
  );
};

export default Cardsubscribe;
