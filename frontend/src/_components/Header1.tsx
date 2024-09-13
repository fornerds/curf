import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header1.module.css";

export type Header1Type = {
  className?: string;
};

const Header1: FunctionComponent<Header1Type> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onIconsimpleArrowClick = useCallback(() => {
    navigate("/account-management");
  }, [navigate]);

  return (
    <div className={[styles.header, className].join(" ")}>
      <img className={styles.icon} alt="" src="/icon2.svg" />
      <img
        className={styles.iconsimpleArrow}
        alt=""
        src="/iconsimple-arrow.svg"
        onClick={onIconsimpleArrowClick}
      />
      <div className={styles.div}>계정 탈퇴</div>
    </div>
  );
};

export default Header1;
