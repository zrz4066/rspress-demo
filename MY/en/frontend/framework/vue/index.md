
## 介绍

(发音为 /vjuː/，类似 view) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，都可以胜任。

## 渐进式框架

是一个框架，也是一个生态。其功能覆盖了大部分前端开发常见的需求。但 Web 世界是十分多样化的，不同的开发者在 Web 上构建的东西可能在形式和规模上会有很大的不同。考虑到这一点，的设计非常注重灵活性和“可以被逐步集成”这个特点。根据你的需求场景，你可以用不同的方式使用 Vue：

- 无需构建步骤，渐进式增强静态的 HTML
- 在任何页面中作为 Web Components 嵌入
- 单页应用 (SPA)
- 全栈 / 服务端渲染 (SSR)
- Jamstack / 静态站点生成 (SSG)
- 开发桌面端、移动端、WebGL，甚至是命令行终端中的界面

## MVVM模型

MVVM 是一种软件架构模式，它将软件界面显示分离为两个部分：视图层和模型层。视图层负责界面的显示，模型层负责页面的逻辑操作。
MVVM 模式和 MVC 模式一样，也是模型 - 视图 - 控制器（Model-View-Controller）的简写。
MVVM 模式和 MVC 模式的不同之处在于它实现了视图（View）和模型（Model）的数据绑定。

## SPA单页面应用

单页面应用（SPA）是指在Web应用程序中，整个应用的UI只有一个HTML页面，通过使用JavaScript和动态更新页面的方式，实现不同视图之间的切换，而无需进行页面的完整重载。

在传统的多页面应用中，每次导航到不同的页面时，服务器都会传输新的HTML页面。而在SPA中，初始的HTML页面中会加载所需的JavaScript和CSS资源，然后通过JavaScript动态地更新页面内容。

Vue作为一种现代的JavaScript框架，非常适合构建SPA。它提供了路由功能（Vue Router）和  组件化开发（Vue Components）等核心特性，使得开发者可以轻松地构建和管理SPA应用。

在Vue的SPA中，通过Vue Router进行路由管理，将不同的视图映射到不同的URL，并在URL的变化时，加载对应的组件来更新页面的内容。这种动态的更新方式，使得用户在使用应用时可以获得更流畅的页面切换体验。

SPA的优势包括：

- 更快速的页面导航和响应速度，因为无需每次都从服务器加载新的HTML页面。
- 更好的用户体验，通过无需页面刷新即可实现页面切换，用户感知的页面加载时间更短。
- 更好的组件化和模块化，将应用程序拆分为多个组件，便于维护和重用。
- 可以使用前端框架提供的功能来处理路由、状态管理和数据响应等问题，提高开发效率。

SPA也有一些限制和挑战，如对搜索引擎优化 (SEO) 的支持不如传统多页面应用，以及前端资源的加载过程需要特别注意，以防止过大的初始页面加载和性能问题。

总结而言，SPA是一种通过动态更新页面的方式切换视图的Web应用程序架构，Vue提供了丰富的功能和工具来构建SPA。

## 第一个Vue应用

### 引入Vue.js

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
```

### 声明式渲染

```html
<div id="app">
  {{ message }}
</div>
```

### 创建Vue实例

实例是 应用的入口。

```js
const app =new Vue({
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
})

app.mount('#app')
```

这样你的第一个vue应用就创建好了，你可以看到页面上的hello world，接下来该正式踏入Vue之旅了 :tada:

## 模板语法

Vue.js 使用一种基于 HTML 的模板语法，使我们能够声明式地将其组件实例的数据绑定到呈现的 DOM 上。所有的 模板都是语法层面合法的 HTML,可以被符合规范的浏览器和 HTML 解析器解析。在底层机制中，会将模板编译成高度优化的 JavaScript 代码，然后在运行时将其转换为虚拟 DOM 并进行渲染。

### 插值

数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值
每次更新message的值，插值处的内容都会更新

```html
<div id="app">
  {{ message }}
</div>
```

### 指令

指令 (Directives) 是带有 v- 前缀的特殊属性。

1. `v-bind`: 指令用于响应式地更新 HTML 属性

```html
<div id="app-2">
  <span v-bind:title="message">鼠标悬停几秒钟查看此处动态绑定的提示信息！</span>
  可以简写成
  <span :title="message">鼠标悬停几秒钟查看此处动态绑定的提示信息！</span>
</div>
<script>
  var app2 = new Vue({
    el: '#app-2',
    data: {
      message: '页面加载于 ' + new Date().toLocaleString()
    }
  })
</script>
```

2. `v-on`:指令用于监听 DOM 事件

```html
<div id="app-2">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">逆转消息</button>
  可以简写成
  <button @click="reverseMessage">逆转消息</button>
</div>
<script>
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
</script>
```

- 事件修饰符

  - .stop
  - .prevent
  - .capture
  - .self
  - .once
  - .passive

  ```html
    <!-- 阻止单击事件继续传播 -->
        <a v-on:click.stop="doThis"></a>

        <!-- 提交事件不再重载页面 -->
        <form v-on:submit.prevent="onSubmit"></form>

        <!-- 修饰符可以串联 -->
        <a v-on:click.stop.prevent="doThat"></a>

        <!-- 只有修饰符 -->
        <form v-on:submit.prevent></form>

        <!-- 添加事件监听器时使用事件捕获模式 -->
        <!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
        <div v-on:click.capture="doThis">...</div>

        <!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
        <!-- 即事件不是从内部元素触发的 -->
        <div v-on:click.self="doThat">...</div>

        <!-- 点击事件将只会触发一次 -->
        <a v-on:click.once="doThis"></a>

        <!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
        <!-- 而不会等待 `onScroll` 完成 ,能够提升移动端的性能 -->
        <!-- 这其中包含 `event.preventDefault()` 的情况 -->
        <div v-on:scroll.passive="onScroll">...</div>
  ```

3. `v-model`: 指令在表单控件元素上创建双向数据绑定

```html
<div id="app-2">
  <p>{{ message }}</p>
  <input v-model="message">
</div>
<script>
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Hello Vue!'
  }
})
</script>
```

4. `v-if` :指令用于条件性地渲染一块内容

```html
<div id="app-2">
  <p v-if="seen">现在你看到我了</p>
  <p v-else>你又看到我了</p>
</div>
<script>
var app2 = new Vue({
  el: '#app-2',
  data: {
    seen: true
  }
})
</script>
```

5. `v-show`: 指令根据表达式的真假值，切换元素的 display 属性

```html
<div id="app-2">
  <p v-show="ok">Hello!</p>
</div>
<script>
var app2 = new Vue({
  el: '#app-2',
  data: {
    ok: false
  }
})
</script>
```

> `v-if` 和 `v-show` 的区别

- `v-if` 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
- `v-if` 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
- `v-show` 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
- `v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。
所以，如果需要非常频繁地切换，则使用 `v-show` 较好；如果在运行时条件很少改变，则使用 `v-if` 较好。

6. `v-for`: 指令基于一个数组(对象)来渲染一个列表

    - 数组

    ```html
    <div id="app-2">
      <ol>
        <li v-for="todo in todos" :key="todo.text">
          {{ todo.text }}
        </li>
      </ol>
    </div>
    <script>
    var app2 = new Vue({
      el: '#app-2',
      data: {
        todos: [
          { text: '学习 JavaScript' },
          { text: '学习 Vue' },
          { text: '整个牛项目' }
        ]
      }
    })
    </script>
    ```

    - 对象

    ```html
    <div id="app-2">
      <li v-for="value in object" :key="value">
        {{ value }}
      </li>
    </div>
    <script>
    var app2 = new Vue({
      el: '#app-2',
      data: {
        object: {
          title: 'How to do lists in Vue',
          author: 'Jane Doe',
          publishedAt: '2016-04-10'
        }
      }
    })
    </script>
    ```

> `v-for` 中的key起什么作用，为什么要加，起什么作用

在`v-for`指令中，`key`属性用于追踪和标识每个被渲染的元素，以便在DOM更新期间进行高效的元素重用和更新。

`key`的作用有以下几点：

1. 唯一标识：`key`用于为每个生成的元素提供唯一的标识。Vue使用这个`key`来跟踪每个元素的身份，确保在重新渲染时能够正确地复用和更新元素，而不是重新创建或删除它们。

2. 提高渲染效率：在使用`v-for`渲染列表时，Vue使用`key`来检测哪些元素被添加、修改或删除。通过提供`key`，Vue可以准确地确定元素之间的差异，只对需要进行修改的元素进行重新渲染，而不是重新渲染整个列表，从而提高性能。

3. 解决状态保存问题：如果列表中的元素具有可变状态或用户的输入绑定，没有为每个元素提供`key`会导致在更新列表时出现意外的行为。例如，输入框的输入内容可能会被重新排序的元素"拖拽过来"导致错误地映射到不同的元素上，从而产生错误的状态。

