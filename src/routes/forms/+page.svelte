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
    ]
</script>

<Nav />

<!-- todo 1: do not use #each; select the right embed -->
<!-- todo 2: find a way to dynamically choose what to embed (not just iframe) -->
{#each forms as form}
<iframe
    src={form.embedSrc}
    width=640 height=800
    frameborder="0" marginheight="0" marginwidth="0"
    title={form.title}
>
    Loading...
</iframe>
{/each}