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

export interface MarkupProps {
  withCheckMobile?: boolean;
  checkMobile?: () => boolean;
  mobileWindowSize?: WindowSize;
  desktopWindowSize?: WindowSize;
  markupConst?: MarkupConst;
}

export interface MarkupType {
  withCheckMobile: boolean;
  checkMobile: () => boolean;
  mobileWindowSize: WindowSize;
  desktopWindowSize: WindowSize;
  const: MarkupConst;
  initResize: boolean;
  currentFontSize: number | null;
  init: (maxFontSize?: number, fitOnResize?: boolean) => void;
  fit: VoidFunction;
  round: (value: number) => number;
}

export type Markup = (props?: MarkupProps) => MarkupType;
