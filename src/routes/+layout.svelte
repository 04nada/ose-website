<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div
  class="relative h-scroll bg-cover bg-top bg-no-repeat bg-white"
  
>

	{@render children()}
</div>
