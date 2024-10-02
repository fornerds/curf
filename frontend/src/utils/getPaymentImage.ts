import kakaoimage from '@/assets/images/kakao.png';
import visaimage from '@/assets/images/visa.png';
import naverimage from '@/assets/images/naver.png';
import tossimage from '@/assets/images/toss.png';

export type ImageType = 'kakao' | 'card' | 'naver' | 'toss';

export const getPaymentImage = (type: ImageType) => {
  const imageMap = {
    kakao: kakaoimage,
    card: visaimage,
    naver: naverimage,
    toss: tossimage,
  };
  return imageMap[type];
};
