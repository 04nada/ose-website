<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div
	class="relative min-h-screen w-full bg-cover bg-fixed bg-center"
	style="background-image: url('/ose-bg.png')"
>
	<div class="sm:pt-5 sm:pl-25">
		<img src="/ose-logo.png" alt="OSE Logo" class="sm:h-auto sm:w-200 sm:object-contain" />
	</div>
	{@render children()}
</div>
