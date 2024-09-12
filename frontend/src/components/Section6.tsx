import { FunctionComponent } from "react";
import Tag4 from "./Tag4";
import Cardtoken from "./Cardtoken";
import styles from "./Section6.module.css";

export type Section6Type = {
  className?: string;
};

const Section6: FunctionComponent<Section6Type> = ({ className = "" }) => {
  return (
    <div className={[styles.section, className].join(" ")}>
      <div className={styles.title}>
        <div className={styles.div}>토큰 결제</div>
        <Tag4 tag="보유 토큰" tag1="12개" tagPosition="unset" />
      </div>
      <div className={styles.tokens}>
        <Cardtoken
          oFF="20% OFF"
          prop="5,000원"
          prop1="4,000원"
          prop2="토큰 50개"
          cardtokenWidth="unset"
          cardtokenAlignSelf="stretch"
        />
        <Cardtoken
          oFF="25% OFF"
          prop="10,000원"
          prop1="7,500원"
          prop2="토큰 100개"
          cardtokenWidth="unset"
          cardtokenAlignSelf="stretch"
        />
        <Cardtoken
          oFF="40% OFF"
          prop="20,000원"
          prop1="12,000원"
          prop2="토큰 200개"
          cardtokenWidth="unset"
          cardtokenAlignSelf="stretch"
        />
      </div>
    </div>
  );
};

export default Section6;
