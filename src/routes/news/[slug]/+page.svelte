<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<Nav />

<div>
    <h1>{data.title}</h1>

    <h2>Created: {data.date_created}</h2>
    <h2>Last Modified: {data.date_modified}</h2>

    <div>
        <p>{data.content}</p>
    </div>

    <div>
        {#each data.images as {src, alt}}
            <img {src} {alt} width="500px"/>
        {/each}
    </div>
</div>