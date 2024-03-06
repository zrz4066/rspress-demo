
## 介绍

Rollup 是一个用于 JavaScript 的模块打包工具，它将小的代码片段编译成更大、更复杂的代码，例如库或应用程序。它使用 JavaScript 的 ES6 版本中包含的新标准化代码模块格式，而不是以前的 CommonJS 和 AMD 等特殊解决方案。ES 模块允许你自由无缝地组合你最喜欢的库中最有用的个别函数。

## 为什么要学习Rollup

1. 轻量级：Rollup是一个轻量级的JavaScript模块打包工具，它的设计目标是尽可能简单和高效。与其他一些复杂的打包工具相比，Rollup的配置和使用相对简单，因此适合初学者和小型项目。

2. Tree Shaking：Rollup以其出色的Tree Shaking功能而闻名。Tree Shaking是一种优化技术，它可以自动删除未使用的代码，从而减小最终生成的JavaScript文件的大小。这有助于提高网页性能，减少加载时间。

3. ES6模块支持：Rollup对ES6模块有很好的支持，这意味着你可以使用现代的JavaScript模块语法来组织你的代码，而无需使用旧的CommonJS或AMD模块系统。

4. 生态系统：Rollup拥有一个活跃的生态系统，有许多插件可供选择，用于处理各种不同类型的文件（例如CSS、TypeScript等）。这使得你可以根据项目的需求来扩展Rollup的功能。

5. 性能：由于Rollup的轻量级设计和Tree Shaking功能，生成的JavaScript文件通常比其他打包工具更小，加载更快。这有助于提高你的网页性能。

6. 定制化：Rollup允许你根据项目的具体需求进行高度定制。你可以选择只包含你需要的功能，从而减小生成文件的大小。

7. 社区支持：Rollup拥有一个积极的社区，你可以在社区中找到有关Rollup的文档、教程和支持。

## Rollup 与webpack的区别

Rollup和Webpack都是用于构建JavaScript应用程序的工具。

1. **打包策略**:
   - **Rollup**: Rollup专注于ES模块（ESM）的打包。它将源代码中的模块打包成一个或多个输出文件，通常输出的是一个IIFE（Immediately Invoked Function Expression）格式的文件，适用于库和工具的开发。
   - **Webpack**: Webpack是一个更通用的模块打包工具，支持各种模块系统，包括CommonJS、AMD、ESM等。它的打包策略更加灵活，适用于构建复杂的应用程序。

2. **Tree Shaking**:
   - **Rollup**: Rollup以静态分析的方式进行Tree Shaking，可以更好地消除未使用的代码，减小输出文件的体积。
   - **Webpack**: Webpack也支持Tree Shaking，但在某些情况下，由于动态导入等原因，可能不够彻底。

3. **生态系统**:
   - **Rollup**: Rollup在一些领域，如JavaScript库的打包方面表现得很出色，因此在开发库或工具时很受欢迎。
   - **Webpack**: Webpack在构建复杂应用程序时更加流行，因为它具有更多的插件和生态系统支持，可以处理各种资源，如CSS、图片、字体等。

4. **配置**:
   - **Rollup**: Rollup的配置相对较简单，通常更容易上手，但在处理非JavaScript资源时可能需要额外的插件。
   - **Webpack**: Webpack的配置非常灵活，但也更复杂，因为它具有更多的配置选项和插件。

5. **性能**:
   - **Rollup**: Rollup通常比Webpack具有更快的构建速度，因为它的设计更简单，专注于模块的静态分析和打包。
   - **Webpack**: Webpack在处理大型应用程序时可能会更慢，因为它的功能更多，需要更多的资源。

## 安装

```shell
npm i rollup -g
```

## 快速开始

1. 在项目根目录下创建一个`main.js`的文件，在`main.js`文件中写入以下代码：

```js
const add = (a, b) => a + b;
export {add}
```

2. 执行下面的命令

- 对Node.js

```shell
rollup main.js --format cjs --file bundle.js
```

- 对浏览器

```shell
rollup index.js --file bundle.js --format iife

```

