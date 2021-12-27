import markup from './markup';
import {
  mobile,
  desktop,
  ios,
  android,
  minHeight,
  maxHeight,
  portraitOrientation,
  landscapeOrientation,
  longScreen,
  hover,
  autoHover,
  animate,
  square,
  centerPos,
  centerPosX,
  centerPosY,
  backgroundImageCover,
  backgroundImageContain,
  absoluteBackgroundPosition,
  fixedBackgroundPosition,
  autoCropText,
  hideScrollbar,
  inputStyles,
  placeholderStyles,
  sidePadding,
  contentWidth,
  adaptiveSidePadding,
  adaptiveContentWidth,
  headerCenterElement,
} from './mixins';

const mixins = {
  mobile,
  desktop,
  ios,
  android,
  minHeight,
  maxHeight,
  portraitOrientation,
  landscapeOrientation,
  longScreen,
  hover,
  autoHover,
  animate,
  square,
  centerPos,
  centerPosX,
  centerPosY,
  backgroundImageCover,
  backgroundImageContain,
  absoluteBackgroundPosition,
  fixedBackgroundPosition,
  autoCropText,
  hideScrollbar,
  inputStyles,
  placeholderStyles,
  sidePadding,
  contentWidth,
  adaptiveSidePadding,
  adaptiveContentWidth,
  headerCenterElement,
};

import { fadeAnimation, appearAnimation } from './animations';

const animations = {
  fadeAnimation,
  appearAnimation,
};

import { getTopSafeArea, getBottomSafeArea, calcTopPadding, calcBottomPadding } from './utils';

const utils = {
  getTopSafeArea,
  getBottomSafeArea,
  calcTopPadding,
  calcBottomPadding,
}

import { WindowSize, MarkupConst, MarkupType } from './types/markup';
import { WindowType } from './types/window';

export { markup, mixins, animations, utils };

export { WindowSize, MarkupConst, MarkupType, WindowType };
