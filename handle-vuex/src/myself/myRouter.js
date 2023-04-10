import Vue from "vue"
import  RouterLink  from "./RouterLink"
import  RouterView  from  './RouterView'
import RouterTable from './RouterTable'
import HashHisory from './hash'
import H5History from "./h5"
class Router {
    constructor($options){
        this.RouterTable = new RouterTable($options.routes)
        this.history = $options.mode == 'hash' ? new HashHisory(this) : new H5History(this) 
        this.mode = $options.mode
    }
    init(app){
        const {history} = this
        history.listen(route => {
            app.__route = route
        })
        history.transitionsTo(history.getLocation())
        app.__route = this.history.current
    }
    push(path){
        if(this.mode === 'hash') {
            location.hash = '#'+ path
        }
        else {
            window.history.pushState({},'',path)
        }
        this.history.transitionsTo(path)
    }
}
Router.install = function (vm) {
    vm.mixin({
        beforeCreate(){
            if(this.$options.router) {
                this._RootRouter = this
                this._router = this.$options.router
                this._router.init(this)
                Vue.util.defineReactive(this,'__route',this._RootRouter._router.history.current)
            }
            else {
                this._RootRouter = this.$parent && this.$parent._RootRouter
            }
        }
    })
}

Vue.component('RouterLink',RouterLink)
Vue.component('RouterView',RouterView)






export default Router