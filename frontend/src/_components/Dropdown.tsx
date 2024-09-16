import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Dropdown.module.css";

export type DropdownType = {
  className?: string;
  prop?: string;
  prop1?: string;
  div?: boolean;

  /** Style props */
  dropdownPosition?: CSSProperties["position"];
  divWidth?: CSSProperties["width"];
};

const Dropdown: FunctionComponent<DropdownType> = ({
  className = "",
  prop,
  prop1,
  div,
  dropdownPosition,
  divWidth,
}) => {
  const dropdownStyle: CSSProperties = useMemo(() => {
    return {
      position: dropdownPosition,
    };
  }, [dropdownPosition]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      width: divWidth,
    };
  }, [divWidth]);

  return (
    <div
      className={[styles.property1variant2, className].join(" ")}
      style={dropdownStyle}
    >
      <div className={styles.text}>
        <div className={styles.div}>{prop}</div>
        {!div && (
          <div className={styles.div1} style={div1Style}>
            {prop1}
          </div>
        )}
      </div>
      <div className={styles.dropdown}>
        <img className={styles.icondropdown} alt="" src="/icondropdown.svg" />
      </div>
    </div>
  );
};

export default Dropdown;