- 浏览器和Node.js

```shell
rollup index.js --file bundle.js --format umd -name "myBundle"
```

## 命令行

```sql
-c, --config <filename>     配置文件 默认： rollup.config.js
-d, --dir <dirname>         chunks 目录 (如果不存在，则打印到标准输出）
-e, --external <ids>        要排除的模块 ID 的逗号分隔列表
-f, --format <format>       输出类型（amd、cjs、es、iife、umd、system）
-g, --globals <pairs>       `moduleID:Global` 对的逗号分隔列表
-h, --help                       帮助消息
-i, --input <filename>      输入（替代 <entry file>）
-m, --sourcemap             生成源映射（`-m inline` 用于内联映射）
-n, --name <name>          UMD 导出的名称
-o, --file <output>         单个输出文件（如果不存在，则打印到标准输出）
-p, --plugin <plugin>     使用指定的插件（可能重复）
                                    如果插件名称不以 rollup-plugin- 或 @rollup/plugin- 开头，Rollup 将自动尝试添加这些前缀
-v, --version               显示版本号
-w, --watch                 监视捆绑包中的文件并根据更改重建
--amd.id <id>               AMD 模块的 ID（默认为匿名）
--amd.autoId               根据块名称生成 AMD ID
--amd.basePath <prefix>     预先添加到自动生成的 AMD ID 的路径
--amd.define <name>        代替`define`使用的函数
--assetFileNames <pattern>  发出资产的名称模式
--banner <text>            在包顶部插入的代码（外部包装器）
--chunkFileNames <pattern>  发出的次要块的名称模式
--compact                   缩小包装器代码
--context <variable>        指定顶级`this`值
--entryFileNames <pattern>  发出的条目块的名称模式
--environment <values>     传递给配置文件的设置（参见示例）
--no-esModule              不要添加 __esModule 属性
--exports <mode>            指定导出模式（auto, default, named, none）
--extend                   扩展由 --name 定义的全局变量
--no-externalLiveBindings   不生成支持实时绑定的代码
--failAfterWarnings         如果构建产生警告，则退出并显示错误
--footer <text>            要在包末尾插入的代码（外部包装器）
--no-freeze                 不要冻结命名空间对象
--no-hoistTransitiveImports 不要将传递性导入提升到入口块中
--no-indent                不要缩进结果
--no-interop                不包括互操作块
--inlineDynamicImports      使用动态导入时创建单个包
--intro <text>              在包顶部插入的代码（在包装器内）
--minifyInternalExports    强制或禁用内部导出的缩小
--namespaceToStringTag      为命名空间创建适当的 `.toString` 方法
--noConflict               为 UMD 全局变量生成 noConflict 方法
--outro <text>              在包的末尾插入的代码（在包装器内）
--preferConst              使用 `const` 而不是 `var` 进行导出
--no-preserveEntrySignatures 避免入口点的外观块
--preserveModules           保留模块结构
--preserveModulesRoot       将保留的模块放在根级别的此路径下
--preserveSymlinks          解析文件时不要使用符号链接
--no-sanitizeFileName       不要替换文件名中的无效字符
--shimMissingExports        为缺失的导出创建填充变量
--silent                    不要打印警告
--sourcemapExcludeSources   不要在源映射中包含源代码
--sourcemapFile <file>      指定源映射的包位置
--stdin=ext                 指定用于标准输入的文件扩展名
--no-stdin                 不要从标准输入中读取“-”
--no-strict                 不要在生成的模块中发出 `"use strict";`
--strictDeprecations        为已弃用的功能抛出错误
--systemNullSetters        用 `null` 替换空的 SystemJS setter
--no-treeshake              禁用摇树优化
--no-treeshake.annotations  忽略纯调用注释
--no-treeshake.moduleSideEffects 假设模块没有副作用
--no-treeshake.propertyReadSideEffects 忽略属性访问副作用
--no-treeshake.tryCatchDeoptimization 不要关闭 try-catch-tree-shaking
--no-treeshake.unknownGlobalSideEffects 假设未知的全局变量不抛出
--waitForBundleInput        等待捆绑输入文件
    如果入口点文件之一不可用，这不会引发错误。相反，它会等到所有文件都存在后再开始构建。这个有用，特别是在监视模式下，当 Rollup 消耗另一个进程的输出时
--watch.buildDelay <number> Throttle watch rebuilds
--no-watch.clearScreen     重建时不清除屏幕
--watch.skipWrite           观看时不要将文件写入磁盘
--watch.exclude <files>     排除被监视的文件
--watch.include <files>    限制观看指定文件
--validate                  验证输出

```

