<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div
	class="relative min-h-screen w-full bg-cover bg-fixed bg-center"
	style="background-image: url('/ose-bg.png')"
>
	{@render children()}
</div>
