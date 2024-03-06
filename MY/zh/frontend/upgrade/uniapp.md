
## 介绍

基于 Vue.js 的一个开发框架，可以用来构建跨平台的应用程序。它的设计思想是一套代码，多端运行，可以同时开发出 iOS、Android 和 Web 等不同平台上的应用。使用 UniApp，开发者可以节省大量时间和精力，只需编写一次代码，即可在不同平台上运行。

## 特点

1. 跨平台：UniApp 使用一套代码，可以在多个平台上运行，包括 iOS、Android、H5 等。

2. 性能优秀：UniApp 使用了自己的渲染引擎，能够保证应用程序的运行效率和流畅性。

3. 开发便捷：UniApp 基于 Vue.js 开发，开发者可以使用熟悉的 Vue.js 语法进行开发，并使用 Vue.js 的生态圈。

4. 插件丰富：UniApp 内置了一些常用的组件和 API，同时支持导入第三方组件库和插件。

5. 支持原生能力：UniApp 提供了丰富的 API，包括设备信息、网络通信、文件操作等，开发者可以利用这些 API 访问原生功能。

6. 条件编译：UniApp 支持使用条件编译来处理不同平台的特定逻辑，可以针对不同的平台进行代码的编写和调整。

## 与原生开发对比

1. 开发语言和框架：原生微信小程序使用 JavaScript 和 WXML（类似于HTML）进行开发，而 UniApp 使用 Vue.js 进行开发。UniApp 提供了一套基于 Vue.js 的开发框架，开发者可以使用 Vue.js 的语法和开发模式进行开发。

2. 跨平台支持：原生微信小程序仅能在微信客户端上运行，而 UniApp 可以通过一套代码同时运行在多个平台上，包括 iOS、Android、H5 等。这样可以极大地减少开发者的工作量，提高开发效率。

3. UI 组件库：原生微信小程序没有内置的 UI 组件库，开发者需要自己开发或引入第三方的 UI 组件库。而 UniApp 内置了一些常用的 UI 组件，同时也支持引入第三方的组件库，如 Vant、uView 等，方便快速构建界面。

4. 原生能力访问：原生微信小程序可以使用微信提供的原生能力，如调用摄像头、获取位置信息等。而 UniApp 提供了一系列的 API，开发者可以通过这些 API 访问设备的原生功能。不同平台的原生能力会有差异，UniApp 提供了条件编译来处理不同平台的特定逻辑。

5. 运行环境和调试：原生微信小程序有自己的开发工具和调试环境。而 UniApp 使用 HBuilderX 作为开发工具，支持在开发工具中进行代码编辑、调试和预览，并提供多个运行和调试选项，如在开发工具中运行、运行到真机等。

## 环境搭建

1. 安装 Node.js：UniApp 是基于 Node.js 的，因此首先需要安装 Node.js。你可以从 Node.js 官方网站（<https://nodejs.org）下载适合你操作系统的安装包，并按照安装向导进行安装。>

2. 安装 HBuilderX：HBuilderX 是一款基于 VSCode 的强大的前端开发工具，它是 UniApp 官方提供的 IDE。你可以从 HBuilderX 官方网站（<https://www.dcloud.io/hbuilderx.html）下载适合你操作系统的安装包，并按照安装向导进行安装。>

3. 创建 UniApp 项目：打开 HBuilderX，在菜单栏选择 "文件" -> "新建" -> "项目"。在弹出的窗口中选择 "uni-app"，填写项目信息（包括项目名称、项目路径等），然后点击 "创建"。

4. 运行项目：在 HBuilderX 中，找到你创建的 UniApp 项目，右键点击选择 "运行"。此时会弹出一个运行面板，你可以选择在开发工具中运行或选择运行到指定的设备上（如 Android 模拟器）。

5. 编辑和开发项目：在 HBuilderX 中，UniApp 项目的代码和资源文件位于 "src" 目录下。你可以通过编辑这些文件，进行项目的开发。同时，HBuilderX 也提供了一系列的开发工具和调试功能，方便你进行代码调试和预览。

## 文件结构

