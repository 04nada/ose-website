<script lang='ts'>
    import NavItem from "./NavItem.svelte";

    let showMobileMenu = $state(false);
    
    function toggleMobileMenu() {
        showMobileMenu = !showMobileMenu;
    }

    let scroll = $state(0);

    import { fade, fly } from 'svelte/transition';
	
	import { page } from '$app/state';
</script>


<svelte:window bind:scrollY={scroll}/>

<div>
    
    {#if page.url.pathname !== '/'}
        <div class="top-0 z-50 bg-[#7A1618] px-20 py-3">
            <img
                src="/ose-logo.png"
                alt="OSE Logo"
                class="h-16 w-auto object-contain"
            />
        </div>
    {/if}

    
    <nav class= "pt-5">
    {#if scroll<=100}
    <div class="hidden sm:flex sm:flex-row sm:gap-5 w-[80%] bg-bggreen/70 backdrop-blur-xs font-sans mx-auto rounded-md justify-evenly items-center p-2" transition:fly={{ y:-50, duration:250 }}>
        <NavItem navName="Home" route="/"/>
        <NavItem navName="Forms" route="/forms"/>
        <NavItem navName="News" route="/news"/>
        <NavItem navName="Resources" route="/resources"/>
        <NavItem navName="About Us" route="/about"/>
        <NavItem navName="Contact Us" route="/contact"/>
    </div>
    {/if}
    <div class="fixed mt-2 ml-2 md:hidden">
        <button onclick={toggleMobileMenu}>
            <!-- icon here -->
            ☰
        </button>
    </div>
    

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
		<div class="flex flex-row top-0 w-full bg-bgred/85 backdrop-blur-xs py-6 fixed" transition:fly={{ y:-50, duration:250 }}>
            <div class="w-[40%]">
                <p class="ml-10 poppins-bold text-lg text-textcolor">
                OFFICE FOR STUDENT ETHICS
                </p>
            </div>
            <div class="hidden sm:flex flex-row w-[60%] ml-5 justify-evenly items-center">
                <NavItem navName="Home" route="/" />
                <NavItem navName="Forms" route="/forms" />
                <NavItem navName="News" route="/news" />
                <NavItem navName="Resources" route="/resources" />
                <NavItem navName="About Us" route="/about" />
                <NavItem navName="Contact Us" route="/contact" />
            </div>
        </div>
	{/if}

</div>


