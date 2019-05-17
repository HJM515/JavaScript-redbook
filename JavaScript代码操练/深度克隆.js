//5.深拷贝和浅拷贝
//浅拷贝 指向同一地址,修改clone结果会影响原始数据
//深拷贝 复制一份,互不影响

let obj1 = {a:12, b:34, c:{a:12, b:34}}
function clone(value) {
    if(typeof value === 'object') {
        let isArray = {}.toString.call(value) === '[object Array]'
        // 浅拷贝ES5S实现
        // let rs = isArray ? [] : {}
        // for(let i in value) {
        //     rs[i] = value[i]
        // }
        // 浅拷贝ES6实现
        // let rs = isArray ? [...value] : {...value}
        // 深拷贝实现1
        let rs = isArray ? [] : {}
        for(let i in value) {
            rs[i] = clone(value[i])
        }
        return rs
    }else {
        return value
    }
}

//浅拷贝6  ES6中的Object.assign()方法
// var copy = Object.assign({},obj4)
// copy.c.a = 000
// console.log(copy)
// console.log(obj4)
// console.log(copy.g.age)

//深拷贝实现2  适用于后台数据,自己写的对象
JSON.parse(JSON.stringify(obj1))

//深拷贝实现3 +考虑循环引用
// let obj2 = {a:12, b:34, c:{a:12, b:34}}
// obj2.d = obj2
// function clone(value, map=new Map){
//     if(typeof value === 'object') {
//         if(map.get(value)) {
//             return map.get(value)
//         }
//         let isArray = {}.toString.call(value) === '[object Array]'
//         let rs = isArray ? [] : {}
//         map.set(value,rs)
//         for(var i in value) {
//             rs[i] = clone(value[i],map)
//         }
//         return rs
//     }else{
//         return value
//     }
// }
// console.log(clone(obj2))

//深度拷贝实现4 +考虑特殊数据类型
// let obj3 = {a:12, b:34, c:{a:12, b:34}}
// obj3[Symbol('e')] = 'iii'
// function clone(value, map=new Map){
//     if(typeof value === 'object') {
//         if(map.get(value)) {
//             return map.get(value)
//         }
//         let isArray = {}.toString.call(value) === '[object Array]'
//         let rs = isArray ? [] : {}
//         map.set(value,rs)
//         Reflect.ownKeys(isArray ? [...value]:{...value}).forEach(key => {
//             rs[key] = clone(value[key],map)
//         })
//         return rs
//     }else{
//         return value
//     }
// }

//深拷贝实现5 +考虑特殊数据类型如Date,RegExp等 以及原型链上的方法
//结构化克隆算法https://developer.mozilla.org/zh-CN/docs/Web/Guide/API/DOM/The_structured_clone_algorithm
function User() {this.name='wang'}
User.prototype.age=20
let obj4 = {a:12, b:34, c:{a:12, b:34},d:new Date,f:/sdfa/,g:new User,h:function test(){this.time = 12},i:undefined,j:null}
obj4.e = obj4
obj4[Symbol('e')] = 'iii'


function clone(value, map=new Map){
    if(typeof value === 'object' && value !== null) {
        if(map.get(value)) { //如果在map结构中已经存在value，那么直接返回这个值
            return map.get(value)
        }
        let isArray = {}.toString.call(value) === '[object Array]'
        let rs = isArray ? [] : {}
        map.set(value,rs) //将当前value作为map结构的一个key值保存起来
        console.log(map)
        // console.log(value)
        switch(value.constructor) {
            case User:
            case RegExp:
            case Date:
                rs = new value.constructor(value)
                break
            default:
                // Reflect.ownKeys(isArray ? [...value]:{...value}).forEach(key => {
                Reflect.ownKeys(value).forEach(key => {
                    rs[key] = clone(value[key],map)
                })
        }
        return rs
    }else{
        return value
    }
}
// console.log(obj4);
console.log(clone(obj4))
// console.log(clone(obj4).g.age)


// 结构化克隆所不能做到的:
// Error 以及 Function 对象是不能被结构化克隆算法复制的；如果你尝试这样子去做，这会导致抛出 DATA_CLONE_ERR 的异常。
// 企图去克隆 DOM 节点同样会抛出 DATA_CLONE_ERROR 异常。
// 对象的某些特定参数也不会被保留
// RegExp 对象的 lastIndex 字段不会被保留
// 属性描述符，setters 以及 getters（以及其他类似元数据的功能）同样不会被复制。例如，如果一个对象用属性描述符标记为 read-only，它将会被复制为 read-write，因为这是默认的情况下。
// 原形链上的属性也不会被追踪以及复制。