## external

用于匹配需要排除在 bundle 外部的模块，它的值可以是一个接收模块 id 参数并返回 true （表示外部依赖）或 false （表示非外部依赖）的函数，也可以是一个模块 ID 数组或者正则表达式。除此之外，它还可以只是单个的模块 ID 或正则表达式。被匹配的模块 ID 应该满足以下条件之一：

- 外部依赖的名称，需要和引入语句中写法完全一致。例如，如果想标记 `import "dependency.js"` 为外部依赖，就需要使用 `"dependency.js"`
- 作为模块 ID；而如果要标记 `import "dependency"` 为外部依赖，则使用 `"dependency"`。
解析过的模块 ID（如文件的绝对路径）。

## input

用于指定`bundle`文件的入口文件

1. 单一入口

```js
export default {
  input: 'src/main.js', // 你的应用程序的主要入口点
};

```

2. 多个入口

```js
export default {
  input: {
    a: 'src/main-a.js',
    'b/index': 'src/main-b.js'
  }, // 多个入口点
};

```

3. 动态导入

```js
import glob from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export default {
 input: Object.fromEntries(
  glob.sync('src/**/*.js').map(file => [
   // 这里将删除 `src/` 以及每个文件的扩展名。
   // 因此，例如 src/nested/foo.js 会变成 nested/foo
   path.relative(
    'src',
    file.slice(0, file.length - path.extname(file).length)
   ),
   // 这里可以将相对路径扩展为绝对路径，例如
   // src/nested/foo 会变成 /project/src/nested/foo.js
   fileURLToPath(new URL(file, import.meta.url))
  ])
 ),
 output: {
  format: 'es',
  dir: 'dist'
 }
};
```

## output

写入配置

1. `file`
指定输出文件
2. `dir`
指定输出文件的目录
3. `format`
指定输出文件的格式

- `amd` – 异步模块加载，适用于 RequireJS 等模块加载器
- `cjs` – CommonJS，适用于 Node 环境和其他打包工具（别名：commonjs）
- `es` – 将 bundle 保留为 ES 模块文件，适用于其他打包工具，以及支持 `<script type=module>` 标签的浏览器。（别名：esm，module）
- `iife` – 自执行函数，适用于 `<script>` 标签（如果你想为你的应用程序创建 bundle，那么你可能会使用它）。iife 表示“自执行 函数表达式”
- `umd` – 通用模块定义规范，同时支持 amd，cjs 和 iife
- `system` – SystemJS 模块加载器的原生格式（别名：systemjs）

4. `name`
全局变量名表示bundle

5. `globals`
该选项用于在 umd / iife bundle 中，使用 id: variableName 键值对指定外部依赖

```shell
import $ from 'jquery';
```

```js

export default {
  ...,
  external: ['jquery'],
  output: {
    format: 'iife',
    name: 'MyBundle',
    globals: {
      jquery: '$'
    }
  }
};

/*
var MyBundle = (function ($) {
  // 这里编辑代码
}($));
*/
```

5. `plugins`
用于指定输出插件

```js

import terser from '@rollup/plugin-terser';

export default {
 input: 'main.js',
 output: [
  {
   file: 'bundle.js',
   format: 'es'
  },
  {
   file: 'bundle.min.js',
   format: 'es',
   plugins: [terser()]
  }
 ]
};
```

## plugins

