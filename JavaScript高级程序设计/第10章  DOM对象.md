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