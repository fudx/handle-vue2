import Base from "./base";

export default class Hash  extends Base{
    constructor(vm){
        super(vm)
        this.listeners()
    }
    listeners(){
        window.addEventListener('hashchange',()=>{
            this.transitionsTo(this.getLocation())
        })
    }
    getLocation(){
        const path = location.hash.slice(1)
        return path
    }
}