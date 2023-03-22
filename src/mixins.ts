import { css, FlattenSimpleInterpolation } from 'styled-components';

export const mobile = (
  styles: FlattenSimpleInterpolation
): FlattenSimpleInterpolation => css`
  .mobile & {
    ${styles}
  }
`;

export const desktop = (
  styles: FlattenSimpleInterpolation
): FlattenSimpleInterpolation => css`
  .desktop & {
    ${styles}
  }
`;

export const ios = (
  styles: FlattenSimpleInterpolation
): FlattenSimpleInterpolation => css`
  .ios & {
    ${styles}
  }
`;

export const android = (
  styles: FlattenSimpleInterpolation
): FlattenSimpleInterpolation => css`
  .android & {
    ${styles}
  }
`;

export const minHeight = (
  height: string,
  content: FlattenSimpleInterpolation
): FlattenSimpleInterpolation => css`
  @media (min-height: ${height}) {
    ${content};
  }
`;

export const maxHeight = (
  height: string,
  content: FlattenSimpleInterpolation
): FlattenSimpleInterpolation => css`
  @media (max-height: ${height}) {
    ${content};
  }
`;

/**
 * Миксин для устройств, у которых длина по крайней мере в 2 раза больше ширины.
 * @param content
 */
export const longScreen = (
  content: FlattenSimpleInterpolation
): FlattenSimpleInterpolation => css`
  @media (max-aspect-ratio: 1/2) {
    ${content};
  }
`;

export const portraitOrientation = (
  content: FlattenSimpleInterpolation
): FlattenSimpleInterpolation => css`
  @media (orientation: portrait) {
    ${content};
  }
`;

export const landscapeOrientation = (
  content: FlattenSimpleInterpolation
): FlattenSimpleInterpolation => css`
  @media (orientation: landscape) {
    ${content};
  }
`;

export const autoHover = (
  styles: FlattenSimpleInterpolation
): FlattenSimpleInterpolation => css`
  .desktop & {
    &:hover {
      cursor: pointer;
      ${styles}
    }
  }

  .mobile & {
    &:active {
      ${styles}
    }
  }
`;

// Для случая, когда стили ховера зависят от пропсов элемента (например, от темы
// кнопки). Если использовать autoHover, стили для одних пропсов будут
// перетирать стили для других, потому что они будут применяться ко всем
// элементам одного типа (ко всем кнопкам).
export const hover = (
  isDesktop: boolean,
  styles: FlattenSimpleInterpolation
): FlattenSimpleInterpolation =>
  isDesktop
    ? css`
        &:hover {
          cursor: pointer;
          ${styles}
        }
      `
    : css`
        &:active {
          ${styles};
        }
      `;

/**
 * Добавляет transition на указанные свойства.
 * @param properties
 * @param time
 */
export const animate = (
  properties: string[] | string,
  time = 0.2
): FlattenSimpleInterpolation => {
  const array = typeof properties === 'string' ? [properties] : properties;
  return css`
    transition: ${array
      .map((property) => `${property} ${time}s ease`)
      .join(',')};
  `;
};

export const square = (property: string): FlattenSimpleInterpolation => css`
  height: ${property};
  width: ${property};
`;

export const centerPos = (
  ...restProperties: string[]
): FlattenSimpleInterpolation => css`
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0) ${restProperties.join(' ')};
`;

export const centerPosX = (
  ...restProperties: string[]
): FlattenSimpleInterpolation => css`
  left: 50%;
  transform: translate3d(-50%, 0, 0) ${restProperties.join(' ')};
`;

export const centerPosY = (
  ...restProperties: string[]
): FlattenSimpleInterpolation => css`
  top: 50%;
  transform: translate3d(0, -50%, 0) ${restProperties.join(' ')};
`;

export const backgroundImageCover = (
  image: string
): FlattenSimpleInterpolation => css`
  background: url(${image}) no-repeat center / cover;
`;

export const backgroundImageContain = (
  image: string
): FlattenSimpleInterpolation => css`
  background: url(${image}) no-repeat center / contain;
`;

const backgroundPosition = (zIndex = -1): FlattenSimpleInterpolation => css`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: ${zIndex};
`;

export const absoluteBackgroundPosition = (
  zIndex = -1
): FlattenSimpleInterpolation => css`
  position: absolute;
  ${backgroundPosition(zIndex)};
`;

export const fixedBackgroundPosition = (
  zIndex = -1
): FlattenSimpleInterpolation => css`
  position: fixed;
  ${backgroundPosition(zIndex)};
`;

/**
 * Обрезает длинный текст и добавляет многоточие.
 */
export const autoCropText = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const hideScrollbar = css`
  &::-webkit-scrollbar {
    display: none;
  }
`;

/**
 * Общие стили для инпута.
 */
export const inputStyles = css`
  -webkit-appearance: none;
  line-height: initial;
  user-select: auto;
`;

/**
 * Добавляет стили для плейсхолдера с приставками для всех браузеров.
 * @param styles
 */
export const placeholderStyles = (
  styles: FlattenSimpleInterpolation
): FlattenSimpleInterpolation => css`
  &::-webkit-input-placeholder {
    ${styles};
  }
  &::-moz-placeholder {
    ${styles};
  }
  &:-moz-placeholder {
    ${styles};
  }
  &:-ms-input-placeholder {
    ${styles};
  }
`;

export const sidePadding = (padding: string): FlattenSimpleInterpolation => css`
  padding-left: ${padding};
  padding-right: ${padding};
`;

export const contentWidth = (
  sidePadding: string
): FlattenSimpleInterpolation => css`
  width: calc(100vw - 2 * ${sidePadding});
`;

export const adaptiveSidePadding = (
  mobilePadding: string,
  desktopPadding: string
): FlattenSimpleInterpolation => css`
  padding-left: ${mobilePadding};
  padding-right: ${mobilePadding};

  ${desktop(css`
    padding-left: ${desktopPadding};
    padding-right: ${desktopPadding};
  `)}
`;

export const adaptiveContentWidth = (
  mobileSidePadding: string,
  desktopSidePadding: string
): FlattenSimpleInterpolation => css`
  width: calc(100vw - 2 * ${mobileSidePadding});

  ${desktop(css`
    width: calc(100vw - 2 * ${desktopSidePadding});
  `)}
`;
