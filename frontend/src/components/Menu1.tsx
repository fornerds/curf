import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Menu1.module.css";

export type Menu1Type = {
  className?: string;
};

const Menu1: FunctionComponent<Menu1Type> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onMenuContainerClick = useCallback(() => {
    navigate("/inquiries");
  }, [navigate]);

  return (
    <div
      className={[styles.menu, className].join(" ")}
      onClick={onMenuContainerClick}
    >
      <div className={styles.iconmenu}>
        <div className={styles.groupParent}>
          <img className={styles.groupChild} alt="" src="/group-27.svg" />
          <div className={styles.groupWrapper}>
            <div className={styles.groupContainer}>
              <div className={styles.groupContainer}>
                <div className={styles.div}>?</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.div1}>문의하기</div>
      <div className={styles.text}>{`   `}</div>
      <img className={styles.menuChild} alt="" src="/group-17074814591.svg" />
    </div>
  );
};

export default Menu1;
