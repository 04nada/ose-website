<script lang=ts>
    import NavItem from "./NavItem.svelte";
</script>

<nav>
    <div class="flex flex-row sm:gap-5 w-full bg-bgred font-sans">
        <NavItem navName="Home" route="/"/>
        <NavItem navName="News" route="/news/"/>
        <NavItem navName="Resources" route="/resources/"/>
        <NavItem navName="Forms" route="/forms/"/>
        <NavItem navName="About Us" route="/about/"/>
        <NavItem navName="Contact Us" route="/contact/"/>
    </div>
</nav>