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
</style>
