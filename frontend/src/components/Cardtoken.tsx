import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Cardtoken.module.css";

export type CardtokenType = {
  className?: string;
  oFF?: string;
  prop?: string;
  prop1?: string;
  prop2?: string;

  /** Style props */
  cardtokenWidth?: CSSProperties["width"];
  cardtokenAlignSelf?: CSSProperties["alignSelf"];
};

const Cardtoken: FunctionComponent<CardtokenType> = ({
  className = "",
  oFF,
  prop,
  prop1,
  prop2,
  cardtokenWidth,
  cardtokenAlignSelf,
}) => {
  const cardtokenStyle: CSSProperties = useMemo(() => {
    return {
      width: cardtokenWidth,
      alignSelf: cardtokenAlignSelf,
    };
  }, [cardtokenWidth, cardtokenAlignSelf]);

  return (
    <div
      className={[styles.property1default, className].join(" ")}
      style={cardtokenStyle}
    >
      <div className={styles.property1defaultChild} />
      <div className={styles.bottom}>
        <div className={styles.off}>{oFF}</div>
        <div className={styles.parent}>
          <div className={styles.div}>{prop}</div>
          <b className={styles.b}>{prop1}</b>
        </div>
      </div>
      <div className={styles.top}>
        <b className={styles.b1}>{prop2}</b>
        <img className={styles.topChild} alt="" src="/group-1707481443.svg" />
      </div>
    </div>
  );
};

export default Cardtoken;
