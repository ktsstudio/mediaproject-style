export interface WindowSize {
  width: number;
  height: number;
}

export interface MarkupConst {
  initScale: number;
  maxAspect: number;
  minAspect: number;
  maxFontSize: number | null;
}

export interface MarkupType {
  mobileWindowSize: WindowSize;
  desktopWindowSize: WindowSize;
  const: MarkupConst;
  initResize: boolean;
  currentFontSize: number | null;
  init: (maxFontSize?: number, fitOnResize?: boolean) => void;
  fit: VoidFunction;
  round: (value: number) => number;
  checkMobile: () => boolean;
}