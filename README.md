<div align="center">
  <img src="./assets/easynav-button.png">
</div>

<br>

<h1 align="center">EasyNav Button (⬆️/⬇️) for Astro 🚀</h1>

<br>

<p align="center">
  🧭 Add an easy-to-use navigational button (jump to <strong>top</strong>/<strong>bottom</strong>) to your <strong><em>Astro</em></strong> site. 🔼
</p>

<br>
<br>

<div align="center">
  <blockquote>
    <br>
    <h4>💖 Support further development</h4>
    <span>I work hard for every project, including this one and your support means a lot to me!
    <br>
    Consider buying me a coffee. ☕
    <br>
    <strong>Thank you for supporting my efforts! 🙏😊</strong></span>
    <br>
    <br>
    <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="150"></a>
    <br>
    <br>
    <a href="https://github.com/igorskyflyer"><em>@igorskyflyer</em></a>
    <br>
    <br>
    <br>
  </blockquote>
</div>

<br>
<br>

## 📃 Table of contents

- [Usage](#-usage)
    - [CSP notice](#csp-notice)
- [API](#-api)
    - [polyfillScroll](#polyfillscroll-boolean)
    - [background](#background-string)
    - [backgroundHover](#backgroundhover-string)
    - [color](#color-string)
    - [colorHover](#colorhover-string)
    - [size](#size-number)
    - [borderRadius](#borderradius-number)
    - [offset](#offset-number)
    - [fontSize](#fontsize-number)
    - [animationTime](#animationtime-string)
    - [iconTop](#icontop-string)
    - [iconBottom](#iconbottom-string)
    - [zIndex](#zindex-number)
    - [position](#position-left--right)
    - [show](#show-always--whenneeded)
- [Examples](#-examples)
- [Changelog](#-changelog)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🕵🏼 Usage

Install it by executing:

```shell
npm i "@igor.dvlpr/astro-easynav-button"
```

<br>

Then import it into your Astro project:

<br>

`Layout.astro`
```jsx
import EasyNavButton from '@igor.dvlpr/astro-easynav-button'

<footer>
{ /* other markup */ }
  <EasyNavButton
    background="#09F"
    backgroundHover="#006"
  />
{ /* other markup */ }
</footer>
```

<br>

#### CSP notice

> [!WARNING]
> This Astro component includes own JavaScript and CSS styles, if you use [CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) ![External link](https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/external.svg) in your project you need to add their respective nonces to the allowed sources list.
>

<br>

Inline script nonce: `HIhEpHlIWOEP4SenPqtEnL8zJM9UsBDBqhxJtYwwnDs=`  

Inline styles nonce: `klc7YMtNyvqvB5hz8qRaKctP2MvufAibzmC5FZF2pIw=`

<br>

## 🤹🏼 API

This component supports a variety of optional customization and functionality options, listed below:

---

### polyfillScroll: `boolean`

Since the component uses the `scrollend` event for properly adjusting its appearance according to the user scroll action and the given event currently has limited availability (source: [caniuse](https://caniuse.com/mdn-api_document_scrollend_event)) a polyfill is enabled by default, set this property to `false` in order to disable the inclusion of the JavaScript polyfill file.  

The default value is `true`.

<br>

> [!TIP]
> The used polyfill was created and is maintained by me as well, it being located:
>
>
> [scrollend-polyfill](https://github.com/igorskyflyer/npm-scrollend-polyfill)

<br>

> [!NOTE]
> The polyfill file is minified, served via the jsDelivr CDN and has no side-effects in browsers that already support the `scrollend` event natively.
>

---

### background: `string`

Background color of the button, any valid CSS color (HEX, RGB, RGBA, etc.).  

The default value is `'#afc7e5'`.

---

### backgroundHover: `string`

Background color of the button when hovered, any valid CSS color (HEX, RGB, RGBA, etc.).  

The default value is `'#3869c2'`.

---

### color: `string`

Foreground color of the button, any valid CSS color (HEX, RGB, RGBA, etc.).

The default value is `'#333333'`.

---

### colorHover: `string`

Foreground color of the button when hovered, any valid CSS color (HEX, RGB, RGBA, etc.).  

The default value is `'#ffffff'`.

---

### size: `number`

Size of the button defined as the number of px.  

The default value is `48`.

---

### borderRadius: `number`

Border radius of the button defined as the number of px.  

The default value is `6`.

<br>

> [!TIP]
> Set to `0` to disable round corners.
>

---

### offset: `number`

Offset of the button from the edge of the window defined as the number of px.  

The default value is `10`.

---

### fontSize: `number`

The font size of the button defined as the number of px.  

The default value is `30`.

---

### animationTime: `string`

The duration of the animation when swapping the up/down arrows applied on the button. Can be any valid CSS time value, in msec, sec, etc.  

The default value is `'250ms'`.

---

### iconTop: `string`

A glyph to use as the up arrow icon.  

The default value is `'\25B2'` (U+25B2, &#x25B2;).

---

### iconBottom: `string`

A glyph to use as the bottom arrow icon.  

The default value is `'\25BC'` (U+25BC, &#x25BC;).

---

### zIndex: `number`

The z-index value for the button. Adjust it only if you have used z-index in your CSS.  

The default value is `999`.

---

### position: `'left' | 'right'`

The horizontal position, either left or right edge of the window.  

The default value is `'right'`.

---

### show: `'always' | 'whenNeeded'`

Defines when to show the button.  

`'always'` will ignore if scrolling is possible (scrollbar visible),  

`'whenNeeded'` will check if scrolling is possible (scrollbar visible) and change the button's visibility based on it.

The default value is `'whenNeeded'`.

---

## ✨ Examples

`index.astro`
```jsx
import EasyNavButton from '@igor.dvlpr/astro-easynav-button'

<Layout title="Welcome to Astro.">
  <main>
    <EasyNavButton
      background="#09F"
      backgroundHover="#006"
      show="always"
    />
  </main>
</Layout>

```

---

## 📝 Changelog

> ✨ Changelog is available here: [CHANGELOG.md](https://github.com/igorskyflyer/astro-easynav-button/blob/main/CHANGELOG.md).

---

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/astro-easynav-button/blob/main/LICENSE).

---

## 🧬 Related

[@igor.dvlpr/astro-post-excerpt](https://www.npmjs.com/package/@igor.dvlpr/astro-post-excerpt)

> _⭐ An Astro component that renders post excerpts for your Astro blog - directly from your Markdown and MDX files. Astro v2+ collections are supported as well! 💎_

<br>

[@igor.dvlpr/recursive-readdir](https://www.npmjs.com/package/@igor.dvlpr/recursive-readdir)

> _📖 Provides recursive readdir() and readdirSync() functions. 📁_

<br>

[@igor.dvlpr/valid-path](https://www.npmjs.com/package/@igor.dvlpr/valid-path)

> _🧰 Provides ways of testing whether a given value can be a valid file/directory name. 🏜_

<br>

[@igor.dvlpr/windev](https://www.npmjs.com/package/@igor.dvlpr/windev)

> _🍃 Provides ways of checking whether a path is a legacy Windows device. 💾_

<br>

[@igor.dvlpr/extendable-string](https://www.npmjs.com/package/@igor.dvlpr/extendable-string)

> _🦀 ExtendableString allows you to create strings on steroids that have custom transformations applied to them, unlike common, plain strings.. 🪀_

---

<br>

### 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
