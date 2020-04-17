<template>
  <div class="uk-child-width-1-2@s uk-grid" id="wallet">
	<div class="uk-first-column">
		<AccList/>
	</div>
	<div>
		<TransferEntity/>
	</div>
  </div>
</template>

<script>
import ethclient from "../client/client"
import AccList from "./AccList"
import TransferEntity from "./TransferEntity"
export default {
  name: 'Wallet',
  components: { 
    AccList,
    TransferEntity
  },
  methods: { 
    getBalance: function() { 
      console.warn(ethclient.eth.getBalance("0xcA3ddb50D24A11fa223D40a8F82E27cB3C639EC7"))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#wallet{
  display: flex;
}

#transferentity { 
   margin-left:100px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
