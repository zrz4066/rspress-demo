import * as path from 'path';
import { defineConfig } from 'rspress/config';


import { LastUpdated } from '@theme';

function App() {
  return <LastUpdated />;
}

export default defineConfig({
  lang: 'zh',
  root: path.join(__dirname, 'MY'),
  title: 'qt site',
  description: 'Static site',
  icon: '/rspress-icon.png',
  logo: {
    light: '/icecream.png',
    dark: '/grapes.png',
  },
  // locales 为一个对象数组
  locales: [
    {
      lang: 'en',
      // 导航栏切换语言的标签
      label: 'English',
      title: 'Modern.js',
      description: 'Modern.js 文档框架',
    },
    {
      lang: 'zh',
      // 导航栏切换语言的标签
      label: '简体中文',
      title: 'Modern.js',
      description: 'Rspress',
    },
  ],
  themeConfig: {
	search: true,
	footer: {
      message: 'This is a footer',
    },
	outlineTitle: '目录',
	prevPageText: '上一页',
	nextPageText: '下一页',
	locales: [
      {
        lang: 'en',
        outlineTitle: 'ON THIS Page',
      },
      {
        lang: 'zh',
        outlineTitle: '大纲',
      },
    ],
    socialLinks: [
      //{ icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' },
    ],
  },
});
