<script lang=ts>
    import NavItem from "./NavItem.svelte";

    let showMobileMenu = false;

    function toggleMobileMenu() {
        showMobileMenu = !showMobileMenu;
    }
</script>

<nav>
    <div class="hidden sm:flex sm:flex-row sm:gap-5 w-[90%] bg-bgred font-sans mt-5 mx-auto rounded-md justify-evenly items-center">
        <NavItem navName="Home" route="/"/>
        <NavItem navName="Forms" route="/forms"/>
        <NavItem navName="News" route="/news"/>
        <NavItem navName="Resources" route="/resources"/>
        <NavItem navName="About Us" route="/about"/>
        <NavItem navName="Contact Us" route="/contact"/>
    </div>

    <div class="fixed mt-2 ml-2 md:hidden">
        <button on:click={toggleMobileMenu}>
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