- src：源代码目录，包含了项目的主要代码和资源文件。
  - pages：页面目录，每个页面对应一个文件夹，包含了页面的 Vue 组件、样式和资源文件。
  - static：静态资源目录，存放不需要经过编译的静态资源文件，如图片、字体等。
  - common：公共目录，存放全局公共的 Vue 组件、样式和资源文件。
  - App.vue：应用程序的根组件，可以在这里配置应用程序的全局样式和行为。
  - main.js：应用程序的入口文件，用于初始化 Vue 实例和配置全局行为。
  - manifest.json：应用程序的配置文件，用于配置应用程序的名称、图标、启动页面等信息。
  - pages.json：页面配置文件，用于配置每个页面的路径、窗口样式、导航栏样式等信息。

- unpackage：编译后的文件目录，包含了编译生成的各个平台的代码文件。
  - dcloudUniapp：小程序目录，包含了生成的微信小程序代码。
  - dev：开发工具目录，包含了开发工具生成的调试文件。

- node_modules：Node.js 依赖模块目录，包含了项目所使用的第三方库和工具。

- package.json：Node.js 项目的配置文件，用于管理项目的依赖和脚本等信息。

- .gitignore：Git 版本控制的忽略文件列表，用于指定不需要纳入版本控制的文件或目录。

- .babel.config.js：Babel 配置文件，用于配置 Babel 编译器的行为。

- .eslintignore：ESLint 忽略文件列表，用于指定不需要进行代码检查的文件或目录。

- .eslintrc.js：ESLint 配置文件，用于配置 ESLint 的检查规则和行为。

- .prettierrc.js：Prettier 配置文件，用于格式化代码的规则和行为。

## 基础语法

1. 模板语法：UniApp 使用 Vue.js 的模板语法来动态渲染页面。你可以使用插值表达式 `{{ }}` 来插入变量和表达式到模板中，如 `{{ message }}`。同时，UniApp 还提供了一些指令用于条件渲染、循环和事件绑定等，如 `v-if`、`v-for`、`@click`。
UniApp 的模板语法主要是基于 Vue.js 的模板语法，用于动态渲染页面和进行条件判断、循环等操作。

- 插值表达式：使用双大括号 `{{ }}` 将变量或表达式包裹起来，将其插入到模板中。

```html
<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ 1 + 1 }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello UniApp',
    };
  },
};
</script>
```

- 条件渲染：使用 `v-if` 指令根据条件来决定是否渲染特定的元素。

```html
<template>
  <div>
    <p v-if="showMessage">Show this message</p>
    <p v-if="!showMessage">Hide this message</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMessage: true,
    };
  },
};
</script>
```

- 循环渲染：使用 `v-for` 指令循环渲染数组或对象的元素。

```html
<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
      ],
    };
  },
};
</script>
```

- 事件绑定：使用 `@` 符号和事件名来绑定事件监听器。

```html
<template>
  <div>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log('Button clicked');
    },
  },
};
</script>
```

2. 数据绑定：UniApp 使用 Vue.js 的数据绑定语法来实现数据的响应式更新。你可以通过在 Vue 组件的 `data` 选项中定义数据属性，并在模板中使用它们，如 `{{ message }}`。当数据发生变化时，模板会自动更新。
在 UniApp 中，数据绑定是通过 Vue.js 的数据绑定语法来实现的。它使得页面能够根据数据的变化自动更新和响应。

- 单向数据绑定：使用双大括号 `{{ }}` 来绑定数据到模板中。

```html
<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello UniApp',
    };
  },
};
</script>
```

在上面的例子中，`message` 是在 `data` 方法中定义的数据属性，它会被绑定到模板中的 `{{ message }}`，当 `message` 的值发生变化时，模板中的内容会自动更新。

- 双向数据绑定：使用 `v-model` 指令来实现双向数据绑定。

```html
<template>
  <div>
    <input v-model="message" type="text">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello UniApp',
    };
  },
};
</script>
```

在上面的例子中，`input` 元素通过 `v-model="message"` 和 `message` 进行双向数据绑定。当用户在输入框中输入内容时，`message` 的值会更新，同时，当 `message` 的值改变时，输入框中的内容也会更新。

- 计算属性：使用 `computed` 属性来定义计算属性，它会根据依赖的数据动态计算并返回结果。

```html
<template>
  <div>
    <p>{{ fullName }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
    };
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
  },
};
</script>
```

在上面的例子中，`fullName` 是一个计算属性，它根据 `firstName` 和 `lastName` 的值动态计算出全名，并将结果绑定到模板中的 `{{ fullName }}`，当 `firstName` 或 `lastName` 的值变化时，`fullName` 会自动更新。

