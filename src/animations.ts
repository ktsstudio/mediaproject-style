import { css, keyframes } from 'styled-components';

const fade = keyframes`
  0%,
  100% {
    opacity: 1;
    transform: scale(1.2);
  }

  50% {
    opacity: 0.6;
    transform: scale(1);
  }
`;

export const fadeAnimation = css`
  animation: ${fade} 5s linear infinite;
`;

const centeredFade = keyframes`
  0%,
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.2);
  }

  50% {
    opacity: 0.6;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const centeredFadeAnimation = css`
  animation: ${centeredFade} 5s linear infinite;
`;
