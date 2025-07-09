<script lang="ts">
  import Nav from "$lib/components/Nav.svelte";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Carousel from "$lib/components/ui/carousel/index.js";


  const news = [
    {
      src: "/news1.jpg",
      title: "Padayon! UP Diliman Class of 2025",
      paragraph: "Sa pagtatapos ninyo sa kolehiyo, patuloy kayong makisangkot at manguna sa pagbubuo ng lunas sa mga sugat ng lipunan. Ipamalas ninyo ang #DangalAtHusay sa paglilingkod sa sambayanan!",
    },
    {
      src: "/news2.jpg",
      title: "Padayon! UP Diliman Class of 2025",
      paragraph: "Sa pagtatapos ninyo sa kolehiyo, patuloy kayong makisangkot at manguna sa pagbubuo ng lunas sa mga sugat ng lipunan. Ipamalas ninyo ang #DangalAtHusay sa paglilingkod sa sambayanan!",
    },
    {
      src: "/news3.jpg",
      title: "Padayon! UP Diliman Class of 2025",
      paragraph: "Sa pagtatapos ninyo sa kolehiyo, patuloy kayong makisangkot at manguna sa pagbubuo ng lunas sa mga sugat ng lipunan. Ipamalas ninyo ang #DangalAtHusay sa paglilingkod sa sambayanan!",
    },
    {
      src: "/news4.jpg",
      title: "Padayon! UP Diliman Class of 2025",
      paragraph: "Sa pagtatapos ninyo sa kolehiyo, patuloy kayong makisangkot at manguna sa pagbubuo ng lunas sa mga sugat ng lipunan. Ipamalas ninyo ang #DangalAtHusay sa paglilingkod sa sambayanan!",
    },
    {
      src: "/news5.jpg",
      title: "Padayon! UP Diliman Class of 2025",
      paragraph: "Sa pagtatapos ninyo sa kolehiyo, patuloy kayong makisangkot at manguna sa pagbubuo ng lunas sa mga sugat ng lipunan. Ipamalas ninyo ang #DangalAtHusay sa paglilingkod sa sambayanan!",
    },
  ];
</script>

<Nav />

<div class="flex justify-center mt-5 overflow-x-visible">
  <Carousel.Root class="w-full max-w-5xl px-8 relative">
    <Carousel.Content class="flex gap-4 -mx-4">
      {#each news as item, i (i)}
        <Carousel.Item class="basis-[50%] shrink-0">
          <div class="h-[450px] w-full overflow-hidden rounded-lg p-10 bg-white border-bggreen border-4shadow-md flex flex-col space-y-4">
            <img
              src={item.src}
              alt={item.title}
              class="w-full h-56 object-cover border-4 border-bggreen rounded-md"
            />
            <div class="flex-1">
              <h2 class="text-xl text-bggreen font-semibold mb-2">{item.title}</h2>
              <p class="text-sm text-gray-700 leading-relaxed">{item.paragraph}</p>
            </div>
          </div>
        </Carousel.Item>
      {/each}
    </Carousel.Content>

    <Carousel.Previous class="absolute left-0 top-1/2 -translate-y-1/2 z-10" />
    <Carousel.Next class="absolute right-0 top-1/2 -translate-y-1/2 z-10" />
  </Carousel.Root>
</div>


