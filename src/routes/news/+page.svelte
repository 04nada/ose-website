<script lang="ts">
  import Nav from "$lib/components/Nav.svelte";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Carousel from "$lib/components/ui/carousel/index.js";


  const news = [
    {
      src: "/news1.jpg",
      title: "NOTICE TO THE PUBLIC",
      paragraph: "The University of the Philippines (UP) strongly warns the public against individuals or groups fraudulently claiming to represent the University, its officials, or its constituent units to solicit donations or offer financial loans. We have received reports of unauthorized solicitations and loan offers falsely claiming to represent, or using the names of, university officials and UP offices. The university categorically denounces these deceptive practices and reiterates that no individual is authorized to transact on behalf of UP or its officials outside established, official channels"},
    {
      src: "/news2.jpg",
      title: "Padayon! UP Diliman Class of 2025",
      paragraph: "Sa pagtatapos ninyo sa kolehiyo, patuloy kayong makisangkot at manguna sa pagbubuo ng lunas sa mga sugat ng lipunan. Ipamalas ninyo ang #DangalAtHusay sa paglilingkod sa sambayanan!",
    }
  ];
</script>

<Nav />

<div class="flex justify-center mt-5">
  <Carousel.Root class="w-full max-w-xl">
    <Carousel.Content>
      {#each news as item, i (i)}
        <Carousel.Item class="basis-full">
          <div class="w-full overflow-hidden rounded-lg p-4 bg-white shadow-md space-y-4">
            <img
              src={item.src}
              alt={item.title}
              class="w-full h-auto object-contain rounded-md"
            />
            <div>
              <h2 class="text-xl font-semibold mb-2">{item.title}</h2>
              <p class="text-sm text-gray-700 leading-relaxed">{item.paragraph}</p>
            </div>
          </div>
        </Carousel.Item>
      {/each}
    </Carousel.Content>
    <Carousel.Previous />
    <Carousel.Next />
  </Carousel.Root>
</div>
