import { WindowSize, MarkupConst, Markup } from './types/markup';

const defaultMobileSize: WindowSize = {
  width: 375,
  height: 812,
};

const defaultDesktopSize: WindowSize = {
  width: 1280,
  height: 820,
};

const defaultMarkupConst: MarkupConst = {
  initScale: 10,
  maxAspect: 1,
  minAspect: 1,
  maxFontSize: null,
};

/**
 * Утилита для адаптивной верстки на rem.
 * Подписывается на ресайз окна и изменяет размер шрифта у тега html пропорционально заданным размерам экрана.
 * По умолчанию размер окна на десктопе - 1280х820, на мобильном устройстве - 375х667 (размер iPhone 6).
 * @param {MarkupProps} props Параметры утилиты
 * @param {boolean} props.isMobile Является ли девайс мобильным устройством.
 * @param {WindowSize} props.mobileWindowSize Размер экрана по умолчанию на мобильных устройствах
 * @param {WindowSize} props.desktopWindowSize Размер экрана по умолчанию на десктопе
 * @param {MarkupConst} props.markupConst Параметры утилиты с максимальным размером шрифта и т.д.
 * @returns {MarkupType}
 */
const markup: Markup = ({ isMobile, ...props }) => {
  const {
    mobileWindowSize = defaultMobileSize,
    desktopWindowSize = defaultDesktopSize,
    markupConst = defaultMarkupConst,
  } = {
    ...props,
  };

  return {
    mobileWindowSize,
    desktopWindowSize,
    const: markupConst,
    initResize: false,
    currentFontSize: null,
    init: function init(maxFontSize?: number, fitOnResize = false): void {
      if (maxFontSize !== undefined) {
        this.const.maxFontSize = maxFontSize;
      }

      this.fit();

      if (!fitOnResize) {
        return;
      }

      window.addEventListener('resize', this.fit.bind(this));
      window.onresize = () => {
        if (this.initResize) {
          return;
        }

        this.initResize = true;
        this.fit();
      };
    },
    fit: function fit(): void {
      const { innerHeight: currentHeight, innerWidth: currentWidth } = window;

      const { width, height } = isMobile
        ? this.mobileWindowSize
        : this.desktopWindowSize;

      let scaleX = currentWidth / width;
      let scaleY = currentHeight / height;

      if (scaleX * height > currentHeight) {
        scaleX = currentHeight / height;
      }

      if (scaleY * width > currentWidth) {
        scaleY = currentWidth / width;
      }

      let currentScale = Math.min(scaleX, scaleY);
      if (currentHeight > currentWidth * 2) {
        currentScale +=
          0.1 * (currentHeight / (currentWidth * 2 + currentHeight));
      }

      const result = currentScale * this.const.initScale;

      this.currentFontSize = this.round(result);
      if (
        this.const.maxFontSize !== null &&
        this.currentFontSize > this.const.maxFontSize
      ) {
        this.currentFontSize = this.const.maxFontSize;
      }

      document.documentElement.style.fontSize = `${this.currentFontSize}px`;
    },
    round: function round(value: number): number {
      return Math.round(value * 2) / 2;
    },
  };
};

export default markup;
