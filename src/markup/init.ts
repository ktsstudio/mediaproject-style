import { MarkupConfig } from '../types/markup';

import Markup from './Markup';

let markup: Markup;

const initMarkup = (config?: MarkupConfig): void => {
  markup = new Markup(config);
};

export { markup, initMarkup };
