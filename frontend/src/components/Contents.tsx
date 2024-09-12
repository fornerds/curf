import { FunctionComponent } from "react";
import Dropdown from "./Dropdown";
import Card1 from "./Card1";
import styles from "./Contents.module.css";

export type ContentsType = {
  className?: string;
};

const Contents: FunctionComponent<ContentsType> = ({ className = "" }) => {
  return (
    <div className={[styles.contents, className].join(" ")}>
      <div className={styles.date}>
        <Dropdown
          prop="2024"
          prop1="년"
          div={false}
          dropdownPosition="unset"
          divWidth="14px"
        />
        <Dropdown
          prop="7"
          prop1="월"
          div
          dropdownPosition="unset"
          divWidth="unset"
        />
      </div>
      <div className={styles.cards}>
        <Card1
          iconsimpleArrow="/iconsimple-arrow1@2x.png"
          showText
          cardWidth="unset"
          cardAlignSelf="stretch"
          divColor="#7d7d7d"
          tag="결제완료"
          tagPosition="unset"
          tagBackgroundColor="#b6b4ff"
          tagBorder="unset"
          tagAlignSelf="unset"
          tagColor="#6314e4"
        />
        <Card1
          iconsimpleArrow="/iconsimple-arrow1@2x.png"
          showText
          cardWidth="unset"
          cardAlignSelf="stretch"
          divColor="#7d7d7d"
          tag="결제완료"
          tagPosition="unset"
          tagBackgroundColor="#b6b4ff"
          tagBorder="unset"
          tagAlignSelf="unset"
          tagColor="#6314e4"
        />
        <Card1
          iconsimpleArrow="/iconsimple-arrow2@2x.png"
          showText={false}
          cardWidth="unset"
          cardAlignSelf="stretch"
          divColor="#c9c9c9"
          tag="결제취소"
          tagPosition="unset"
          tagBackgroundColor="#ffdfd8"
          tagBorder="unset"
          tagAlignSelf="unset"
          tagColor="#ff4a4a"
        />
      </div>
    </div>
  );
};

export default Contents;
