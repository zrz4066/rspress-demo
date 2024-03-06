### 简介

Web Component 是一套不同的技术，允许你创建可重用的定制元素（它们的功能封装在你的代码之外）并且在你的 web 应用中使用它们。

### 概念

Web Components 旨在解决这些问题 — 它由三项主要技术组成，它们可以一起使用来创建封装功能的定制元素，可以在你喜欢的任何地方重用，不必担心代码冲突。

- `Custom element（自定义元素）`：一组 JavaScript API，允许你定义 custom elements 及其行为，然后可以在你的用户界面中按照需要使用它们。
- `Shadow DOM（影子 DOM）`：一组 JavaScript API，用于将封装的“影子”DOM 树附加到元素（与主文档 DOM 分开呈现）并控制其关联的功能。通过这种方式，你可以保持元素的功能私有，这样它们就可以被脚本化和样式化，而不用担心与文档的其他部分发生冲突。
- `HTML template（HTML 模板）`： `<template>` 和 `<slot>` 元素使你可以编写不在呈现页面中显示的标记模板。然后它们可以作为自定义元素结构的基础被多次重用。

### `Custom element`

能够将 HTML 页面的功能封装为 `custom elements（自定义标签）`

1. 创建注册自定义元素

```js
 customElements.define('word-count',Word)
```

> `customElements.define` 方法

- 表示所创建的元素名称的符合 DOMString 标准的字符串。注意，`custom element` 的名称不能是单个单词，且其中必须要有`短横线`。
- 用于定义元素行为的 类 。
- 可选参数，一个包含 extends 属性的配置对象，是可选参数。它指定了所创建的元素继承自哪个内置元素，可以继承任何内置元素。

2. 创建自定义元素

```js
class Word extends HTMLParagraphElement  {
  constructor() {
    super()
    // 其他代码
  }
}
```

3. 使用自定义元素

```html
<word-count></word-count>
```

#### 有两种 custom elements

- `Autonomous custom elements` 是独立的元素，它不继承其他内建的 HTML 元素。你可以直接把它们写成 HTML 标签的形式，来在页面上使用。例如 `<popup-info>`，或者是`document.createElement("popup-info")`这样。
- `Customized built-in elements` 继承自基本的 HTML 元素。在创建时，你必须指定所需扩展的元素（正如上面例子所示），使用时，需要先写出基本的元素标签，并通过 is 属性指定 custom element 的名称。例如`<p is="word-count">`, 或者 `document.createElement("p", { is: "word-count" })`。

> 示例

```html
<div id="app">
   <word-count text="12312312"></word-count>
</div>

<script>
class Word extends HTMLElement {
  constructor() {
    super()
    // mode: "closed" 内部元素可见，外部无法操作DOM
    // mode: "open" 内部元素可见，外部可操作DOM
    // 创建一个 shadow root
    var shadow = this.attachShadow({ mode: "open" });
    // 创建一个 spans
    var wrapper = document.createElement("span");
    wrapper.setAttribute("class", "wrapper");
    var icon = document.createElement("span");
    icon.setAttribute("class", "icon");
    icon.setAttribute("tabindex", 0);
    var info = document.createElement("span");
    info.setAttribute("class", "info");
    // 获取 text 属性上的内容，并添加到一个 span 标签内
    var text = this.getAttribute("text");
    info.textContent = text;
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);

  }
}
</script>
```

> 效果
![Alt text](/images/web-components.png)

#### 生命周期

1. `connectedCallback`：当 custom element 首次被插入文档 DOM 时，被调用。
2. `disconnectedCallback`：当 custom element 从文档 DOM 中删除时，被调用。
3. `adoptedCallback`：当 custom element 被移动到新的文档时，被调用。
4. `attributeChangedCallback`: 当 custom element 增加、删除、修改自身属性时，被调用。

> 示例
`updateStyle`：函数接受一个参数，找到目标元素，给元素添加添加 `width`、`height`、`background-color`

```js
function updateStyle(elem) {
  var shadow = elem.shadowRoot;
  shadow.querySelector("style").textContent = `
    div {
      width: ${elem.getAttribute("l")}px;
      height: ${elem.getAttribute("l")}px;
      background-color: ${elem.getAttribute("c")};
    }
  `;
}
```

实际的更新操作是在生命周期的回调函数中处理的，在构造函数中设定类这些回调函数。当元素插入到 DOM 中时，`connectedCallback()`函数将会执行 — 在该函数中，执行`updateStyle()` 函数来确保方块按照定义来显示；

```js
connectedCallback() {
  console.log('Custom square element added to page.');
  updateStyle(this);
}

```

`disconnectedCallback()`和`adoptedCallback()`回调函数只是简单地将消息发送到控制台，提示我们元素什么时候从 DOM 中移除、或者什么时候移动到不同的页面：

```js
disconnectedCallback() {
  console.log('Custom square element removed from page.');
}

adoptedCallback() {
  console.log('Custom square element moved to new page.');
}

```

每当元素的属性变化时，`attributeChangedCallback()`回调函数会执行。正如它的属性所示，我们可以查看属性的名称、旧值与新值，以此来对元素属性做单独的操作。在当前的示例中，我们只是再次执行了updateStyle()函数，以确保方块的样式在元素属性值变化后得以更新：

```js
attributeChangedCallback(name, oldValue, newValue) {
  console.log('Custom square element attributes changed.');
  updateStyle(this);
}
```

需要注意的是，如果需要在元素属性变化后，触发`attributeChangedCallback()`回调函数，你必须监听这个属性。这可以通过定义`observedAttributes() get` 函数来实现，`observedAttributes()`函数体内包含一个 return 语句，返回一个数组，包含了需要监听的属性名称：

```js
static get observedAttributes() {return ['w', 'l']; }
```
