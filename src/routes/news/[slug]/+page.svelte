<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import type { PageProps } from './$types';
    import * as Carousel from "$lib/components/ui/carousel/index.js";

    let { data }: PageProps = $props();
</script>


<Nav />

<div class="text-white">
    <h1 class="merriweather-semibold mt-10 ml-20 text-5xl">
    {data.title}
    </h1>
    

    <h2 class="ml-20 mt-3 text-sm">
        Created: {data.date_created}</h2>
    <h2 class="ml-20 text-sm">
        Last Modified: {data.date_modified}</h2>

   <div class="flex justify-center mt-5 overflow-x-visible">
    <Carousel.Root class="w-full max-w-5xl px-8 relative">
        <Carousel.Content class="flex gap-4 -mx-4">
            {#each data.images as { src, alt }, i (i)}
                <Carousel.Item class="basis-[80%] shrink-0">
                    <div class="h-[450px] w-full overflow-hidden rounded-lg bg-white shadow-md flex justify-center items-center">
                        <img
                            src={src}
                            alt={alt}
                            class="max-h-full max-w-full object-contain rounded-md"
                        />
                    </div>
                </Carousel.Item>
            {/each}
        </Carousel.Content>

        <Carousel.Previous class="absolute left-0 top-1/2 -translate-y-1/2 z-10" />
        <Carousel.Next class="absolute right-0 top-1/2 -translate-y-1/2 z-10" />
    </Carousel.Root>
</div>


    <div>
        <p class="p-paragraph mt-10 ml-20 mr-20 text-base">{data.content}</p>
    </div>

</div>


