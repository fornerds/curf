import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../_components/Header";
import styles from "./AddPayment.module.css";

const AddPayment: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIconsimpleArrowClick = useCallback(() => {
    navigate("/subscription-management");
  }, [navigate]);

  return (
    <div className={styles.addPayment}>
      <div className={styles.image50Parent}>
        <img className={styles.image50Icon} alt="" src="/image-50@2x.png" />
        <Header
          prop="결제 수단 등록"
          headerPosition="absolute"
          headerTop="0px"
          headerLeft="0px"
          divLeft="calc(50% - 51.5px)"
          onIconsimpleArrowClick={onIconsimpleArrowClick}
        />
      </div>
    </div>
  );
};

export default AddPayment;
