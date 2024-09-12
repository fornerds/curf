import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Tag4.module.css";

export type Tag4Type = {
  className?: string;
  tag?: string;
  tag1?: string;

  /** Style props */
  tagPosition?: CSSProperties["position"];
};

const Tag4: FunctionComponent<Tag4Type> = ({
  className = "",
  tag,
  tag1,
  tagPosition,
}) => {
  const tag2Style: CSSProperties = useMemo(() => {
    return {
      position: tagPosition,
    };
  }, [tagPosition]);

  return (
    <div
      className={[styles.property1tokenNumber, className].join(" ")}
      style={tag2Style}
    >
      <b className={styles.tag}>{tag}</b>
      <div className={styles.tag1}>{tag1}</div>
    </div>
  );
};

export default Tag4;
