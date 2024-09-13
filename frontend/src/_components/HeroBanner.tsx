import { FunctionComponent } from "react";
import Slider from "./Slider";
import styles from "./HeroBanner.module.css";

export type HeroBannerType = {
  className?: string;
};

const HeroBanner: FunctionComponent<HeroBannerType> = ({ className = "" }) => {
  return (
    <div className={[styles.heroBanner, className].join(" ")}>
      <div className={styles.wrapper}>
        <div className={styles.div}>
          <p className={styles.p}>컬프</p>
          <p className={styles.p}>오픈 기념</p>
          <p className={styles.p2}>토큰 무료 지급</p>
        </div>
      </div>
      <img className={styles.molly2Icon} alt="" src="/molly-21@2x.png" />
      <Slider
        sliderPosition="absolute"
        sliderTop="145px"
        sliderLeft="calc(50% - 15.5px)"
      />
    </div>
  );
};

export default HeroBanner;