3. 组件：UniApp 的页面由多个组件组成，每个组件可以包含自己的模板、样式和逻辑。你可以使用 `Vue.component` 方法定义全局组件，也可以在组件内使用 `components` 选项定义局部组件。组件可以相互嵌套和通信，提高代码的复用性和可维护性。
在 UniApp 中，组件是构建页面和实现复用的重要部分。UniApp 组件可以分为全局组件和局部组件两种类型。

- 全局组件：
全局组件是在全局范围内注册的组件，可以在任何页面中使用。你可以在 `App.vue` 或 `main.js` 中注册全局组件。

```html
<template>
  <div>
    <my-component></my-component>
  </div>
</template>
```

```js
// App.vue 或 main.js
import myComponent from '@/components/MyComponent.vue';

Vue.component('my-component', myComponent);
```

- 局部组件：
局部组件是在某个页面内注册的组件，只能在当前页面中使用。你可以在对应的页面文件中注册局部组件。

```html
<template>
  <div>
    <my-component></my-component>
  </div>
</template>

<script>
import myComponent from '@/components/MyComponent.vue';

export default {
  components: {
    'my-component': myComponent,
  },
};
</script>
```

另外，在使用组件时，你可以通过传递 props 给组件传递数据以及通过事件监听和触发来实现组件之间的通信。

- 通过 props 向组件传递数据：

```html
<template>
  <div>
    <my-component :message="message"></my-component>
  </div>
</template>

<script>
import myComponent from '@/components/MyComponent.vue';

export default {
  components: {
    'my-component': myComponent,
  },
  data() {
    return {
      message: 'Hello UniApp',
    };
  },
};
</script>
```

在组件中接收传递的 props：

```vue
<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
  },
};
</script>
```

- 通过事件监听和触发进行组件之间的通信：

父组件监听子组件的事件：

```html
<template>
  <div>
    <my-component @custom-event="handleCustomEvent"></my-component>
  </div>
</template>

<script>
import myComponent from '@/components/MyComponent.vue';

export default {
  components: {
    'my-component': myComponent,
  },
  methods: {
    handleCustomEvent(data) {
      console.log('Received custom event:', data);
    },
  },
};
</script>
```

子组件触发自定义事件：

```vue
<template>
  <div>
    <button @click="triggerCustomEvent">Trigger Event</button>
  </div>
</template>

<script>
export default {
  methods: {
    triggerCustomEvent() {
      this.$emit('custom-event', 'Custom Event Data');
    },
  },
};
</script>
```

4. 样式绑定：UniApp 使用类似于 Vue.js 的样式绑定语法来动态绑定样式。你可以使用 `:class` 来动态绑定类名，如 `:class="{ active: isActive }"`。同时，UniApp 还支持 `:style` 来动态绑定样式属性，如 `:style="{ color: textColor }"`。

- 使用条件判断：
你可以使用三元表达式或计算属性来根据条件来绑定样式。

```html
<template>
  <div :class="isRed ? 'red' : 'blue'">Hello UniApp</div>
</template>

<script>
export default {
  data() {
    return {
      isRed: true,
    };
  },
};
</script>

<style>
.red {
  color: red;
}

.blue {
  color: blue;
}
</style>
```

- 使用计算属性：
你可以使用计算属性来根据组件的数据或状态来动态计算并返回样式对象。

```html
<template>
  <div :style="dynamicStyle">Hello UniApp</div>
</template>

<script>
export default {
  data() {
    return {
      isRed: true,
    };
  },
  computed: {
    dynamicStyle() {
      return {
        color: this.isRed ? 'red' : 'blue',
      };
    },
  },
};
</script>
```

- 使用内联样式对象：
你可以直接在模板中使用内联样式对象来绑定样式。

```html
<template>
  <div :style="{ color: textColor }">Hello UniApp</div>
</template>

<script>
export default {
  data() {
    return {
      textColor: 'red',
    };
  },
};
</script>
```

- 使用动态类名：
你可以使用动态类名来为组件添加样式。你可以通过计算属性或直接绑定包含类名的字符串来实现。

