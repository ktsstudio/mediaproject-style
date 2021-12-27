import { css, keyframes } from 'styled-components';

const fadeKeyframes = keyframes`
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

/**
 * Анимация угасания и пульсирования для лоадера
 */
export const fadeAnimation = css`
  animation: ${fadeKeyframes} 5s linear infinite;
`;

const appearKeyframes = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

/**
 * Анимация плавного появления элемента
 * @param {number} duration Длительность анимации в миллисекундах, по умолчанию 500
 */
export const appearAnimation = (duration = 500) => css`
  animation: ${appearKeyframes} ${duration}ms linear backwards;
`;
