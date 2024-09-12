import { FunctionComponent } from "react";
import Button4 from "/";
import Menu from "./Menu";
import styles from "./Chat2.module.css";

export type Chat2Type = {
  className?: string;
};

const Chat2: FunctionComponent<Chat2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.chat, className].join(" ")}>
      <div className={styles.culf}>Cul.f</div>
      <div className={styles.frameParent}>
        <div className={styles.parent}>
          <b className={styles.b}>컬프렌드</b>
          <div className={styles.b}>님</div>
        </div>
        <img className={styles.icon} alt="" src="/icon2.svg" />
      </div>
      <div className={styles.section}>
        <div className={styles.tokenNumber}>
          <div className={styles.title}>
            <b className={styles.b1}>남은 토큰 개수</b>
            <div className={styles.number}>
              <div className={styles.div1}>12</div>
              <div className={styles.div2}>개</div>
            </div>
          </div>
          <div className={styles.div3}>
            <p className={styles.p}>{`큐레이터와 대화를 더 나누려면 `}</p>
            <p className={styles.p}>‘토큰'이 필요해요.</p>
          </div>
        </div>
        <Button4
          button="토큰 추가 결제"
          buttonWidth="unset"
          buttonPosition="unset"
          buttonBorderRadius="10px"
          buttonPadding="11px 10px"
          buttonTop="unset"
          buttonLeft="unset"
          buttonBorder="1px solid #6314e4"
          buttonBottom="unset"
          buttonBackgroundColor="#fbfbfb"
          buttonAlignSelf="stretch"
          buttonFlex="unset"
          buttonRight="unset"
          buttonHeight="unset"
          buttonColor="#6314e4"
        />
      </div>
      <Menu />
    </div>
  );
};

export default Chat2;
