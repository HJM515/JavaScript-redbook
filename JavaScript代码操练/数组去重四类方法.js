//方法1 双层循环(效率低）
//1.1 外层循环每一项，内层循环比较值 如果有相同的值跳过，否则push；使用continue label跳出内层循环执行外循环
Array.prototype.unique = function () {
    var arr = this;
    var len = arr.length;
    var arrU = [this[0]];
    compare:
        for (i = 0; i < len; i++) {
            for (j = 0; j < arrU.length; j++) {
                if (arrU[j] === arr[i]) {
                    continue compare;
                } 
            }
            arrU.push(arr[i]);
        }
    return arrU;
};
// arr = [1, 2, 5, 1, 1, 4, 8, 0, 4, 2, 10, 23, 22, 23];
// console.log(arr.unique());

//1.2 外层循环每一项，内层循环比较值 如果有相同的值跳过，否则push ；创建标志位判断是否push
Array.prototype.unique = function () {
    var arr = this;
    var len = arr.length;
    var arrU = [this[0]];
    for (i = 0; i < len; i++) {
        var repeat = false;
        for (j = 0; j < arrU.length; j++) {
            if (arrU[j] === arr[i]) {
                repeat = true;
                break;
            }
        }
        if (!repeat == true) {
            arrU.push(arr[i]);
        }
    }
    return arrU;
};
// arr = [1, 2, 5, 1, 1, 4, 8, 0, 4, 2, 10, 23, 22, 23];
// console.log(arr.unique());

//1.3 将取出项与原数组后面的各项比较，如果后面有跳过，如果后面没有push
Array.prototype.unique = function () {
    var arr = this;
    var len = arr.length;
    var arrU = [];
    for(var i = 0; i < len; i++) {
        for(var j = i + 1; j < len; j++){
            if(arr[i] === arr[j]){
                j = ++i;
            }
        }
        arrU.push(arr[i]);
    }
    return arrU;
};
// arr = [1, 2, 5, 1, 1, 4, 8, 0, 4, 2, 10, 23, 22, 23];
// console.log(arr.unique());

// 1.4 将原来数组中重复项删除
Array.prototype.unique = function () {
    var arr = this;
    var len = arr.length;
    for(var i = 0; i < len; i++) {
        for(var j = i + 1; j < len; j++){
            if(arr[i] === arr[j]){
                arr.splice(j,1);
                len--;
                j--; 
                console.log(arr);
            }
        };

    }
    return arr;
};
// arr = [1, 2, 5, 1, 1, 4, 8, 0, 4, 2, 10, 23, 22, 23];
// console.log(arr.unique());

//1.5 先排序，逐项比较重复项删除
Array.prototype.unique = function () {
    var arr = this;
    var len = arr.length;
    arr.sort(compare);
    function compare(a,b) {
        return a-b;
    };
    for(var i = 0; i < len; i++) {
        if(arr[i] === arr[i+1]) {
            arr.splice(i,1);
            i--;
            len--;
            // console.log(arr);
        }
    }
    return arr;
};
// arr = [1,1,1,1];
// console.log(arr.unique());


//方法2. 利用对象的属性名不能重复的特点
Array.prototype.unique = function () {
    var arr = this;
    var len = arr.length;
    var obj = {};
    var arrU = [];
    for(var i = 0; i < len; i++) {
       if(!obj[arr[i]]) {   //如果obj中找不到obj[arr[i]],证明没有重复，增加该属性
           obj[arr[i]] = true;
            arrU.push(arr[i]);
       }
    }
    return arrU;
};
// arr = [1, 2, 5, 1, 1, 4, 8, 0, 4, 2, 10, 23, 22, 23];
// console.log(arr.unique());


//方法3 利用ES5中的indexOf
//3.1 利用forEach
Array.prototype.unique = function () {
    var arr = this;
    var arrU = [];
    arr.forEach(function(v, i, array){
        var bool = arr.indexOf(v,i+1);
        if(bool === -1) {
            arrU.push(arr[i]);
        }
    })
    return arrU;
};
// arr = [1, 2, 5, 1, 1, 4, 8, 0, 4, 2, 10, 23, 22, 23];
// console.log(arr.unique());

//3.2利用filter
Array.prototype.unique = function () {
  var _this = this;
  var res = _this.filter(function(v, i, array){
      return _this.indexOf(v) === i;
  });
  return res;
};
arr = [1, 2, 5, 1, 1, 4, 8, 0, 4, 2, 10, 23, 22, 23];
console.log(arr.unique());

//3.3利用map  其实我不知道怎么用map做，呜呜
Array.prototype.unique = function () {
    var arr = this;
    var len = arr.length;
    var arrU = [];
    var arr1 = arr.map(function(v, i, array){
        return arr.indexOf(v) === i;
    });
    console.log(arr1);
    for(var i = 0; i < len; i++){
        if(arr1[i]) {
            arrU.push(arr[i]);
        }
    }
    return arrU;
};
// arr = [1, 2, 5, 1, 1, 4, 8, 0, 4, 2, 10, 23, 22, 23];
// console.log(arr.unique());

//方法4 ES6  Set对象类型于数组，每项唯一
//4.1 利用Array.from方法将Set结构转化为数组
// arr = [1, 2, 5, 1, 1, 4, 8, 0, 4, 2, 10, 23, 22, 23];
arrU = Array.from(new Set(arr));
// console.log(arrU);

//4.2 拓展运算符……
arr = [1, 2, 5, 1, 1, 4, 8, 0, 4, 2, 10, 23, 22, 23];
arrU = [...new Set(arr)];
console.log(arrU);