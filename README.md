<h1 align="center">EasyNav Button (⬆️/⬇️)</h1>

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

## 🤹🏼 API

This component supports a variety of optional customization and functionality options, listed below:

<br>

### `polyfillScroll`: `boolean`

Since the component uses the `scrollend` event for properly adjusting its appearance according to the user scroll action and the given event currently has limited availability (source: [caniuse](https://caniuse.com/mdn-api_document_scrollend_event)) a polyfill is enabled by default, set this property to `false` in order to disable the inclusion of the JavaScript polyfill file.  

<br>

The used polyfill was created and is maintained by me as well, it being located:

[scrollend-polyfill](https://github.com/igorskyflyer/npm-scrollend-polyfill)

<br>

> [!NOTE]
> The polyfill file is minified, served via jsDelivr CDN and has no side-effects in browsers that already support the `scrollend` event natively.
>

---

## 📝 Changelog

> ✨ Changelog is available here: [CHANGELOG.md](https://github.com/igorskyflyer/astro-easynav-button/blob/main/CHANGELOG.md).

---

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/astro-easynav-button/blob/main/LICENSE).

---

## 🧬 Related

[@igor.dvlpr/windows-packages](https://www.npmjs.com/package/@igor.dvlpr/windows-packages)

> _💻 A Node.js module for reading the Packages registry key on Windows 10. Useful for retrieving Windows 10 installed Store applications. 📦_

<br>

[@igor.dvlpr/is-rootdir](https://www.npmjs.com/package/@igor.dvlpr/is-rootdir)

> _🔼 Provides a way to check if the given path is the root drive/directory. ⛔_

<br>

[@igor.dvlpr/normalized-string](https://www.npmjs.com/package/@igor.dvlpr/normalized-string)

> _💊 NormalizedString provides you with a String type with consistent line-endings, guaranteed. 📮_

<br>

[@igor.dvlpr/recursive-readdir](https://www.npmjs.com/package/@igor.dvlpr/recursive-readdir)

> _📖 Provides recursive readdir() and readdirSync() functions. 📁_

<br>

[@igor.dvlpr/chars-in-string](https://www.npmjs.com/package/@igor.dvlpr/chars-in-string)

> _🪐 Provides ways of testing whether an array of chars is present inside a given String. ☄_

---

<br>
<br>

Provided by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
