import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Tag2 from "./Tag2";
import styles from "./Card.module.css";

export type CardType = {
  className?: string;
  imageContainer?: string;
  prop?: string;
  prop1?: string;
  prop2?: string;
  tag?: string;
  tag1?: string;
  tagPosition?: string;
  tagPosition1?: string;
  tagBackgroundColor?: string;
  tagBackgroundColor1?: string;
  tagBorder?: string;
  tagBorder1?: string;
  tagAlignSelf?: string;
  tagAlignSelf1?: string;
  tagColor?: string;
  tagColor1?: string;

  /** Style props */
  rectangleDivBackgroundColor?: CSSProperties["backgroundColor"];
  rectangleDivBackgroundColor1?: CSSProperties["backgroundColor"];

  /** Action props */
  onCardContainerClick?: () => void;
};

const Card: FunctionComponent<CardType> = ({
  className = "",
  imageContainer,
  prop,
  prop1,
  prop2,
  rectangleDivBackgroundColor,
  rectangleDivBackgroundColor1,
  onCardContainerClick,
  tag,
  tag1,
  tagPosition,
  tagPosition1,
  tagBackgroundColor,
  tagBackgroundColor1,
  tagBorder,
  tagBorder1,
  tagAlignSelf,
  tagAlignSelf1,
  tagColor,
  tagColor1,
}) => {
  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBackgroundColor]);

  const rectangleDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor1,
    };
  }, [rectangleDivBackgroundColor1]);

  return (
    <div
      className={[styles.card, className].join(" ")}
      onClick={onCardContainerClick}
    >
      <div className={styles.background}>
        <div className={styles.backgroundChild} style={rectangleDivStyle} />
        <div className={styles.backgroundItem} style={rectangleDiv1Style} />
      </div>
      <img className={styles.imageContainerIcon} alt="" src={imageContainer} />
      <div className={styles.tags}>
        <Tag2
          tag={tag}
          tagPosition={tagPosition}
          tagBackgroundColor={tagBackgroundColor}
          tagBorder={tagBorder}
          tagAlignSelf={tagAlignSelf}
          tagColor={tagColor}
        />
        <Tag2
          tag={tag1}
          tagPosition={tagPosition1}
          tagBackgroundColor={tagBackgroundColor1}
          tagBorder={tagBorder1}
          tagAlignSelf={tagAlignSelf1}
          tagColor={tagColor1}
        />
      </div>
      <div className={styles.text}>
        <div className={styles.div}>
          <p className={styles.p}>{prop}</p>
          <p className={styles.p}>{prop1}</p>
          <p className={styles.p}>{prop2}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
