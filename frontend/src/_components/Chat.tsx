import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Chat.module.css";

export type ChatType = {
  className?: string;
  image?: string;
  prop?: string;
  prop1?: string;

  /** Style props */
  chatWidth?: CSSProperties["width"];
  chatPosition?: CSSProperties["position"];
};

const Chat: FunctionComponent<ChatType> = ({
  className = "",
  image,
  prop,
  prop1,
  chatWidth,
  chatPosition,
}) => {
  const chatStyle: CSSProperties = useMemo(() => {
    return {
      width: chatWidth,
      position: chatPosition,
    };
  }, [chatWidth, chatPosition]);

  return (
    <div className={[styles.chat, className].join(" ")} style={chatStyle}>
      <img className={styles.imageIcon} alt="" src={image} />
      <div className={styles.text}>
        <div className={styles.div}>{prop}</div>
        <div className={styles.div1}>
          <p className={styles.p}>{prop1}</p>
          <p className={styles.p}>취향에 따라 달라질 수 있겠지만</p>
          <p className={styles.p}>저는 이 맛집을 추천합니다!</p>
        </div>
        <div className={styles.div2}>8월 2일</div>
      </div>
      <img className={styles.chatChild} alt="" src="/group-1707481459.svg" />
    </div>
  );
};

export default Chat;
