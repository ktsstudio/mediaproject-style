const getNumberProperty = (propertyName: string): number => {
  const computedStyle = getComputedStyle(
    document.getElementById('root') ?? document.documentElement
  ).getPropertyValue(propertyName);

  return computedStyle ? Number.parseInt(computedStyle) : 0;
};

/**
 * Возвращает высоту верхней безопасной области в пикселях.
 * Использует переменную vkui --safe-area-inset-top.
 */
export const getTopSafeArea = (): number =>
  getNumberProperty('--safe-area-inset-top');

/**
 * Возвращает высоту нижней безопасной области в пикселях.
 * Использует переменную vkui --safe-area-inset-bottom.
 */
export const getBottomSafeArea = (): number =>
  getNumberProperty('--safe-area-inset-bottom');

/**
 * Высчитывает высоту верхнего отступа, прибавляя высоту верхней безопасной области.
 * @param {string} extraPadding Дополнительный отступ, по умолчанию '0px'
 * @return {string}
 */
export const calcTopPadding = (extraPadding = '0px'): string => {
  return `calc(var(--safe-area-inset-top) + ${extraPadding})`;
};

/**
 * Высчитывает высоту нижнего отступа, прибавляя высоту нижней безопасной области.
 * @param {string} extraPadding Дополнительный отступ, по умолчанию '0px'
 * @return {string}
 */
export const calcBottomPadding = (extraPadding = '0px'): string => {
  return `calc(var(--safe-area-inset-bottom) + ${extraPadding})`;
};
