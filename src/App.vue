<template>
	<div>
		<nf-header></nf-header>
		<nf-nav></nf-nav>
		<nf-footer></nf-footer>
	</div>
</template>
<script>
	import nfHeader from './components/nf-header.vue';
	import nfNav from './components/nf-nav.vue';
	import nfFooter from './components/nf-footer.vue';

	export default {
		data: function() {
			return {
				
			}
		},
		components: {
			'nf-header': nfHeader,
			'nf-nav': nfNav,
			'nf-footer': nfFooter
		}
	};
</script>
<style>
	div{
		color:blue;
	}
</style>
