<script>
export default {
    render(_){
        const {component} = this._RootRouter.__route
        return _(component)
    }
}
</script>