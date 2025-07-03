<script lang="ts">
  import { page } from '$app/stores';

  let className = '';
  export { className as class };
  export let navName: string;
  export let route: string;

  $: isActive = route === '/'
    ? $page.url.pathname === '/'
    : $page.url.pathname.startsWith(route);
</script>

<div class="relative">
  <a class="{className} flex flex-row font-display" href={route}>
    <p class="sm:font-medium text-textcolor">{navName}</p>
  </a>

  {#if isActive}
    <span
    class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[150px] h-[1.5px] bg-[#EDAE1A]"
  ></span>
  {/if}
</div>
