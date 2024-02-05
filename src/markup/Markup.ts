import { WindowSize, IMarkup, MarkupConfig } from '../types/markup';
import { throttle } from '../utils/throttle';

const DEFAULT_HTML_FONT_SIZE = 10;

const MIN_HTML_FONT_SIZE = 5;

const DEFAULT_MOBILE_SIZE: WindowSize = {
  width: 375,
  height: 812,
};

const DEFAULT_DESKTOP_SIZE: WindowSize = {
  width: 1280,
  height: 820,
};

export default class Markup implements IMarkup {
  /** Пересчитывать ли размер шрифта при ресайзе экрана или перевороте экрана моб. устройства */
  private readonly _isFitOnResize: boolean;

  /** Является ли девайс мобильным устройством */
  private readonly _isMobile: boolean;

  /** Размеры мобильного девайса, под который ориентированы макеты */
  private readonly _mobileWindowSize: WindowSize;

  /** Размеры десктопного девайса, под который ориентированы макеты */
  private readonly _desktopWindowSize: WindowSize;

  /** Размер шрифта html по умолчанию, то есть значение 1rem */
  private readonly _htmlFontSize: number;

  /** Минимальный размер шрифта html, чтобы содержимое страницы не было слишком мелким */
  private readonly _minFontSize: number;

  /** Максимальный размер шрифта html */
  private readonly _maxFontSize: number | null;

  /* Текущий размер шрифта тега html */
  // @ts-ignore
  private _currentHtmlFontSize: number;

  constructor(config?: MarkupConfig) {
    this._isFitOnResize = config?.isFitOnResize ?? false;
    this._isMobile = config?.isMobile ?? true;
    this._mobileWindowSize = config?.mobileWindowSize ?? DEFAULT_MOBILE_SIZE;
    this._desktopWindowSize = config?.desktopWindowSize ?? DEFAULT_DESKTOP_SIZE;
    this._htmlFontSize = config?.htmlFontSize ?? DEFAULT_HTML_FONT_SIZE;
    this._minFontSize = config?.minFontSize ?? MIN_HTML_FONT_SIZE;
    this._maxFontSize = config?.maxFontSize ?? null;

    this.fit();

    if (this._isFitOnResize) {
      window.addEventListener('resize', this.throttledFit);
    }
  }

  get throttledFit(): VoidFunction {
    return throttle(this.fit.bind(this));
  }

  get currentHtmlFontSize(): number {
    return this._currentHtmlFontSize;
  }

  set currentHtmlFontSize(value: number) {
    if (this._maxFontSize !== null && value > this._maxFontSize) {
      this._currentHtmlFontSize = this._maxFontSize;

      return;
    }

    if (value < this._minFontSize) {
      this._currentHtmlFontSize = this._minFontSize;

      return;
    }

    this._currentHtmlFontSize = value;
  }

  fit(): void {
    const currentWindowWidth = window.innerWidth;
    const currentWindowHeight = window.innerHeight;

    const { width: windowWidth, height: windowHeight } = this._isMobile
      ? this._mobileWindowSize
      : this._desktopWindowSize;

    let scaleX = currentWindowWidth / windowWidth;
    let scaleY = currentWindowHeight / windowHeight;

    if (scaleX * windowHeight > currentWindowHeight) {
      scaleX = currentWindowHeight / windowHeight;
    }

    if (scaleY * windowWidth > currentWindowWidth) {
      scaleY = currentWindowWidth / windowWidth;
    }

    let currentScale = Math.min(scaleX, scaleY);

    if (currentWindowHeight > currentWindowWidth * 2) {
      currentScale +=
        0.1 *
        (currentWindowHeight / (currentWindowWidth * 2 + currentWindowHeight));
    }

    const result = currentScale * this._htmlFontSize;

    this.currentHtmlFontSize = this.round(result);

    document.documentElement.style.fontSize = `${this._currentHtmlFontSize}px`;
  }

  round(value: number): number {
    return Math.round(value * 2) / 2;
  }

  remToPx(rem: number): number {
    return this.round(rem * this._currentHtmlFontSize);
  }

  pxToRem(px: number): number {
    return px / this._currentHtmlFontSize;
  }

  destroy(): void {
    window.removeEventListener('resize', this.throttledFit);
  }
}
