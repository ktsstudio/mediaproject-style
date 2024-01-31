### v4.0.0
- [+] новые миксины: `mvk`, `odr`, `ratioWidthHeight`, `aspectRatio`, `fixSafariRadiusOverflow`, `customScrollbar`, `ifFlexGapNotSupported`, `flexGap`
- [+] новые функции: `px-to-rem`, `round`, `fluid`, `safe-top-value`, `safe-bottom-value`
- [*] миксины `backgroundImageCover`, `backgroundImageContain`, `centerPos`
- [*] утилита markup переписана на классах, появилась возможность обращаться к `currentHtmlFontSize`
- [-] из зависимостей убрана библиотека @ktsstudio/mediaproject-utils

### v3.0.0
- [-] удалены миксины и утилиты, использующие переменные vkui

### v2.0.3
- [+] сборка на rollup
- [*] getNumberProperty ([issue](https://github.com/ktsstudio/mediaproject-style/issues/5))

### v2.0.2
- [*] экранированы переменные в миксинах
- [*] добавлена инструкция для работы с SSR

### v2.0.1
- [*] markup defaultMobileSize изменен на размер iphone x
- [*] опечатка в миксине centerPosY (closing issue #4)

## v2.0.0
- [+] appearAnimation
- [+] утилиты для работы с отступами и хедером в ВК-миниаппе
- [*] исправлены миксины с использованием глобальных классов
- [*] fadeAnimation принимает длительность анимации и параметр наличия анимации пульсации

## v1.0.0
- [+] checkIOS
- [+] checkMobile
- [+] markup
- [+] mixins
- [+] fade animations
- [+] useAndroidKeyboard
- [+] useOrientationChange
