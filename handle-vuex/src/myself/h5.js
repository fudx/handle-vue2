import Base from "./base";

export default class H5History extends Base {
    constructor(options){
        super(options)
        this.listeners()
    }
    listeners(){
        window.addEventListener('popstate',()=>{
            this.transitionsTo(this.getLocation())
        })
    }
    getLocation(){
        const path = location.pathname
        return path
    }
}
