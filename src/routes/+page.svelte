<script lang="ts">
	import Nav from "$lib/components/Nav.svelte";
  import NavItem from "$lib/components/NavItem.svelte";

	import * as Carousel from "$lib/components/ui/carousel/index.js";
  import Footer from "$lib/components/Footer.svelte";
      import { Menu } from 'lucide-svelte';

          let showMobileMenu = $state(false);

      function toggleMobileMenu() {
        showMobileMenu = !showMobileMenu;
    }

        const navLinks = [
        { name: "Home", route: "/" },
        { name: "Forms", route: "/forms" },
        { name: "News", route: "/news" },
        { name: "Resources", route: "/resources" },
        { name: "About Us", route: "/about" },
        { name: "Contact Us", route: "/contact" }
    ];
</script>


<div class="w-full bg-cover bg-fixed bg-center bg-no-repeat bg-[url(/backup-background.png)] lg:w-[screen]"
  style="aspect-ratio: 3334/2228">

  <div class="flex flex-row pt-8 pl-8 w-150 h-auto z-10">
    <img
      src="/backup-logo.png"
      alt="Logo"
      class="w-[60%] sm:w-full object-contain" 
    /> 
    <div class="flex mt-2 ml-auto mr-10 md:hidden z-200">
                <button onclick={toggleMobileMenu}>
                    <Menu size={32} color="#e5e1e1" strokeWidth={3} />
                </button>
    </div>
    
  </div>

    {#if showMobileMenu}
        <div class="fixed top-50 sm:hidden flex flex-col gap-2 w-[90%] mx-auto bg-bgred text-white p-4 rounded-md mt-2">
            {#each navLinks as {name, route}}
                <NavItem navName={name} route={route} />
            {/each}
        </div>
    {/if}
    
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

    <Carousel.Previous class="left-5 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-black/70" />
    <Carousel.Next class="right-5 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-black/70" />
  </Carousel.Root>

</div>

<Footer />