import { FunctionComponent, useMemo, type CSSProperties } from "react";
import PaymentButton from "./PaymentButton";
import Iconpayment1 from "./Iconpayment1";
import styles from "./Property1Default.module.css";

export type Property1DefaultType = {
  className?: string;
  image1672?: string;
  image16721?: string;
  button?: string;
  button1?: string;
  paymentButtonPosition?: string;
  paymentButtonPosition1?: string;
  paymentButtonBackgroundColor?: string;
  paymentButtonBackgroundColor1?: string;
  paymentButtonBorder?: string;
  paymentButtonBorder1?: string;
  image1672IconTop?: string;
  image1672IconTop1?: string;
  image1672IconLeft?: string;
  image1672IconLeft1?: string;
  buttonColor?: string;
  buttonColor1?: string;

  /** Style props */
  property1DefaultPosition?: CSSProperties["position"];
};

const Property1Default: FunctionComponent<Property1DefaultType> = ({
  className = "",
  property1DefaultPosition,
  image1672,
  image16721,
  button,
  button1,
  paymentButtonPosition,
  paymentButtonPosition1,
  paymentButtonBackgroundColor,
  paymentButtonBackgroundColor1,
  paymentButtonBorder,
  paymentButtonBorder1,
  image1672IconTop,
  image1672IconTop1,
  image1672IconLeft,
  image1672IconLeft1,
  buttonColor,
  buttonColor1,
}) => {
  const property1DefaultStyle: CSSProperties = useMemo(() => {
    return {
      position: property1DefaultPosition,
    };
  }, [property1DefaultPosition]);

  return (
    <div
      className={[styles.property1default, className].join(" ")}
      style={property1DefaultStyle}
    >
      <PaymentButton
        image1672={image1672}
        button={button}
        paymentButtonPosition={paymentButtonPosition}
        paymentButtonBackgroundColor={paymentButtonBackgroundColor}
        paymentButtonBorder={paymentButtonBorder}
        image1672IconTop={image1672IconTop}
        image1672IconLeft={image1672IconLeft}
        buttonColor={buttonColor}
      />
      <div className={styles.paymentbutton}>
        <img className={styles.iconpayment} alt="" src="/iconpayment1@2x.png" />
        <div className={styles.button}>신용카드</div>
      </div>
      <PaymentButton
        image1672={image16721}
        button={button1}
        paymentButtonPosition={paymentButtonPosition1}
        paymentButtonBackgroundColor={paymentButtonBackgroundColor1}
        paymentButtonBorder={paymentButtonBorder1}
        image1672IconTop={image1672IconTop1}
        image1672IconLeft={image1672IconLeft1}
        buttonColor={buttonColor1}
      />
      <div className={styles.paymentbutton}>
        <Iconpayment1 />
        <div className={styles.button}>토스페이</div>
      </div>
    </div>
  );
};

export default Property1Default;
