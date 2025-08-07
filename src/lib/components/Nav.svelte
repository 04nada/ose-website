<script lang='ts'>
    import NavItem from "./NavItem.svelte";

    let showMobileMenu = $state(false);
    
    function toggleMobileMenu() {
        showMobileMenu = !showMobileMenu;
    }

    let scroll = $state(0);

    import { fade, fly } from 'svelte/transition';
	
	import { page } from '$app/state';
    import { Menu } from 'lucide-svelte';

</script>


<svelte:window bind:scrollY={scroll}/>

<div class="z-200">
    
    {#if page.url.pathname !== '/'}
        <div class="top-0 z-50 bg-bgred/90 px-20 py-3">
            <img
                src="/ose-logo.png"
                alt="OSE Logo"
                class="h-16 w-auto object-contain"
            />
        </div>
    {/if}

    
    <nav class= "pt-5">
    {#if scroll<=100}
        <div class="hidden sm:flex sm:flex-row sm:gap-5 w-[80%] bg-bggreen/85 backdrop-blur-xs font-sans mx-auto rounded-md justify-evenly items-center p-2 shadow-lg" transition:fly={{ y:-50, duration:250 }}>
            <NavItem navName="Home" route="/"/>
            <NavItem navName="Forms" route="/forms"/>
            <NavItem navName="News" route="/news"/>
            <NavItem navName="Resources" route="/resources"/>
            <NavItem navName="About Us" route="/about"/>
            <NavItem navName="Contact Us" route="/contact"/>
        </div>
    {/if}
    

    {#if showMobileMenu}
        <div class="sm:hidden flex flex-col gap-2 w-[90%] mx-auto bg-bgred text-white p-4 rounded-md mt-2">
        <NavItem navName="Home" route="/" />
        <NavItem navName="Forms" route="/forms" />
        <NavItem navName="News" route="/news" />
        <NavItem navName="Resources" route="/resources" />
        <NavItem navName="About Us" route="/about" />
        <NavItem navName="Contact Us" route="/contact" />
        </div>
    {/if}
    </nav>
    
	{#if scroll>100}
		<div class="flex flex-row top-0 w-full bg-bgred/85 backdrop-blur-xs py-6 fixed h-[80px] items-center z-200" transition:fly={{ y:-50, duration:250 }}>
            <div class="w-[35%]">
                <p class="hidden lg:flex ml-10 poppins-bold text-lg text-textcolor">
                OFFICE FOR STUDENT ETHICS
                </p>

                <p class="flex lg:hidden ml-10 poppins-bold text-lg text-textcolor"> 
                    OSE 
                </p>
            </div>
            <div class="hidden md:flex flex-row w-[65%] ml-5 justify-evenly items-center">
                <NavItem navName="Home" route="/" />
                <NavItem navName="Forms" route="/forms" />
                <NavItem navName="News" route="/news" />
                <NavItem navName="Resources" route="/resources" />
                <NavItem navName="About Us" route="/about" />
                <NavItem navName="Contact Us" route="/contact" />
            </div>

            <div class="mt-2 ml-auto mr-10 md:hidden z-200">
                <button onclick={toggleMobileMenu}>
                    <Menu size={32} color="#e5e1e1" strokeWidth={3} />
                </button>
            </div>
        </div>
	{/if}

</div>


