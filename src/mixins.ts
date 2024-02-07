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

export const mvk = (
  styles: FlattenSimpleInterpolation
): FlattenSimpleInterpolation => css`
  .mvk & {
    ${styles}
  }
`;

export const odr = (
  styles: FlattenSimpleInterpolation
): FlattenSimpleInterpolation => css`
  .odr & {
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

/**
 * Центрирует элемент
 *
 * @param config Конфиг с настройками
 * @param config.is3d Использовать ли translate3d() вместо translate(). Необязательный параметр
 * @param config.axis Ось, относительно которой центрировать. Необязательный параметр. По умолчанию центрируется по обеим осям
 * @param config.properties Дополнительные значения transform (rotate, scale и т.д.) Необязательный параметр
 */
export const centerPos = (config?: {
  is3d?: boolean;
  axis?: 'x' | 'y';
  properties?: string;
}): FlattenSimpleInterpolation => {
  const x = !config?.axis || config?.axis === 'x' ? '-50%' : '0';
  const y = !config?.axis || config?.axis === 'y' ? '-50%' : '0';
  const translate = config?.is3d
    ? `translate3d(${x}, ${y}, 0)`
    : `translate(${x}, ${y})`;

  return css`
    ${y === '-50%' &&
    css`
      top: 50%;
    `};

    ${x === '-50%' &&
    css`
      left: 50%;
    `};

    transform: ${translate} ${config?.properties};
  `;
};

export const backgroundImageCover = (
  image?: string
): FlattenSimpleInterpolation => css`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  ${image ? `background-image: url(${image});` : ''}
`;

export const backgroundImageContain = (
  image?: string
): FlattenSimpleInterpolation => css`
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  ${image ? `background-image: url(${image});` : ''}
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

/** Умножает на один и тот же множитель переданные ширину и высоту */
export const scaleWidthHeight = (
  width: string,
  height: string,
  factor = 1
): FlattenSimpleInterpolation => css`
  width: calc(${width} * ${factor});
  height: calc(${height} * ${factor});
`;

export const aspectRatio = (
  width: number,
  height: number
): FlattenSimpleInterpolation => {
  const aspectRatioValue = width / height;

  return css`
    aspect-ratio: ${aspectRatioValue};

    @supports not (aspect-ratio: ${aspectRatioValue}) {
      &::after {
        content: '';
        display: block;
        width: 100%;
        padding-bottom: calc(100% * (${height} / ${width}));
      }
    }
  `;
};

/**
 * Фиксит в safari мерцание острых углов при overflow:hidden и border-radius
 * Здесь data:image/png - это квадратное изображение 1x1 с черным фоном
 * */
export const fixSafariRadiusOverflow = css`
  -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
`;

/**
 * Кастомизирует нативный скролбар
 *
 * @param config - объект с настройками
 * @param config.thumbColor Цвет ползунка
 * @param config.bgColor Цвет фона области прокрутки
 * @param config.size Размер скролбара. Для горизонтального это высота, для вертикального - ширина
 * @param config.radius Скругление ползунка и фона. Необязательный параметр, по умолчанию без скругления
 * @param config.orientation Значение overflow: all | y | x. Необязательный параметр, по умолчанию all
 */
export const customScrollbar = ({
  thumbColor,
  bgColor,
  size,
  radius = 0,
  orientation = 'all',
}: {
  thumbColor: string;
  bgColor: string;
  size: number;
  radius?: number;
  orientation?: string;
}): FlattenSimpleInterpolation => {
  const commonStyles = css`
    &::-webkit-scrollbar-track {
      background-color: ${bgColor};
      border-radius: ${radius}px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: ${radius}px;
      box-shadow: 0 0 20px 20px ${thumbColor} inset;
    }

    /* стилизация элементов прокрутки для Firefox */
    scrollbar-color: ${thumbColor} ${bgColor};
    scrollbar-width: ${size}px;

    /* стилизация элементов прокрутки для IE и Edge */
    -ms-overflow-style: none;
    scrollbar-base-color: ${bgColor};
    scrollbar-face-color: ${thumbColor};
    scrollbar-arrow-color: ${bgColor};
  `;

  switch (orientation) {
    case 'x':
      return css`
        overflow-x: auto;
        overflow-y: hidden;

        &::-webkit-scrollbar {
          width: 0;
          height: ${size}px;
        }

        ${commonStyles};
      `;

    case 'y':
      return css`
        overflow-x: hidden;
        overflow-y: auto;

        &::-webkit-scrollbar {
          width: ${size}px;
          height: 0;
        }

        ${commonStyles};
      `;

    default:
      return css`
        overflow: auto;

        &::-webkit-scrollbar {
          width: ${size}px;
          height: ${size}px;
          position: absolute;
          right: 0;
          top: 0;
        }

        ${commonStyles};
      `;
  }
};

/**
 * Проверка поддержки __flexbox gaps__ по наиболее близкому по поддержке свойству
 * @link https://github.com/w3c/csswg-drafts/issues/3559#issuecomment-1758459996
 */
export const ifFlexGapNotSupported = (
  styles: FlattenSimpleInterpolation
): FlattenSimpleInterpolation => css`
  @supports not (inset: 0) {
    ${styles}
  }
`;

/**
 * Установка __flexbox gaps__ с простым вариантом fallback
 *
 * (!) В случае fallback'а на контейнере будут установлены отрицательные margin
 */
export const flexGap = (
  row: string,
  col: string
): FlattenSimpleInterpolation => css`
  gap: ${row} ${col};

  ${ifFlexGapNotSupported(css`
    margin: calc(-1 * ${row} / 2) calc(-1 * ${col} / 2);

    & > * {
      margin: calc(${row} / 2) calc(${col} / 2);
    }
  `)}
`;

export const pxToRem = (px: number, baseRemInPx = 16): number =>
  px / baseRemInPx;

export const round = (number: number, decimals: number): number =>
  Number(number.toFixed(decimals));

/**
 * Задание адаптивного размера
 * @link https://www.smashingmagazine.com/2022/10/fluid-typography-clamp-sass-functions/
 */
const MIN_BREAKPOINT = 320;
const MAX_BREAKPOINT = 1440;

export const fluid = (
  minSize: number,
  maxSize: number,
  minBreakpoint = MIN_BREAKPOINT,
  maxBreakpoint = MAX_BREAKPOINT,
  unit = 'vw'
): string => {
  const slope = (maxSize - minSize) / (maxBreakpoint - minBreakpoint);
  const slopeToUnit = round(slope * 100, 3);
  const interceptRem = round(pxToRem(minSize - slope * minBreakpoint), 3);
  const minSizeRem = round(pxToRem(minSize), 3);
  const maxSizeRem = round(pxToRem(maxSize), 3);

  return `min(
    max(${minSizeRem}rem, ${slopeToUnit}${unit} + ${interceptRem}rem),
    ${maxSizeRem}rem
  )`;
};

export const safeTopValue = (value = '0px'): string =>
  `calc(${value} + env(safe-area-inset-top))`;

export const safeBottomValue = (value = '0px'): string =>
  `calc(${value} + env(safe-area-inset-bottom))`;
