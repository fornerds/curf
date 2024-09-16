import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Tag2 from "./Tag2";
import styles from "./Card1.module.css";

export type Card1Type = {
  className?: string;
  iconsimpleArrow?: string;
  showText?: boolean;
  tag?: string;
  tagPosition?: string;
  tagBackgroundColor?: string;
  tagBorder?: string;
  tagAlignSelf?: string;
  tagColor?: string;

  /** Style props */
  cardWidth?: CSSProperties["width"];
  cardAlignSelf?: CSSProperties["alignSelf"];
  divColor?: CSSProperties["color"];
};

const Card1: FunctionComponent<Card1Type> = ({
  className = "",
  iconsimpleArrow,
  showText,
  cardWidth,
  cardAlignSelf,
  divColor,
  tag,
  tagPosition,
  tagBackgroundColor,
  tagBorder,
  tagAlignSelf,
  tagColor,
}) => {
  const cardStyle: CSSProperties = useMemo(() => {
    return {
      width: cardWidth,
      alignSelf: cardAlignSelf,
    };
  }, [cardWidth, cardAlignSelf]);

  const div3Style: CSSProperties = useMemo(() => {
    return {
      color: divColor,
    };
  }, [divColor]);

  return (
    <div className={[styles.card, className].join(" ")} style={cardStyle}>
      <div className={styles.cardChild} />
      <div className={styles.autolayout}>
        <div className={styles.row}>
          <div className={styles.div}>결제번호</div>
          <div className={styles.mkfj8224070402}>MKFJ8224070402</div>
        </div>
        <div className={styles.row1}>
          <div className={styles.div}>상품명</div>
          <div className={styles.mkfj8224070402}>토큰결제 50개</div>
        </div>
        <div className={styles.row1}>
          <div className={styles.div}>결제수단</div>
          <div className={styles.mkfj8224070402}>카카오페이</div>
        </div>
        <div className={styles.row1}>
          <div className={styles.div}>결제액</div>
          <div className={styles.mkfj8224070402}>4,000원</div>
        </div>
        <div className={styles.row1}>
          <div className={styles.div}>결제일</div>
          <div className={styles.mkfj8224070402}>2024-07-04</div>
        </div>
      </div>
      <div className={styles.tagParent}>
        <Tag2
          tag={tag}
          tagPosition={tagPosition}
          tagBackgroundColor={tagBackgroundColor}
          tagBorder={tagBorder}
          tagAlignSelf={tagAlignSelf}
          tagColor={tagColor}
        />
        {showText && (
          <div className={styles.text}>
            <div className={styles.div9} style={div3Style}>
              취소요청
            </div>
            <img
              className={styles.iconsimpleArrow}
              alt=""
              src={iconsimpleArrow}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card1;
