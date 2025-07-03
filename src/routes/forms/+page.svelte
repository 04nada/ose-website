<script lang=ts>
    import Nav from "$lib/components/Nav.svelte";

    const forms = {
        oseclearance: {
            title: 'Online Clearance Application Form',
            embedSrc: 'https://docs.google.com/forms/d/e/1FAIpQLScFg0BzPqylk_lMs39rOCuZfoUJrf1e671Bbew7i1tA6eqOGA/viewform?embedded=true',
            publicLink: 'https://bit.ly/oseclearance'
        },
        osedocumentrequest: {
            title: 'Request for Hard Copy of Documents',
            embedSrc: 'https://docs.google.com/forms/d/e/1FAIpQLSfjaaLJXyCxvJsoPg7xMFh8MtqhMGLg_NYiFCmtdR_YFhMPbg/viewform?embedded=true',
            publicLink: 'https://bit.ly/osedocumentrequest'
        }
    };

    let selectedForm = $state('oseclearance');
</script>

<Nav />
<div class="flex flex-row center justify-evenly items-center">
    <div class="flex flex-col width-restriction space-y-10">
        <h1 class = "header playfair-bold">
            Forms
        </h1>
            {#each Object.entries(forms) as [id, form]}
                    <button class="styled-buttons poppins-light" aria-current={selectedForm === id}
                        onclick={() => selectedForm = id}
                    >
                        {form.title}
                    </button>
            {/each}
    </div>
    <div>
        {#if selectedForm == 'oseclearance'}
            <iframe
                src={forms[selectedForm].embedSrc}
                width=640 height=500
                frameborder="0" marginheight="0" marginwidth="0"
                title={forms[selectedForm].title}
            >
                Loading...
            </iframe>
        {:else if selectedForm == 'osedocumentrequest'}
            <iframe
                src={forms[selectedForm].embedSrc}
                width=640 height=500
                frameborder="0" marginheight="0" marginwidth="0"
                title={forms[selectedForm].title}
            >
                Loading...
            </iframe>
        {:else}
            <p> Invalid form selected. </p>
        {/if}
    </div>
</div>