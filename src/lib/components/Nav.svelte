<script lang=ts>
    import NavItem from "./NavItem.svelte";

    let showMobileMenu = $state(false);

    function toggleMobileMenu() {
        showMobileMenu = !showMobileMenu;
    }

    let scroll = $state(0);

    import { fade, fly } from 'svelte/transition';
	
	let visible = $state(true);

</script>


<svelte:window bind:scrollY={scroll}/>

<div>
	<div class="top-0 z-50 bg-[#E5E1E1]/0 px-20 py-3">
		<img
			src="/ose-logo.png"
			alt="OSE Logo"
			class="h-16 w-auto object-contain"
		/>
	</div>

    <nav>
    <div class="hidden sm:flex sm:flex-row sm:gap-5 w-[90%] bg-bgred font-sans mx-auto rounded-md justify-evenly items-center p-1">
        <NavItem navName="Home" route="/"/>
        <NavItem navName="Forms" route="/forms"/>
        <NavItem navName="News" route="/news"/>
        <NavItem navName="Resources" route="/resources"/>
        <NavItem navName="About Us" route="/about"/>
        <NavItem navName="Contact Us" route="/contact"/>
    </div>

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
		<div class="flex flex-row top-0 w-full bg-bgred py-6 fixed" transition:fly={{ y:-200, duration:1000 }}>
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


