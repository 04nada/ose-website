<script lang=ts>
    import Nav from "$lib/components/Nav.svelte";
	import NewsPreviewCard from "$lib/components/NewsPreviewCard.svelte";

    let { numCards = 3 } = $props();
</script>

<Nav />

<!-- todo: only show {numCards} items, using an index variable in the script -->
<!-- reimplement this with shadcn -->
<div class="grid grid-cols-{numCards} gap-5 max-w-sm">
    <NewsPreviewCard src="/ose-bg.png" />
    <NewsPreviewCard src="/invalid.png" alt="sample invalid image"/>
    <NewsPreviewCard src="/ose-bg.png" text="Goodbye." />
    <NewsPreviewCard src="/ose-bg.png" />
    <NewsPreviewCard src="/ose-bg.png" text="Lorem ipsum dolor sit amet consectetur adapiscing elit." />
    <NewsPreviewCard src="/ose-bg.png" />
    <NewsPreviewCard src="/ose-bg.png" />
</div>