总结而言，为`v-for`中的元素提供`key`属性是一种最佳实践，它能够帮助Vue跟踪元素的身份，提高列表渲染的效率，并解决状态保存的问题。每个`key`应该是唯一且稳定的，通常使用数据的唯一标识符作为`key`值。

7. `v-html`: 指令用于输出 HTML 代码

```html
<div id="app-3">
  <p>Using mustaches: {{ rawHtml }}</p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>
</div>
<script>
var app3 = new Vue({
  el: '#app-3',
  data: {
    rawHtml: '<span style="color: red">This should be red.</span>'
  }
})
</script>
```

8. `v-pre`: 指令跳过元素和它的子元素的编译过程。

```html
<span v-pre>{{ this will not be compiled }}</span>
```

9. `v-cloak`: 指令保持在元素上直到关联实例结束编译

```html
<div id="app-4" v-cloak>
  <p>{{ message }}</p>
</div>
<script>
var app4 = new Vue({
  el: '#app-4',
  data: {
    message: 'Hello Vue.js!'
  }
})
</script>
```

10. `v-once`: 指令只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。

```html
<span v-once>This will never change: {{msg}}</span>
```

11. `v-text`: 指令更新元素的 textContent。如果要更新部分的 textContent，需要使用 Mustache 插值。

```html
<span v-text="msg"></span>
<!-- 输出: "Hello Vue.js!" -->
<span v-text="msg + '!'"></span>
<!-- 输出: "Hello Vue.js! " -->
```

12. `v-slot`: 作用域插槽

```html
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>
  <p>A paragraph for the main content.</p>
  <p>And another one.</p>
  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

13. 自定义指令

Vue自定义指令是用来操作 DOM 的。除了核心功能默认内置的指令(比如 v-model 或 v-show)之外，还允许你注册自定义的指令。有的情况下，对普通 DOM 元素进行底层操作，这时候就会用到自定义指令。

- 注册全局指令和局部注册指令的方式不同，全局指令可以在任何地方使用，而局部注册指令只能在被注册的组件内部使用。
- 注册自定义指令需要在 实例化之前进行，可以通过 app.config.globalProperties 或者 this.$options.globalProperties 来实现全局注册。
- 自定义指令必须包含一个 unbind 钩子函数，用于解绑事件监听器。
- 自定义指令必须包含一个 bind 钩子函数，用于绑定事件监听器。
- bind 钩子函数接收三个参数：el、binding 和 vnode。其中 el 是当前元素，binding 是当前元素上的绑定对象，vnode 是当前节点的信息。
- unbind 钩子函数也接收三个参数：el、binding 和 vnode。其中 el 是当前元素，binding 是当前元素上的绑定对象，vnode 是当前节点的信息。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Vue自定义指令示例</title>
  </head>
  <body>
    <div id="app">
      <input v-focus />
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
    <script>
      Vue.directive('focus', {
        bind(el) {
          el.addEventListener('focus', function() {
            console.log('input focused');
            this.blur(); // 防止浏览器默认行为聚焦到其他元素上
          })
        },
        unbind(el) {
          el.removeEventListener('focus')
        }
      });

      const app = new Vue({
        el: '#app',
        data: {},
        methods: {},
        directives: {
          'focus': true // 将全局指令注册为局部指令，使其只在当前组件中生效
        }
      });
    </script>
  </body>
</html>
```

在这个例子中，我们注册了一个名为 `v-focus` 的全局指令。当一个 input 元素被 插入到 DOM 中后，它会被自动聚焦。这个指令在组件内部使用时，需要在 `setup` 标签内使用 `onMounted` 钩子函数来实现。同时，我们还使用了 `Vue.directive()` 方法来注册全局指令和局部指令。

## 计算属性与侦听器

### 计算属性（computed）

#### 介绍

1. 计算属性是基于它们的依赖进行缓存的。
2. 计算属性是可缓存的，只有当它的依赖项发生改变时，才会重新计算。
3. 计算属性默认只有 getter，不过在需要时也可以提供一个 setter。

#### 示例

```html
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```

```js
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed:
  {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})
```

### 侦听器

#### 介绍

1. 侦听器可以用来监听数据的变化，并执行相应的操作。
2. 侦听属性是可异步的，且当需要在数据变化时执行异步或开销较大的操作时，该方法是最有用的。

#### 示例

```html
<div id="watch-example">
  <p>Message: "{{ message }}"</p>
  <button v-on:click="reverseMessage">Reverse Message</button>
</div>
```

```js
var vm = new Vue({
  el: '#watch-example',
  data: {
    message: 'Hello'
  },
  watch: {
    //  whenever `message` changes, `handler` will be called
    message: function (newValue, oldValue) {
      console.log('The message was changed!')
      console.log('Old message: ' + oldValue)
      console.log('New message: ' + newValue)
    }
  }
})
```

### 计算属性，侦听器，方法三者之间的区别

1. 计算属性是基于它们的依赖进行缓存的，只有在它的依赖发生改变时才会重新求值。
2. 侦听器，方法，计算属性都是用来监听数据的改变，并执行相应的操作。
3. 计算属性适用于计算值，侦听器适用于异步操作。

## Class与Style的绑定

### Class绑定

#### 介绍

1. 绑定class样式，可以利用v-bind:class来实现。
2. 绑定的数据对象，可以是一个对象，也可以是数组。

#### 写法

- 对象语法

  - 第一种写法

    ```html
    <div id="class-object">
      <div
        class="static"
        v-bind:class="{ active: isActive, 'text-danger': hasError }"
      ></div>
    </div>
    <script>
      new Vue({
        el:'#class-object',
        data:{
          isActive: true,
          hasError: false
        }
      })
    </script>

    ```

    在这个例子中，我们使用了一个对象字面量 `{ active: isActive, 'text-danger': hasError }` 作为 `v-bind:class` 的值。这个对象包含了两个属性：`active` 和 `'text-danger'`,它们的值分别来自 实例的 `isActive` 和 `hasError` 数据属性。

    当 `isActive` 为真时，`active` 类将被添加到元素上；当 `hasError` 为真时，`text-danger` 类也将被添加到元素上。如果两个条件都不满足，则不会添加任何类。

    这种方式可以方便地动态地切换元素的类，而不需要手动为每个可能的状态编写多个样式规则。
    结果渲染为

    ```html
    <div class="static active"></div>
    ```

- 第二种写法

    ```html
        <div v-bind:class="classObject"></div>
    ```

    ```js
      data: {
      classObject: {
        active: true,
        'text-danger': false,
      },
    },
    ```

  - 在这个例子中，我们将一个对象字面量 `{ active: true, 'text-danger': false }` 作为 `v-bind:class` 的值。这个对象包含了两个属性：`active` 和 `'text-danger'`,它们的值分别表示是否应该添加对应的类名。

  - 当 `active` 为真时，`active` 类名将被添加到元素上；当 `'text-danger'` 为真时，`text-danger` 类名也将被添加到元素上。如果两个条件都不满足，则不会添加任何类名。

    结果渲染：和上面的结果一样

- 数组语法

    ```html
      <div id="class-object">
        <div v-bind:class="[activeClass, errorClass]"></div>
      </div>
      <script>
        new Vue({
          el: '#class-object',
          data: {
            activeClass: 'active',
            errorClass: 'text-danger',
          },
        });
      </script>
    ```

  - 在这个例子中，我们使用了数组语法 `[activeClass, errorClass]` 作为 `v-bind:class` 的值。这个数组包含了两个元素：`activeClass` 和 `errorClass`,它们的值分别表示要添加到元素上的类名。

  - 当 实例的 `activeClass` 为真时，`active` 类名将被添加到元素上；当 `errorClass` 为真时，`text-danger` 类名也将被添加到元素上。如果两个条件都不满足，则不会添加任何类名。

    结果渲染为

    ```html
        <div class="active text-danger"></div>
    ```

    根据条件列表切换class

    ```html
      <div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
    ```

    ```html
      <div v-bind:class="[{ active: isActive }, errorClass]"></div>
    ```

  - 这两个例子都是使用数组语法 `[classObject, errorClass]` 或对象语法 `{ active: isActive }` 作为 `v-bind:class` 的值。
  - 在第一个例子中，我们使用了三元运算符来动态地决定是否添加 `activeClass` 类名。如果 `isActive` 为真，则添加 `activeClass` 类名；否则不添加任何类名。
  - 在第二个例子中，我们使用了对象语法来动态地决定是否添加 `active` 类名。如果 `isActive` 为真，则添加 `active` 类名；否则不添加任何类名。
  - 这种方式也可以写成 `{ active: true }`,其中 `true` 可以替换为任意真实值。
  - 和上面的渲染结果一样

### Style绑定

#### 介绍

1. 绑定style，可以利用v-bind:style实现。

2. 绑定的数据对象，可以是一个对象，也可以是数组。

#### 写法

