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
или
import { hover } from '@ktsstudio/mediaproject-style/mixins';
```

Чтобы использовать миксин, анимацию или утилиту в проекте с Sass, импортируйте файл с ними:

```scss
@import '~@ktsstudio/mediaproject-style/dist/mixins';
```

### Использование с Next.js
Для корректной работы библиотеки с Next.js необходимо:
1) установить пакет [next-transpile-modules](https://www.npmjs.com/package/next-transpile-modules)
2) подключить плагин в next.config.js

```
// next.config.js

const withTM = require('next-transpile-modules')(['@ktsstudio/mediaproject-style'], {
  resolveSymlinks: true,
});

const plugins = [
  withTM,
];

const nextConfig = {
  ...
  compiler: {
    styledComponents: true,
  }
}

module.exports = (_phase, { defaultConfig }) => {
  return plugins.reduce((acc, plugin) => plugin(acc), { ...defaultConfig, ...nextConfig })
}
```

3) При ssr использовать функции которые не содержат обращения к window.

Пример:
```
import { hover, square } from '@ktsstudio/mediaproject-style/mixins';
import { appearAnimation } from '@ktsstudio/mediaproject-style/animations';
```

3.1) В случае если функция нужна только на клиенте, можно подгрузить библиотеку асинхронно либо воспользоваться [next/dynamic](https://nextjs.org/docs/advanced-features/dynamic-import)
```
 React.useEffect(() => {
    import('@ktsstudio/mediaproject-style/markup').then((module) => {
      ...
    })
  }, []);
```

### Обратная связь
Любой фидбэк вы можете передать нам на почту [hello@ktsstudio.ru](mailto:hello@ktsstudio.ru) в письме с темой "mediaproject-style"
