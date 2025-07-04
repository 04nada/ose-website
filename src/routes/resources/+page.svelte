<script lang=ts>
    import Nav from "$lib/components/Nav.svelte";

    const resources = {
        studentconduct2012: {
            title: '2012 Code of Student Conduct',
            embedSrc: 'https://drive.google.com/file/d/1jAakJ1bnbZ1f-CMwKdkGak-SwC4tpl0S/preview',
            publicLink: 'https://rb.gy/iaod51'
        },
    };

    let selectedResource = $state('studentconduct2012');
</script>

<Nav />

<div class="flex flex-row center justify-evenly items-center">
    <div class="flex flex-col width-restriction space-y-10">
        <h1 class = "header merriweather-bold">
            Resources
        </h1>
        {#each Object.entries(resources) as [id, resource]}
        <li>
            <button class="styled-buttons poppins-light" aria-current={selectedResource === id}
                onclick={() => selectedResource = id}
            >
                {resource.title}
            </button>
        </li>
        {/each}
    </div>

    <div>
        {#if selectedResource == 'studentconduct2012'}
            <iframe
                src={resources[selectedResource].embedSrc}
                width=640 height=800
                frameborder="1" marginheight="0" marginwidth="0"
                title={resources[selectedResource].title}
            >
                Loading...
            </iframe>
        {:else}
            <p> Invalid resource selected. </p>
        {/if}
    </div>    
</div>