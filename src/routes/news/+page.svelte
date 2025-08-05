<script lang="ts">
	import Nav from "$lib/components/Nav.svelte";
	import Footer from "$lib/components/Footer.svelte";
    import { page } from '$app/state';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const posts = data.posts;

	function formatDate(date: string) {
		return new Date(date).toLocaleString('en-US', {
			day: 'numeric',
			month: 'long',
			year: 'numeric',
		});
	}
</script>

<Nav />

<div class="m-5">
    <img src="/filler.png" alt="Descriptive text" />
</div>

<div
	class="pl-8 text-[#7A1618] text-3xl text-left tracking-wide leading-tight font-bold"
	style="font-family: 'Playfair'"
>
	News and Announcement
</div>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 m-5">
	{#each posts as post}
		<div class="flex flex-col items-start p-2">
			<a href="{page.url}/{post.newsPostFields.page}"
				class="w-full h-64"
			>
				<img
					src={post.newsPostFields.previewImage?.node?.mediaItemUrl}
					alt={post.newsPostFields.previewImage?.node?.altText ?? 'News Image'}
					class="w-full h-full object-cover rounded-md border-4 border-[#841737]"
				/>
			</a>

			<div class="mt-3">
				<a href="{page.url}/{post.newsPostFields.page}">
					<h2 class="text-lg font-semibold text-[#841737]">
						{post.newsPostFields.title}
					</h2>
				</a>
				
				<p class="text-sm text-gray-600">
					{formatDate(post.newsPostFields.datePublished)}
				</p>
			</div>
		</div>
	{/each}
</div>

<Footer />