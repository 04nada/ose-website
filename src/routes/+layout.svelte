<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div
  class="min-h-screen w-full bg-cover bg-center bg-fixed relative"
  style="background-image: url('/ose-bg.png')"
>
  <div class="pt-5 pl-25">
    <img
      src="/ose-logo.png"
      alt="OSE Logo"
      class="w-200 h-auto object-contain"
    />
  </div>
  {@render children()}
</div>
