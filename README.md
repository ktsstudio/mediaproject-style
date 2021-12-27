![kts](./logo.png)

# @ktsstudio/mediaproject-style

Пакет с общими стилями для медиапроектов.

### Использование

`npm install @ktsstudio/mediaproject-style`

`yarn add @ktsstudio/mediaproject-style`

### Методы

* [markup](./src/markup.ts) - утилита для адаптивной верстки на rem

### Миксины, анимации и утилиты

* [mixins.ts](./src/mixins.ts) - миксины для styled-components
* [animations.ts](./src/animations.ts) - анимации для styled-components
* [utils.ts](./src/utils.ts) - утилиты для styled-components
* [mixins.scss](./src/mixins.scss) - миксины для Sass
* [animations.scss](./src/animations.scss) - анимации для Sass
* [utils.scss](./src/utils.scss) - утилиты для Sass

Чтобы использовать миксин, анимацию или утилиту в проекте с styled-components, импортируйте нужный объект из библиотеки:

```typescript
import { mixins } from '@ktsstudio/mediaproject-style';
```

Чтобы использовать миксин, анимацию или утилиту в проекте с Sass, импортируйте файл с ними:

```scss
@import '~@ktsstudio/mediaproject-style/dist/mixins';
```

### Обратная связь
Любой фидбэк вы можете передать нам на почту [hello@ktsstudio.ru](mailto:hello@ktsstudio.ru) в письме с темой "mediaproject-style"
