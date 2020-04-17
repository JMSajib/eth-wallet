<template>
	<div class="uk-card uk-card-default uk-card-body">
		<form>
			<fieldset class="uk-fieldset">

				<legend class="uk-legend">ETH Balance Transfer</legend>

				<div class="uk-margin">
					<input class="uk-input" type="text" v-model.trim="sendAddr" placeholder="Sending Address"/>
				</div>
				
				<div class="uk-margin">
					<input class="uk-input" type="text" v-model.trim="receiveAddr" placeholder="Receiving Address"/>
				</div>
				
				<div class="uk-margin">
					<input class="uk-input" type="text" v-model.trim="amount" placeholder="Amount (ETH)"/>
				</div>
				
				<input type="submit" value="Transfer" v-on:click="transfer" class="uk-button uk-button-primary uk-width-1-1"/>
			</fieldset>
		</form>
	</div>
</template>

<script>
import ethclient from "../client/client"
export default {
  name: 'TransferEntity',
  data() { 
    return {
    sendAddr: "",
    receiveAddr: "",
    amount: 0,
  }},
  methods: { 
    transfer: async function() { 
      try {
      await ethclient.eth.sendTransaction({from:this.sendAddr, to:this.receiveAddr, value: ethclient.utils.toWei(this.amount, "ether"), gas:21000})
      .then(r => { 
          this.$swal('Transaction succeeded.', 'Transaction hash:' + r.transactionHash, 'OK');
        });
        setTimeout(function() {
          location.reload();
        }, 5000);
    }
    catch(Error){alert(Error.toString())}},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#transferentity { 
  border-radius: 8px;
  background-color: #f7f7f7;
  padding-left:50px;
  padding-right:50px;
  max-height: 500px;
  border-color: #2c3e50;
  border-style:solid;
}

</style>
