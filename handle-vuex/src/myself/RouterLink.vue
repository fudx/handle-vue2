<template>
    <div>
        <a href="javascript:void(0)" @click="jump">
            <slot></slot>
        </a>
    </div>
</template>
<script>
export default {
    props:['to'],
    methods:{
        jump(){
            this._RootRouter._router.push(this.to)
        }
    }
}
</script>