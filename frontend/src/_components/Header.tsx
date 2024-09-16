import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Icon4 from "./Icon4";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
  prop?: string;
  iconPosition?: string;
  iconTop?: string;
  iconLeft?: string;

  /** Style props */
  headerPosition?: CSSProperties["position"];
  headerTop?: CSSProperties["top"];
  headerLeft?: CSSProperties["left"];
  divLeft?: CSSProperties["left"];

  /** Action props */
  onIconsimpleArrowClick?: () => void;
};

const Header: FunctionComponent<HeaderType> = ({
  className = "",
  prop,
  headerPosition,
  headerTop,
  headerLeft,
  divLeft,
  onIconsimpleArrowClick,
  iconPosition,
  iconTop,
  iconLeft,
}) => {
  const headerStyle: CSSProperties = useMemo(() => {
    return {
      position: headerPosition,
      top: headerTop,
      left: headerLeft,
    };
  }, [headerPosition, headerTop, headerLeft]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      left: divLeft,
    };
  }, [divLeft]);

  return (
    <div className={[styles.header, className].join(" ")} style={headerStyle}>
      <Icon4
        iconPosition={iconPosition}
        iconTop={iconTop}
        iconLeft={iconLeft}
      />
      <img
        className={styles.iconsimpleArrow}
        alt=""
        src="/iconsimple-arrow.svg"
        onClick={onIconsimpleArrowClick}
      />
      <div className={styles.div} style={divStyle}>
        {prop}
      </div>
    </div>
  );
};

export default Header;
