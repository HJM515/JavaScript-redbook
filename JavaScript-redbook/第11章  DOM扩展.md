# 第11章 DOM扩展、DOM2和DOM3

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