/**
 * 源码实现 功能分析
 * 1.new Promise时，需要传递一个executor执行器，执行器立即执行
 * 2.executor是一个函数，接受两个参数，分别是resolve和reject,它们是两个函数（由JS引擎部署）
 * 3.promise只能从pending到rejected，或者从pending到fulfilled(resolved)
 * 4.promise的状态一旦确认，就不会再改变
 * 5.promise的then方法接受两个参数，一个是promise成功的回调onFulfilled，一个是promise失败的回调onRejected
 * 6.如果调用then时，promise已经成功，则立即执行onFulfilled，并把promise的值作为参数传递进去；如果promise已经失败，则执行onRejected，并把promise失败的原因作为参数传递进去
 * 7.then的参数onRejected和onFulfilled可以缺省
 * 8.promise可以then多次，每次then返回一个promise
 * 9.如果then返回一个结果，就被这个结果作为参数传递给下一个then的成功的回调onFulfilled;如果then抛出异常，就被这个异常作为参数传递给下一个then的失败的回调onRejected
 * 10.如果then返回一个promise，就要等到这个promise执行完成，如果promise成功就进入下一个then成功，反之进入下一个then失败
 */
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
function Promise(executor) {
  if(typeof executor !== 'function') {
    throw new Error('Promise must accept a function as a parameter!')
  }
  let self = this;
  self.status = PENDING;
  try{
    executor(resolve,reject)
  }catch(e){
    reject(e)
  }
  self.onFulfilled = []; //存储成功的回调
  self.onRejected = []; //存储失败的回调
  //resolve函数，作用: 将Promise的状态从pending变成resolved,在异步操作成功时调用，并将异步操作的结果作为参数传递出去
  function resolve(value) {
    if(self.status === PENDING) {
      self.status = FULFILLED;
      self.value = value;
      self.onFulfilled.forEach(fn => fn()); //???
    }
  }
  //resolve函数，作用: 将Promise的状态从pending变成rejected,在异步操作失败时调用，并将异步操作报出的错误作为参数传递出去
  function reject(reason) {
    if(self.status === PENDING) {
      self.status = REJECTED;
      self.reason = reason;
      self.onRejected.forEach(fn => fn()); //???
    }
  }
}

Promise.prototype.then = function(onFulfilled,onRejected) {
  //如果onFulfilled不是函数，promise2以promise1的值fulfilled ...
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
  onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason};
  let self = this;
  let promise2 = new Promise((resolve,reject) => {
    if(self.status === FULFILLED) {
      //使用setTimeOut模拟异步
      setTimeout(() => {
        try{
          let x = onFulfilled(self.value);
          resolvePromise(promise2, x, resolve, reject);
        }catch(e) {
          reject(e)
        }
      })
    }else if(self.status === REJECTED) {
      setTimeout(() => {
        try{
          let x = onRejected(self.reason);
          resolvePromise(promise2, x, resolve, reject);
        }catch(e) {
          reject(e);
        }
      })
    }else if(self.status === PENDING) {
      self.onFulfilled.push(() => {
        setTimeout(() => {
          try{
            let x = onFulfilled(self.value);
            resolvePromise(promise2, x, resolve,reject);
          }catch(e) {
            reject(e)
          }
        })
      });
      self.onRejected.push(() => {
        setTimeout(() => {
          try{
            let x = onRejected(self.reason);
            resolvePromise(promise2, x, resolve,reject);
          }catch(e) {
            reject(e);
          }
        })
      })
    }
  })
  return promise2;
}
function resolvePromise(promise2, x, resolve, reject) {
  // let self = this;
  if(promise2 === x) {
    reject(new TypeError('Chaining cycle'))
  }
  if(x && typeof x === 'object' || typeof x === 'function') {
    //flag确保值执行一次
    let used;
    try{
      let then = x.then;
      if(typeof then === 'function') {
        then.call(x,(y) => {
          if(used) return;
          used = true;
          resolvePromise(promise2, y, resolve, reject);
        }, (r) => {
          if(used) return;
          used = true;
          reject(r);
        })
      }else{
        if(used) return;
        used = true;
        resolve(x);
      }
    }catch(e) {
      if(used) return;
      used = true;
      reject(e);
    }
  }else{
    resolve(x)
  }
}

//http://www.cnblogs.com/zhouyangla/p/10781697.html