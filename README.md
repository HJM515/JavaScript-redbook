

* [第1章  JavaScript简介](#%E7%AC%AC1%E7%AB%A0--javascript%E7%AE%80%E4%BB%8B)
  * [1\.1  JavaScript简史](#11--javascript%E7%AE%80%E5%8F%B2)
  * [1\.2  JavaScript实现](#12--javascript%E5%AE%9E%E7%8E%B0)
* [第2章  在HTML中使用JavaScript](#%E7%AC%AC2%E7%AB%A0--%E5%9C%A8html%E4%B8%AD%E4%BD%BF%E7%94%A8javascript)
  * [2\.1  &lt;script&gt;元素](#21--script%E5%85%83%E7%B4%A0)
  * [2\.2  嵌入代码与外部文件](#22--%E5%B5%8C%E5%85%A5%E4%BB%A3%E7%A0%81%E4%B8%8E%E5%A4%96%E9%83%A8%E6%96%87%E4%BB%B6)
  * [2\.3  文档模式](#23--%E6%96%87%E6%A1%A3%E6%A8%A1%E5%BC%8F)
* [第3章  基本概念](#%E7%AC%AC3%E7%AB%A0--%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5)
  * [3\.1  语法](#31--%E8%AF%AD%E6%B3%95)
  * [3\.2  关键字和保留字](#32--%E5%85%B3%E9%94%AE%E5%AD%97%E5%92%8C%E4%BF%9D%E7%95%99%E5%AD%97)
  * [3\.3  变量](#33--%E5%8F%98%E9%87%8F)
  * [3\.4  数据类型](#34--%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
  * [3\.5  操作符](#35--%E6%93%8D%E4%BD%9C%E7%AC%A6)
  * [3\.6 语句](#36-%E8%AF%AD%E5%8F%A5)
* [第4章  变量、作用域和内存问题](#%E7%AC%AC4%E7%AB%A0--%E5%8F%98%E9%87%8F%E4%BD%9C%E7%94%A8%E5%9F%9F%E5%92%8C%E5%86%85%E5%AD%98%E9%97%AE%E9%A2%98)
  * [4\.1  变量](#41--%E5%8F%98%E9%87%8F)
  * [4\.2  作用域](#42--%E4%BD%9C%E7%94%A8%E5%9F%9F)
  * [4\.3  垃圾收集](#43--%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86)
* [第5章 引用类型](#%E7%AC%AC5%E7%AB%A0-%E5%BC%95%E7%94%A8%E7%B1%BB%E5%9E%8B)
  * [5\.1 Array 类型 （有序）](#51-array-%E7%B1%BB%E5%9E%8B-%E6%9C%89%E5%BA%8F)
  * [5\.2 Date类型](#52-date%E7%B1%BB%E5%9E%8B)
  * [5\.3 Function类型](#53-function%E7%B1%BB%E5%9E%8B)
  * [5\.4 包装对象和内置对象](#54-%E5%8C%85%E8%A3%85%E5%AF%B9%E8%B1%A1%E5%92%8C%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1)
  * [5\.5 RegExp类型](#55-regexp%E7%B1%BB%E5%9E%8B)
* [第6章 面向对象的程序设计](#%E7%AC%AC6%E7%AB%A0-%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%9A%84%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1)
  * [6\.1 创建对象](#61-%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1)
  * [6\.2 继承](#62-%E7%BB%A7%E6%89%BF)
* [第8章 BOM对象](#%E7%AC%AC8%E7%AB%A0-bom%E5%AF%B9%E8%B1%A1)
  * [8\.1 window对象](#81-window%E5%AF%B9%E8%B1%A1)
  * [8\.2 location对象](#82-location%E5%AF%B9%E8%B1%A1)
  * [8\.3 history对象](#83-history%E5%AF%B9%E8%B1%A1)
  * [8\.4 其他](#84-%E5%85%B6%E4%BB%96)
* [第10章 DOM对象](#%E7%AC%AC10%E7%AB%A0-dom%E5%AF%B9%E8%B1%A1)
  * [10\.1 节点层次](#101-%E8%8A%82%E7%82%B9%E5%B1%82%E6%AC%A1)
  * [10\.2 动态加载JS脚本](#102-%E5%8A%A8%E6%80%81%E5%8A%A0%E8%BD%BDjs%E8%84%9A%E6%9C%AC)
  * [10\.3 动态加载CSS样式](#103-%E5%8A%A8%E6%80%81%E5%8A%A0%E8%BD%BDcss%E6%A0%B7%E5%BC%8F)
  * [10\.4 动态和静态合集](#104-%E5%8A%A8%E6%80%81%E5%92%8C%E9%9D%99%E6%80%81%E5%90%88%E9%9B%86)
* [第11章 DOM扩展](#%E7%AC%AC11%E7%AB%A0-dom%E6%89%A9%E5%B1%95)
  * [11\.1 选择符API和元素遍历](#111-%E9%80%89%E6%8B%A9%E7%AC%A6api%E5%92%8C%E5%85%83%E7%B4%A0%E9%81%8D%E5%8E%86)
  * [11\.2 class和焦点管理](#112-class%E5%92%8C%E7%84%A6%E7%82%B9%E7%AE%A1%E7%90%86)
  * [11\.3 字符串操作DOM节点](#113-%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%93%8D%E4%BD%9Cdom%E8%8A%82%E7%82%B9)
  * [11\.4 JS的滚动操作](#114-js%E7%9A%84%E6%BB%9A%E5%8A%A8%E6%93%8D%E4%BD%9C)
  * [11\.5 脚本化CSS（行内样式）](#115-%E8%84%9A%E6%9C%AC%E5%8C%96css%E8%A1%8C%E5%86%85%E6%A0%B7%E5%BC%8F)
  * [11\.6 操作外部/内部样式表](#116-%E6%93%8D%E4%BD%9C%E5%A4%96%E9%83%A8%E5%86%85%E9%83%A8%E6%A0%B7%E5%BC%8F%E8%A1%A8)
  * [11\.7 元素大小](#117-%E5%85%83%E7%B4%A0%E5%A4%A7%E5%B0%8F)
* [第13章 事件](#%E7%AC%AC13%E7%AB%A0-%E4%BA%8B%E4%BB%B6)
  * [13\.1 基本操作](#131-%E5%9F%BA%E6%9C%AC%E6%93%8D%E4%BD%9C)
  * [13\.2 事件优先级和事件对象](#132-%E4%BA%8B%E4%BB%B6%E4%BC%98%E5%85%88%E7%BA%A7%E5%92%8C%E4%BA%8B%E4%BB%B6%E5%AF%B9%E8%B1%A1)
  * [13\.3 鼠标事件](#133-%E9%BC%A0%E6%A0%87%E4%BA%8B%E4%BB%B6)
* [最后阶段：](#%E6%9C%80%E5%90%8E%E9%98%B6%E6%AE%B5)
  * [技术实力、沟通能力、逻辑思维能力、心理素质、气质气场](#%E6%8A%80%E6%9C%AF%E5%AE%9E%E5%8A%9B%E6%B2%9F%E9%80%9A%E8%83%BD%E5%8A%9B%E9%80%BB%E8%BE%91%E6%80%9D%E7%BB%B4%E8%83%BD%E5%8A%9B%E5%BF%83%E7%90%86%E7%B4%A0%E8%B4%A8%E6%B0%94%E8%B4%A8%E6%B0%94%E5%9C%BA)
  * [知之为知之，不知为不知，是知也](#%E7%9F%A5%E4%B9%8B%E4%B8%BA%E7%9F%A5%E4%B9%8B%E4%B8%8D%E7%9F%A5%E4%B8%BA%E4%B8%8D%E7%9F%A5%E6%98%AF%E7%9F%A5%E4%B9%9F)

# 第1章  JavaScript简介

## 1.1  [JavaScript简史](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/24)

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

------

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

------

# 第3章  基本概念

## 3.1  语法

(1) 区分大小写

​       html和css不区分大小写；JS区分大小写。

(2) 标识符

​       变量、函数、属性的名字。

​       第一个字符必须是一个字母、下划线、一个美元符号。

​       (字母包含ASCII或Unicode字母字符，汉字等都可以)

(3) 注释

​       //单行注释

​       /*

​       \* 多行

​       \* 注释

​       */

(4) 严格模式

​       方式1：代码的第一行，添加“use strict”

​       方式2：函数的第一行，添加“use strict”

​       问题：上线前代码打包会导致模式不按预期实现。

(5) 语句

​       以分号结尾，如果省略，则由解释器确定语句的结尾。

**注：a. 方法名称作为元素属性时，可不区分大小写；遇到带中划线的属性，后面跟的值应是小写。**

**b.** **严格模式一般只在某些特定的框架中使用。**

**c. JS****解释器在确定在哪里添加分号的规则：判断后面是否可以和前面的一起执行，如果可以就放到一起，不可以才加分号（某些框架函数为保证代码正常执行，会以分号开头，防止其他人的代码结尾未写分号）；“++”和“--”符号优先和下面的合并；return/break/continue不会与后面合并，直接返回，因此return的内容应该紧跟在return后。**

## 3.2  关键字和保留字

​       关键字和保留字不能作为标识符。

​       避免方式：驼峰命名方式、拼音

**注：a. java中所有关键字都是JS的保留字/关键字。**

## 3.3  变量

​       var 局部变量； 全局变量。

**注：a. 定义变量时，不会定义其类型，使用的时候才会取获取数据类型。**

​    **b.** **使用var局部变量，否则全局变量（全局属性）；使用var不可删除，否则可删除（属性可以delete）；使用var会被提前，否则不提前（对象的属性无序）。**

## 3.4  数据类型

​       基本数据类型：Undefined、Null、Boolean、Number、String (不可以改变数据类型)

​       复杂数据类型：Object (可变数据类型)（无序列表合集）

​       判断数据类型：typeof操作符

(1) Undefined类型（只有1个值）

​       本质：windows的属性，属性对应的值是未定义。

​       声明但未初始化，变量的值是undefined。

(2) Null类型（只有一个值）

​       表示空对象指针。 (typeof(null)) à “object”

null == undefined; 返回true

(3) Boolean类型

​       所有数据类型都可以转换成布尔值。Boolean(  )函数

​       undefined、null、NaN、0、-0、“ ”  à false

(4) Number类型

​        十进制、十六进制（0x）八进制（其一位是0）；

​       浮点数值的最高精度是17位小数。0.1+0.2不等于0.3。

​       NaN不等于NaN，isNaN()  判断传入的参数是否可以转换成数字；

​       类型转换：Number() 函数用于任何数据类型，parseInt()和parseFloat() 函数用于字符串转换成数值，建议始终将第二个参数设为10。

(5) String类型

​       JS中，建议使用单引号

​       类型转换：str.toString()方法 null和undefined没有这个方法、String(str)函数

(6) Object类型

​       类型转换：Object() 函数。

​       属性：constructor 保存用于创建当前对象的函数；

​                hasOwnProperty(*propertyName*) 检查给定属性是否灿在与当前对象实例；

​                isPrototypeOf(object) 检查传入对象是否是当前对象的原型；

​                propertyIsEnumerable(*propertyName*) 检查给定属性是否能使用for-in语句来枚举；

方法：toString()、valueof()、toLocalString()

*注：**a.* *使用**typeof**操作符判断数据类型，最好加上括号，如**(typeof xxx)**。*

*b. undefined**与**null**共同点：都只有一个值；布尔转换结果都为**false**；都没有属性和方法；*

*不同点：**null**是关键字，**undefined**不是；**null**是已经初始化的，而**undefined**不是；**null**是对象，而**undefined**只是一个数据类型；**null**转换成数字返回**0**，**undefined**返回**NaN**。*

   *c.* *声明变量时可以不给它赋值，如果一定要赋值可以赋成**null**，不要使用**undefined;**如果一定要用“**===**”检查每个值是否存在，使用**undefined;**当使用全等判断某个值是否为空，使用**null;**初学阶段可使用“**== null**”判断某个值是否存在或为空。*

   *d.0.1**和**0.2**无法转换成二进制，因此计算结果不等于**0.3**；这类问题可以通过乘以**10**的**n**次方再除以**10**的**n**次方避免。*

   *e. Number(**对象**)**，先调用对象的**valueof()**，再调用**toString()**方法**;* *如**Number([])* *à* *0;Number({})* *à**NaN**。*

   *f. String(**对象**)**，先调用对象的**toString()**，再调用**valueof()**方法。*

*g. parseInt()**和**parseFloat()**的使用场景是后台传入数据或从**HTML**中获取数据的数值转换。***parseInt(a, b),** **按****b****进制解析****a,** **当****b=0****时****,****按十进制解析****a; a****的每一位的值不能大于****b,** **如****parseInt(3,2)** **à****NaN**

*h* *对象分类：内部对象**,**共**17**种**(**错误对象、**8**种常用对象、**Math/Gloal/JSON3**种内置对象**)**；数组对象**(JS**语言运行环境中产生的对象，常用**window/location**对象**)**；自定义对象。*

*i. Object**类型转换：**Object(**Boolean/Number**类型**)* *à* *{ }   [[primitiveValue]]: value*

​                                 *Object(String**类型**)* *à* *{“”}   [[primitiveValue]]**、**length**、**0**、**1**……*

​                                 *Object(null/undefined)* *à* *{}* *空对象*

*j.**对象属性访问**(**点方法或者方括号**)JS**解释器运行过程：判断前面是不是**undefined**或**null**，是则报错；判断是不是对象，如果不是则转换成对象；点方法将点后面的转换为字符串，如果是方括号先计算再将结果转换为字符串。*

## 3.5  操作符

(1) 一元运算符

​       递增++、递减--：前置，先改变后运算；后置，先运算后改变。

​       一元加+、减-：加与Number()转型函数一样，减先类型转换后取负数。

​       按位非（NOT）：”~num”，”-num-1”，其他位运算符很少用到。

​       逻辑非（！）

​       typeof、void 返回undefined,用于禁止跳转、delete

(2) 短路操作符

​       逻辑与（&&）：第一层，两个操作数为布尔值；

​                              第二层，两个操作数为可以转换成布尔值的表达式;(如果…并且…)；

​                              第三层，前面是判断语句，后面为执行语句。(判断并运行)

**第一个操作数可以转换false，返回第一个操作数；**

**第一个操作数可以转换true，返回第二个操作数。**

逻辑或（||）：第一层，两个操作数为布尔值；

​                            第二层，两个操作数为可以转换成布尔值的表达式;(如果…或者…)；

​                            第三层，前面是判断语句，后面为执行语句。(判断并运行)

​              **第一个操作数可以转换true，返回第一个操作数；**

**第一个操作数可以转换false，返回第二个操作数。**

**a && b || c**  **相当与 a ? b || c 相当于if(a) {b} else {c}**

(3) 加减乘除模 比较赋值

​       乘性操作符：先转换成数字，再进行运算。（小数需要进行处理）。

​       减法操作符：先转换成数字，再进行计算。

​       加法操作符：（倾向字符串）如果两边都是数字或布尔值，数字类型相加；如果有一个出现字符串，字符串类型相加。

​       关系运算符：（倾向数字）数字(布尔值)比较、字符串比较（编码）、对象比较（先调用valueof()，再调用toString（））、如果有一个是数字另一个也将转换为数值再比较。

​       相等操作符：“===” “！==”，全等/不等；“==” “！=”，数字(布尔值)比较、字符串比较（编码）、对象比较（一个对象调用valueof()，两个对象指向同一对象才相等）、null与undefined相等（null和undefined不转换类型）。

​       赋值运算符：“=”、“+=”、“-=”、“*=”、“/=”、“%=”，不推荐连续赋值。

​       其他二元运算符：instanceof、 in。

**注：a. 表达式:JS中的短语， JS代码中除操作符外，都是表达式。原始表达式（常量 不会改变的量如π/大写字母表示的量、变量、直接量 数字/字符串/正则表示式）、初始化表示式（初始化数字/对象，如对象字面量表达式）、函数表示式、函数调用表示式、属性访问表示式（点方法或括号）、对象创建表达式（new操作符构成的表达式）。**

**b.** **优先级，属性访问；一元运算符-+/++/--/! ；\*/ %+- ；<> <= >=；==/===；&&；||；三目运算；赋值**

**c.** **结合性：当优先级一样时，一元运算符右结合，三目运算符，赋值运算符右结合，其他都是左结合。**

**d.** **运算顺序：从左到右。**

**e.** **任何操作数与NaN比较，返回false。**

**f.** **！！a相当于Boolean(a)、+a相当于Number(a)、a + “”相当于String()。**

**g.** **加法操作JS解释器运行原理：如果有一个是字符串，都转换成字符串然后连起来；如果其中一个是null、undefined、布尔值、数字，都被转换成数字；如果其中一个是对象，（对象转换成原始值先valueof()再toString, Date对象直接调toString()**

 **例1：空数组调用valueof()返回数组本身，调用toString()返回空字符串，因此[] + [] 得到“”；空对象调用valueof()返回对象本身，调用toString()返回“[object object]”，因此｛｝+｛｝得到“[object object] [object object]”。**

**例2：1+[1,2]****à****“11，2”；1+｛a:1｝****à****“1[object object]”；{a:1}+1****à****1** **前面的{}会被看做一段代码区域，不会参与到后面的计算；{}+[]****à****0****；[]+{}****à** **“[object object]”。**

## 3.6 语句 

(1) 基本语句

​       表达式语句：对操作数进行了增删改的表达式，包括递增递减、赋值、delete、函数调用语句。

​       复合语句：{多条语句}，又称为语句块。

​       空语句：一个分号“；”。用途1：复合语句结尾加分号，不会报错；用途2：模块开头加分号，防止压缩后与前面的代码合并导致错误；用途3：循环语句后面不需要执行可以直接使用“{}”或“；”。

​       声明语句：var 和 function。 声明的变量或函数都会提前，函数表达式不会被提前。

(2) 分支语句

​       if语句：if(expression){} else{}；条件判断中，建议基本数据类型比较，采用全等，避免类型转换。

​       switch语句：switch(expression){case value:  break; … ;default: statement} 。

(3) 循环语句

​       while语句：while(expression)statement；一般将在循环体的最后对表达式进行修改。

​       for语句：for(initialization; expression; post-loop-expression)statement。initialization只执行一次，可以放在外面，可在外访问。1243243……

​       for-in语句：for(property in expression) expression，枚举对象属性。

(4) 中断语句

​       break语句：跳出break所在的循环语句。

​       return语句：结束所在函数，返回一个结果。

​       continue语句：停止当前循环，继续下一个循环。(使用较少，break都可以实现)

**注：a. 语句是会触使某件事情发生的命令，作用是操作符使操作数进行计算的作用，副作用是当运行语句或表达式时，对某些变量的值进行修改、删除或增加等作用，递增递减、赋值都有副作用。语句一定有副作用，表达式不一定有副作用。**

   **b. while(true) statement** **和 for(;;)statement 一样，无限循环。expression最好直接是值的比较，直接转换为布尔值，优化性能。**

   **c. for-in****语句是更精准的循环语句，因此效率会更低（数据类型转换，in前面表达式的多次计算，原型链的搜索等操作）。**

**d. for-in****语句JS解释器过程：第一步，判断in后面的表达式是不是对象，如果是null/undefined直接报错（ES5中不报错不执行循环体），如果不是则将其转换为对象，然后执行下一步操作，将对象的属性取出来赋值给in前面的property（in前面的表达式每次都会运行），执行后面的循环体，完成后再继续赋值过程，直到属性枚举完成。**

**e. for-in****语句：数字、布尔类型，不会得到任何东西；字符串，会得到0：；1：；…。JS内置属性方法、原始值、string包装类的字符串长度、原始值都不可枚举。循环体内对属性的增删改不会反映到in前面的property中。**

**f.** **标签语句：label: statement。(使用较少，都可以使用函数封装实现) 将另一个循环写成标签语句，可以通过break label(跳转至label语句结尾)实现跳出两个嵌套循环体。**

**g.** **其他语句：with、debugger、use strict。** 

# 第4章  变量、作用域和内存问题

## 4.1  变量

​       变量的值：基础数据类型，直接保存到变量中；引用类型，保存在内存中同时创建访问内存的地址(引用)，将引用保存到变量中。

​       属性方法操作：基本数据类型，不报错无效果；引用类型，可实现增删改操作。

​       变量赋值：删除原有的重新生成变量。

​       变量复制：基本数据类型，新建一个值相同的变量，两者无关；引用类型，指向同一引用（地址），相互联系。

​       传递参数：只能按值传递。基本数据类型，相当于变量复制过程；引用类型，地址复制。

​       检测类型：typeof；检测对象类型，obj instanceof Object/Array/RegExp/Date, 用instanceof检测基本数据类型都会返回false。

## 4.2  作用域

​       作用域：（编译阶段【词法语法分析、生成代码】）对值进行保存和读取时遵循的规则。

​       作用域链：（代码运行阶段）对变量和函数进行访问规则。 “单向父级查找”

## 4.3  垃圾收集 

​       作用保证内存的合理使用；标记清除、引用计数两种方式。

​       手动管理内存：将变量设置为null。

**注：a. 创建变量JS解释器过程：创建变量名字，创建其可以被访问到的作用域，将变量声明提升到函数最顶上，判断值的类型确定变量中保存值还是引用。**

**b.** **函数的参数在创建时JS不关注其数据类型，在使用时才动态验证其数据类型，与变量声明类似。**

**c.** **作用域包括全局作用、函数作用域、块级作用域（ES6有了）。作用域之间可相互嵌套。同一作用域下，函数名和变量名相同，函数会覆盖变量。**

**d. with****、eval：尽量避免使用，因为with和eval破坏了解释器创建和管理作用域的规则，编译过程中解释器不会对它进行优化，效率较低。eval如同一个小型的JS解释器，将传入的字符串按JS代码解释执行。**






# 第5章 引用类型

## 5.1 Array 类型 （有序）

(1) 基本内容

特点：数组中的每一项都可以保存任何类型的数据；长度大小可调整。

​       创建方式：构造函数、字面量。

​       长度属性：(0~2^32-2)可实现数组项增加或删除，如果将数组长度设为非自然数，报错。

​       检测手段：list instanceof Array;  list.constructor == Array；(ES5新增)Array.isArray(list)；Object.prototype.toString.call(list) === “[object Array]”。

​       **toString():** **返回字符串 如[1,”a”,true,{}].toString** **à”1,a,true,[Object Object]”**

​       **valueOf(): 返回数组本身**

(2) 栈方法

​       **push()****：数组末尾添加任意个项，返回修改后数组的长度。**

​       **pop()：移除数组最后一项，返回移除项。**

(3) 队列方法

​       **unshift()****：在数组前端添加任意个项，返回修改后数组的长度。**

​       **shift()：移除数组第一项，返回移除项。**

(4) 排序方法

​       **reverse()****：反转数组项的顺序。**

​       **sort()：不传参数，则将数组项转换为字符串，按字符串的ASCII码大小升序排列；**

**传一个函数(两个参数)，先第一项与第二项比较，如果函数返回正数两项交换，否则不交换继续比较第二项和第三项，一旦交换了就从头跑一遍。冒泡排序。**  

(5) 操作方法  （不改变原数组）

​       **join()****：将数组项放到字符串中，以指定的分隔符分隔。**

**contact()：拼接操作。基于当前数组创建一个新数组将接受的参数传递到副本的末尾，如果接受的参数是数组，会拆开将每一项添加到副本末尾。**

​       **slice()****：截取操作。slice(start, end)，返回包含原数组的start到end-1项的新数组。如果为负值，参数+length转化成正数；如果start>end或两个负数都超过length长度返回空数组。**

**(5)\*操作方法(改变原数组)**

​       **splice()**：传一个参数，从参数位置**截取**到结尾；

​                     传两个参数，从a位置开始**删除**b个，返回删除项；

​                     传多个参数，从a位置开始删除b个，将c插入到删除位置，返回删除项。**插入或替换**

(6) 位置方法 **（从此往后的数组方法都是ES5中的，前面是ES3的）**

​       两个参数：查找项(使用全等判断)和(可选)查找起点位置索引。

**indexOf()：从前往后查；** 

**lastIndexOf()：从后往前查。** 

返回查找项位置，未找到返回-1。

(7) 迭代方法

​       两个参数：要在数组每一项上运行的函数和(可选)运行该函数的作用域对象(影响this值)。

​                     函数接收的三项参数（item,index,array）

​       every()：查询数组每一项是否满足条件，**每一项都为true，返回true**。

​       some()：查询数组每一项是否满足条件，**任一项为true，返回true**。

​       filter()：查询数组每一项是否满足条件，**返回满足条件的数字项构成的新数组**。

​       map()：对数组每一项进行函数操作，返回新数组，如每一项都乘以2。

​       forEach()：对每一项都运行函数，无返回值，与for循环迭代数组一样。

(8) 归并方法

​       两个参数：要在每一项上调用的函数和(可选)作为归并基础的初始值。

​                       函数接受的四个参数（prev, cur, index, array）

​       reduce()：从第一项逐个遍历至最后一项；

​       reduceRight()：从最后一项遍历至第一项。

​       迭代数组所有项，构建一个最终值。（数组求和、积）

(9) 数组去重

​       方式1：（创建新数组）两层循环，外层罗列每一项，内层循环判断值是否相等（创建标志位判断是否push或者使用中断+标签语句跳出内循环）。

​       方式2：（创建新数组）比较取出项是否与后面的项，相同跳过，全不同push。

​       方式3：使用splice()将数组中的重复项去掉，注意去掉后数组长度会变短。（类似的，先排序，后使用splice()删掉重复项）。

​       方式4：利用对象属性名不重复的特点去重，如果对象中没有这个属性，就可以增加这一项属性。

​       方式5：利用ES5中的indexOf()和forEach()/filter()/map()，查找后面是否还有与当前项值相同的（indexOf(v, i+1)返回-1，说明当前项具有唯一性），判断对象位置是否等于indexof返回的位置。

​       方式6：利用ES6中Set对象的成员具有唯一性，利用Array.from方法或者拓展运算符…将Set对象转化为数值。Array.from(new Set(arr))； […new Set(arr)]。   

**注：a. 关于typeof null返回object，这是开发时的一个bug。所有数据保存在内存中，都是以二进制的形式，JS解释器进行编辑时遵守的一个规则，如果其三位都是0时，表示这是一个对象。null转换成二进制全是0，typeof返回object。**

​    **b.** **创建数组注意事项：使用new Array( n)创建的数组，无法使用迭代方法forEach()等，可以使用Array.apply(null, length)解决该问题。**

**c.** **不推荐使用多个逗号创建空对象。**

**d. instanceof****和constructor两种检测方式，在多个全局作用域或框架的情况下可能会出错。**

## 5.2 Date类型 

创建方式:使用new Date()。

继承方法：toString()和to LocalString()，LocalString()返回的时间没有时区信息。valueof返回距离时间起点的毫秒数。

格式化方法：to(Local)DateString()、to(Local)TimeString()、toUTCString()。

日期/事件组件方法：共33种。其中Time只与get和set连，没有getUTC、setUTC；年FullYear 月Month 日Date 时Hours 分Minutes 分Seconds秒 星期Day 毫秒Milliseconds，其中星期Day只与get和getUTC连，没有set，其他都有四种。还有一种getTimezoneOffest()，返回本地时间与UTC时间相差的分钟数。

**注：a. new Date(), 括号内不传参数，得到目前的时间；一个参数，返回距离1970.01.01的毫秒数（后天会调用Date.parse(),接收表示日期的字符串参数，返回毫秒数）；传入布尔或者null，1970.01.01早八点；传undefined或无法转化成时间的字符串，得到无效时间（NaN）。**

   **b.** **使用cookie设置过期时间，会用到toUTCString()。**

   **c. valueof****，返回距离时间起点的毫秒数。（或者使用+和now） (valueof 和 getTime效率最高)**

## 5.3 Function类型 

(1) 函数的创建方式

创建方式1：函数声明。函数名有name属性，内外皆可访问到该名称函数

创建方式2：匿名函数表达式。变量没有name属性，访问不到

创建方式3：命名函数表达式（递归函数 ）。有name属性 ，如：a= function b（）｛可以访问到b，可调用｝，在外面访问不到。

创建方式4：ES6箭头函数(一种匿名函数)。创建时，不会创建上下文环境(this指向它所在的外部的作用域)；name属性是空字符串，没有arguments数组。

创建方式5：ES6 函数生成器（可对状态进行保存）。写法类似于函数声明语句，在function后面加了一个*；不会使用return，而是使用yield代替，并且可能是多个；返回迭代器对象，需要先运行并赋值给变量或属性，得到迭代器对象，该对象有next方法，调用该方法可以从上只下开始执行，至yield，返回一个对象，里面有value, done【false】,再调用next，执行上一个yield至下一个yield……，结束时done时true。

创建方式6：函数构造器。不推荐。书写复杂（函数体要写成字符串传到构造器内）；会用到eval（执行时将字符串要转换成可执行代码解释器会调用eval方法）；创建的函数无法访问当前作用域，会在全局作用域创建。

(2) 作用域

​       函数：生成作用域，隐藏变量。 

​       完成匿名函数立即执行：表达式(function(){}())；操作符true&&function(){}()；一元操作符+、-等（其中+、-性能较差）。

​       立即执行函数(IIFE)的特点：模仿块级作用域，避免污染全局变量；提高性能；有利于压缩；避免全局命名冲突；保存闭包状态（例：for(){if(){}}）；颠倒运行顺序（传递实参为函数，常用于UMD通用模块规范）。

​       JS作用域：使用立即执行函数模拟块级作用域。（with{块级作用域}, try catch{块级作用域}, eval）。

​       ES6：let 定义块级作用域变量，属于新的作用域，而不是当前作用域。

(4) 闭包

​       函数使用：**操作函数**，函数作为参数使用，如sort()方法，无时间差；**回调函数**，拿到服务器返回结果，定义一个函数，把服务器返回的结果作为函数的参数传递进去，有时间差；将函数作为**返回值**。

闭包创建方式：一个函数内部创建另一个函数。

闭包的作用域：包含自己的作用域、包含函数的作用域和全局作用域。

问题：函数返回闭包是，占用内存，至闭包不存在才能解除占用。

作用：利用闭包实现私有变量得共有方法

**注：a. 语句块中不建议使用函数声明，严格模式会报错，不同浏览器结果会不同。应该使用匿名函数表达式。**

   **b. IE8** **有个问题，命名函数表达式在函数体内外都可以访问到，会造成全局变量污染。 解决办法：变量名和函数名相同。**

  **c.** **递归：非严格模式下，例如：function f(num) {return num \* arguments.callee(num -1) }；严格模式下，使用命名函数表达式。**

## 5.4 包装对象和内置对象 

(1) 包装对象

​       都有valueof()和toString()。

​       Boolean类型包装对象：没啥用。valueof()返回 true或false；toString()返回 “true”或”false”。

​       Number类型包装对象：toFixed(指定小数位数)按指定小数位返回数值的字符串，如num.toFixed(2)；toExponential(小数位)转换为科学计数法；toPrecision(数值位数)方法。

​       String类型包装对象：chatAt()和chatCodeAt()；访问字符串中特定字符；

indexOf()和lastIndexOf()【没找到返回-1】；查找子字符串的位置；

**slice()、subString()从start截取到end-1位，返回截取字符串；**

**(****区别，当start>end，slice得到空，subString会将两个换过来；当传负数，slice会将其当做倒数第几位，subString会当成0)**

**substr()，第一个参数是截取开始位，第二个参数是截取几位；**

split(),基于指定分割符将字符串分割成多个子字符串放到数组； 

toLowerCase()、toUpperCase()，大小写切换；

trim() 删除空格；

match()返回匹配的字符串组成的数组

search()返回第一个匹配项的索引

replace()替换

ES6 padStart()/padEnd从头部/尾部开始自动补齐至达到指定长度。

​                                          ES6 startsWith()、endsWith()

​                                          ES6 includes()  判断是否包括给定字符

​                                          ES6 repeat(),重复多少次

(2) 内置对象

​       Global对象：URI编码方法encodeURI()和encodeURIComponent()、decodeURI()和decodeURIComponent()。

​                             eval()方法：相当于一个解释器。当JS解释器编译遇到eval时，会将编译模式由快速编译模式转为安全编译模式，因此性能较差。作用1，低版本将字符串形式的JSON结构转换成对象；作用2，动态声明变量；作用3，代码压缩（以eval开头）。

注：a. eval()声明的变量不会被提前；严格模式下eval声明的变量在eval外面无法访问到；eval中的代码无法使用调试工具调试。

​                            属性：undefined/NaN/Infinity，只有这三个属性对应的是值，其他的属性对应的都是构造函数。

​       Math对象：属性，可能会用到Math.PI；

​                        方法，Math.ceil()向上去整，Math.floor()向下取整，Math.round()四舍五入；

​                             Math.min()和max() 例如Math.max.apply(Math,数组)；

​                                   Math.random()   例如：Math.random().toString(36)

​       Json对象：字符串与JSON之间的相互转换。

## 5.5 RegExp类型

(1) 用武之地 

​       RegExp.exec(str) : 查找匹配, 并返回一个数组或null

​       RegExp.test(str) : 测试是否匹配, 返回true或false

​       String.match(reg) : 查找匹配, 并返回一个数组或null

​       String.search(reg) : 返回匹配位置索引或-1

​       String.replace(reg) : 使用替换字符串换掉匹配到的子字符串

​       String.split(reg) : 使用正则表达式分隔字符串

和test方法, String的match/replace/search/split方法

(2) 创建方法

​       正则表达式字面量: 如var reg = /^[a-zA-z]+[0-9]*\w?_$/gi

​       构造函数: 如var reg = new RegExp(/^[a-zA-z]+[0-9]*\w?_$/, “gi”)

​                            var reg = new RegExp(“^[a-zA-z]+[0-9]*\\w?_$”, “gi”)

(3) 正则表达式修饰符

​       g : 全局搜索

​       I : 不区分大小写搜索

​       m : 多行搜索

​       y : 执行”粘性”搜索

(3) 特殊字符

​       **\** : **转义下一个字符的性质**, 特殊与字面量之间转义; 在new RegExp(“str”)中要用//

​       **^ :** **匹配 开头  多行匹配时,可匹配换行符后紧跟位置 如/^a/**

​       **$ : 匹配 结束  多行匹配时,可匹配换行符前的位置 如/a$/**

​       *** : 匹配前一个表达式0次或多次 等价于{0,} 如/bo\*/**  (o出现0次或多次)

​       **+: 匹配前一个表达式1次或多次 等价于{1,} 如/a+/**

​       **. : 匹配除换行符外的所有单字符**

​       **? : 匹配前一个表达式0次或1次 如果紧跟在任何量词\* + ? {}后面,会使量词变成非贪婪**

​       **(x): 匹配x并记住匹配项,括号是捕获括号 记住匹配项可复用 如/(foo)(bar)\1\2/**

​       **(?:x): 匹配但不记住匹配项**

​       **x(?=y): 正向肯定查询,匹配x仅当x后面跟着y**

​       **x(?!y): 正向否定查询, 匹配x仅当x后面不跟着y**

​       **x|y: 匹配x或者y**

​       **{n}: 匹配前面一个字符刚好发生n次**

​       **{n,m}: 匹配前一个字符发生n-m次.**

​       **[xyz] : 匹配方括号中的任意字符**

​       **[^xyz] : 匹配不在方括号内的任意字符**

​       **\cX : 当X是处于A-Z之间的字符,匹配控制符 如/\cC/ 匹配control-C**

​       **\d :** 匹配**数字**

​       **\D :     非数字**

​       **\s :         空白字符,包括空格,制表符,换页/行符**

​       **\S :        非空字符**

​       **\w :       单字符(字母\数字或者下划线)**

​       **\W:     非单字字符**

​       **\0 :        NULL**




**注：a. Math.max.apply(null,arr)求数组的最小值,没有对象调用该方法,所以第一项是null , apply将一个数组转换为参数列表,传递到Math.max() .根据apply的这个特点,还可以在数组a后面追加数组b,Array.prototype.push.apply(a,b);**

**b. apply(obj,arr)** **第二个参数数组中形参顺序必须与Function中的形参顺序一致**

**c. call(obj,param1,param2,...)**

**d. bind(O, a, b,c****…) 函数A调用bind方法,返回新函数B, 函数B执行时, 使用函数A, 但this指向变成了O; 如果new B()构造函数依旧是A, 而且O不会起作用.**

# 第6章 面向对象的程序设计

## 6.1 创建对象

(1) 工厂模式

​       函数封装（创建空对象obj，给obj定义属性和方法，返回obj）。

​       优点：解决了创建多个相似对象的问题；缺点：constructor属性指向Object，无法识别对象的类型。

(2) 构造函数模式

​       构造函数（没有显式创建对象，属性、方法赋给this对象，没有return）

​       调用构造函数过程（创建一个新对象，利用this将作用域赋给新对象，指向构造函数代码【添加属性】，返回新对象）。

​       优点：constructor属性指向构造函数。缺点：对象的属性方法在实例化过程中都要重复创建，造成内存浪费。

(3) 原型模式

​       每个函数有prototype属性(对象)，prototype属性有一个constructor属性指向函数。将属性和方法写在Obj.prototype上。     

​       每个对象内部都有一个特殊的指针指向它的构造函数的原型对象，__proto__ [[prototype]]。

​       访问设置规则：解释器在查找属性方法会一层一层往上找到原型，解释器在设置属性方法时，如果当前对象中没有就直接在当前对象上创建（造成同名屏蔽）。

​       方法：Obj.prototype.isPrototypeOf(obj1) 检测对象是不是实例的原型对象。

​                hasOwnProperty(prop) 判断实例中是否存在某属性。 

​             Object.getPrototypeOf(obj1) 返回实例对象的原型。

​       枚举：in判断是否存在某属性，for-in枚举所有可枚举属性；for-in加hasOwnProperty()判断得到实例中的所有可枚举属性。ES5中，Object.keys()相当于for-in，Object.getOwnPropertyNames()枚举实例属性。

​       问题：资源共享。

(4) **组合使用构造函数模式和原型模式**

​       **一般，将属性写到构造函数里，将方法写到原型里。**

(5) 动态原型模式

在构造函数模式上，增加了原型方法冬天添加，通过判断将原型方法是否存在决定是否添加该方法到构造函数里。

(6) 寄生构造函数模式

​       对工程模式使用new。

(7) 稳妥构造函数模式

​       不使用new和this，没有公共属性。

**注：a. this的四种指向，函数调用this指向全局作用域/window，作为对象的属性方法调用指向对象，作为构造函数调用指向构造函数创建的新对象，强制指向某对象（call/apply）。**

   **b. Object****对象本身的属性和方法都是不可枚举的，constructor在ES3下可枚举ES5下不可枚举。**

## 6.2 继承

(1)  原型链继承

子类继承父类的实例，B.prototype = new A()。

优点：书写简单；可以在子类中动态增加属性和方法，不会影响父类。

缺点：子类增加属性方法不能使用字面量添加新方法；无法实现多继承；属性共享；无法传递参数。

(2) 借用构造函数

​       在子构造函数内部调用父构造函数，function B() { A.call(this) }  也可以使用apply。

​       优点：可实现多继承；不共享；可以传参。

​       缺点：创建的实例只是子类的实例，不是父类的实例；只能继承父类构造函数的属性方法，不能继承父类原型上的属性和方法；无法实现函数复用。

(3) 组合继承（伪经典继承）

​       function B() {A.apply(this)};

​       B.prototype = new A()；

​       B.prototype.constructor = B;

​       缺点：父类被调用两次，影响性能；属性在实例和原型中都存在，占用内存。

(4) 原型式继承 （对象继承）    

（继承普通对象【字面量形式的对象】）

​       function(o) { function F() {}; F.prototype = o; return new F(); };

​       ES5新增方法：Object.create()  第一个参数，原型对象。

​       问题：看起来不像继承。

(5) 寄生式继承 （对象继承）

​       与原型式继承一样，只是将过程封装到函数中，更像继承。

​       function createAnother(original) { var clone = object(original); 增加属性方法；return clone;}

(6) 寄生组合继承 （解决了两次调用A）

​       function B() {A.apply(this)};

​       P = object(A);

​       P.constructor = B;

​       B.prototype = P; 

附：浅度克隆（对象中属性都是原始值），for (var prop in A) { B[prop] = A[prop] }

​       深度克隆（对象的属性中有引用值），需要判断，如果是引用值需要再for-in循环一遍。






# 第8章 BOM对象

## 8.1 window对象

​       window对象表示浏览器的一个实例，如果增加frame标签，一个压面就存在多个window对象，每个window对象都会有原生的构造函数，相互独立不相等。

​       属性：top指向最外层的框架；parent指向当前框架的直接上层框架；self指向window。

​       窗口：位置screenLeft/screenTop  screenX/screenY 

​                大小innerWidth/innerHeight  outerWidth/outerHeight

​       方法：window.open() 

​       间歇调用：setTimeout()、 clearTimeout() 参数：函数，间隔时间 

超时调用：setInterval ()、 clearInterval () 参数：函数，间隔时间

​       系统对话框：阻断式，对话框样式由浏览器确定；

alert()、confirm() 【返回true/false】、

promt(文本提示，输入域的默认值)【返回输入值】

**注：a. 新建的window对象有一个opener属性，指向打开它的原始窗口对象。**

**b.** **参数：URL、窗口目标（“topFrame/parentFrame/selfFrame/_blank”默认值 新页面打开）、特性字符串（不一定好使）、是否取代当前浏览器历史记录。**

**c.** **使用window.open()打开的窗口可以使用close()方法关闭，使用resizeTo()、moverTo()调整大小、移动位置。**

**d.** **间歇或超时调用的实质，将要执行的函数拿出来，放到事件队列中，整个代码运行完毕后，再去扫描事件队列，相当与将这部分代码挪到最后。**

**d.** **最短时间，HTML5规定的是10秒，但是目前常用浏览器的频率一般是60Hz（16.7秒）。**

**f. setTimerout()****第一个参数可以传递字符串，但可能导致性能损失。**

**g. setInterval()****可能产生累积效应，可以使用setTimeout(function(){//something; setTimeout(argument.callee,time)}, time)避免。** 

**h.** **如果使用setTimeout()或者setInterval ()执行动画卡顿，可以使用require animate。**

## 8.2 location对象

既是window对象的属性，又是document对象的属性。

属性：（设置或读取与URL相关的东西）（可写）

hash 返回URL中#后面的内容，常用语单页应用

href 返回完整的URL

search 返回URL的查询字符串，以问号开头

​       方法：assign() 跳转页面并生成一条新的历史记录

​              replace() 跳转页面不生成历史记录

​              reload() 刷新页面，传true表示不缓存从服务器刷新。

## 8.3 history对象

​       history.go(n)  n可正可负，前进或后退多少页；

​       history.back()/forward() 后退/前进一页

​       history.length 历史记录数量

## 8.4 其他

​       navigator对象 nabigator.userAgent浏览器的用户代理字符串

​       screen对象 用处较小

# 第10章 DOM对象

## 10.1 节点层次

​       Node类型，包括12种节点类型。

​       属性：nodeType/ nodeName/ nodeValue

​                childNodes/ parentNode/previousSibling/ nextSibling

​                firstChild/ lastChild

​                ownerDocument 指向表示整个文档的文档节点

​       方法：hasChildNodes()  返回布尔值

​                appendChild() 在当前节点的子节点最后插入子节点

​                insertBefore(插入节点，参照节点)

​                removeChild(删除节点)

​                replaceChild(插入节点，替换节点) 

​                clone() 克隆 一个参数，默认值false，设置为true表示深度克隆

​                normalize() 处理文本节点，删除空文本节点，合并相邻文本节点

(1)   Document类型

nodeType/ nodeName/ nodeValue 9/ “#document”/ null

属性：documentElement àhtml根节点

​         body/title à body节点/title标题

​         domain à 域名  只能从低级域名向高级域名修改

​         referrer à 取得前一个页面的URL

(2)   Element类型 

nodeType/ nodeName/ nodeValue 1/ “元素大写标签名”/ null

属性：id 唯一标识符

​         title 元素附加说明信息

​         dir 语言方向，“ltr”从左往右（默认值），“rtl”从右往左

​         className 与元素的class对应

获取节点：document.getElementById(‘ ’)

​                document.getElmentsByName(‘ ‘)

​                document.getElementsByTagsName(‘ ’)

​                document.getElementsByClassName(‘ ’)

​                document.querySelector(CSS选择符) 返回匹配的第一个元素

​                document.querySelectorAll(CSS选择符) 返回匹配的所有元素 

创建节点：document.createElement(‘’) 传递标签名或片段

节点标准特性：HTML元素自己特有的属性，如果img的src特性、a的href等，可以使用点方法读取设置。

节点非标准特性：（可用于标准/非标准特性，获得的都是字符串类型）

​        getAttribute() setAttribute() removeAttribute()  传入“属性名”

​        设置自定义特性，可能会造成HTML结构不合法。

HTML5中增加了dataset属性使合法化，dataset对应的是对象，转换成html是data-……；data.firstName对应HTML中的data-first-name；实时双向结构。

​       attribute属性：获得所有的属性，element.attribute 获得一个伪数组。

(3)   Text类型 

nodeType/ nodeName/ nodeValue 3/ “#text”/ 包含的文本（也可以用value访问）

方法：appendData(text);

​         deleteData(offset, count)

​         insertData(offset, text)

​         replaceData(offset, count, text)

​         splitText(offset)  从指定位置才分成两个文本节点

​         substringData(offset, count) 提取从offset开始到offset+count为止出的字符串

创建：document.createTextNode()

(4)   DocumentFragment类型

创建：document.createDocumentFragment() 

可以使用文档片段，将需要插入的内容打包一起插入到指定元素中，提升性能。由于目前浏览器的重绘机制修改，因此实际上这种方法对性能的提升效果不明显，在IE可能没有效果。

**注：a. Node类型的属性，如果没有值，则返回null。**

**b.** **节点特性：特性名一般都用小写；label标签的for属性，for在JS中时关键字，因此JS中在for前加html，即htmlFor；获取的节点特性大部分都是String类型，可能也有Number、Boolern、Function类型；行间样式style可在JS中获取得到演示样式对象；属性API只能获取或设置，设置成功后不能删除。**

## 10.2 动态加载JS脚本

（1）使用场景

场景1：使用到某个JS，但不确定这个JS是否需要在当前的页面上执行。（如果直接插到页面会增加页面体积，影响下载和执行的速度）。 优化：当用户执行某一项操作时动态插入JS。

场景2：不确定用户加载那种JS，需要进行判断，通过判断条件让不同的JS插入到页面。

（2）实现

方式1：step1创建script标签，step2设置type属性，step3设置src属性，step4将script标签插入文档；

方式2：step1/2/4相同，将JS代码以文本节点的形式插入script标签；

（问题：IE将script视为特殊元素，不允许DOM访问的子节点）

方式3：step1/2/4相同，将JS代码转换为字符串赋值给script标签的text属性；

（问题：safari3.0之前的版本不支持text属性）

**方式2和3：兼容性写法try{***sript.appendChild(document.createTextNode(code)***}catch(ex){***script.text=code***}**

**方式2、3存在的其他问题：将文本传入script标签，JS解释器执行时相当于调用了eval函数，编译模式由快速编译模式转为安全编译模式，性能降低。另外try catch会破话作用域。**

方式4：jQuery，$.getScript( 地址，回调函数）；

方式5：AJAX，请求JS文件，获得字符串JS代码，再使用第3中方式去插入；

方式6：（目前还未实现）使用import语句，动态导入JS文件。

**方式1、5、6是异步加载，需要发送请求。**

**方式2、3是同步加载，插入后会在全局作用域中立即执行。**

（3）判断动态脚本是否加载完成

script的两个属性：js.onload(IE不支持)和js.onreadystatechange(IE支持，跟踪js.readystate的变化loaded/complete)

（4）加载与阻塞

动态插入JS：加载过程不会阻塞页面，执行过程会阻塞。

(为什么？因为直接将JS插入页面中，不确定后面会发生什么，所以浏览器会等脚本加载运行完成后继续页面的其他行为；而动态加载JS页面文件时，浏览器对页面的渲染已经完成，所以下载不会阻塞页面，而当执行时，浏览器会将JS文件插入事件队列当中。

**注：a.判断不是IE，微软提出了一种奇特的写法 !/\*@cc_on!@\*/0** 

**b.readyState****的五种状态，uninitialized未初始化(还没有调用send()方法)；**

**loading****载入 (已调用send()方法，正在发送请求）；** 

**loaded****载入完成 (send()方法执行完成，已经接受到全部响应内容)；**

**interactive****交互 (在在解析响应内容)；**

**complete****完成 (响应内容解析完成，可在客户端调用)。**

 

## 10.3 动态加载CSS样式

（1）使用场景

网页换肤。

（2）实现

方式1：创建link标签，设置ref和type属性，设置href属性，将link标签插入head中。

方式2：创建style标签，设置type属性，将css代码以文本节点的形式插入style标签，将style标签插入head中。

方式2：前两步相同，第三步将css代码以字符串的形式赋值给style标签的text属性,将style标签插入head中。

（3）与动态加载脚本的不同

i. 动态加载样式，可能用到两个标签，style或link；而动态加载脚本，只用到一个标签script；

ii. 考虑到兼容性，最好将link或style插入head标签中；而script标签可以插入到页面的任何位置；

iii. 动态插入的CSS，删掉对应的样式就没了；动态插入的JS，执行完后可以删掉，不会造成影响；

iv. 修改link标签的href属性，就可以修改样式；而修改script标签的src属性等同于无效。

（5）判断动态样式是否加载完成 （极少出现这样的需求）

link标签也有onload和js.onreadystatechange(IE），可以想判断脚本那样去判断

**注：a.浏览器对JS的解析是依靠JS解释器，对CSS的解析是依靠渲染器，渲染器是实时更新的。**

**b.script****标签,修改src属性等同于无效，有的浏览器会下载文件不执行，有的不会下载。**

**c.script****标签的src属性可以插入多种格式的文件，如php/jsp等，可在这些动态的php/jsp文件，设定根据时间的不同或传入的cookie不同，返回不同的js字符串，实现动态加载脚本。**

## 10.4 动态和静态合集

（1）NodeList与HTMLCollection

相同点

i.都是伪数组

ii.都有item方法，获取每个索引对应的值

iii.都是动态合集 （动态合集还有一个是NameNodeMap属性合集）

不同点：

i.NodeList可包含12种类型的节点，HTMLCollection只能包含元素节点

（2）动态合集

动态性：文档结构发生变化式，会更新。使用原生JS获取返回的是NodeList、HTMLCollection、NameNodeMap的实例，使用jQuery获取返回的是jQuery的实例，不具有动态性。

问题：每次访问动态合集，都会运行一次基于文档的查询，开销较大，可考虑将从动态合集中取得的值缓存起来。

**动态合集是浏览器预先通过DOM树缓存起来的，如果想获得一个DOM节点，浏览器会通过缓存，直接在缓存内注册并创建变量返回。**

（4）静态合集

使用querySelector（All），返回的NodeList是静态合集。

**querySelector****（All）传入的字符串是CSS选择器，浏览器需要解析字符串，判断它是CSS选择器，分析并创建选择器结构之后，浏览器通过整个DOM树创建一个静态文件（DOM树快照），在静态文件上去与CSS选择器逐一比对，一致就放到合集里，直到将整个静态文件比对完成，将合集以快照形式返回。比动态合集慢约100倍。**

**注：a.获取元素：使用方法（getElemrntBy...或querySelect）获取，可能返回NodeList或HTMLCollection，不同浏览器不一样；使用属性（如document.images/all/forms），返回的都是NodeList。在IE中返回的HTMLCollection不能通过Array.prototype.slice.call(arraylike,start)，因为因为ie下的dom对象是以com对象的形式实现的，js对象与com对象不能进行转换。**

**b.****获取子节点：使用childNodes属性返回的是NodeList(包括换行、注释等）；使用childNodes属性返回的是HTMLCollection**

**c.NameNodeMap****获取方式，利用DOM节点的attributes属性 ele.attributes**

# 第11章 DOM扩展

## 11.1 选择符API和元素遍历

（1）选择符API：querySelector() 和 querySelectorAll()    matchesSelector（）使用较少，不同浏览器不一样

（2）元素遍历：childElementCount/ firstElementChild/ lastElementChild/ previousElementSibling/ nextElementSibling

## 11.2 class和焦点管理 

（1）HTML5关于类的扩充 （不兼容IE9及以下）

getElementsByClassName() 可以传入多个类名

classList属性：是新集合类型DOMTokenList的实例（伪数组对象）

方法，add( ) / remove( ) / toggle( ) / contains( ) 都只能传递一个class类名

（2）焦点管理

H5为document新增了activeElement属性，该属性始终会应用DOM中当前获得焦点的元素。

文档加载期间，document.activeElement的值null；文档刚刚加载完毕，指向body元素。

常见的获得焦点的方式：页面加载、用户输入(点击/键盘【如tab键】/触摸等)、focus()方法

hasFocus()方法：确定文档是否获得焦点，该方法是基于网页的(只能使用document调用) 

用处：如果用户点击网页，返回true；点击地址栏或控制台，返回false。通过判断这个值，可以针对设计一些提升用户体验的操作。

焦点管理的意义：i.让HTML代码开发更加标准化；

ii.针对残障人士的第三方网页浏览辅助工具，是按照标准的焦点管理去一步步解读网页的，良好的焦点管理可提高可读性。

iii.通过判断焦点配合产品设计，提高用户体验

**注：a.如果想实现添加/删除多个类名，可重写add/remove方法，将字符串以空格分隔放到数组中，循环遍历执行add/remove**

**b.****当添加多个class时，浏览器只会重新渲染一次，因为JS解释器和CSS渲染器不可同时工作，会等JS解释执行完重新渲染一次页面。**

**c.****判断document.activeElement的值是否为null,确定文档是否加载完成。（类似于window.onload）**

**d.JS****中，所有的时间都是基于浏览器的，只要浏览器处于激活的状态，对应事件就会触发。当点击桌面，浏览器未激活，鼠标移入等事件就不会触发。**

## 11.3 字符串操作DOM节点 

（1）innerHTML和outerHTML属性

读：ele.outerHTML / innerHTML，返回与调用元素的(自身及)所有子节点对应的HTML标记（字符串）;

写：ele.outerHTML / innerHTML = str，根据字符串创建DOM树，将其覆盖/插入调用元素。

（2）innerText和outerText属性

读：完全相同，读取子文档树中的所有文本。

写：innerText，插入调用元素中；outerText，将调用元素替换为文本节点。

（3）innerText和textContent

如果浏览器同时具备这两个属性，优先使用textContent。

区别：i.innerText依赖于页面的展示，textContent依赖于代码的内容；

ii.textContent返回的文本内容包括script和style标签中的文本内容；

iii.使用innerText插入文本会触发回流操作，会从当前节点一层一层回退至根节点，重新渲染整                    个页面；而textContent不一定会触发回流/重绘（重新渲染某个节点及其子节点），对浏览器                    的性能不一定会产生影响；

vi.设置值时，innerText那个值会被格式化，而textContent不会（可使用CSS的white-space:pre                 保持结果一致）

v.innerText会将一个或多个空标签当成一个换行处理（显示成啥样就是啥样），textContent是                代码写成啥样就啥样。

vi.在调用元素存在子节点，子节点还有子节点这种嵌套时，两种方法返回的结果差别很大，不建                  议使用。

vii.也可以使用文本节点的nodeValue的方式获取文本内容，结果与textContent相似。

如果对自闭合标签使用innerText和textContent，会将自闭合标签变成闭合元素，文本内容不会展示出来；如果对表单如input设置这两个属性，可能会影响input的value，或者报错。

**注：a.在考虑兼容性时，可参考JQ早期的源码（1.7等），其中兼容性考虑很全面，最新的JQ已经不兼容老的IE了。**

**b.innerHTML/outerHTML****使用注意事项：**

**读时，不同浏览器返回的结果不一样，主要表现在大小写、空格、缩进；**

**写时，设置的值和结果可能会不一样，主要是特殊符号转换及自动纠错（闭合标签）；**

**使用innerHTML和outerHTML插入script和style，IE8及更早的版本无效；**

**table****标签也不支持innerHTML和outerHTML。**

**c.innerText/outerText****属性使用注意事项：**

**写模式下，会经历一次字符转换；**

**常用innerText属性；**

**不是H5标准属性，由浏览器开发商实现；**

**FireFox****不支持innerText属性，支持textContent属性，兼容性写法需先判断是否有textContent属性。**

## 11.4 JS的滚动操作

滚动操作都是有浏览器厂商设定的，H5抽取了其中一些作为规范。

（1）scrollIntoView()

当元素调用该方法，传入true或不传参数，元素会与视口顶对齐；传入false，底对齐。

该方法是基于DOM的文档流的（设为display的元素无效）；

该方法对水平滚动也有效；

（2）scrollIntoViewIfNeeded()  仅chrome有效

与scrollIntoView()的不同之处时，如果元素在视口中，该方法不会做什么。

（3）定点滚动 

scrollTo()，滚动到某个坐标；

scrollBy()，往某个方向滚动多少像素

使用window调用。

scrollTop（可读可写）页面不可见区域的高度，兼容性写法 （scrollLeft类似）

document.documentElement.scrollTop|| window.pageYOffset || document.body.scrollTop

scrollHeight/scrollWidth：内容区域，不包括滚动条的空间，返回的包括padding和溢出部分，不同浏览器会差几个像素。

应用场景：滚动加载、固定定位。高性能的滚动可能会用到节流、防抖函数。（lozad框架）

**注：a.scrollIntoView()无动画，Firefox对是否平滑滚动做了一些拓展（传递对象作为参数，对象有两个属性，behavior:             auto/instant/smooth; block: start/end）**

## 11.5 脚本化CSS（行内样式）

（1）基本要点

通过DOM节点的style属性，获取到的style对象，是CSSStyleDeclaration的实例，是伪数组对象，只包含行内样式（内联样式，通过HTML的style特性指定的）信息，不包含外部样式表和内部样式表。

JS书写CSS属性名，连词要改成驼峰式，保留字要加css前缀（cssFloat）；

所有样式都是可读可写的，修改后自动更新外观；

将样式设置成无效值，不报错，会忽略；

标准模式下度量值必须指定单位；

如果用JS去读取没有设置过的行内样式，读取得到的是空字符串；

设置的颜色值可能与读取到的不同（格式不同）。

（2）style对象的属性和方法（方法IE8都不支持）

cssText：返回style特性中的CSS代码，IE8返回的属性名称都是大写。IE8以下不支持

length：行内样式个数。IE8下不支持

parentRule：表示CSS信息的cssRule对象。 IE8下不支持

getPropertyPriority(propertyName)：设置!important返回important,否则返回空字符串

getPropertyValue(propertyName)：等同于ele.style.propertyName

item(index)

removeProperty(propertyName)

**setProperty(propertyName,value,priority)**

getPropertyCSSValue(propertyName)：返回包含给定属性值的CSSValue对象（对象有两个属性，cssText / cssValueType【0继承值、1基本值、2值列表、3自定义值】） 不同浏览器返回结果不同，少用

（3）计算样式（只读不可写）（不百分百准确）（不输出复合属性）

getComputedStyle(ele，伪元素字符串/null) 获取该元素的所有计算样式 （获取的度量值单位都是px）

三种书写方式：window.getComputedStyle()、getComputedStyle()、document.defaultView()

IE及IE8，获得计算样式，ele.currentStyle （获取宽度可能是百分值）

复合属性，不同浏览器返回的结果不同。

（4）脚本化类

ele.className

可能的问题：赋值必须是字符串，如果不是字符串转化为字符串。

## 11.6 操作外部/内部样式表

​       五层结构：

​              styleSheets文档的所有样式表，伪数组对象 <= document.styleSheets

​              CSSStyleSheet对象 一个具体的样式表 <= document.styleSheets[index]

​              CSSRules 样式表中的每一条规则，伪数组对象 <= document.styleSheets[index].cssRules/rules

​              CSSStyleRule 当前具体的一条具体规则 <= rules[index]

​              style CSSStyleDeclaration对象，通过它设置和取得规则中的特定样式 rule.style.propertyName

（1）CSSStyleSheet对象

​       获取：document.styleSheets应用于文档的所有样式表，用方括号/item()方法访问每个样式表。
​                 通过link/style元素，通过element.sheet || element.styleshee获取

​       属性：CSSRules，样式表中的样式规则的集合（伪数组）；IE不支持，使用rules属性

​                disabled，样式表是否被禁用

​       方法：insertRule(rule,index)，向现有样式表添加新规则；IE使用addRule(规则名，规则值，索引)  

​                deleterRule(index)，删除一条规则；IE使用removeRule()  都没有返回值

**插入删除多项规则/插入位置大于规则总数/插入规则出现错误/把import插入中间【放在前面】，会报错，最好使用try catch**

（2）CSSStyleRule对象    每一条CSS规则都是详细规则，复合属性会被拆分

​       属性：cssText，返回整条规则对应的文本； 

​                selectorText，返回当前规则的选择符文本；

（3）CSS检测

​       propertyName in style == true

​       typeof style.propertyName == string

## 11.7 元素大小

（1）偏移量 只读属性

​       offsetHeight / offsetWidth：元素高度/宽度，含边框；

​       offsetLeft：元素的左外边框至父元素的左内边框之间的像素值；相当于getElementLeft()

​       offsetTop：元素的上外边框至父元素的上内边框之间的像素值；相当于getElementTop()

​       可利用元素的offsetParent属性逐级向向回溯，确定元素在页面中的偏移量

​       用法：ele.offsetXXX

（2）客户区大小 只读属性

​       clientHeight / clientWidth：内容+内边距高度/宽度；

​       确定浏览器视口大小：

IE7之前，document.body.clientHeight/clientWidth (混杂模式document.compatMode ==”BackCompat”)；其他document.documentElement. clientHeight/clientWidth

（3）滚动大小

​       scrollHeight / scrollWidth：在没有滚动条情况下元素(内容+内边距)总高/宽

​       scrollLeft：被隐藏在内容区左侧的像素值，可设置改变元素滚动位置；

​       scrollTop：被隐藏在内容区上方的像素值，可设置改变元素滚动位置。

​       确定文档总高度：由于不同浏览器不一致，所有document.documentElement/document.body 取scrollHeight和clientHeight的大值

（4）getBoundingClientRect()

​       返回一个矩形对象，包含四个属性：top/bottom/left/right, 给出了元素在页面中相对视口的位置

​       right-left = offsetWidth; bottom-top = offsetHeight

 






# 第13章 事件

## 13.1 基本操作

（1）基本概念

​       事件：一定与DOM元素、document对象、window对象中的一个有关，浏览器已经预制大量事件。

​       事件类型：用字符串表示，UI事件、鼠标事件、键盘事件、滚轮事件、触摸事件等

​       事件目标：事件发生对象

​       事件处理程序：事件发生时执行的函数

​       事件对象：event，包含所有与事件相关的信息，如导致事件的元素、事件类型、鼠标位置信息等。

​       事件流：从页面接受事件的顺序。

（2）触发事件方式

​       方法1：HTML事件；

​       方法2：属性事件； <= DOM0事件

​       方法3：监听事件；<= DOM2事件

​       element节点支持3种方式，document支持方式2、3，window对象（通过body/iframe实现HTML事件），支持3中方式

​       HTML事件：on+事件名称=“需要执行的js代码”；

​                            不可以直接使用双引号、尖括号、&，需要转义\；

​                            这段JS执行的是全局作用域；

​                            会封装局部变量event事件对象；

​                            this指针指向触发事件的元素

​       HTML事件缺陷：存在时间差(用户点击但JS文件未加载解析完成)；

​                                   全局作用域，不同浏览器中结果可能不一致；

​                                   HTML和JS耦合度高，需求更改时修改复杂；

​                                   开发较少使用，仅适合极小的项目或者自己调试使用。

​       属性事件：获取节点，访问属性，为属性赋值；

会封装局部变量event事件对象；

​                       this指针指向触发事件的元素；

​                       删除事件直接将对应属性设为null即可；

​       属性事件：解决了HTML事件的问题；

​                       一次只能指定一个事件处理程序，再次指定会覆盖。

​       监听事件：addEventListener/removeEventListener(事件名，事件处理程序，boolean/ 对象)

​              第三个参数：

boolean, true表示在事件捕获阶段执行；false表示在事件冒泡阶段执行

​              对象：三个属性，capture，once，prassive，属性值都是true/false

​              passive属性：设为true，表示当前事件程序不会阻止浏览器默认行为，解释器会开两个线性同时

监听JS代码和浏览器的默认行为，可提升性能；

主要针对触摸/滚轮事件；

如果一个节点增加多个同类型事件，都设置了passive为true才有效；

如果一个节点增加多个不同类型事件，只有第一的设置passive为true的有效；

新版chrome不支持click/input等事件的passive优化；

理论上讲，所有cancelable为true的事件，都可以指定passive为true；

​              判断浏览器是否支持passive属性：

​                       支持事件捕获和事件冒泡

​                       this指向触发事件的元素

（3）事件流

​       事件冒泡：事件开始时由最具体的元素接受，然后逐级向上传播到较为不具体的节点（document）。

​                     HTML和属性事件，都是按事件冒泡处理。

​       事件捕获：事件开始由不太具体的节点（window对象）接收，最具体的节点最后接收到事件。

​                     移动设备的触摸事件等，按事件捕获处理。

​       DOM事件流：三个阶段，事件捕获、处于目标、事件冒泡阶段。

**注：a.IE在意识到属性事件的问题后，增加了attachEvent/detachEvent(事件名称，事件处理函数)，函数的this指向window; 执行顺序和书写顺序相反，按事件冒泡处理。**

## 13.2 事件优先级和事件对象

（1）事件优先级

属性和HTML事件同时存在时，属性事件会覆盖HTML事件。

事件发生时，首先由window对象向下捕获，捕获过程中，先触发true监听事件，在目标元素中及冒泡阶段，执行顺序是按照书写顺序依次执行的。

CSS的设置不会影响事件传播，事件的绑定是有浏览器实现的，即时看起来内层元素看起来在外层元素之外，但点击内层元素，依然会传递到外层div。

（2）事件对象

​       IE的event绑定在window上。 兼容性写法：event = event || window.event

​       属性：bubbles，事件是否为冒泡；

​                cancelable，是否可以取消事件的默认行为；

​                currentTarget，事件处理程序当前正在处理事件的那个元素；与事件处理程序的this一致

​                target，事件的目标；

​                eventPhase，调用事件处理程序的阶段：1是捕获，2是目标，3是冒泡；

​                trusted，为true表示事件是浏览器生成的，为false表示自定义事件；

​                defaultPrevented，为true表示已经调用了preventDefault()；

​                type，被触发的事件的类型；

​                detail，与事件相关的细节信息。

​       方法：preventDefault()，取消事件的默认行为；也可以通过在事件处理程序最后书写return false实现；

​                stopPropagation()，取消事件的进一步捕获或冒泡；

​                stopImmediatePropagation()，取消事件的进一步捕获或冒泡，同时阻止该节点后面的事件处理程序调用。

​                     **阻止事件的默认行为和阻止事件的传播互不影响。**

## 13.3 鼠标事件

（1）具体分类

click：

mousedown：

mouseup：

dbclick：

contextMenu：

mouseover：在子节点之间移动也会触发；事件冒泡。

mouseout：鼠标离开子节点也会触发；事件冒泡。

mouseenter：移入事件节点里，触发；但如果事件节点存在子节点，移动到子节点不会触发

mouseleave：鼠标移到事件节点外触发；

mousewheel：鼠标滚轮事件，冒泡。event.wheelDelta 上+120整数倍，下-120整数倍。Firefox支持DOMMouseScroll的类似事件，event.detail 上3下-3。H5，可直接用wheel事件。

（滚轮事件的兼容可以参考JQ和MDN相关内容）

完整的双击事件：mousedown、mouseup、click、mousedown、mouseup、click、dbclick

（2）相关元素

​       event的relatedTarget属性，指向事件相关元素。

这个属性只对focus/focusin/mouseover/mouseout事件有值，对其他的事件是null。

使用relatedTarget属性，执行mouseover判断相关元素是不是子节点可以模拟mouseenter。

（3）属性

​       clientX/Y，事件发生时鼠标在视口中的相对位置；

​       screenX/Y，相对于整个屏幕的坐标信息；

​       pageX/Y，在页面中的位置；

​       offsetX/Y，以content为参考点，鼠标的相对目标元素边界的位置。

（4）修改键

​       event的shiftKey、ctrlKey、altKey、metaKey四个属性，返回true表示鼠标事件的同时按下了这些键。

（5）鼠标按键

​       event.button的值为0没按，1按下主键，2按下次键，3同时按下主次键。

# 最后阶段：

## 技术实力、沟通能力、逻辑思维能力、心理素质、气质气场

## 知之为知之，不知为不知，是知也

**（1）网上收集前端面试题（“前端工程师面试题”、“大厂前端面试题”等等），花15天的时间去完成这些面试题，想清楚里面的每个细节和原理。bingo**

**（2）回顾所有做过的面试题，给自己出一个前面工程师面试题，如果能够全部完成，bingo**

**（3）制作一份简历，并将其投递到你不想去的那90家公司，每一家收到面试通知的都必须精心准备，注意不懂问题的收集和梳理。bingo**

**（4）重新制作一份简历，投递到想去的那10家公司。bingo**

 



