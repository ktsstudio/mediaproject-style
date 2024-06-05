![kts](./logo.png)

# @ktsstudio/mediaproject-style

Пакет с общими стилями для медиапроектов.

## Использование

`npm install @ktsstudio/mediaproject-style`

`yarn add @ktsstudio/mediaproject-style`

## Содержимое

### Утилиты

* [markup](./src/markup) — утилита для адаптивной верстки на rem

Чтобы использовать адаптивную верстку на rem, необходимо при инициализации приложения вызвать функцию initMarkup и передать в нее нужные параметры:

```typescript
import { initMarkup } from '@ktsstudio/mediaproject-style';

...

initMarkup();
```

Утилита создает объект типа Markup и экспортирует его в виде переменной markup. При необходимости к ней можно обратиться:

```typescript
import { markup } from '@ktsstudio/mediaproject-style';

...

console.log(markup.currentHtmlFontSize);
```

### Миксины и анимации

* [mixins.scss](./src/mixins.scss) — миксины для Sass
* [animations.scss](./src/animations.scss) — анимации для Sass

Чтобы использовать миксин или анимацию в проекте с Sass, импортируйте файл с ними:

```scss
@import '~@ktsstudio/mediaproject-style/dist/mixins';

...

@include centerPos;
```

### Использование с SSR на примере Next.js

Для корректной работы утилиты markup с Next.js необходимо вызывать функцию инициализации в useEffect.

Пример:

```typescript
import { initMarkup } from '@ktsstudio/mediaproject-style';

...

React.useEffect(() => {
  initMarkup();
}, []);
```

Импорт миксинов и анимаций в SSR не меняется.

## Обратная связь

Любой фидбэк вы можете передать нам на почту [hello@ktsstudio.ru](mailto:hello@ktsstudio.ru) в письме с темой "mediaproject-style"
