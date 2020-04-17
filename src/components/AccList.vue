<template>
    <div id="acclist">
		<Account v-for="account in accounts" :key="account.address"
		v-bind:address="account.address"
		v-bind:ethamount="account.amount"
		/>
		<p><b>Total amount of ETH:</b> {{totalETH}} ETH</p>
    </div>
</template> 


<script>
import Account from "./Account"
import ethclient from "../client/client"
export default {
  name: "AccList",
  components: { 
      Account
  },
  beforeCreate: async function(){
  return await ethclient.eth.getAccounts()
  .then(r => {
  this.addresses = r
  this.getAmounts()
  })},
  data: () => ({addresses: [], amounts: [], accounts:[], totalETH: 0}),
  methods: { 
    coupleAddressAndValue: function(i) {        
    this.accounts[i] = {address: this.addresses[i], amount: this.amounts[i]} 
    },
    getAmounts: async function() { 
      var i
    for(i = 0; i < this.addresses.length; i++) { 
    await ethclient.eth.getBalance(this.addresses[i])
    .then(r => {
    this.amounts[i] = r / 1000000000000000000
    this.totalETH += r / 1000000000000000000
    this.coupleAddressAndValue(i)
    })} this.$forceUpdate()},
  }
};

</script>

<style scoped>


</style>