Rollup 是一个 JavaScript 模块打包器，它用于将多个模块或文件打包成一个单独的文件，以便在浏览器中加载。Rollup 提供了插件系统，允许你通过添加不同的插件来扩展其功能。插件可以用于执行各种任务，例如转换代码、优化输出、处理资源文件等等。

Rollup 插件的作用包括但不限于：

1. 代码转换：插件可以将你的代码从一种语法或模块系统转换为另一种。例如，将 ES6 模块转换为 CommonJS 模块或将 TypeScript 转换为纯 JavaScript。

2. 压缩和优化：插件可以压缩和优化你的 JavaScript 代码，以减小文件大小，提高加载性能。

3. 处理资源文件：如果你的项目包含像图像、字体或样式等资源文件，插件可以帮助你将它们正确地导入和处理，以便在打包后的文件中使用。

4. 代码拆分：一些插件支持将代码拆分成多个块，以便实现按需加载，提高应用程序的性能。

5. 自定义任务：你还可以编写自己的自定义插件，以执行特定于你的项目的任务。

使用 Rollup 插件，你可以根据项目的需要配置不同的插件来实现各种功能，这使得 Rollup 成为一个强大且高度可定制的工具，特别适用于构建现代的 JavaScript 应用程序和库。

```js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const isProduction = process.env.NODE_ENV === 'production';

export default (async () => ({
 input: 'main.js',
 plugins: [
  resolve(),
  commonjs(),
  isProduction && (await import('@rollup/plugin-terser')).default()
 ],
 output: {
  file: 'bundle.js',
  format: 'cjs'
 }
}))();
```

> 常用插件

1. `@rollup/plugin-json`，允许你将 JSON 文件作为模块导入。

```js
// 安装
yarn add @rollup/plugin-json --dev
// 配置
export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [json()]  ++
};

```

2. `@rollup/plugin-node-resolve`，允许你导入第三方模块，并配置如何查找它们。

```js
yarn add @rollup/plugin-node-resolve --dev
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [resolve()]
};

```

3. `@rollup/plugin-commonjs`，允许你导入 CommonJS 模块。

```js
yarn add @rollup/plugin-commonjs --dev
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  }
  plugins: [resolve(), commonjs()]
};
```

4. `@rollup/plugin-babel`，允许你使用 Babel 转换代码。

```js
yarn add rollup/plugin-babel @rollup/plugin-node-resolve --dev
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [resolve(), babel({ babelHelpers: 'bundled' })]
};
```

5. `@rollup/plugin-typescript`，允许你使用 TypeScript 编写代码。
6. `@rollup/plugin-replace`，允许你使用环境变量和插件选项来替换代码中的值。
7. `@rollup/plugin-image`，允许你导入图像文件。
8. `@rollup/plugin-multi-entry`，允许你导入多个入口文件。
9. `@rollup/plugin-terser`, 允许你使用 Terser 压缩代码。

```js
yarn add @rollup/plugin-json rollup-plugin-terser --dev
// rollup.config.js
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser'; ++

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'bundle.js',
      format: 'cjs'
    },
    {
      file: 'bundle.min.js', ++
      format: 'iife', ++ // 这种格式包装了代码，以便它可以通过浏览器中的脚本标签使用，同时避免与其他代码发生不必要的交互
      name: 'version', ++
      plugins: [terser()] ++
    }
  ],
  plugins: [json()]
};

```

## 插件开发

Rollup 插件是一个对象，具有 属性、构建钩子 和 输出生成钩子 中的一个或多个，并遵循我们的 约定。插件应作为一个导出一个函数的包进行发布，该函数可以使用插件特定的选项进行调用并返回此类对象。

### 约定

1. 插件应该有一个明确的名称，并以rollup-plugin-作为前缀。
2. 在package.json中包含rollup-plugin关键字。
3. 插件应该被测试，我们推荐 mocha 或 ava，它们支持 Promise。
4. 可能的话，使用异步方法，例如 fs.readFile 而不是 fs.readFileSync
5. 用英文文档描述你的插件。
6. 确保如果适当，你的插件输出正确的源映射。
7. 如果插件使用“虚拟模块”（例如用于辅助函数），请使用\0前缀模块 ID。这可以防止其他插件尝试处理它。

