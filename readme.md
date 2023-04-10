### vuex 总结
### Vue.use()
其实判断当前对象是否有install 方法 如果执行执行install方法
有一个数组，做缓存
或者判断当前函数的是否挂在了install 方法也是执行他 第一个参数是vue

### vuex
响应式步骤用的是new vue()
getters 是一个对象函数，需要改写成对象key 方便取值
commit dispatch 需要绑定this 就是实例 通过方法
