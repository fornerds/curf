import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../_components/Header";
import Button4 from "../_components/Button4";
import TitleInputBox from "../_components/TitleInputBox";
import TitleInputBox1 from "../_components/TitleInputBox1";
import Button2 from "../_components/Button2";
import IPhoneStatusBarlower from "../_components/IPhoneStatusBarlower";
import IPhoneStatusBarupper from "../_components/IPhoneStatusBarupper";
import styles from "./PaymentCancel.module.css";

const PaymentCancel: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIconsimpleArrowClick = useCallback(() => {
    navigate("/payment-history");
  }, [navigate]);

  return (
    <div className={styles.paymentCancel}>
      <Header
        prop="취소 요청"
        headerPosition="absolute"
        headerTop="44px"
        headerLeft="0px"
        divLeft="calc(50% - 33.5px)"
        onIconsimpleArrowClick={onIconsimpleArrowClick}
      />
      <Button4
        button="접수하기"
        buttonWidth="335px"
        buttonPosition="absolute"
        buttonBorderRadius="16px 16px 0px 16px"
        buttonPadding="16px 10px"
        buttonTop="unset"
        buttonLeft="calc(50% - 167.5px)"
        buttonBorder="1px solid #222"
        buttonBottom="72px"
        buttonBackgroundColor="#6314e4"
        buttonAlignSelf="unset"
        buttonFlex="unset"
        buttonRight="unset"
        buttonHeight="unset"
        buttonColor="#fff"
      />
      <div className={styles.contents}>
        <TitleInputBox
          prop="제목"
          titleInputBoxWidth="unset"
          titleInputBoxPosition="unset"
          titleInputBoxAlignSelf="stretch"
          placeholder="제목을 입력해주세요"
          inputBoxWidth="335px"
          inputBoxPosition="unset"
          inputBoxHeight="unset"
          inputBoxFlex="unset"
          inputBoxAlignSelf="unset"
          placeholderDisplay="unset"
          placeholderWebkitLineClamp="unset"
          placeholderWebkitBoxOrient="unset"
        />
        <TitleInputBox
          prop="이메일"
          titleInputBoxWidth="unset"
          titleInputBoxPosition="unset"
          titleInputBoxAlignSelf="stretch"
          placeholder="이메일을 입력해주세요"
          inputBoxWidth="335px"
          inputBoxPosition="unset"
          inputBoxHeight="unset"
          inputBoxFlex="unset"
          inputBoxAlignSelf="unset"
          placeholderDisplay="unset"
          placeholderWebkitLineClamp="unset"
          placeholderWebkitBoxOrient="unset"
        />
        <TitleInputBox
          prop="연락처"
          titleInputBoxWidth="unset"
          titleInputBoxPosition="unset"
          titleInputBoxAlignSelf="stretch"
          placeholder="연락처를 입력해주세요"
          inputBoxWidth="335px"
          inputBoxPosition="unset"
          inputBoxHeight="unset"
          inputBoxFlex="unset"
          inputBoxAlignSelf="unset"
          placeholderDisplay="unset"
          placeholderWebkitLineClamp="unset"
          placeholderWebkitBoxOrient="unset"
        />
        <TitleInputBox1
          prop="문의내용"
          titleInputBoxPosition="unset"
          titleInputBoxAlignSelf="stretch"
          placeholder="문의내용을 입력해주세요"
          inputBoxWidth="335px"
          inputBoxPosition="unset"
          inputBoxHeight="128px"
          inputBoxFlex="unset"
          inputBoxAlignSelf="unset"
          placeholderDisplay="-webkit-inline-box"
          placeholderWebkitLineClamp="unset"
          placeholderWebkitBoxOrient="unset"
        />
        <div className={styles.image}>
          <div className={styles.title}>
            <div className={styles.div}>
              사진을 첨부해주시면, 더욱 빠르고 정확한 도움을 드릴 수 있습니다.
            </div>
          </div>
          <Button2
            iconmenu="/iconmenu.svg"
            button="사진 업로드"
            buttonWidth="unset"
            buttonPosition="unset"
            buttonAlignSelf="stretch"
          />
          <img
            className={styles.imagePlaceholderIcon}
            alt=""
            src="/image-placeholder.svg"
          />
        </div>
      </div>
      <IPhoneStatusBarlower
        iPhoneStatusBarlowerWidth="375px"
        iPhoneStatusBarlowerBackgroundColor="unset"
        iPhoneStatusBarlowerAlignSelf="unset"
        iPhoneStatusBarlowerPosition="absolute"
        iPhoneStatusBarlowerBottom="0px"
        iPhoneStatusBarlowerLeft="calc(50% - 187.5px)"
        baseBackgroundColor="#000"
      />
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

export default PaymentCancel;