### 属性

1. `name`: `name`插件的名称，用于在警告和错误消息中标识插件。
2. `version`:`version`插件的

### 构建钩子

钩子是在构建的各个阶段调用的函数。钩子可以影响构建的运行方式，提供关于构建的信息，或在构建完成后修改构建。
种类：

- `async`：该钩子也可以返回一个解析为相同类型的值的`Promise`；否则，该钩子被标记为 `sync`。
- `first`：如果有多个插件实现此钩子，则钩子按顺序运行，直到钩子返回一个不是 `null` 或 `undefined` 的值。
- `sequential`：如果有多个插件实现此钩子，则所有这些钩子将按指定的插件顺序运行。如果钩子是 `async`，则此类后续钩子将等待当前钩子解决后再运行。
- `parallel`：如果有多个插件实现此钩子，则所有这些钩子将按指定的插件顺序运行。如果钩子是 `async`，则此类后续钩子将并行运行，而不是等待当前钩子。

除了函数之外，钩子也可以是对象。在这种情况下，实际的钩子函数（或 `banner/footer/intro/outro` 的值）必须指定为 `handler`。这允许你提供更多的可选属性，以改变钩子的执行

- `order`：如果有多个插件实现此钩子，则可以先运行此插件（`pre`），最后运行此插件（`post`），或在用户指定的位置运行（没有值或 `null`）。

```js
export default function resolveFirst() {
 return {
  name: 'resolve-first',
  resolveId: {
   order: 'pre',
   handler(source) {
    if (source === 'external') {
     return { id: source, external: true };
    }
    return null;
   }
  }
 };
}
```

如果有多个插件使用 `"pre"` 或 `"post"`，`Rollup` 将按用户指定的顺序运行它们。此选项可用于所有插件钩子。对于并行钩子，它会更改同步部分运行的顺序

- `sequential`: 不要与其他的插件相同钩子并行运行此钩子。仅可用于`parallel`钩子

```js
import { resolve } from 'node:path';
import { readdir } from 'node:fs/promises';

export default function getFilesOnDisk() {
 return {
  name: 'getFilesOnDisk',
  writeBundle: {
   sequential: true,
   order: 'post',
   async handler({ dir }) {
    const topLevelFiles = await readdir(resolve(dir));
    console.log(topLevelFiles);
   }
  }
 };
}
```

![执行顺序](/images/image.png)

- `options` : (options: InputOptions) => InputOptions | null
类型： [async, sequential]
作用： 替换或操作传递给 rollup.rollup 的选项对象
- `buildStart`  (options: InputOptions) => void
类型： [async, parallel]
作用：当您需要访问传递给 rollup.rollup() 的选项时，这是推荐使用的钩子，因为它考虑了所有选项钩子的转换，并且还包含未设置选项的正确默认值
- `resolveId`

```ts
(source: string, importer: string | undefined, options: {isEntry: boolean, custom?: {[plugin: string]: any}) => string | false | null | {id: string, external?: boolean | "relative" | "absolute", moduleSideEffects?: boolean | "no-treeshake" | null, syntheticNamedExports?: boolean | string | null, meta?: {[plugin: string]: any} | null}
```

类型： [async, first]
定义自定义解析器 解析器可用于例如定位第三方依赖。这里的 source 是 importee，正如它在 import 语句中所写的那样.
导入器是导入模块的完全解析的 id.在解析入口点时，importer 通常是未定义的.这里的一个例外是通过 this.emitFile 生成的入口点，因为在这里，您可以提供导入器参数。
对于这些情况，isEntry 选项将告诉您我们是否正在解析用户定义的入口点、发出的块，或者是否为 this.resolve 上下文函数提供了 isEntry 参数。

- `load`

```typescript
(id: string) => string | null | {code: string, map?: string | SourceMap, ast? : ESTree.Program, moduleSideEffects?: boolean | "no-treeshake" | null, syntheticNamedExports?: boolean | string | null, meta?: {[plugin: string]: any} | null}
```

