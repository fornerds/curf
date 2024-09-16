import { FunctionComponent } from "react";
import styles from "./Iconpayment1.module.css";

export type Iconpayment1Type = {
  className?: string;
};

const Iconpayment1: FunctionComponent<Iconpayment1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.property1mediumProperty2t, className].join(" ")}>
      <div className={styles.toss}>
        <img className={styles.image1677Icon} alt="" src="/image-1677@2x.png" />
      </div>
    </div>
  );
};

export default Iconpayment1;
