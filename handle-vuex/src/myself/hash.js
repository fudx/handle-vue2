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
        if(location.hash.includes('#')) {
            return location.hash.slice(1)
        }
        return location.hash || '/'
    }
}