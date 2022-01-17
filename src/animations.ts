import { css, FlattenSimpleInterpolation, keyframes } from 'styled-components';

const fadeKeyframes = (withScale = true) => keyframes`
  0%,
  100% {
    opacity: 1;
    ${
      withScale &&
      css`
        transform: scale(1.2);
      `
    }
  }

  50% {
    opacity: 0.6;
    ${
      withScale &&
      css`
        transform: scale(1);
      `
    }
  }
`;

/**
 * Анимация угасания для лоадера
 * @param {number} duration Длительность анимации в секундах, по умолчанию 5
 * @param {boolean} withScale Нужна ли дополнительная анимация пульсирования, по умолчанию true
 */
export const fadeAnimation = (
  duration = 5,
  withScale = true
): FlattenSimpleInterpolation => css`
  animation: ${fadeKeyframes(withScale)} ${duration}s linear infinite;
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
export const appearAnimation = (
  duration = 500
): FlattenSimpleInterpolation => css`
  animation: ${appearKeyframes} ${duration}ms linear backwards;
`;
