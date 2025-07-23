<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import type { PageProps } from './$types';
	import * as Carousel from "$lib/components/ui/carousel/index.js";

	let { data }: PageProps = $props();

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

<div class="text-white px-10">
	<h1 class="merriweather-semibold mt-10 text-5xl">
		{data.title}
	</h1>

	<h2 class="mt-3 text-sm">Created: {formatDate(data.datePublished)}</h2>
	<h2 class="text-sm">Last Modified: {formatDate(data.dateModified)}</h2>

	<div class="flex flex-row gap-8 mt-10">
		<!-- Carousel Section -->
		<div class="w-1/2">
			<Carousel.Root class="w-full">
				<!-- Show 2 items per view -->
				<Carousel.Content class="flex gap-4">
					{#each data.images as { src, alt }, i (i)}
						<Carousel.Item class="basis-1/2 shrink-0">
							<div class="h-[400px] w-full overflow-hidden rounded-lg shadow-md flex justify-center items-center">
								<img
									src={src}
									alt={alt}
									class="max-h-full max-w-full object-cover rounded-md"
								/>
							</div>
						</Carousel.Item>
					{/each}
				</Carousel.Content>

				<!-- Arrows BELOW the images, centered -->
				<div class="mt-4 flex justify-center gap-2">
					<Carousel.Previous class="bg-white/10 px-3 py-1 rounded hover:bg-white/20 transition" />
					<Carousel.Next class="bg-white/10 px-3 py-1 rounded hover:bg-white/20 transition" />
				</div>
			</Carousel.Root>
		</div>

		<!-- Text Content Section -->
		<div class="w-1/2">
			<p class="p-paragraph text-base">{data.content}</p>
		</div>
	</div>
</div>






