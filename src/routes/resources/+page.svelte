<script lang="ts">
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

<div class="mt-4 flex justify-center">
    <img src="/CodeOfEthics.png" alt="CodeOfEthics" />
</div>

<!-- todo: make this dynamic for more resources in the future (in theory) -->

<!-- Desktop View -->
<div class="hidden sm:block">
    <div class="m-5 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <!-- Embedded iframe (document) -->
        <div class="w-full">
            <iframe
                src={resources['studentconduct2012'].embedSrc}
                class="w-full h-[80vh] border-0"
                title={resources['studentconduct2012'].title}
            >
                Loading...
            </iframe>
        </div>

        <!-- Description on the side -->
        <div class="prose max-w-none text-white">
            <h2 class="text-xl font-semibold text-[#7A1618] merriweather-bold">Code of Student Conduct (2012)</h2>

            <p class="text-black font-display">
                This document outlines the behavioral expectations and responsibilities 
                of students within the university. It includes policies on academic integrity, 
                conduct in classrooms, and university property, as well as disciplinary procedures.

                Please read thoroughly to understand your rights and obligations.
            </p>
        </div>
    </div>
</div>

<!-- Mobile View -->
<div class="block flex sm:hidden flex-row center justify-evenly items-center">
    <div class="flex flex-col width-restriction space-y-10">
        <h1 class = "header merriweather-bold">
            Resources
        </h1>

        {#each Object.entries(resources) as [id, resource]}
            <button class="styled-buttons poppins-light"
                onclick={() => window.open(resource.embedSrc.replace('?embedded=true', ''), '_blank')}
            >
                {resource.title}
            </button>
        {/each}
    </div>
</div>