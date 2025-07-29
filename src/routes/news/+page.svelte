<script lang="ts">
    import Nav from "$lib/components/Nav.svelte";
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    import { page } from '$app/state';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();

    // todo: set fallback image
    const fallbackImage = "/ose-pic-1.png"
    const fallbackText = "Image is missing."

    // todo: remove log
    console.log(data.posts);

    // Month dd, yyyy
    function formatDate(date: string) {
        return new Date(date).toLocaleString('en-US', {
            'day': 'numeric',
            'month': 'long',
            'year': 'numeric',
        })
    }
</script>

<Nav />

<div class="flex justify-center mt-5 overflow-x-visible">
    <Carousel.Root class="w-full max-w-5xl px-8 relative">
        <Carousel.Content class="flex gap-4 -mx-4">
            {#each data.posts as item, i (i)}
                <Carousel.Item class="basis-[50%] shrink-0 w-full">
                    <a href="{page.url}/{item.newsPostFields.page}">
                        <div class="h-[450px] w-full overflow-hidden rounded-lg p-10 bg-bggreen border-3 border-[#EDAE1A] shadow-md flex flex-col space-y-4">
                            {#if item.newsPostFields.previewImage !== null}
                                <img
                                    src={item.newsPostFields.previewImage.node.mediaItemUrl}
                                    alt={item.newsPostFields.previewImage.node.altText}
                                    class="w-full h-56 object-cover border-0 border-[#EDAE1A] rounded-md"
                                />
                            {:else}
                                <img
                                    src={fallbackImage}
                                    alt={fallbackText}
                                    class="w-full h-56 object-cover border-0 border-[#EDAE1A] rounded-md"
                                />
                            {/if}

                            <div class="flex-1">
                                <h2 class="text-xl text-white font-semibold mb-2">{item.newsPostFields.title}</h2>
                            </div>

                            <div class="flex-1">
                                <!-- calendar icon --> {formatDate(item.newsPostFields.datePublished)}
                            </div>
                        </div>
                    </a>
                </Carousel.Item>
            {/each}
        </Carousel.Content>

        <Carousel.Previous class="absolute left-0 top-1/2 -translate-y-1/2 z-10" />
        <Carousel.Next class="absolute right-0 top-1/2 -translate-y-1/2 z-10" />
    </Carousel.Root>
</div>