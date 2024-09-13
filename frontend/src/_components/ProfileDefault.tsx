import { FunctionComponent } from "react";
import styles from "./ProfileDefault.module.css";

export type ProfileDefaultType = {
  className?: string;
};

const ProfileDefault: FunctionComponent<ProfileDefaultType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.profiledefault, className].join(" ")}>
      <div className={styles.div}>버킷트레블</div>
      <div className={styles.pm}>08:19 PM</div>
      <div className={styles.profiledefaultChild} />
    </div>
  );
};

export default ProfileDefault;