- 对象写法

    ```html
      <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
    ```

  在这个例子中，我们将 `color` 和 `fontSize` 作为属性名传递给 v-bind:style,并将它们与动态计算的值绑定在一起。这样，当 activeColor 或 fontSize 发生变化时，元素的样式也会相应地更新。

- 数组写法

    ```html
      <div v-bind:style="[baseStyles, overridingStyles]"></div>
    ```

  - 在这个例子中，我们使用了数组语法 `[baseStyles, overridingStyles]` 作为 `v-bind:style` 的值。这个数组包含了两个元素：`baseStyles` 和 `overridingStyles`,它们的值分别表示基础样式和覆盖样式。

  - 当 实例的数据发生变化时，会自动将这些样式应用到对应的元素上。如果两个样式对象中有相同的属性，则后面的样式对象会覆盖前面的样式对象中的属性值。

## 过滤器

Vue过滤器是 中的一个特性，作用是用于对文本进行格式化的作用。过滤器分为全局过滤器和私有过滤器(本地过滤器)两种。全局过滤器可以在任何地方使用，而私有过滤器只能在当前组件中使用。

下面是 过滤器的使用方法及注意事项：

- 注册过滤器：Vue.filter(name, callback) 或 new Vue({ filters: {} })
- 使用过滤器：{{ xxx | filterName }} 或 v-bind:属性="xxx | filterName"
- 注意：过滤器不会修改数据，只是改变用户看到的输出(效果)

```js
  Vue.filter('capitalize', function(value) {
    if (!value) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
  });
```

在上面的代码中，我们定义了一个名为 capitalize 的过滤器，它的作用是将输入的字符串首字母大写。在模板中使用时，可以像下面这样调用：

```html
<p>{{ message | capitalize }}</p>
```

## 生命周期

生命周期是指 实例对象从创建之初到销毁的过程，所有功能的实现都是围绕其生命周期进行的。在生命周期的不同阶段调用对应的钩子函数可以实现组件数据管理和 DOM 渲染两大重要功能。

 生命周期的详细解析：

- beforeCreate:在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
- created:实例已创建，数据观测 (data observer) 和 event/watcher 事件配置已经完成，但还未挂载 DOM 之前被调用。
- beforeMount:在挂载开始之前被调用：相关的 render 函数首次被调用。
- mounted:实例已经挂载到 DOM,可以访问到 el 节点上，但是还没有开始渲染模板时被调用。
- beforeUpdate:数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
- updated:由于数据更改导致的重新渲染和打补丁已经完成，DOM 更新后调用。
- beforeDestroy:实例销毁之前调用。在这一步，实例仍然完全可用。
- destroyed:实例销毁后调用。调用后，实例指示的所有东西都会解绑定，所有的事件监听器都会被移除，所有的子实例也会被解挂载 。

图示

![Alt](<https://v2.cn.vuejs.org/images/lifecycle.png> "生命周期" =800x)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Vue生命周期示例</title>
  </head>
  <body>
    <div id="app">
      {{ message }}
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          message: 'Hello Vue!'
        },
        beforeCreate() { console.log('beforeCreate') },
        created() { console.log('created') },
        beforeMount() { console.log('beforeMount') },
        mounted() { console.log('mounted') },
        beforeUpdate() { console.log('beforeUpdate') },
        updated() { console.log('updated') },
        beforeDestroy() { console.log('beforeDestroy') },
        destroyed() { console.log('destroyed') }
      })
    </script>
  </body>
</html>
```

在这个例子中，我们创建了一个 实例，并在每个生命周期钩子函数中添加了一些日志输出。这些生命周期钩子函数包括 `beforeCreate`、`created`、`beforeMount`、`mounted`、`beforeUpdate`、`updated`、`beforeDestroy` 和 `destroyed`,它们分别在不同的阶段被调用。

## 脚手架

脚手架（CLI）是 Vue.js 官方提供的脚手架工具，用于快速创建和管理 Vue.js 项目。使用 vue 脚手架可以简化项目创建、配置和维护的过程，提高开发效率。使用 vue 脚手架创建和管理 Vue.js 项目的步骤：

1. 安装 Node.js：首先确保你安装了 Node.js。你可以从 [](https://nodejs.org/) 下载并安装 Node.js。
2. 安装 vue 脚手架：打开命令行工具，全局安装 vue 脚手架。输入以下命令：

```sh
npm install -g @vue/cli
```

等待安装结束，脚手架就安装好了
项目运行步骤：

1. 创建一个新项目：在命令行工具中，导航到要创建项目的目录，然后输入以下命令创建一个新项目：

```sh
vue create my-project
```

将 my-project 替换为你的项目名称。这将创建一个新的项目文件夹，并自动安装所需的依赖项。

2. 进入项目目录：

```sh
cd my-project
```

3. 运行项目：在项目目录中，输入以下命令启动开发服务器：

```sh
npm run serve
```

这将启动一个热重载的开发服务器。你可以在浏览器中访问 `http://localhost:8080/` 查看你的 Vue.js 应用程序。

## 组件化

图示

