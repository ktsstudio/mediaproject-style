import { WindowSize, MarkupConst, MarkupType } from './types/markup';
import checkMobile from './checkMobile';

const defaultMobileSize: WindowSize = {
  width: 375,
  height: 667,
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

const markup: (
  mobileWindowSize?: WindowSize,
  desktopWindowSize?: WindowSize,
  markupConst?: MarkupConst
) => MarkupType = (
  mobileWindowSize = defaultMobileSize,
  desktopWindowSize = defaultDesktopSize,
  markupConst = defaultMarkupConst
) => ({
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

    if (fitOnResize) {
      window.addEventListener('resize', this.fit.bind(this));
      window.onresize = () => {
        if (!this.initResize) {
          this.initResize = true;
          this.fit();
        }
      };
    }
  },
  fit: function fit(): void {
    const currentHeight = window.innerHeight;
    const currentWidth = window.innerWidth;

    const { width, height } = this.checkMobile()
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
  checkMobile: checkMobile,
});

export default markup;
