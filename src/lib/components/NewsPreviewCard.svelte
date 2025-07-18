<script lang="ts">
    let {
        src = "",
        alt = "News Preview Card image.",
        text = "Hello UPD",
    } = $props();
</script>

<div class="bg-blue-100 flex flex-col gap-5 rounded">
    <img {src} {alt} class="aspect-square object-scale-down "/>
    
    <div>
        {text}
    </div>
</div>