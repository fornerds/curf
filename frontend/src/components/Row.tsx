import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Tag2 from "./Tag2";
import styles from "./Row.module.css";

export type RowType = {
  className?: string;
  tag?: string;
  tagPosition?: string;
  tagBackgroundColor?: string;
  tagBorder?: string;
  tagAlignSelf?: string;
  tagColor?: string;

  /** Style props */
  rowPosition?: CSSProperties["position"];
};

const Row: FunctionComponent<RowType> = ({
  className = "",
  rowPosition,
  tag,
  tagPosition,
  tagBackgroundColor,
  tagBorder,
  tagAlignSelf,
  tagColor,
}) => {
  const rowStyle: CSSProperties = useMemo(() => {
    return {
      position: rowPosition,
    };
  }, [rowPosition]);

  return (
    <div
      className={[styles.property1row1, className].join(" ")}
      style={rowStyle}
    >
      <div className={styles.div}>2024.07.04</div>
      <div className={styles.standard}>Standard</div>
      <div className={styles.money}>
        <div className={styles.div1}>19.00</div>
        <div className={styles.usd}>USD</div>
      </div>
      <Tag2
        tag={tag}
        tagPosition={tagPosition}
        tagBackgroundColor={tagBackgroundColor}
        tagBorder={tagBorder}
        tagAlignSelf={tagAlignSelf}
        tagColor={tagColor}
      />
      <div className={styles.standard1}>Standard</div>
    </div>
  );
};

export default Row;
