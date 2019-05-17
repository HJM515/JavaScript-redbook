# 第2章  在HTML中使用JavaScript

## 2.1  <script>元素

​       6个属性：async(异步下载)、defer(延迟执行)、  →仅适用于外部脚本文件

charset(代码字符集)、language(脚本语言已废弃)、

src(外部文件)、type(MIME类型) 默认值text/javascript

​       标签位置：head或者body里

**async：异步加载js文件，如果浏览器空闲并且load事件触发，会在load事件触发前执行。**

**defer：异步加载js文件，脚本延迟到文档解析、显示之后执行，效果与window.onload类似。**

​       JS是阻断式语言，下载解析执行完毕后才可以呈现后面的内容。因此除必须在页面渲染以前完成或JS代码库指定需要放在最前面的必须放在head中，其他都放在body的最后。

## 2.2  嵌入代码与外部文件

​       外部文件：可维护性、可缓存、适应未来

## 2.3  文档模式

​       Doctype: 混杂模式和标准模式，影响CSS内容呈现、JS解释执行。

​       模式转换方法：<!Doctype html>