import { fadeAnimation, appearAnimation } from './animations';
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
import { WindowSize, MarkupConst, MarkupType } from './types/markup';
import { WindowType } from './types/window';
import {
  getTopSafeArea,
  getBottomSafeArea,
  calcTopPadding,
  calcBottomPadding,
} from './utils';

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

const animations = {
  fadeAnimation,
  appearAnimation,
};

const utils = {
  getTopSafeArea,
  getBottomSafeArea,
  calcTopPadding,
  calcBottomPadding,
};

export { markup, mixins, animations, utils };

export { WindowSize, MarkupConst, MarkupType, WindowType };
