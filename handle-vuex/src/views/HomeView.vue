<template>
  <div class="home">
    <p>this is a homepage</p>
    <p>count:{{this.$store.state.count}}</p>
    <p>double:{{this.$store.getters.double}}</p>
    <button @click="$store.commit('addCount')">+1</button>
    <br>
    <br>
    <br>
    <button @click="$store.dispatch('asyncAddcount',20)">+1</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
  },
  mounted(){
    // console.log(this.$store)
  }
}
</script>
