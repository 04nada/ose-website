<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div
	class="relative min-h-screen w-full bg-cover bg-fixed bg-center"
	style="background-image: url('/ose-bg.png')"
>
	<div class="sticky top-0 z-50 bg-gradient-to-r from-bggreen to-white px-20 py-5">
		<img
			src="/ose-logo.png"
			alt="OSE Logo"
			class="h-16 w-auto object-contain"
		/>
	</div>

	{@render children()}
</div>
