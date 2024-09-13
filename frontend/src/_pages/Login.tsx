import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Login1 from "../_components/Login1";
import InputBox from "../_components/InputBox";
import Button4 from "../_components/Button4";
import Logo1 from "../_components/Logo1";
import IPhoneStatusBarlower from "../_components/IPhoneStatusBarlower";
import IPhoneStatusBarupper from "../_components/IPhoneStatusBarupper";
import styles from "./Login.module.css";

const Login: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTextClick = useCallback(() => {
    navigate("/terms-agreement");
  }, [navigate]);

  const onTextClick1 = useCallback(() => {
    navigate("/find-email");
  }, [navigate]);

  const onTextClick2 = useCallback(() => {
    navigate("/find-password");
  }, [navigate]);

  return (
    <div className={styles.login}>
      <div className={styles.title}>
        <b className={styles.b}>반갑습니다!</b>
        <div className={styles.div}>함께 여행을 떠나볼까요?</div>
      </div>
      <div className={styles.text}>
        <div className={styles.div1} onClick={onTextClick}>
          회원가입
        </div>
        <div className={styles.parent}>
          <div className={styles.div1} onClick={onTextClick1}>
            이메일 찾기
          </div>
          <div className={styles.div3}>|</div>
          <div className={styles.div1} onClick={onTextClick2}>
            비밀번호 찾기
          </div>
        </div>
      </div>
      <div className={styles.line}>
        <div className={styles.lineChild} />
        <div className={styles.div5}>간편 로그인</div>
        <div className={styles.lineChild} />
      </div>
      <div className={styles.login1}>
        <Login1
          prop="/.svg"
          label="네이버 로그인"
          loginWidth="unset"
          loginPosition="unset"
          loginBackgroundColor="#03c75a"
          loginAlignSelf="stretch"
          labelColor="#fff"
        />
        <Login1
          prop="/1.svg"
          label="카카오 로그인"
          loginWidth="unset"
          loginPosition="unset"
          loginBackgroundColor="#fee500"
          loginAlignSelf="stretch"
          labelColor="rgba(0, 0, 0, 0.85)"
        />
      </div>
      <div className={styles.pw}>
        <div className={styles.text1}>
          <div className={styles.div6}>비밀번호</div>
        </div>
        <InputBox
          placeholder="비밀번호를 입력하세요"
          inputBoxWidth="335px"
          inputBoxPosition="unset"
          inputBoxHeight="unset"
          inputBoxFlex="unset"
          inputBoxAlignSelf="unset"
          placeholderDisplay="unset"
          placeholderWebkitLineClamp="unset"
          placeholderWebkitBoxOrient="unset"
        />
      </div>
      <div className={styles.email}>
        <div className={styles.text1}>
          <div className={styles.div6}>이메일</div>
        </div>
        <InputBox
          placeholder="이메일을 입력하세요"
          inputBoxWidth="335px"
          inputBoxPosition="unset"
          inputBoxHeight="unset"
          inputBoxFlex="unset"
          inputBoxAlignSelf="unset"
          placeholderDisplay="unset"
          placeholderWebkitLineClamp="unset"
          placeholderWebkitBoxOrient="unset"
        />
      </div>
      <Button4
        button="로그인하기"
        buttonWidth="335px"
        buttonPosition="absolute"
        buttonBorderRadius="16px 16px 0px 16px"
        buttonPadding="16px 10px"
        buttonTop="419px"
        buttonLeft="calc(50% - 167.5px)"
        buttonBorder="1px solid #222"
        buttonBottom="unset"
        buttonBackgroundColor="#6314e4"
        buttonAlignSelf="unset"
        buttonFlex="unset"
        buttonRight="unset"
        buttonHeight="unset"
        buttonColor="#fff"
      />
      <div className={styles.header}>
        <div className={styles.icon}>
          <div className={styles.line1}>
            <div className={styles.lineInner} />
            <div className={styles.lineDiv} />
            <div className={styles.lineChild1} />
          </div>
        </div>
        <Logo1
          logoPosition="absolute"
          logoTop="13px"
          logoLeft="calc(50% - 30.5px)"
        />
      </div>
      <div className={styles.navBar}>
        <div className={styles.navBar1}>
          <div className={styles.navBar2}>
            <div className={styles.buttonnavBar}>
              <div className={styles.iconnavBarParent}>
                <div className={styles.iconnavBar}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <div className={styles.ellipseParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.frameChild} />
                    <div className={styles.frameChild} />
                  </div>
                </div>
                <div className={styles.div8}>커뮤니티</div>
              </div>
            </div>
            <div className={styles.buttonnavBar}>
              <div className={styles.iconnavBarParent}>
                <img
                  className={styles.iconnavBar}
                  alt=""
                  src="/iconnav-bar.svg"
                />
                <div className={styles.div8}>매거진</div>
              </div>
            </div>
            <div className={styles.buttonnavBar}>
              <div className={styles.iconnavBar2}>
                <img
                  className={styles.applogo1Icon}
                  alt=""
                  src="/applogo-1@2x.png"
                />
              </div>
            </div>
            <div className={styles.buttonnavBar}>
              <div className={styles.iconnavBarParent}>
                <img
                  className={styles.iconnavBar3}
                  alt=""
                  src="/iconnav-bar1.svg"
                />
                <div className={styles.div8}>스토어</div>
              </div>
            </div>
            <div className={styles.buttonnavBar}>
              <div className={styles.iconnavBarParent}>
                <div className={styles.iconnavBar3}>
                  <div className={styles.iconnavBarChild} />
                  <div className={styles.iconnavBarItem} />
                </div>
                <div className={styles.div8}>마이페이지</div>
              </div>
            </div>
          </div>
        </div>
        <IPhoneStatusBarlower
          iPhoneStatusBarlowerWidth="unset"
          iPhoneStatusBarlowerBackgroundColor="unset"
          iPhoneStatusBarlowerAlignSelf="stretch"
          iPhoneStatusBarlowerPosition="relative"
          iPhoneStatusBarlowerBottom="unset"
          iPhoneStatusBarlowerLeft="unset"
          baseBackgroundColor="#000"
        />
      </div>
      <IPhoneStatusBarupper
        networkSignalLight="/network-signal-light.svg"
        wiFiSignalLight="/wifi-signal--light.svg"
        batteryLight="/battery--light.svg"
        timeLight="/time--light.svg"
        iPhoneStatusBarupperPosition="absolute"
        iPhoneStatusBarupperBackgroundColor="#fff"
        iPhoneStatusBarupperTop="0px"
        iPhoneStatusBarupperLeft="calc(50% - 187.5px)"
      />
    </div>
  );
};

export default Login;
