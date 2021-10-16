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

export const minDeviceHeight = (
  height: string,
  content: FlattenSimpleInterpolation
): FlattenSimpleInterpolation => css`
  @media (min-device-height: ${height}) {
    ${content};
  }
`;

export const maxDeviceHeight = (
  height: string,
  content: FlattenSimpleInterpolation
): FlattenSimpleInterpolation => css`
  @media (max-device-height: ${height}) {
    ${content};
  }
`;

export const iphoneX = (
  content: FlattenSimpleInterpolation
): FlattenSimpleInterpolation => css`
  .ios & {
    ${minDeviceHeight(
      '800px',
      css`
        ${content};
      `
    )};
  }
`;

export const autoHover = (
  styles: FlattenSimpleInterpolation
): FlattenSimpleInterpolation => css`
  :not(.mobile &) {
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

export const centerPos = (...restProperties: string[]) => css`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) ${restProperties.join(' ')};
`;

export const centerPosX = (...restProperties: string[]) => css`
  left: 50%;
  transform: translate3d(-50%, 0, 0) ${restProperties.join(' ')};
`;

export const centerPosY = (...restProperties: string[]) => css`
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

const backgroundPosition = css`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -1;
`;

export const absoluteBackgroundPosition = css`
  position: absolute;
  ${backgroundPosition};
`;

export const fixedBackgroundPosition = css`
  position: fixed;
  ${backgroundPosition};
`;

export const hideScrollbar = css`
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const inputStyles = css`
  -webkit-appearance: none;
  line-height: initial;
  user-select: auto;
`;

export const placeholderStyles = (styles: FlattenSimpleInterpolation) => css`
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

export const sidePadding = (padding: string) => css`
  padding-left: ${padding};
  padding-right: ${padding};
`;

export const contentWidth = (sidePadding: string) => css`
  width: calc(100vw - 2 * ${sidePadding});
`;

export const adaptiveSidePadding = (
  mobilePadding: string,
  desktopPadding: string
) => css`
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
) => css`
  width: calc(100vw - 2 * ${mobileSidePadding});

  ${desktop(css`
    width: calc(100vw - 2 * ${desktopSidePadding});
  `)}
`;
