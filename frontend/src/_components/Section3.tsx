import { FunctionComponent, useCallback } from "react";
import Card from "./Card";
import styles from "./Section3.module.css";

export type Section3Type = {
  className?: string;
};

const Section3: FunctionComponent<Section3Type> = ({ className = "" }) => {
  const onCardContainerClick = useCallback(() => {
    // Please sync "chat" to the project
  }, []);

  return (
    <div className={[styles.section, className].join(" ")}>
      <div className={styles.title}>
        <b className={styles.b}>
          <p className={styles.p}>어떤 큐레이터와</p>
          <p className={styles.p}>이야기 해볼까요?</p>
        </b>
      </div>
      <div className={styles.curator}>
        <div className={styles.autolayout}>
          <Card
            imageContainer="/image-container@2x.png"
            prop="해외여행 "
            prop1="큐레이터, "
            prop2="몰리"
            rectangleDivBackgroundColor="#088394"
            rectangleDivBackgroundColor1="#4ae9ff"
            onCardContainerClick={onCardContainerClick}
            tag="#유럽"
            tag1="#여행지추천"
            tagPosition="unset"
            tagPosition1="unset"
            tagBackgroundColor="#fff"
            tagBackgroundColor1="#fff"
            tagBorder="1px solid #222"
            tagBorder1="1px solid #222"
            tagAlignSelf="unset"
            tagAlignSelf1="stretch"
            tagColor="#222"
            tagColor1="#222"
          />
          <Card
            imageContainer="/image-container1@2x.png"
            prop="국내여행 "
            prop1="큐레이터, "
            prop2="코리"
            rectangleDivBackgroundColor="#1cab55"
            rectangleDivBackgroundColor1="#18ff75"
            tag="#유럽"
            tag1="#여행지추천"
            tagPosition="unset"
            tagPosition1="unset"
            tagBackgroundColor="#fff"
            tagBackgroundColor1="#fff"
            tagBorder="1px solid #222"
            tagBorder1="1px solid #222"
            tagAlignSelf="unset"
            tagAlignSelf1="stretch"
            tagColor="#222"
            tagColor1="#222"
          />
          <Card
            imageContainer="/image-container2@2x.png"
            prop="문화"
            prop1="큐레이터,"
            prop2="달리"
            rectangleDivBackgroundColor="#bbc826"
            rectangleDivBackgroundColor1="#f1ff55"
            tag="#유럽"
            tag1="#여행지추천"
            tagPosition="unset"
            tagPosition1="unset"
            tagBackgroundColor="#fff"
            tagBackgroundColor1="#fff"
            tagBorder="1px solid #222"
            tagBorder1="1px solid #222"
            tagAlignSelf="unset"
            tagAlignSelf1="stretch"
            tagColor="#222"
            tagColor1="#222"
          />
          <Card
            imageContainer="/image-container3@2x.png"
            prop="미술관 "
            prop1="큐레이터, "
            prop2="달리"
            rectangleDivBackgroundColor="#bc2727"
            rectangleDivBackgroundColor1="#ff4a4a"
            tag="#유럽"
            tag1="#여행지추천"
            tagPosition="unset"
            tagPosition1="unset"
            tagBackgroundColor="#fff"
            tagBackgroundColor1="#fff"
            tagBorder="1px solid #222"
            tagBorder1="1px solid #222"
            tagAlignSelf="unset"
            tagAlignSelf1="stretch"
            tagColor="#222"
            tagColor1="#222"
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