类型： [async, first]
定义自定义加载器。返回 null 延迟到其他加载函数（以及最终从文件系统加载的默认行为）。为了防止额外的解析开销，例如由于某种原因，这个钩子已经使用 this.parse 来生成一个 AST,这个钩子可以选择返回一个 { code, ast, map } 对象.ast 必须是标准的 ESTree AST，每个节点都有开始和结束属性。如果转换不移动代码，您可以通过将 map 设置为 null 来保留现有的源映射。否则，您可能需要生成源映射。请参阅有关源代码转换的部分.

- `transform`

```ts
(code: string, id: string) => string | null | {code?: string, map?: string | SourceMap, ast? : ESTree.Program, moduleSideEffects?: boolean | "no-treeshake" | null, syntheticNamedExports?: boolean | string | null, meta?: {[plugin: string]: any} | null}
```

类型： [async, sequential]
可用于转换单个模块。为了防止额外的解析开销，例如由于某种原因，这个钩子已经使用 this.parse 来生成一个 AST，这个钩子可以选择返回一个 { code, ast, map } 对象。ast 必须是标准的 ESTree AST，每个节点都有开始和结束属性。如果转换不移动代码，您可以通过将 map 设置为 null 来保留现有的源映射.

- `moduleParsed`

```ts
Type: (moduleInfo: ModuleInfo) => void
```

类型: async, parallel
每次 Rollup 完全解析模块时都会调用此钩子。有关传递给此钩子的信息，请参阅 this.getModuleInfo。
与转换钩子相反，这个钩子从不缓存，可用于获取有关缓存和其他模块的信息，包括元属性的最终形状、代码和 ast。
这个钩子会等到所有的导入都解决了，这样 moduleInfo.importedIds 和 moduleInfo.dynamicallyImportedIds 中的信息才完整准确。但是请注意，有关导入模块的信息可能不完整，因为稍后可能会发现其他导入程序。如果您需要此信息，请使用 buildEnd 挂钩。

- `resolveDynamicImport`

```ts
(specifier: string | ESTree.Node, importer: string) => string | false | null | {id: string, external?: boolean}
```

类型:: async, first
为动态导入定义自定义解析器。返回错误信号，表明导入应该保持原样，而不是传递给其他解析器，从而使其成为外部。与 resolveId 钩子类似，您还可以返回一个对象以将导入解析为不同的 id，同时将其标记为外部。
如果动态导入传递了一个字符串作为参数，则从该钩子返回的字符串将被解释为现有模块 id，而返回 null 将推迟到其他解析器并最终到 resolveId 。
如果动态导入没有传递字符串作为参数，此钩子可以访问原始 AST 节点以进行分析，并且在以下方面的行为略有不同：

如果所有插件都返回 null，则导入将被视为外部而不发出警告。
如果返回一个字符串，则该字符串不会被解释为模块 ID，而是用作导入参数的替换。插件有责任确保生成的代码有效。
要解决对现有模块的此类导入，您仍然可以返回对象 {id, external}。
注意这个钩子的返回值之后不会传递给resolveId；如果您需要访问静态解析算法，您可以在插件上下文中使用 this.resolve(source, importer) 。

- `buildEnd`

```ts
Type: (error?: Error) => void
```

类型: async, parallel
在每个 rollup.rollup 构建上调用。当您需要访问传递给 rollup.rollup() 的选项时，这是推荐使用的钩子因为它考虑了所有选项挂钩的转换，并且还包含未设置选项的正确默认值。

- `watchChange`

```ts
watchChange: (id: string, change: {event: 'create' | 'update' | 'delete'}) => void
```

类型: sync, sequential
每当 rollup 在 --watch 模式下检测到对受监控文件的更改时通知插件。这个钩子不能被输出插件使用。第二个参数包含更改事件的其他详细信息。

- `closeWatcher`

```dart
() => void
```

类型: sync, sequential
当观察者进程关闭并且所有打开的资源也应该关闭时通知插件。这个钩子不能被输出插件使用
