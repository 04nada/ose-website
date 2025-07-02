<script lang=ts>
    import Nav from "$lib/components/Nav.svelte";

    const forms = [
        {
            title: 'Online Clearance Application Form',
            embedSrc: 'https://docs.google.com/forms/d/e/1FAIpQLScFg0BzPqylk_lMs39rOCuZfoUJrf1e671Bbew7i1tA6eqOGA/viewform?embedded=true'
        },
        {
            title: 'Request for Hard Copy of Documents',
            embedSrc: 'https://docs.google.com/forms/d/e/1FAIpQLSfjaaLJXyCxvJsoPg7xMFh8MtqhMGLg_NYiFCmtdR_YFhMPbg/viewform?embedded=true'
        }
    ];

    let selectedForm = $state(0);
</script>

<Nav />

{#each forms as form, i}
<button
    onclick={() => selectedForm = i}
>
    {form.title}
</button>
{/each}

<!-- todo: find a way to dynamically choose what to embed (not just an iframe) -->   
<iframe
    src={forms[selectedForm].embedSrc}
    width=640 height=800
    frameborder="0" marginheight="0" marginwidth="0"
    title={forms[selectedForm].title}
>
    Loading...
</iframe>