<script>
    let className = '';
    export {className as class};
    // export let image;
    export let navName;
    export let route;
</script>

<div>
    <a class="{className} flex flex-row font-display" href={route}>
        <span class="">
        </span>
        <p class="sm:font-medium text-textcolor">{navName}</p>
    </a>
</div>