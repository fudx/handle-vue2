export default class RouterTable {
    constructor(routes){
        this.map = new Map()
        this.routes = routes
        this.init()
    }
    init(){
        for(let i = 0; i < this.routes.length; i++) {
            this.map.set(this.routes[i].path,this.routes[i])
        }
    }
    match(path) {
        return this.map.get(path)
    }
}