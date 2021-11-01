![kts](./logo.png)

# @ktsstudio/mediaproject-styles

Package with common styles for media projects.

### Usage

`npm install @ktsstudio/mediaproject-styles`

`yarn add @ktsstudio/mediaproject-styles`

### Methods

* [markup](./src/markup.ts) - tool for content resize via CSS rem

### Mixins and animations

* [mixins.ts](./src/mixins.ts) - mixins for use in styled-components
* [animations.ts](./src/animations.ts) - animations for use in styled-components
* [mixins.scss](./src/mixins.scss) - mixins for use is Sass
* [animations.scss](./src/animations.scss) - animations for use in Sass

To use mixin or animation in styled-components, import it from lib:

```typescript
import { mixins } from '@ktsstudio/mediaproject-styles';
```

To use mixin or animation in Sass, import file containing it:

```scss
@import '~@ktsstudio/mediaproject-styles/dist/mixins';
```

### Proposals & feedback
Please, fell free to write on [hello@ktsstudio.ru](mailto:hello@ktsstudio.ru) with theme "mediaproject-styles feedback"
