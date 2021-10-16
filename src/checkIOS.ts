/**
 * Checks whether user agent fits IOS mobile device.
 * Adds classname 'ios' or 'android' to document.body.
 * @returns {boolean} - result of checking.
 */
export default (isMobile: boolean, platform: string) => {
  const isIOS =
    platform === 'mobile_iphone' ||
    platform === 'mobile_iphone_messenger' ||
    /(iPad|iPhone|iPod)/g.test(navigator.userAgent);

  if (isMobile) {
    if (isIOS) {
      document.body.classList.add('ios');
    } else {
      document.body.classList.add('android');
    }
  }

  return isIOS;
};
