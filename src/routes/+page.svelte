<script lang="ts">
	import Nav from "$lib/components/Nav.svelte";
	import * as Carousel from "$lib/components/ui/carousel/index.js";
</script>


<div
	class="flex bg-cover w-full h-[1020px] bg-top bg-no-repeat bg-[url(/backup-background.png)]"
	>

		<img
			src="/backup-logo.png"
			alt="Logo"
			class="absolute top-8 left-8 w-150 h-auto z-10"
		/>

	<div
		class="absolute top-1/2 right-50 transform -translate-y-1/2 text-white text-5xl text-left tracking-wide leading-tight"
		style="font-family: 'Playfair'; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);"
	>
   Welcome to the Office<br />
    for Student Ethics!
  		</div>
	</div>




<div class="h-screen bg-gradient-to-b from-[#ffffff] to-[#cccccc] text-black flex items-center justify-center pt-16">

  <Carousel.Root class="w-full h-full relative overflow-hidden">
    <Carousel.Content class="flex w-full h-full transition-transform duration-500">
      
      <Carousel.Item class="shrink-0 w-full h-full">
        <img src="/student-conduct.png" alt="1" class="w-full h-full object-cover" />
      </Carousel.Item>

      <Carousel.Item class="shrink-0 w-full h-full">
        <img src="/ose-hardcopy.png" alt="2" class="w-full h-full object-cover" />
      </Carousel.Item>

      <Carousel.Item class="shrink-0 w-full h-full">
        <img src="/ose-softcopy.png" alt="3" class="w-full h-full object-cover" />
      </Carousel.Item>

    </Carousel.Content>

    <Carousel.Previous class="absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-black/70" />
    <Carousel.Next class="absolute right-5 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-black/70" />
  </Carousel.Root>

</div>

<Nav />








