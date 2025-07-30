<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div
  class="relative h-scroll bg-cover bg-top bg-no-repeat bg-[#DDDDDD]"
  style="background-image: url('/backup-background.png')"
>

	{@render children()}
</div>
