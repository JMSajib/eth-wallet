<template>
	<div class="uk-card uk-card-secondary uk-card-body uk-margin-bottom" id="account">
		<h5>{{address}}</h5>
		<p>Amount: {{ethamount}} ETH</p>
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