![kts](./logo.png)

# @ktsstudio/mediaproject-style

Пакет с общими стилями для медиапроектов.

## Использование

`npm install @ktsstudio/mediaproject-style`

`yarn add @ktsstudio/mediaproject-style`

## Содержимое

### Утилиты

* [markup](./src/markup/) - утилита для адаптивной верстки на rem

### Миксины и анимации

* [mixins.ts](./src/mixins.ts) - миксины для styled-components
* [animations.ts](./src/animations.ts) - анимации для styled-components
* [mixins.scss](./src/mixins.scss) - миксины для Sass
* [animations.scss](./src/animations.scss) - анимации для Sass

Чтобы использовать миксин или анимацию в проекте с styled-components, импортируйте нужный объект из библиотеки:

```typescript
import { markup } from '@ktsstudio/mediaproject-style';
или
import markup from '@ktsstudio/mediaproject-style/dist/es/markup';
```

Чтобы использовать миксин или анимацию в проекте с Sass, импортируйте файл с ними:

```scss
@import '~@ktsstudio/mediaproject-style/dist/mixins';
```

### Использование с SSR на примере Next.js

Для корректной работы библиотеки с Next.js необходимо использовать функции, которые не содержат обращения к window.

Пример:

```typescript
import markup from '@ktsstudio/mediaproject-style/dist/es/markup';
```

В случае если функция нужна только на клиенте, можно подгрузить библиотеку асинхронно, либо воспользоваться [next/dynamic](https://nextjs.org/docs/advanced-features/dynamic-import):

```typescript
 React.useEffect(() => {
    import('@ktsstudio/mediaproject-style/dist/es/markup').then((module) => {
      ...
    })
  }, []);
```

## Обратная связь

Любой фидбэк вы можете передать нам на почту [hello@ktsstudio.ru](mailto:hello@ktsstudio.ru) в письме с темой "mediaproject-style"
