import { checkMobile } from '@ktsstudio/mediaproject-utils';
import { action, computed, makeObservable, observable } from 'mobx';

import { debounce } from '../utils/debounce';

import { WindowSize, IMarkup, MarkupConfig } from '../types/markup';

type PrivateFields = '_currentHtmlFontSize' | '_updateHtmlFontSize' | '_checkEdgeHtmlFontSize';

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
  /** Пересчитывать ли размер шрифта при ресайзе экрана */
  private readonly _isFitOnResize: boolean;

  /** Осуществлять ли проверку, является ли девайс мобильным устройством (функция checkMobile) */
  private readonly _withCheckMobile: boolean;

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

  /** Текущий размер экрана на момент ресайза */
  // @ts-ignore
  private _currentWindowSize: WindowSize;

  /* Текущий размер шрифта тега html */
  // @ts-ignore
  private _currentHtmlFontSize: number;

  constructor(config?: MarkupConfig) {
    this._isFitOnResize = config?.isFitOnResize ?? false;
    this._withCheckMobile = config?.withCheckMobile ?? true;
    this._mobileWindowSize = config?.mobileWindowSize ?? DEFAULT_MOBILE_SIZE;
    this._desktopWindowSize = config?.desktopWindowSize ?? DEFAULT_DESKTOP_SIZE;
    this._htmlFontSize = config?.htmlFontSize ?? DEFAULT_HTML_FONT_SIZE;
    this._minFontSize = config?.minFontSize ?? MIN_HTML_FONT_SIZE;
    this._maxFontSize = config?.maxFontSize ?? null;

    this.fit();

    if (this._isFitOnResize) {
      window.addEventListener('resize', this.debouncedFit);
    }

    makeObservable<Markup, PrivateFields>(this, {
      _currentHtmlFontSize: observable,

      currentHtmlFontSize: computed,
      debouncedFit: computed,

      fit: action.bound,
      _updateHtmlFontSize: action.bound,
      _checkEdgeHtmlFontSize: action.bound,
    });
  }

  get debouncedFit(): VoidFunction {
    return debounce(this.fit.bind(this));
  }

  get currentHtmlFontSize(): number | null {
    return this._currentHtmlFontSize;
  }

  private _checkEdgeHtmlFontSize(): void {
    if (this._maxFontSize !== null && this._currentHtmlFontSize > this._maxFontSize) {
      this._currentHtmlFontSize = this._maxFontSize;
    }

    if (this._currentHtmlFontSize < this._minFontSize) {
      this._currentHtmlFontSize = this._minFontSize;
    }
  }

  private _updateHtmlFontSize(): void {
    const { width: currentWindowWidth, height: currentWindowHeight } = this._currentWindowSize;

    const { width: windowWidth, height: windowHeight } = window.is_mobile
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
      currentScale += 0.1 * (currentWindowHeight / (currentWindowWidth * 2 + currentWindowHeight));
    }

    const result = currentScale * this._htmlFontSize;

    this._currentHtmlFontSize = this.round(result);
  }

  fit(): void {
    this._currentWindowSize = {
      height: window.innerHeight,
      width: window.innerWidth,
    };

    if (this._withCheckMobile) {
      checkMobile();
    }

    this._updateHtmlFontSize();
    this._checkEdgeHtmlFontSize();

    document.documentElement.style.fontSize = `${this._currentHtmlFontSize}px`;
  }

  round(value: number): number {
    return Math.round(value * 2) / 2;
  }

  remToPx(rem: number): number {
    return Math.round(rem * this._currentHtmlFontSize * 2) / 2;
  }

  pxToRem(px: number): string {
    return px / 10 + 'rem';
  }

  destroy(): void {
    window.removeEventListener('resize', this.debouncedFit);
  }
}
