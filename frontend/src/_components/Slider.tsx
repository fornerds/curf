import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Slider.module.css";

export type SliderType = {
  className?: string;

  /** Style props */
  sliderPosition?: CSSProperties["position"];
  sliderTop?: CSSProperties["top"];
  sliderLeft?: CSSProperties["left"];
};

const Slider: FunctionComponent<SliderType> = ({
  className = "",
  sliderPosition,
  sliderTop,
  sliderLeft,
}) => {
  const sliderStyle: CSSProperties = useMemo(() => {
    return {
      position: sliderPosition,
      top: sliderTop,
      left: sliderLeft,
    };
  }, [sliderPosition, sliderTop, sliderLeft]);

  return (
    <div
      className={[styles.property11, className].join(" ")}
      style={sliderStyle}
    >
      <div className={styles.property11Child} />
      <div className={styles.property11Item} />
      <div className={styles.property11Item} />
    </div>
  );
};

export default Slider;
