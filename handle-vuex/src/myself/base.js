export default class Base {
    constructor({RouterTable}){
        this.routerTable = RouterTable
    }
    listen(cb){
        this.cb = cb
    }
    transitionsTo(path){
        const componentObj = this.routerTable.match(path)
        this.current = componentObj
        this.cb(this.current)
    }
}