
<template>
  <div id="transferentity">
    <h2> Transfering </h2>
    <p> Sending Address </p>
    <input type="text" v-model.trim="sendAddr"/> 
    <br/>
    <p> Receiving Address </p>
    <input type="text" v-model.trim="receiveAddr"/> 
    <br/>
    <p> Amount in ETH </p>
    <input type="text" v-model.trim="amount"/> 
    <br/>
    <br/>
    <input type="submit" value="Transfer ETH" v-on:click="transfer"/>
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
          location.reload();//reload page
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