```html
<template>
  <div :class="dynamicClass">Hello UniApp</div>
</template>

<script>
export default {
  computed: {
    dynamicClass() {
      return this.isRed ? 'red' : 'blue';
    },
  },
};
</script>
```

5. 生命周期钩子：UniApp 提供了一系列生命周期钩子函数，用于管理组件的生命周期和实现相应的逻辑。常用的生命周期钩子函数包括 `onLoad`、`onShow`、`onHide`、`onUnload` 等。

- beforeCreate：
在实例初始化之后，数据观测 (data observation) 和 event/watcher 事件配置之前被调用。在该钩子函数中，组件实例的属性和方法还不可用。

- created：
在实例创建完成后被调用，此时已经完成了数据观测 (data observation)，属性和方法的运算，watch/event 事件回调。但是，DOM 还未被渲染。

- beforeMount：
在挂载开始之前被调用，在这个阶段，模板已经编译完成，但是还未将模板渲染到页面中。

- mounted：
在挂载完成后被调用，此时组件已经被渲染到页面中，可以操作 DOM，进行异步请求等操作。

- beforeUpdate：
在数据更新之前被调用，发生在虚拟 DOM 重新渲染和打补丁之前，可以在此时进行状态的更新。

- updated：
在数据更新之后被调用，发生在虚拟 DOM 重新渲染和打补丁之后。避免在此钩子函数中更新数据，可能会导致无限循环的更新。

- beforeDestroy：
在实例销毁之前被调用，此时实例仍然完全可用，可以执行清理操作，比如清除定时器，解绑自定义事件等。

- destroyed：
在实例销毁之后被调用，此时组件实例已经被销毁，事件监听和子组件也都被移除。

- activated：
在 keep-alive 组件激活时调用，只适用于被 keep-alive 包裹的组件。它在组件被激活时调用，可以在这里执行一些特定的操作，如重新加载数据等。

- deactivated：
在 keep-alive 组件停用时调用，也只适用于被 keep-alive 包裹的组件。它在组件被停用时调用，可以在这里执行一些特定的操作，如保存数据状态等。

- errorCaptured：
在子孙组件抛出错误时被调用。它可以捕获到子组件中的错误，并在此处理错误，比如显示错误信息。

- beforeRouteEnter：
在路由进入组件前调用，可以访问组件实例 `this`，但是此时组件实例还没有被创建。如果需要访问路由参数或调用异步操作，可以使用路由守卫 `beforeRouteEnter`。

- beforeRouteUpdate：
在路由更新但是组件被复用时调用，可以访问组件实例 `this` 和路由参数，该钩子函数在导航到相同组件时被调用。

- beforeRouteLeave：
在离开当前组件的路由前调用，可以访问组件实例 `this` 和路由对象。可以在此钩子函数中进行导航守卫的逻辑处理，如弹出确认提示框等。

6. 原生能力访问：UniApp 提供了一系列的 API 来访问设备的原生能力，如 `uni.getLocation`、`uni.chooseImage` 等。你可以在组件的方法中调用这些 API 来实现相关功能。

- 访问 DOM 元素：
可以使用 `$refs` 来获取 DOM 元素的引用，并通过原生能力操作 DOM。

```html
<template>
  <div>
    <div ref="myElement">Hello Vue!</div>
    <button @click="changeColor">Change Color</button>
  </div>
</template>

<script>
export default {
  methods: {
    changeColor() {
      this.$refs.myElement.style.color = 'red';
    },
  },
};
</script>
```

在上述例子中，我们通过 `ref` 将一个 DOM 元素的引用保存在 `myElement` 属性中，并在点击按钮时，使用原生能力设置该元素的字体颜色为红色。

- 调用原生 API：
可以通过 `$refs` 访问子组件的实例，并调用其暴露的原生 API。

```html
<template>
  <div>
    <my-component ref="childComponent"></my-component>
    <button @click="callNativeMethod">Call Native Method</button>
  </div>
</template>

<script>
import MyComponent from './MyComponent.vue';

export default {
  components: {
    MyComponent,
  },
  methods: {
    callNativeMethod() {
      this.$refs.childComponent.nativeMethod();
    },
  },
};
</script>
```

在上述例子中，我们通过 `ref` 将子组件 `MyComponent` 的实例保存在 `childComponent` 属性中，并在点击按钮时，通过调用子组件的 `nativeMethod` 方法来访问子组件的原生能力。
