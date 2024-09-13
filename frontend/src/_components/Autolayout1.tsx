import { FunctionComponent } from "react";
import GuideQuestionBox from "./GuideQuestionBox";
import InputSection from "./InputSection";
import styles from "./Autolayout1.module.css";

export type Autolayout1Type = {
  className?: string;
};

const Autolayout1: FunctionComponent<Autolayout1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.autolayout, className].join(" ")}>
      <div className={styles.guideQuestion}>
        <div className={styles.autolayout1}>
          <GuideQuestionBox
            guideQuestionBox="프라하에 있는 미술관을 추천해 줘 "
            guideQuestionBoxPosition="unset"
          />
          <GuideQuestionBox
            guideQuestionBox="박물관 추천해 줘"
            guideQuestionBoxPosition="unset"
          />
          <GuideQuestionBox
            guideQuestionBox="스노클링하기 좋은 동남아 휴양지 리조트 3곳을 추천해주세요."
            guideQuestionBoxPosition="unset"
          />
        </div>
      </div>
      <InputSection
        inputSectionWidth="unset"
        inputSectionPosition="unset"
        inputSectionAlignSelf="stretch"
        textPosition="unset"
      />
    </div>
  );
};

export default Autolayout1;
