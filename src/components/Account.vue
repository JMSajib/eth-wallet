<template>
    <div id="account">
    <h3> {{address}} </h3>
    <h3>Amount: {{ethamount}} ETH</h3>
    <hr align="left">
    </div>
</template> 


<script>
export default {
  name: "Account", 
  props: ['address', 'ethamount'],
};

</script>

<style scoped>


</style>