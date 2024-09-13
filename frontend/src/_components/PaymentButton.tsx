import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./PaymentButton.module.css";

export type PaymentButtonType = {
  className?: string;
  image1672?: string;
  button?: string;

  /** Style props */
  paymentButtonPosition?: CSSProperties["position"];
  paymentButtonBackgroundColor?: CSSProperties["backgroundColor"];
  paymentButtonBorder?: CSSProperties["border"];
  image1672IconTop?: CSSProperties["top"];
  image1672IconLeft?: CSSProperties["left"];
  buttonColor?: CSSProperties["color"];
};

const PaymentButton: FunctionComponent<PaymentButtonType> = ({
  className = "",
  image1672,
  button,
  paymentButtonPosition,
  paymentButtonBackgroundColor,
  paymentButtonBorder,
  image1672IconTop,
  image1672IconLeft,
  buttonColor,
}) => {
  const paymentButtonStyle: CSSProperties = useMemo(() => {
    return {
      position: paymentButtonPosition,
      backgroundColor: paymentButtonBackgroundColor,
      border: paymentButtonBorder,
    };
  }, [
    paymentButtonPosition,
    paymentButtonBackgroundColor,
    paymentButtonBorder,
  ]);

  const image1672IconStyle: CSSProperties = useMemo(() => {
    return {
      top: image1672IconTop,
      left: image1672IconLeft,
    };
  }, [image1672IconTop, image1672IconLeft]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      color: buttonColor,
    };
  }, [buttonColor]);

  return (
    <div
      className={[styles.property1click, className].join(" ")}
      style={paymentButtonStyle}
    >
      <div className={styles.iconpayment}>
        <img
          className={styles.image1672Icon}
          alt=""
          src={image1672}
          style={image1672IconStyle}
        />
      </div>
      <div className={styles.button} style={buttonStyle}>
        {button}
      </div>
    </div>
  );
};

export default PaymentButton;
