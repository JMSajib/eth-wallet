<template>
  <div id="app">
    <Header/>
    <Wallet/>
  </div>
</template>

<script>
import Wallet from './components/Wallet.vue'
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Wallet,
    Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}


hr {
    max-width: 100%;
}

input[type=submit]{ 
  border-radius: 4px;
  font-weight: bold;
  min-width: 140px;
  min-height: 50px;
  background-color: #fff;
}

input[type=submit]:hover{ 
  color: #fff;
  background-color: #2c3e50;
  cursor: pointer;
}

input[type=submit]:focus{ 
  outline: 0;
}

input[type=text]{ 
  border-radius: 4px;
  min-width: 360px;
  min-height: 25px;
}
</style>
