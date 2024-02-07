export interface WindowSize {
  width: number;
  height: number;
}

export interface IMarkup {
  currentHtmlFontSize: number | null;
  fit: VoidFunction;
  round: (value: number) => number;
  remToPx: (rem: number) => number | null;
  pxToRem: (px: number) => number;
  destroy: VoidFunction;
}

export type MarkupConfig = {
  /** Пересчитывать ли размер шрифта при ресайзе экрана или перевороте экрана моб. устройства */
  isFitOnResize?: boolean;
  /** Является ли девайс мобильным устройством */
  isMobile?: boolean;
  /** Размеры мобильного девайса, под который ориентированы макеты */
  mobileWindowSize?: WindowSize;
  /** Размеры десктопного девайса, под который ориентированы макеты */
  desktopWindowSize?: WindowSize;
  /** Размер шрифта html, то есть значение 1rem */
  htmlFontSize?: number;
  /** Минимальный размер шрифта html, чтобы содержимое страницы не было слишком мелким */
  minFontSize?: number | null;
  /** Максимальный размер шрифта html */
  maxFontSize?: number | null;
};
