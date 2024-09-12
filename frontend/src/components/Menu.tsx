import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Menu1 from "./Menu1";
import styles from "./Menu.module.css";

export type MenuType = {
  className?: string;
};

const Menu: FunctionComponent<MenuType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onMenuContainerClick = useCallback(() => {
    // Please sync "mypage" to the project
  }, []);

  const onMenuContainerClick1 = useCallback(() => {
    navigate("/announcement");
  }, [navigate]);

  return (
    <div className={[styles.menu, className].join(" ")}>
      <div className={styles.menu1} onClick={onMenuContainerClick}>
        <img className={styles.iconmenu} alt="" src="/iconmenu1.svg" />
        <div className={styles.div}>마이페이지</div>
        <div className={styles.text}>{`   `}</div>
        <img className={styles.menuChild} alt="" src="/group-17074814591.svg" />
      </div>
      <div className={styles.menu1} onClick={onMenuContainerClick1}>
        <img className={styles.iconmenu} alt="" src="/iconmenu2.svg" />
        <div className={styles.div}>알림</div>
        <div className={styles.text}>{`   `}</div>
        <img className={styles.menuChild} alt="" src="/group-17074814591.svg" />
      </div>
      <Menu1 />
    </div>
  );
};

export default Menu;
