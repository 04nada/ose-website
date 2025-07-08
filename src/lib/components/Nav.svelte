<script lang=ts>
    import NavItem from "./NavItem.svelte";
</script>

<nav>
    <div class="flex flex-row sm:gap-5 w-[90%] bg-bgred font-sans mt-5 mx-auto rounded-md justify-evenly items-center">
        <NavItem navName="Home" route="/"/>
        <NavItem navName="Forms" route="/forms"/>
        <NavItem navName="News" route="/news"/>
        <NavItem navName="Resources" route="/resources"/>
        <NavItem navName="About Us" route="/about"/>
        <NavItem navName="Contact Us" route="/contact"/>
    </div>
</nav>

