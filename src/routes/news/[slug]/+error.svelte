<script lang=ts>
	import { page } from "$app/state";
    import Nav from "$lib/components/Nav.svelte";
</script>

<Nav />

<h2> Error {page.status} </h2>
<div>
    <p>
        {page.error?.message}
    </p>

    <p>
        This news article does not exist.
    </p>

    <div>
        Return <a href="/">Home</a>
    </div>
</div>