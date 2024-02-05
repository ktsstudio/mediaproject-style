import { MarkupConfig } from '../types/markup';

import Markup from './Markup';

let markup: Markup;

/**
 * @param {boolean} config.isFitOnResize Пересчитывать ли размер шрифта при ресайзе экрана или перевороте экрана моб. устройства
 * @param {boolean} config.isMobile Является ли девайс мобильным устройством
 * @param {WindowSize} config.mobileWindowSize Размеры мобильного девайса, под который ориентированы макеты
 * @param {WindowSize} config.desktopWindowSize Размеры десктопного девайса, под который ориентированы макеты
 * @param {number} config.htmlFontSize Размер шрифта html
 * @param {number | null} config.minFontSize Минимальный размер шрифта html, чтобы содержимое страницы не было слишком мелким
 * @param {number | null} config.maxFontSize Максимальный размер шрифта html
 */
const initMarkup = (config?: MarkupConfig): void => {
  markup = new Markup(config);
};

export { markup, initMarkup, Markup };
