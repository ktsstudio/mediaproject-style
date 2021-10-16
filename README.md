![kts](./logo.png)

# @ktsstudio/mediaproject-styles

Package with common styles for media projects.

### Usage

`npm install @ktsstudio/mediaproject-styles`

`yarn add @ktsstudio/mediaproject-styles`

### Methods

* [checkIOS](./src/checkIOS.ts) - checks whether user agent fits IOS mobile device
* [checkMobile](./src/checkMobile.ts) - checks whether user agent fits mobile device
* [markup](./src/markup.ts)
* [useAndroidKeyboard](./src/useAndroidKeyboard.ts) - React hook for tracking keyboard presence on android device
* [useOrientationChange](./src/useOrientationChange.ts) - React hook for tracking screen orientation change on mobile device

### Mixins and animations

* [mixins.ts](./src/mixins.ts) - mixins for use in styled-components
* [animations.ts](./src/animations.ts) - animations for use in styled-components
* [mixins.scss](./src/mixins.scss) - mixins for use is Sass
* [animations.scss](./src/animations.scss) - animations for use in Sass

To use mixin or animation in styled-component, import it from lib:

```typescript
import { square } from '@ktsstudio/mediaproject-styles';
```

To use mixin or animation in Sass, import file containing it:

```scss
@import '~@ktsstudio/mediaproject-styles/dist/mixins';
```

### Proposals & feedback
Please, fell free to write on [hello@ktsstudio.ru](mailto:hello@ktsstudio.ru) with theme "mediaproject-styles feedback"
