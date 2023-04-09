let _Vue
class Store{
    constructor(options){
        this.state = new _Vue({
            data: options.state
        })
        this.actions = options.actions
        this.mutations = options.mutations
        const {commit} = this
        let that = this
        this.commit = function boundMutation(type) {
            return commit.call(that,type)
        }
        this.getters = Object.create(null)
        if(Object.keys(options.getters).length) {
            this.handlerGetters(options.getters)
        }
    }
    handlerGetters(getters){
        let that = this
        for(let key in getters) {
            const handler = {
                get(){
                    return getters[key].call(that,that.state)
                }
            }
            Object.defineProperty(this.getters,key,handler)
        }
    }

    commit(type){
        try {
            const fn = this.mutations[type]
            fn.call(this,this.state)
        } catch (error) {
            console.log(error,'error')
        }
      
    }

    dispatch(type) {
        const fn = this.actions[type]
        fn.call(this,this)
    }



}

{/* <p>count:{{this.$store.state.count}}</p>
<p>double:{{this.$store.getters.double}}</p>
<button @click="$store.commit('addCount')">+1</button>
<br>
<br>
<br>
<button @click="$store.dispatch('asyncAddcount',20)">+1</button> */}
// 第二个参数是一个可选对象
function install(Vue) {
    // 保存到全局 _Vue
    _Vue = Vue
    // 全局注册混入 这样在所有的组件都能使用 $store
    _Vue.mixin({
      // beforeCreate vue初始化阶段
      // 在 beforeCreate 这个时候把 $store 挂载到 Vue 上
      beforeCreate() {
        // 判断 Vue 传递的对象是否有 store 需要挂载
        // this.$options  是new Vue() 传递的对象
        if (this.$options.store) {
          // 把 store 挂载到 Vue 原型上
          this.$store = this.$options.store
        }
        else {
         this.$store = this.$parent && this.$parent.$store
        }
      },
    })
  }
export default {
    Store,
    install
}