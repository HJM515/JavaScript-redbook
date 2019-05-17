# 第1章  JavaScript简介

## 1.1  JavaScript简史

1995年  Netscape公司  NetScape Navigator 2  LiveScript  (Brendan Eich)

1996年  微软公司       Internet Explorer 3    Jscript

1997年  ECMA(欧洲计算机制造商协会)  跨平台  ECMAScript  (TC39)

## 1.2  JavaScript实现

(1) 核心 ECMAScript （语言核心功能）

语言组成部分:语法 类型 语句 关键字 保留字 操作符 对象

ES1: 本质与JavaScript1.1相同，删除与浏览器相关的部分,保证对象的通用、无平台性。

ES2: 无实质修改，仅编辑加工保证与ISO/IEC-16262严格一致。

ES3: 修改涉及字符串处理、错误定义和数值输出，新增正则表达式、新控制语句、try-catch异常处理等。

ES5: 澄清ES3中的歧义并增添原生JSON对象、继承的方法、高级属性定义、严格模式等功能。

(2) 文档对象模型 DOM （访问和操作网页内容的方法和接口）

针对XML但经过扩展用于HTML的应用程序编程接口（API，Application Programming Interface）。

DOM级别：DOM1，映射文档结构；

​                 DOM2，扩充了鼠标和用户界面事件、范围、遍历样式；

​                 DOM3，引入加载、保存、验证文档的方法

其他DOM标准：SVG1.0(可伸缩矢量图)、MathML1.0(数学标记语言)、SMIL(同步多媒体集成语言)。

(3) 浏览器对象模型 BOM （与浏览器交互的方法和接口）

​       根本：处理浏览器窗口和框架；

​       扩展：弹出新浏览器窗口、移动缩放关闭窗口、navigator/location/screen对象、对cookie的支持、XMLHttpRequest/ActiveObject自定义对象