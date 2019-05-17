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