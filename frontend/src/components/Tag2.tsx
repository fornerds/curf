import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Tag2.module.css";

export type Tag2Type = {
  className?: string;
  tag?: string;

  /** Style props */
  tagPosition?: CSSProperties["position"];
  tagBackgroundColor?: CSSProperties["backgroundColor"];
  tagBorder?: CSSProperties["border"];
  tagAlignSelf?: CSSProperties["alignSelf"];
  tagColor?: CSSProperties["color"];
};

const Tag2: FunctionComponent<Tag2Type> = ({
  className = "",
  tag,
  tagPosition,
  tagBackgroundColor,
  tagBorder,
  tagAlignSelf,
  tagColor,
}) => {
  const tagStyle: CSSProperties = useMemo(() => {
    return {
      position: tagPosition,
      backgroundColor: tagBackgroundColor,
      border: tagBorder,
      alignSelf: tagAlignSelf,
    };
  }, [tagPosition, tagBackgroundColor, tagBorder, tagAlignSelf]);

  const tag1Style: CSSProperties = useMemo(() => {
    return {
      color: tagColor,
    };
  }, [tagColor]);

  return (
    <div
      className={[styles.property1keycolor2, className].join(" ")}
      style={tagStyle}
    >
      <div className={styles.tag} style={tag1Style}>
        {tag}
      </div>
    </div>
  );
};

export default Tag2;
