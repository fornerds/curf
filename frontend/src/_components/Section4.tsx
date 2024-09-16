import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Chat from "./Chat";
import styles from "./Section4.module.css";

export type Section4Type = {
  className?: string;
};

const Section4: FunctionComponent<Section4Type> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onChatContainerClick = useCallback(() => {
    navigate("/chat");
  }, [navigate]);

  return (
    <div className={[styles.section, className].join(" ")}>
      <div className={styles.title}>
        <b className={styles.b}>
          <p className={styles.p}>지난 대화를</p>
          <p className={styles.p}>이어가 볼까요?</p>
        </b>
      </div>
      <div className={styles.autolayout}>
        <div className={styles.chat}>
          <img className={styles.imageIcon} alt="" src="/image@2x.png" />
          <div className={styles.text}>
            <div className={styles.div}>국내여행 큐레이터 코리</div>
            <div className={styles.div1}>
              서울에서 꼭 가봐야할 맛집은 취향에 따라 달라질 수 있겠지만 저는 이
              맛집을 추천합니다!
            </div>
            <div className={styles.div2}>오전 12:47</div>
          </div>
          <img
            className={styles.chatChild}
            alt=""
            src="/group-1707481459.svg"
          />
        </div>
        <div className={styles.chat1} onClick={onChatContainerClick}>
          <img className={styles.imageIcon} alt="" src="/image1@2x.png" />
          <div className={styles.text}>
            <div className={styles.div}>해외여행 큐레이터 몰리</div>
            <div className={styles.div1}>
              이렇게 여행계획을 세우는 것은 어떨까요?
            </div>
            <div className={styles.div2}>어제</div>
          </div>
          <img
            className={styles.chatChild}
            alt=""
            src="/group-1707481459.svg"
          />
        </div>
        <Chat
          image="/image2@2x.png"
          prop="문화 큐레이터 달리"
          prop1="문의하신 콘서트는 이미 티켓이 마감되었어요"
          chatWidth="432px"
          chatPosition="unset"
        />
        <div className={styles.chat}>
          <img className={styles.imageIcon} alt="" src="/image3@2x.png" />
          <div className={styles.text}>
            <div className={styles.div}>미술관 큐레이터 졸리</div>
            <div className={styles.div1}>
              모나 미술관에서 진행중인 상설 전시는 두 가지가 있습니다
            </div>
            <div className={styles.div2}>8월 2일</div>
          </div>
          <img
            className={styles.chatChild}
            alt=""
            src="/group-1707481459.svg"
          />
        </div>
        <div className={styles.chat}>
          <img className={styles.imageIcon} alt="" src="/image4@2x.png" />
          <div className={styles.text}>
            <div className={styles.div}>국내여행 큐레이터 코리</div>
            <div className={styles.div1}>
              서울에서 꼭 가봐야할 맛집은 취향에 따라 달라질 수 있겠지만 저는 이
              맛집을 추천합니다!
            </div>
            <div className={styles.div2}>8월 2일</div>
          </div>
          <img
            className={styles.chatChild}
            alt=""
            src="/group-1707481459.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Section4;
