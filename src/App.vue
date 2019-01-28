<template>
  <div id="app">
    <h2>webpack-theme-resolver-plugin-example</h2>
    <img alt="Vue logo" src="./assets/logo.png">
    <hello-world />
    <awesome-list :items="items" />
  </div>
</template>

<script>
import HelloWorld from 'awesome-components/Hello.vue'
import AwesomeList from 'awesome-components/AwesomeList.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    AwesomeList
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'First Entry'
        },
        {
          id: 2,
          title: 'Second Entry'
        },
        {
          id: 3,
          title: 'Third Entry'
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
