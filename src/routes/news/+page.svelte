<script lang="ts">
    import Nav from "$lib/components/Nav.svelte";
    import { page } from '$app/state';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();

    const fallbackImage = "/ose-pic-1.png";
    const fallbackText = "Image is missing.";

    function formatDate(date: string) {
        return new Date(date).toLocaleString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    }
</script>

<Nav />

<div class="m-4">
    <img src="/filler.png" alt="Descriptive text" />
</div>

<div class="flex flex-col items-center mt-5 px-6 lg:px-12">
    <div class="w-full max-w-5xl space-y-8">
        {#each data.posts as item, i (i)}
            <a href="{page.url}/{item.newsPostFields.page}" class="block">
                <div class="flex flex-col md:flex-row gap-6 h-auto w-full overflow-hidden rounded-lg p-6 ">
                    
                    <!-- Left column: Image -->
                    <div class="md:w-1/2 w-full">
                        {#if item.newsPostFields.previewImage !== null}
                            <img
                                src={item.newsPostFields.previewImage.node.mediaItemUrl}
                                alt={item.newsPostFields.previewImage.node.altText}
                                class="w-full h-56 md:h-full object-cover rounded-md border-3 bg-bggreen border-[#EDAE1A] shadow-md"
                            />
                        {:else}
                            <img
                                src={fallbackImage}
                                alt={fallbackText}
                                class="w-full h-56 md:h-full object-cover rounded-md border-3 bg-bggreen border-[#EDAE1A] shadow-md"
                            />
                        {/if}
                    </div>

                    <!-- Right column: Text -->
                    <div class="md:w-1/2 w-full flex flex-col justify-between text-white space-y-4 rounded-md bg-bggreen border-3 border-[#EDAE1A] shodow-md">
                        <h2 class="text-2xl font-semibold">{item.newsPostFields.title}</h2>
                        <p class="text-sm">{formatDate(item.newsPostFields.datePublished)}</p>
                        {#if item.newsPostFields.author}
                            <p class="text-sm italic">By {item.newsPostFields.author}</p>
                        {/if}
                    </div>

                </div>
            </a>
        {/each}
    </div>
</div>

