<script lang="ts">
	import Nav from "$lib/components/Nav.svelte";
	import * as Carousel from "$lib/components/ui/carousel/index.js";
  import Footer from "$lib/components/Footer.svelte";
</script>


<div class="w-full bg-cover bg-fixed bg-center bg-no-repeat bg-[url(/backup-background.png)] lg:w-[screen]"
  style="aspect-ratio: 3334/2228">

  <div class="pt-8 pl-8 w-150 h-auto z-10">
    <img
      src="/backup-logo.png"
      alt="Logo"
    /> 
  </div>

	<div
		class="pt-50 pl-10 transform text-white text-5xl text-left tracking-wide leading-tight"
		style="font-family: 'Playfair'; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);"
	>
   Welcome to the Office<br />
    for Student Ethics!
  		</div>

	 <div class="pt-25 pb-50 w-full z-20">
    <Nav />
  </div>
</div>



<div class="pb-100 bg-gradient-to-b from-[#ffffff] to-[#cccccc] text-black flex items-center justify-center pt-16">

  <Carousel.Root class="w-full h-full relative overflow-hidden z-10">
    <Carousel.Content class="flex w-full h-full transition-transform duration-50">
      
      <Carousel.Item class="shrink-0 w-full h-full">
        <img src="resources-page.png" alt="2012 Code of Student Conduct Banner" class="w-full h-full object-cover" />
      </Carousel.Item>

      <Carousel.Item class="shrink-0 w-full h-full">
        <img src="/ose-hardcopy.png" alt="Hardcopy Request for Other Documents Banner" class="w-full h-full object-cover" />
      </Carousel.Item>

      <Carousel.Item class="shrink-0 w-full h-full">
        <img src="/ose-softcopy.png" alt="Softcopy of OSE Clearance Application Banner" class="w-full h-full object-cover" />
      </Carousel.Item>

    </Carousel.Content>

    <Carousel.Previous class="absolute left-5 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-black/70" />
    <Carousel.Next class="absolute right-5 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-black/70" />
  </Carousel.Root>

</div>

<Footer />