![Alt](<https://v2.cn.vuejs.org/images/components.png> "组件组织" =800x)

1. 组件化是一种将页面拆分成多个组件的架构模式，每个组件依赖的 CSS、JS、模板、图片等资源放在一起开发和维护，可以提高开发效率，方便重复使用，简化调试步骤。
2. 组件是可复用的 实例，所以它们与 new 接收相同的选项，例如 data、computed、watch、methods 以及生命周期钩子等。仅有的例外是像 el 这样根实例特有的选项。

### 定义

在Vue中，组件可以通过Vue.component()方法或通过单文件组件（SFC）方式定义。组件可以包含模板、样式和行为逻辑，并可以在应用程序中多次使用。

组件是 Vue.js 中的一个重要特性，它可以让我们将页面划分为多个部分，每个部分都是一个可重用的组件。组件的定义方式有两种：全局组件和局部组件。全局组件可以在任何地方使用，而局部组件只能在当前组件中使用。

> 在组件中data为什么必须是个函数
> 这是因为组件是可以复用的，如果每个组件都使用同一个 data 对象，那么当一个组件改变了 data 的值，其它组件的 data 也会被改变，
> 这显然是不合理的。因此，要求 data 必须是一个函数，这样每次渲染组件时都会调用这个函数来创建一个新的 data 对象，
>从而保证了组件的独立性和可复用性

### 组件注册

在Vue中，可以使用全局注册和局部注册两种方式来注册组件。

1. 全局注册组件：
  使用Vue的全局方法Vue.component()来注册组件。

   示例代码：

   ```
    <div id="app">
      <button-counter></button-counter>
    </div>
    <script>

    // 定义一个名为 button-counter 的新组件
      Vue.component('button-counter', {
        data: function () {
          return {
            count: 0
          }
        },
        template: `<button v-on:click="count++">You clicked me {{ count }} times.</button>`
      })
      new Vue({
        el:'#app'
      })
    </script>
   ```

   在上面的例子中，使用Vue.component('button-counter', ButtonCounter)将MyComponent注册为全局组件。这样，在整个应用中就可以直接使用`<button-counter>`标签来引用和使用MyComponent组件了。

2. 局部注册组件：
   在Vue组件中，可以通过components选项来局部注册组件。

   示例代码：

   ```html

  <button-counter></button-counter>
   <script>
    const buttonCounter={
      data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
    }
    /**  new Vue({
      components:{
        'button-counter':ButtonCounter
      }
    }) */
   </script>

  ```

   在上面的例子中，在components选项中将button-counter组件注册为局部组件。这样，只有当前组件及其子组件才能使用`<button-counter>`标签来引用和使用ButtonCounter组件。

>总结：
>全局注册和局部注册组件都可以在Vue应用中使用组件。全局注册的组件可以在整个应用的任何地方使用，而局部注册的组件只能在指定的组件及其子组件中使用。根据项目的需求和组件的复用性，可以选择使用全局注册或局部注册来注册组件。
在 中，组件命名需要遵循以下规则：

1. 使用字母（大写或小写）、数字、连字符（-）或下划线（_）来命名组件。
2. 组件名应尽可能简洁，以便其他开发人员能够快速理解其用途。
3. 不要使用Vue内置的保留字，如data、el、$options等。
4. 组件名应遵循 PascalCase（大驼峰命名法）或 kebab-case（短横线命名法），但通常使用 PascalCase。
5. 在某些情况下，你可能需要使用多个单词来命名组件，这时可以使用 PascalCase。例如，如果你有一个名为UserProfile的组件，你可以将其命名为UserProfileComponent。
一些常见的 组件命名示例：

``` js
// 推荐
ComponentName
UserProfileComponent
ProfileListComponent

// 尽量避免
componentName
ComponentNameComponent
ComponentName-Component
```

在 中，通常使用单文件组件（SFC）来编写组件。SFC 的文件名应与组件名保持一致。例如，UserProfileComponent.vue。

### 单文件组件

Vue.js 提供了单文件组件（SFC）的概念，这是一种简洁的组件编写方式，可以提高代码的可读性和可维护性。单文件组件由一个 .文件组成，该文件包含组件的模板、样式和逻辑。一个简单的 单文件组件示例：

```vue
<!-- UserProfileComponent.-->
<template>
<div>
  <h1>User Profile</h1>
  <p>Name: {{ user.name }}</p>
  <p>Age: {{ user.age }}</p>
</div>
</template>

<script>
export default {
data() {
  return {
    user: {
      name: 'John Doe',
      age: 30,
    },
  };
},
};
</script>

<style scoped>
/* 样式 */
</style>
```

在这个示例中，我们创建了一个名为 UserProfileComponent 的单文件组件。组件包含一个模板、一个脚本和一些样式。在脚本中，我们定义了一个名为 user 的数据属性，其中包含用户的姓名和年龄。

要使用这个单文件组件，你需要在其他 组件中导入它。例如，在另一个单文件组件中，你可以这样导入并使用 UserProfileComponent：

```vue
<!-- another-component.-->
<template>
<div>
  <h1>Another Component</h1>
  <user-profile-component></user-profile-component>
</div>
</template>

<script>
import UserProfileComponent from './UserProfileComponent.vue';

export default {
components: {
  UserProfileComponent,
},
};
</script>
```

这样，你就可以在 应用程序中使用和复用这个单文件组件了。

### 组件通信

在Vue中，组件之间的通信可以通过父子组件的Props和事件以及兄弟组件或者任意组件之间通过Vue实例的事件总线和Vuex状态管理来实现。

1. Props和事件：父组件可以通过Props将数据传递给子组件，子组件可以通过事件将数据传递给父组件。在父组件中定义Props，在子组件中通过this.$emit()触发事件来传递数据。

  父组件：

  ```vue
  <template>
    <div>
      <child-component :message="message" @childEvent="handleChildEvent"></child-component>
    </div>
  </template>

  <script>
  import ChildComponent from './ChildComponent.vue';

  export default {
    components: {
      ChildComponent
    },
    data() {
      return {
        message: 'Hello from parent'
      };
    },
    methods: {
      handleChildEvent(data) {
        console.log(data); // 接收子组件传递的数据
      }
    }
  };
  </script>
  ```

  子组件：

  ```vue
  <template>
    <div>
      <button @click="sendDataToParent">Send data to parent</button>
    </div>
  </template>

  <script>
  export default {
    props: ['message'],
    methods: {
      sendDataToParent() {
        this.$emit('childEvent', 'Data from child'); // 触发事件传递数据给父组件
      }
    }
  };
  </script>
  ```

2. Vue实例的事件总线：可以利用Vue实例作为事件中心来传递数据。在main.js中创建一个Vue实例，并通过$on()监听事件，通过$emit()触发事件来传递数据。

  ```javascript
  // main.js
  import from 'vue';
  export const EventBus = new Vue(); // 创建一个Vue实例作为事件总线

  // 发送数据
  EventBus.$emit('customEvent', data);

  // 接收数据
  EventBus.$on('customEvent', (data) => {
    console.log(data);
  });
  ```

3. Vuex状态管理：Vuex是Vue官方提供的用于管理应用状态的库。可以在其中定义和修改共享状态，不需要通过组件之间的传递来实现通信。

  首先，在main.js中注册Vuex：

  ```javascript
  import from 'vue';
  import Vuex from 'vuex';

  Vue.use(Vuex);

  const store = new Vuex.Store({
    state: {
      message: 'Hello from Vuex'
    },
    mutations: {
      setMessage(state, payload) {
        state.message = payload;
      }
    },
    actions: {
      updateMessage({ commit }, payload) {
        commit('setMessage', payload);
      }
    }
  });

  new Vue({
    store,
    render: h => h(App)
  }).$mount('#app');
  ```

  然后，在组件中可以使用mapState、mapMutations和mapActions来获取或者修改状态。

  ```vue
  <template>
    <div>
      <div>{{ message }}</div>
      <button @click="sendMessage">Send Message</button>
    </div>
  </template>

  <script>
  import { mapState, mapActions } from 'vuex';

  export default {
    computed: {
      ...mapState(['message'])
    },
    methods: {
      ...mapActions(['updateMessage']),
      sendMessage() {
        this.updateMessage('New message from component'); // 修改状态
      }
    }
  };
  </script>
  ```

4. parent/children/refs： Vue实例提供了一些特殊属性(refs：Vue实例提供了一些特殊属性(parent/children/children/refs)，可以访问父组件、子组件或具有ref属性的组件实例，通过这些属性可以在组件之间进行通信。

举个例子，假设我们有一个父组件Parent和一个子组件Child，在Parent组件中有一个按钮，点击按钮后需要修改Child组件中的某个数据。

首先，在Parent组件中定义一个数据（例如name），然后通过props将这个数据传递给Child组件：

```vue
<template>
  <div>
    <button @click="changeData">Change Data</button>
    <Child :name="name"></Child>
  </div>
</template>
<script>
import Child from './Child.vue';
export default {
  data() {
    return {
      name: 'John'
    }
  },
  components: {
    Child
  },
  methods: {
    changeData() {
      this.name = 'Alice';
    }
  }
};
</script>
```

在Child组件中，利用props接收父组件传递的数据，并将其渲染到子组件的模板中：

```vue
<template>
  <div>{{ name }}</div>
</template>
<script>
export default {
  props: ['name']
};
</script>
```

现在，当点击Parent组件中的按钮时，会触发changeData方法，将name的值修改为'Alice'。由于props是单向数据流，Child组件会自动更新，并将修改后的数据渲染到模板中。

除了使用props传递数据外，还可以通过$emit在子组件中触发自定义事件，并在父组件中监听这些事件来实现通信。另外，$refs可以用来访问子组件的实例和方法，从而实现父子组件之间的方法调用。这些方式可以根据具体需求选择使用。

### 动态组件

动态组件是 Vue.js 提供的一种高级功能，可以根据数据的变化动态地渲染不同的组件。

使用动态组件的主要步骤如下：

1. 首先，在模板中定义一个占位符，用来渲染不同的组件。可以使用 `<component>` 标签，并通过 `is` 属性绑定一个数据，这个数据将决定要渲染哪个组件。示例：

   ```html
   <template>
     <component :is="currentComponent"></component>
   </template>
   ```

2. 在 实例中，定义一个用于决定要渲染哪个组件的数据属性。可以根据需求来修改这个数据属性的值以切换组件。示例：

   ```javascript
   <script>
     export default {
       data() {
         return {
           currentComponent: 'ComponentA'
         }
       }
     }
   </script>
   ```

3. 创建需要动态渲染的组件。可以在 组件中定义多个组件，并根据需要来切换。示例：

   ```html
   <template>
     <div>
       <p>This is Component A</p>
     </div>
   </template>

   <template>
     <div>
       <p>This is Component B</p>
     </div>
   </template>
   ```

4. 最后，在需要切换组件的时候，可以通过修改数据属性的值来实现动态渲染。例如，当点击按钮触发事件时，修改数据属性的值，从而切换渲染的组件。示例：

   ```html
   <template>
     <div>
       <button @click="changeComponent">Switch Component</button>
     </div>
   </template>

   <script>
     export default {
       methods: {
         changeComponent() {
           this.currentComponent = 'ComponentB';
         }
       }
     }
   </script>
   ```

通过这些步骤，你可以实现在 Vue.js 中动态渲染不同的组件。请注意，在实际应用中，你可以根据具体需求做更多的扩展和优化，例如使用 `v-if` 或者 `v-show` 来控制组件的显示与隐藏。

### 异步组件

异步组件是通过使用 import() 函数实现的。这是一个异步模块加载函数，它可以返回一个 Promise，当组件需要加载时，这个 Promise 就会解析。异步组件的加载不会阻塞父组件的渲染，这样可以提高性能。

下面是一个简单的异步组件示例：

```js
// AsyncComponent.vue
export default {
 data() {
   return {
     loaded: false,
   };
 },
 async created() {
   await this.loadAsyncComponent();
 },
 methods: {
   async loadAsyncComponent() {
     const { default: AsyncComponent } = await import(
       /* webpackChunkName: "AsyncComponent" */ "./AsyncComponent.js"
     );
     this.$options.components.AsyncComponent = AsyncComponent;
     this.loaded = true;
   },
 },
};

```

在这个示例中，我们首先导出一个名为 AsyncComponent 的组件。然后，在 created 生命周期钩子中，我们使用 `import()` 函数加载 AsyncComponent.js 文件。当组件加载完成时，我们将组件添加到 components 选项中，并设置 loaded 数据属性为 true。这样，我们就可以在模板中使用这个异步组件了。

在 Vue 2 中，异步组件的命名必须是唯一的。因此，我们使用了 webpackChunkName: "AsyncComponent" 注释来为异步组件分配一个唯一的名称。

### 插槽

插槽（Slot）是Vue.js中一种非常有用的功能，它允许我们在组件中定义一些带有特殊用途的占位符。通过使用插槽，我们可以将组件的内容进行动态的分发和替换。

在Vue组件中使用插槽可以实现以下目的：

1. 插入默认内容：通过在组件内部定义插槽，可以在没有提供具体内容时显示默认的内容。
2. 分发内容：父组件可以通过插槽将内容分发到子组件的特定位置。这使得组件更加灵活，可以根据需要插入不同的内容。
3. 具名插槽：可以使用具名插槽在组件中定义多个插槽，并在父组件中根据名称选择插入的内容。
4. 作用域插槽：作用域插槽允许父组件在插槽中使用子组件的数据。这使得子组件能够向父组件传递数据。

下面是一个简单的例子，演示了如何在Vue组件中使用插槽：

```vue
// 子组件 ChildComponent.vue
<template>
  <div>
    <h1>子组件标题</h1>
    <slot>这是默认的插槽内容</slot>
  </div>
</template>

// 父组件 ParentComponent.vue
<template>
  <div>
    <h1>父组件标题</h1>
    <child-component>
      <p>插入到子组件插槽中的内容</p>
    </child-component>
  </div>
</template>
```

在上面的例子中，我们定义了一个子组件ChildComponent，它包含了一个默认的插槽`<slot>`。父组件ParentComponent中使用了子组件，并为子组件提供了额外的内容作为插槽的内容。在这个例子中，父组件的`<p>`标签中的内容将会被插入到子组件的插槽中。

除了默认插槽外，Vue还支持具名插槽和作用域插槽。具名插槽可以通过`<template>`标签的`v-slot`指令来使用，而作用域插槽可以通过在`<slot>`标签中使用`v-bind`指令传递数据给父组件。

## 混入

混入（Mixins）是一种重用组件选项的机制。它允许开发者将一些公共的选项（如组件的生命周期钩子、数据、方法等）提取出来，定义为混入对象，然后将这些混入对象应用到多个组件中，从而实现代码的复用和共享。

混入可以被全局注册，也可以在组件内部进行局部注册。

混入的一些使用方式和特点：

1. 定义混入：混入对象是一个普通的JavaScript对象，它可以包含组件选项，例如`data`、`methods`、`created`等。可以通过`mixins`选项将混入对象添加到组件中。

2. 应用混入：在单个组件上，可以通过`mixins`选项将混入对象应用到组件中。当组件和混入对象具有相同的选项时，混入对象的选项会在组件中的选项之前被合并。

3. 合并规则：当混入对象和组件具有相同的选项时，Vue会根据一定的合并策略来处理。例如，对于`data`选项，混入对象的数据会被合并到组件的数据中；对于`methods`选项，混入对象的方法会被添加到组件的方法中。

4. 混入链：在使用混入时，如果多个混入对象具有相同的选项，它们会按照混入的顺序依次被调用，形成一个混入链。这使得开发者可以按照一定的顺序定义和应用混入对象。

混入的使用可以帮助实现多个组件之间的代码共享和复用，提高开发效率。它适用于共享一些通用的逻辑、方法或状态，但要注意避免滥用混入，以避免过多的依赖关系和命名冲突。

当一个系统中有多个组件需要共享一些相同的逻辑或数据时，可以使用混入来提取和复用这些代码逻辑。一个简单的混入的例子：

```javascript
// 定义混入对象
const myMixin = {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    logCount() {
      console.log(this.count);
    }
  }
};

// 在组件中应用混入
Vue.component('my-component', {
  mixins: [myMixin],
  template: `
    <div>
      <button @click="increment">Increment</button>
      <button @click="logCount">Log Count</button>
    </div>
  `
});
```

在上面的例子中，我们定义了一个混入对象`myMixin`，它包含了`data`和`methods`选项。`data`中有一个`count`变量用于计数，`methods`中有`increment`方法用于增加计数，以及`logCount`方法用于打印计数。

然后，在一个组件中使用`mixins`选项将混入对象应用到组件上。在这个例子中，我们创建了一个名为`my-component`的组件，并应用了`myMixin`混入对象。组件模板中包含了两个按钮，一个用于增加计数，另一个用于打印计数。

通过使用混入，我们可以实现多个组件共享相同的计数逻辑和方法，避免了代码的重复编写。

这只是一个简单的例子，实际上混入可以包含更复杂的逻辑和多个选项。在工程化的项目中，混入可以帮助你更好地组织和复用代码，提高开发效率。

## 过渡与动画

过渡和动画是用于为组件在状态改变时添加平滑的效果和动画效果的功能。Vue提供了内置的过渡组件和过渡类名，以及可以使用第三方动画库的能力，使得在Vue应用中实现过渡和动画变得简单和灵活。

Vue中过渡和动画的基本概念和用法：

1. CSS过渡：Vue通过内置的`<transition>`组件来实现CSS过渡效果。通过在组件间添加`<transition>`标签，并在需要过渡的元素上使用`<transition>`组件的特定属性，可以定义进入和离开过渡的效果。例如，可以使用`name`属性指定动画类名，使用`v-enter`和`v-leave-to`来定义过渡效果。

2. 过渡类名：Vue在过渡过程中会自动添加和删除CSS类名，开发者可以利用这些类名来定义过渡的动画效果。常用的类名有：`v-enter`、`v-enter-active`、`v-enter-to`、`v-leave`、`v-leave-active`、`v-leave-to`等。可以通过这些类名设置CSS过渡和动画的属性，例如`transition`、`animation`等。

3. JavaScript钩子函数：除了CSS过渡外，Vue还提供了一些JavaScript钩子函数来在过渡的不同阶段执行自定义逻辑。例如，在过渡开始前，可以使用`before-enter`钩子函数执行一些前置操作，或使用`after-leave`钩子函数在过渡结束后执行一些后置操作。

4. 第三方动画库：Vue还可以与一些第三方动画库集成，例如Animate.css、Velocity.js等。通过使用`<transition>`组件的`name`属性与动画库提供的类名进行组合，可以使用这些库的动画效果。

请注意，过渡和动画在Vue中的使用是基于CSS的，因此需要一些基本的CSS知识来定义过渡和动画效果。

总结而言，Vue提供了内置的过渡组件和过渡类名，以及与第三方动画库集成的能力，使得在Vue应用中实现过渡和动画效果变得更加简单和灵活。通过为组件的状态改变添加平滑的动画效果，可以提升用户体验和界面交互的吸引力。

当用户点击按钮时，让一个元素在显示和隐藏时具有淡入淡出的过渡效果。可以通过引入Vue的过渡组件`<transition>`和使用CSS属性来实现。

首先，需要在Vue组件中引入`<transition>`标签，并设置一个唯一的`name`属性，用于控制过渡的类名。然后，在需要进行过渡的元素上添加特定的`class`和`v-if`指令，使其与过渡组件关联起来。

```vue
<template>
  <div>
    <button @click="toggleElement">Toggle Element</button>
    <transition name="fade">
      <div class="element" v-if="showElement">This is a transition element.</div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showElement: false
    };
  },
  methods: {
    toggleElement() {
      this.showElement = !this.showElement;
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
```

在上面的例子中，我们定义了一个按钮和一个具有过渡效果的元素。点击按钮时，通过改变`showElement`的值，控制元素的显示和隐藏。

我们使用`<transition>`组件将目标元素包裹起来，并给它设置一个独立的`name`属性，这里设置为"fade"。而实际上要执行过渡效果的元素是被`v-if`指令绑定的`<div>`。

在CSS中，我们定义了两个类名。`.fade-enter-active`和`.fade-leave-active`是用来描述过渡期间的样式，通过`transition`属性指定了过渡效果的持续时间。`.fade-enter`和`.fade-leave-to`则是用来描述元素在进入过渡状态和离开过渡状态时的样式变化，这里通过修改`opacity`属性来实现淡入和淡出的效果。

通过上述代码，当点击按钮时，元素会以淡入淡出的效果进行过渡。

::: tip
看完上面的内容，接下来该进入到Vue3的学习之路了
:::

## Vue3相对Vue2增加了那些东西

1. **更快的渲染效率**：Vue 3采用了虚拟DOM的重写，它在渲染和更新方面比Vue 2更高效。新的虚拟DOM算法（Fragments + Static Trees）和编译器优化使得Vue 3在性能方面表现更好。

2. **更小的包大小**：Vue 3的体积比Vue 2更小，这得益于对编译器的重构和优化，以及模块的拆分，使得开发者可以按需加载所需的功能。

3. **Composition API（组合式API）**：Vue 3引入了Composition API，这是一个更灵活和可重用的API。与Vue 2的Options API相比，Composition API允许开发者根据逻辑相关性组织代码，提高了代码的可读性和维护性。

4. **TypeScript支持**：Vue 3添加了对TypeScript的原生支持，提供了类型推导和完整的类型定义，使得开发者可以更方便地进行类型检查和开发。

5. **响应式系统升级**：Vue 3中的响应式系统进行了重写，采用了Proxy代理作为底层实现，取代了Vue 2中的Object.defineProperty。这带来了更强大的响应式能力，提供了更细粒度的响应追踪，支持嵌套和数组响应。

6. **更好的错误处理**：Vue 3改进了错误处理机制，提供了更好的错误捕获和报告方式，使得开发者能够更容易地定位并修复错误。

7. **更好的TypeScript和IDE支持**：Vue 3针对TypeScript和IDE的支持进行了改进，提供了更准确的类型推断和代码编辑功能。

除了上述的主要变化之外，Vue 3还增加了其他一些功能和改进，如Teleport、Suspense、多个根节点支持、全局API的调整等。

Vue 3在一些方面与Vue 2有一些不兼容之处，因此，如果要将现有的Vue 2项目迁移到Vue 3，可能需要进行一些修改和调整。

## 第一个vue3应用

1. 安装vue

```bash
npm install vue@next
```

2. 创建一个vue3项目(选择需要下载的依赖)

```bash
vue create hello-vue3
```

3. 运行项目

```bash
npm run serve
```

4. 访问

```bash
http://localhost:8080
```

### 应用实例

每个vue应用都是通过`createApp`去创建实例
> 示例

```js
import {createApp} from 'vue'
import App from './App.vue'
const app=createApp(App)
app.mount('#app')
```

## 响应式

响应式数据对象：在 Vue 3 中，可以通过使用 ref 函数或 reactive 函数将一个普通的 JavaScript 对象或基本类型转换为一个响应式数据对象。例如：

```js
  import { ref, reactive } from 'vue';
  const count = ref(0); // 将基本类型转换为响应式数据
  const state = reactive({      // 将普通对象转换为响应式数据
    message: 'Hello Vue 3',
    foo: ['bar']
  });
```

1. `ref`函数：ref 函数接受一个参数，并返回一个响应式数据对象，该对象可以直接作为Vue实例的数据对象进行响应式处理。

> 注意：ref 函数的返回值是一个对象，该对象包含一个指向响应式数据的单一属性 .value。

ref函数的使用方式如下：

```js
  import { ref } from 'vue';
  const count = ref(0); // 将基本类型转换为响应式数据
  console.log(count.value)
  count.value=3//修改响应式对象的值
```

上述代码中，使用`ref`函数创建了一个名为`count`的响应式对象，并初始化其值为0。通过访问`count.value`可以读取到响应式对象的值，通过修改`count.value`可以改变响应式对象的值。

:::tip
`ref`函数的返回值是一个包装了初始值的响应式对象，而不是像vue2中返回的是一个函数
除了基本类型的初始值，`ref`函数还可以接受对象、数组等作为参数。这样，创建的响应式对象就可以追踪到更复杂数据的变化。
:::

2. `reactive`函数：reactive 函数接受一个普通对象，并返回一个响应式代理对象，该对象的所有属性也都是响应式代理。

> 注意：reactive 函数的返回值是一个对象，该对象的所有属性也都是对象，这些对象都是响应式代理。
> 不能替换整个对象
>只能用于对象类型
>解构会失去响应式

:::tip
`reactive`函数的返回值是一个对象，该对象的所有属性也都是对象，这些对象都是响应式代理。
:::
在组件中使用响应式对象： 在 Vue3 的组件中，可以直接将响应式对象用于渲染和操作视图。示例代码如下：

```vue
<template>
  <div>
    <p>Count: {{ state.count }}</p>
    <p>Message: {{ state.message }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      count: 0,
      message: 'Hello Vue3!',
    });

    const increment = () => {
      state.count++;
    };

    return {
      state,
      increment,
    };
  },
}
</script>

```

在上述示例中，我们使用 reactive 函数将 state 对象转换为响应式对象，并在模板中直接使用它的属性和方法。每当点击按钮时，state.count 的值会自动更新，从而触发视图的重新渲染。

动态跟踪数据的变化： 使用 reactive 函数创建的响应式对象会自动追踪数据的变化。这意味着当响应式对象的属性发生变化时，相关的视图会自动更新。示例代码如下：

```js
const state = reactive({
  count: 0,
});

setTimeout(() => {
  state.count++;
}, 1000);

```

在上述示例中，通过 setTimeout 函数在 1 秒后增加 state.count 的值，由于 state.count 是响应式的，所以视图会自动更新显示新的值。

> 练习实战

::: vue-playground ref和reactive练习

@file App.vue

```vue
<script >
import { ref } from "vue";
const msg = ref("hello world!");
export default {
  setup(){
    return {
      msg
    }
  }
}
</script>

<template>
  <h1>{{ msg }}</h1>
</template>
```

:::

3. `toRefs`:接受一个响应式对象作为参数，返回一个对象，该对象的每个属性都是 ref 对象，且是响应式的。

```js
import { toRefs, reactive } from 'vue';

const state = reactive({
  name: 'John',
  age: 25,
  email: 'john@example.com'
});

const converted = toRefs(state);

console.log(converted.name.value); // 'John'
console.log(converted.age.value);  // 25
console.log(converted.email.value); // 'john@example.com'

state.name = 'Jane';

console.log(converted.name.value); // 'Jane'

```

我们首先创建了一个名为state的响应式对象，包含了三个属性：name、age和email。然后，我们使用toRefs函数将state对象转化为ref对象，并将结果保存在converted变量中。最后，我们可以通过converted对象访问state对象的属性和值，例如通过converted.name.value访问name属性的值。

>特点

- toRefs函数的返回值是一个包含所有属性的ref对象。这意味着每个属性都会被转化为一个独立的ref对象，以便在模板中使用。
- 转化后的ref对象是响应式的，当原始对象的属性值发生变化时，相应的ref对象也会更新。
- 通过toRefs转化后的属性是只读的，不能直接修改属性的值。如果要修改属性的值，需要通过修改原始对象来实现。

:::warning
toRefs只会将顶层属性转化为ref对象，而不会进行递归转化。如果state对象中的某个属性是另一个嵌套的响应式对象，那么toRefs只会将该属性本身转化为ref对象，而不会将其内部的属性转化为ref对象。如果需要将嵌套的响应式对象转化为ref对象，可以使用toRef或toRefs函数递归地转化每个属性。
:::

3. `readonly`: 用于创建一个只读的响应式对象。它接收一个普通的JavaScript对象作为参数，并返回一个只读的响应式对象。只读响应式对象的属性是不可修改的，不能进行赋值操作。

```js
import { reactive, readonly } from 'vue';

const state = reactive({
  count: 0
});

const readOnlyState = readonly(state);

readOnlyState.count++; // 无效

console.log(readOnlyState.count); // 打印出0

```

4. `isRef`: 用于检查一个值是否为一个Ref对象。

```js
import { ref, isRef } from 'vue';

const count = ref(0);

console.log(isRef(count)); // true
```

5. `unref`: 用于将一个ref对象转为原始值。如果参数是一个ref对象，则直接返回原始值，否则返回参数本身。

```js
import { ref, isRef } from 'vue';
const count = ref(0);

console.log(unref(count)); // 0

console.log(unref(1)); // 1
```

## 计算属性(Computed)

### 介绍

计算属性是Vue实例的一个属性，它是一个函数，返回一个值，这个值会被缓存，并且当依赖的响应式属性发生变化时，会重新计算。

### 基本使用

```vue
<template>
  <div>
    <p>原始值：{{ state.count }}</p>
    <p>计算值：{{ computedCount }}</p>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
export default {
  setup() {
    const state = reactive({
      count: 0
    });

    const computedCount = computed(() => {
      return state.count * 2;
    });

    return {
      state,
      computedCount
    };
  }
};
</script>
```

### 计算属性缓存

计算属性具有缓存机制，这意味着只要计算属性依赖的数据没有发生变化，计算属性的值就会被缓存起来，不会进行重复计算。

### 计算属性依赖

计算属性的值依赖于其他数据的值。Vue 3会自动追踪这些依赖，当依赖的数据发生变化时，计算属性会重新计算。如果没有依赖的数据发生变化，则计算属性将使用缓存的值

### 计算属性应用场景

计算属性在很多场景下非常有用，特别是在需要根据其他数据进行复杂计算的情况下。例如，可以使用计算属性从原始数据中过滤出特定的数据，或者根据一些条件计算出动态的样式。

:::tip
计算属性是惰性的，也就是说，只有当计算属性被访问时才会计算。计算属性是基于其他数据进行计算的，它们本身并不存储任何数据。如果需要修改依赖的数据，可以使用`watch`侦听器
:::

### 计算属性与方法的区别

计算属性与方法最大的区别在于计算属性是基于它们的依赖进行缓存的，只有当依赖发生改变时，才会重新计算。

## 侦听器（Watch）

侦听器（Watcher）是用来观察 Vue 实例数据变化并执行相应逻辑的功能。在 Vue 3 中，侦听器的实现方式与之前的版本有些不同，它们被称为 "副作用函数"（Effect Functions）。

在 Vue 3 中，可以使用 `watch` 函数来创建侦听器。`watch` 函数接收一个侦听的数据源，以及一个回调函数。当数据源发生变化时，回调函数会被触发执行。

创建侦听器的示例代码：

```javascript
import { reactive, watch } from 'vue';

const myData = reactive({
  foo: '123',
  bar: '456',
});

watch(() => myData.foo, (newValue, oldValue) => {
  console.log('foo 从', oldValue, '变为', newValue);
});
```

上面的例子中，我们通过 `reactive` 函数创建了一个响应式对象 `myData`，它包含了两个属性 `foo` 和 `bar`。通过 `watch` 函数，我们对 `myData.foo` 进行了侦听，并在它的值发生变化时输出变化值。

在回调函数中，我们可以获取到新旧两个值，即 `newValue` 和 `oldValue`，用来进行相应的处理。侦听器还支持可选的第三个参数，用来配置侦听器行为的选项。

除了可以侦听单个属性外，我们还可以使用 `watch` 函数侦听一个函数的返回值。在这种情况下，当函数的返回值发生变化时，回调函数将被触发执行。

```javascript
import { reactive, watch } from 'vue';

const myData = reactive({
  foo: '123',
  bar: '456',
});

watch(() => {
  return myData.foo + myData.bar;
}, (newValue, oldValue) => {
  console.log('foo 和 bar 的总和从', oldValue, '变为', newValue);
});
```

上面的例子中，我们将 `myData.foo` 和 `myData.bar` 的和作为侦听目标，并在它发生变化时输出变化值。

在 Vue 3 中，与 Vue 2 不同，`watch` 函数默认是在组件挂载时立即执行的。如果需要延迟执行侦听器，可以添加 `immediate: false` 的选项。

此外，Vue 3 还提供了一些其他的侦听器相关的函数和API，如 `watchEffect`、`watchRef`、`watchEffectOnce` 等，用来实现更灵活的侦听器行为。可以根据具体需求选择合适的函数和API来使用。

- `watchEffect`:是一个自动执行的侦听器，它接收一个函数作为参数，在每次组件更新时都会自动执行该函数。

```javascript
import { reactive, watchEffect } from 'vue';
const myData = reactive({
  foo: '123',
  bar: '456',
});

watchEffect(() => {
  console.log(myData.foo + myData.bar);
});

```

- `watchRef`:用于侦听 `ref` 类型的数据，它接收一个 `ref` 对象作为参数，在每次组件更新时都会自动执行侦听器。

```javascript
import { ref, watchRef } from 'vue';
const myData = ref('123');

watchRef(myData, (newValue, oldValue) => {
  console.log('foo 从', oldValue, '变为', newValue);
});
```

- `watchEffectOnce`:是一个自动执行的侦听器，它接收一个函数作为参数，在组件第一次挂载时自动执行该函数，并在组件卸载时自动停止执行。

```javascript
import { reactive, watchEffectOnce } from 'vue';
const myData = reactive({
  foo: '123',
  bar: '456',
});

watchEffectOnce(() => {
  console.log(myData.foo + myData.bar);
});

```

### 计算属性与侦听器的区别

计算属性是基于它们的依赖进行缓存的，只有当依赖发生改变时，才会重新计算。

侦听器是数据变化时执行的函数，它不会进行缓存，不会自动进行依赖收集。

## 生命周期

Vue 实例从创建到销毁的过程，就是生命周期。从开始创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、销毁等一系列过程，称之为生命周期。

### 生命周期图示

![Alt](<https://cn.vuejs.org/assets/lifecycle.16e4c08e.png> "生命周期图示" =800x)

### 生命周期函数

1. `setup`：在实例被创建之前调用。在 3.x 中， `setup` 函数现在位于 `beforeCreate` 之后，但在 2.x 中它们是并发执行的。
2. `created`：在实例被创建后调用。此时，实例的属性已经被初始化，但DOM还没有被渲染。
3. `beforeMount`：在挂载之前调用。此时，DOM还没有被渲染。
4. `mounted`：在组件被挂载后调用。此时，组件已经渲染到了 DOM 中。
5 `beforeUpdate`：在组件更新之前调用。此时，组件的属性已经被更新，但 DOM 还没有被更新。
6. `updated`：在组件更新之后调用。此时，组件的属性已经被更新，DOM 也已经被更新。
7. `beforeUnmount`：在组件被卸载之前调用。此时，组件仍然存在于 DOM 中。
8. `unmounted`：在组件被卸载之后调用。此时，组件已经被从 DOM 中移除。

## 组件

### 组件注册

1. 全局注册

- 全局注册的组件可以在任何模板中使用。
- 全局注册的组件会通过 `app.component()` 注册。

> 示例

```js

import {ref} from 'vue'
app.component('my-component-name', {
  /* 选项 */
  template:'<div>{{count}}</div>',
  setup(){
    const count=ref(0)
    return {
      count
    }
  }
})
```

2. 局部注册

- 局部组件只能在当前组件中使用。
- 局部组件会通过 `components` 选项注册。

> 示例

```vue

```

## 依赖注入

依赖注入（Dependency Injection，简称 DI）是一种软件设计模式，用于解决模块之间的依赖关系。在依赖注入模式中，一个模块不需要显式地声明依赖关系，而是由容器在运行时注入。

1. `provide`: 在组件实例创建之前调用，用于配置依赖关系。
2. `inject`: 用于从父组件接收依赖。

> 示例

```js
// 父组件
export default {
  setup() {
    provide('foo', 'foo');
  }
}

// 子组件
export default {
  setup() {
    const foo = inject('foo');
  }
}
```

## 代理

使用代理（Proxy）来配置请求转发，以实现在开发环境下请求不同的后端接口。Vue CLI 提供了一个简单的方式来设置代理，让你能够在开发时与后端 API 进行交互。

1. 打开项目根目录下的 `vue.config.js` 文件，如果没有该文件请创建一个。

2. 在 `vue.config.js` 文件中，添加以下代码来配置代理：

```javascript
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://backend-api.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
```

通过 `devServer.proxy` 属性配置了一个代理。代理根路径为 `/api`，对应的目标地址是 `http://backend-api.com`。`changeOrigin` 选项用于控制请求头 `host` 的设置，而 `pathRewrite` 选项用于重写请求路径。

3. 修改你的前端代码，将请求路径改为以 `/api` 为前缀：

```javascript
axios.get('/api/some-endpoint')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```

使用 `axios` 库向 `/api/some-endpoint` 发送 GET 请求。实际上，该请求会被转发到 `http://backend-api.com/some-endpoint`。

## 内置组件

### `<Teleport>`

允许将一个组件的渲染位置移动到 DOM 树的另一个位置。

> 示例

```html
<!-- 组件 A -->
<template>
  <div class="a">
    <h1>A</h1>
    <teleport to="body">
      <div class="teleport-target">Teleport Target</div>
    </teleport>
  </div>
</template>
```

```html
<!-- 组件 B -->
<template>
  <div class="b">
    <h1>B</h1>
    <teleport to=".teleport-container">
      <div class="teleport-container">
        <h2>Teleport Container</h2>
        <teleport to=".teleport-target">
          <div class="teleport-target">Teleport Target</div>
        </teleport>
      </div>
    </teleport>
  </div>
</template>
```

### `<transition>`

 用于在组件切换时，在合适的时间添加/删除 CSS 类名。

![Alt](<https://cn.vuejs.org/assets/transition-classes.f0f7b3c9.png> "过渡效果图示" =400x)

#### 过渡效果

1. `<fade>`: 淡入淡出
2. `<slide>`: 滑动
3. `<zoom>`: 缩放

::: vue-playground 过渡效果

@file App.vue

```vue
<template>
  <div class="app">
    <h1>App</h1>
    <button @click="show = !show">Toggle</button>
    <transition name="fade">
      <div v-if="show" class="transition-demo">
        <h2>Transition Demo</h2>
      </div>
    </transition>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
    setup(){
      const show=ref(true)
      return {
        show
      }
    }
}
</script>
```

:::

#### 过渡状态

1. `<appear>`: 首次渲染时生效
2. `<appear-active>`: 首次渲染时生效，且在动画结束后保持动画效果
3. `<enter>`: 首次渲染时生效，且在动画结束后保持动画效果
4. `<enter-active>`: 首次渲染时生效，且在动画结束后保持动画效果
5. `<leave>`: 离开时生效
6. `<leave-active>`: 离开时生效，且在动画结束后保持动画效果

> 注意：`<appear>` 和 `<appear-active>` 只适用于 `<transition>` 组件，不适用于 `<transition-group>` 组件
>示例

::: vue-playground 过渡状态

@file App.vue

```vue
<template>
  <div>
    <h2>Transition</h2>
    <transition appear appear-active>
      <div class="fade-enter-active">Fade Enter Active</div>
    </transition>
    <transition appear>
      <div class="fade-enter-active">Fade Enter</div>
    </transition>
    <transition>
      <div class="fade-enter-active">Fade</div>
    </transition>
    <hr>
    <h2>Transition Group</h2>
    <transition-group appear appear-active>
      <div class="fade-enter-active">Fade Enter Active</div>
    </transition-group>
    <transition-group appear>
      <div class="fade-enter-active">Fade Enter</div>
    </transition-group>
    <transition-group>
      <div class="fade-enter-active">Fade</div>
    </transition-group>
  </div>
</template>
```

:::

#### 过渡模式

1. `<in-out>`: 先执行离开动画，再执行进入动画
2. `<out-in>`: 先执行进入动画，再执行离开动画

#### 过渡钩子

1. `<before-enter>`: 动画开始前触发
2. `<enter>`: 动画开始时触发
3. `<after-enter>`: 动画结束时触发
4. `<enter-cancelled>`: 动画结束时触发
5. `<before-leave>`: 动画开始前触发
6. `<leave>`: 动画开始时触发
7. `<after-leave>`: 动画结束时触发
8. `<leave-cancelled>`: 动画结束时触发

#### 过渡类名

1. `v-enter-from`：进入动画的起始状态。在元素插入之前添加，在元素插入完成后的下一帧移除。

2. `v-enter-active`：进入动画的生效状态。应用于整个进入动画阶段。在元素被插入之前添加，在过渡或动画完成之后移除。这个 `class` 可以被用来定义进入动画的持续时间、延迟与速度曲线类型。

3. `v-enter-to`：进入动画的结束状态。在元素插入完成后的下一帧被添加 (也就是 `v-enter-from` 被移除的同时)，在过渡或动画完成之后移除。

4. `v-leave-from`：离开动画的起始状态。在离开过渡效果被触发时立即添加，在一帧后被移除。

5. `v-leave-active`：离开动画的生效状态。应用于整个离开动画阶段。在离开过渡效果被触发时立即添加，在过渡或动画完成之后移除。这个 `class` 可以被用来定义离开动画的持续时间、延迟与速度曲线类型。

6. `v-leave-to`：离开动画的结束状态。在一个离开动画被触发后的下一帧被添加 (也就是 `v-leave-from` 被移除的同时)，在过渡或动画完成之后移除。

7. `v-enter-active` 和 `v-leave-active` 给我们提供了为进入和离开动画指定不同速度曲线的能力.

### `<keep-alive>`

`keep-alive` 用于缓存和保持组件的状态，以便在组件切换时可以保留之前的状态数据，提高性能并提供更好的用户体验。

当一个组件被包裹在 `keep-alive` 标签内时，该组件会被缓存起来，而不是被销毁。当该组件在父组件中切换可见性时，它不会被销毁和重新创建，而是从缓存中取出并重新激活。

`keep-alive` 可以接受一个 `include` 属性，用于指定哪些组件需要被缓存。它可以是一个字符串或数组，用来指定组件的名称。只有指定的组件会被缓存，其他组件则会被正常销毁和重新创建。

另外，`keep-alive` 还可以接受一个 `exclude` 属性，用于指定不需要被缓存的组件。它也可以是一个字符串或数组，指定组件的名称。

下面是一个示例，展示了如何使用 `keep-alive`：

```html
<template>
  <div>
    <button @click="toggleComponent">切换组件</button>

    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentComponent: 'ComponentA',
    };
  },
  methods: {
    toggleComponent() {
      this.currentComponent = this.currentComponent === 'ComponentA' ? 'ComponentB' : 'ComponentA';
    },
  },
};
</script>
```

在上面的例子中，`currentComponent` 的初始值为 'ComponentA'。点击按钮后，它会在 'ComponentA' 和 'ComponentB' 之间切换。但是，无论切换多少次，每个组件都会保持它们的状态，而不会被销毁和重新创建。

注意，`keep-alive` 只会缓存组件实例，而不会缓存组件的模板。这意味着每个被缓存的组件实例之间共享同一个模板。如果需要在每个组件实例之间保持不同的模板状态，可以通过在 `keep-alive` 标签内部使用 `<router-view>` 或条件渲染来实现。

## 节点、树和虚拟DOM

### 虚拟DOM(Virtual DOM)

虚拟DOM（Virtual DOM）是一种用于提高Web应用性能的技术，它是在内存中以JavaScript对象的形式表示整个DOM树的副本。虚拟DOM可以通过比较前后两次虚拟DOM之间的差异，最小化DOM操作，从而减少了对浏览器的重绘和回流，提高了应用的性能和响应速度。

虚拟DOM的基本原理和工作流程：

1. 创建虚拟DOM树：当Vue或React应用启动时，会通过解析组件的模板或JSX语法，创建整个应用的初始虚拟DOM树。每个组件被表示为一个虚拟DOM节点，包含其对应的标签、属性、事件等信息。

2. 进行修改和更新：当应用状态发生变化，需要重新渲染时，新的虚拟DOM树会与之前的虚拟DOM树进行比较和分析，找出二者之间的差异。

3. 生成补丁：通过比较两个虚拟DOM树，会生成一棵描述如何将旧DOM树更新为新DOM树的补丁树（Patch Tree），也就是所谓的DOM操作的指令。

4. 应用补丁：将补丁树应用于真实的DOM元素上，从而更新实际的用户界面。这些补丁操作通常是高效的，因为实际的DOM操作被最小化，只会修改必要的部分来保持视图的同步。

通过使用虚拟DOM，可以减少直接对真实DOM的操作次数，从而提高渲染性能。虚拟DOM通过批量操作、优化重绘和回流等方式，将多次DOM操作转化为最小的修改，使得页面更新的效率更高。

虽然虚拟DOM在Vue和React等框架中得到广泛应用，但它并非适用于所有场景。对于简单的应用或页面来说，直接操作真实DOM可能更为高效。虚拟DOM的主要目标是通过减少浏览器的DOM操作来提高复杂应用的性能。

> 与真实DOM（Real DOM）的区别

1. 性能：虚拟DOM可以提高应用的性能。它通过在内存中操作轻量级的JavaScript对象来表示整个DOM树，然后将这个虚拟DOM与真实DOM进行比较，并只对实际发生变化的部分进行更新。相比之下，直接对真实DOM进行操作可能会导致频繁的重绘和回流，影响性能。

2. 批量操作：虚拟DOM可以对多个DOM更新操作进行批量处理，最小化对真实DOM的操作次数。相比之下，直接对真实DOM进行操作需要立即执行，无法进行批量处理。

3. 简化开发：虚拟DOM可以简化开发过程。通过使用虚拟DOM，开发者可以将关注点从低级的DOM操作转移到更高级的应用状态管理和UI组件开发上。

4. 跨平台：虚拟DOM是通过JavaScript对象表示的，因此可以在不同的平台上使用，例如浏览器、Node.js等。相比之下，真实DOM是平台特定的，与特定环境绑定。

5. 内存消耗：虚拟DOM可能会占用更多的内存，因为需要将整个DOM结构以JavaScript对象的形式存储在内存中。而真实DOM只需要存储实际的DOM元素。

6. 学习曲线：对于初学者来说，掌握虚拟DOM的概念和使用可能需要一些时间和学习成本。相比之下，直接对真实DOM进行操作更为直接和易于理解。

总的来说，虚拟DOM在性能优化和开发便利性方面提供了一些优势，但它可能会带来额外的内存消耗，并且对于简单的应用来说，直接操作真实DOM可能更为简单和高效。

### 节点、树

节点树（Node Tree）是指由节点组成的层次结构。在Web开发中，常用的节点树就是DOM树（Document Object Model Tree），它是通过HTML文档解析而得到的，表示了HTML文档的结构和内容。

DOM树是一个由各种类型的节点组成的树状结构。每个节点代表HTML中的一个元素、属性、文本等。节点可以有子节点和兄弟节点，形成父子和兄弟关系。根据节点的类型不同，可以将节点分为元素节点、属性节点、文本节点、注释节点等。

一个示例的DOM树结构：

```
- Document
  - DocumentType (<!DOCTYPE html>)
  - Element (HTML)
    - Element (HEAD)
      - Element (META charset="UTF-8")
      - Element (TITLE)
        - Text (Example Page)
    - Element (BODY)
      - Element (H1)
        - Text (Hello, World!)
      - Element (P)
        - Text (This is a paragraph.)
```

根节点是`Document`，它有两个子节点`DocumentType`和`Element`。`Element`节点又有子节点和兄弟节点，形成了树状结构。每个节点都包含了它们的类型和内容，在DOM操作中可以使用节点的属性和方法来访问和修改节点的属性和内容。

通过操作节点树，我们可以对HTML文档进行增加、删除、修改等操作，以实现对页面的动态更新和交互。

虽然DOM树是常用的节点树表示方式，但在其他领域，比如计算机科学中的树数据结构，节点树可以具有不同的定义和用途。
